#!/usr/bin/env node
/**
 * Live verifier — runs daily in GitHub Actions (and locally with `npm run verify`).
 *
 * For every provider it performs up to two checks:
 *   1. docs  — the official key/pricing page still answers (HEAD/GET, any 2xx/3xx = ok)
 *   2. live  — a real API call:
 *        openai_models : GET  {url}            -> expects JSON with a `data` array
 *        openai_chat   : POST {url}/chat/completions with a 1-token prompt
 *        http          : GET  {url}            -> expects 2xx
 *      Keyless probes always run. Keyed probes run only when the named env var
 *      (repository secret) is present; otherwise the check is reported as "skipped",
 *      never as a failure.
 *
 * Output:
 *   data/status.json   — machine-readable results for every provider
 *   badges/<id>.json   — shields.io endpoint JSON, consumed by README badges
 *
 * Nothing here writes to providers.json: humans curate facts, the bot only observes.
 */
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const data = JSON.parse(readFileSync(join(root, "data/providers.json"), "utf8"));
const TIMEOUT_MS = 20_000;
const UA = "awesome-free-ai-apis-verifier/1.0 (+https://github.com/IdoY12/awesome-free-ai-apis)";

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function fetchWithTimeout(url, init = {}) {
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), TIMEOUT_MS);
  try {
    return await fetch(url, { ...init, signal: ctrl.signal, headers: { "user-agent": UA, ...(init.headers || {}) } });
  } finally {
    clearTimeout(t);
  }
}

function expandEnv(s) {
  return s.replace(/\$\{([A-Z0-9_]+)\}/g, (_, k) => process.env[k] ?? "");
}

async function checkDocs(url) {
  if (!url) return { state: "skipped", detail: "no docs url" };
  try {
    let res = await fetchWithTimeout(url, { method: "HEAD", redirect: "follow" });
    if (res.status === 405 || res.status === 403 || res.status === 404) res = await fetchWithTimeout(url, { method: "GET", redirect: "follow" });
    // Bot walls (403/429) are not evidence the page is gone — report as unknown, not broken.
    if (res.status === 403 || res.status === 429) return { state: "unknown", detail: `HTTP ${res.status} (bot protection)` };
    return res.ok ? { state: "ok", detail: `HTTP ${res.status}` } : { state: "broken", detail: `HTTP ${res.status}` };
  } catch (e) {
    return { state: "unknown", detail: e.name === "AbortError" ? "timeout" : String(e.message || e) };
  }
}

async function checkLive(p) {
  const { type, url, auth, model, count_filter } = p.probe;
  if (type === "docs") return { state: "n/a", detail: "no API probe defined (docs check only)" };
  let token = null;
  if (auth && auth.startsWith("env:")) {
    token = process.env[auth.slice(4)];
    if (!token) return { state: "skipped", detail: `secret ${auth.slice(4)} not configured` };
  }
  const headers = { accept: "application/json" };
  if (token && !url.includes("${")) headers.authorization = `Bearer ${token}`;
  try {
    if (type === "openai_models" || type === "http") {
      const res = await fetchWithTimeout(expandEnv(url), { headers });
      if (!res.ok) return { state: res.status === 401 || res.status === 403 ? "auth" : "down", detail: `HTTP ${res.status}` };
      if (type === "openai_models") {
        const body = await res.json().catch(() => null);
        const list = Array.isArray(body?.data) ? body.data : Array.isArray(body) ? body : null;
        if (!list) return { state: "down", detail: "no model list in response" };
        const n = count_filter ? list.filter((m) => String(m.id || m.name || "").includes(count_filter)).length : list.length;
        return { state: "up", detail: count_filter ? `${n} models matching "${count_filter}"` : `${n} models listed`, models: n };
      }
      return { state: "up", detail: `HTTP ${res.status}` };
    }
    if (type === "openai_chat") {
      const res = await fetchWithTimeout(`${url.replace(/\/$/, "")}/chat/completions`, {
        method: "POST",
        headers: { ...headers, "content-type": "application/json" },
        body: JSON.stringify({ model, messages: [{ role: "user", content: "Reply with the single word: ok" }], max_tokens: 5, temperature: 0 }),
      });
      if (res.status === 429) return { state: "up", detail: "HTTP 429 (rate limited, endpoint alive)" };
      if (!res.ok) return { state: res.status === 401 || res.status === 403 ? "auth" : "down", detail: `HTTP ${res.status}` };
      const body = await res.json().catch(() => null);
      const text = body?.choices?.[0]?.message?.content;
      return text != null ? { state: "up", detail: `chat ok (${model})` } : { state: "down", detail: "no completion in response" };
    }
    return { state: "skipped", detail: `unknown probe type ${type}` };
  } catch (e) {
    return { state: "down", detail: e.name === "AbortError" ? "timeout" : String(e.message || e) };
  }
}

// shields.io "endpoint" badge format: https://shields.io/badges/endpoint-badge
function badge(live, docs) {
  const map = {
    up: ["live", "brightgreen"],
    down: ["down", "red"],
    auth: ["auth error", "orange"],
    skipped: ["unchecked", "lightgrey"],
    "n/a": ["docs only", "lightgrey"],
  };
  let [message, color] = map[live.state] || ["unknown", "lightgrey"];
  if (live.state === "n/a" || live.state === "skipped") {
    if (docs.state === "ok") [message, color] = ["docs ok", "green"];
    else if (docs.state === "broken") [message, color] = ["docs broken", "red"];
  }
  return { schemaVersion: 1, label: "status", message, color };
}

const started = new Date().toISOString();
const results = {};
// Run in small parallel batches so a slow provider cannot stall the whole run.
const batch = 6;
for (let i = 0; i < data.providers.length; i += batch) {
  const slice = data.providers.slice(i, i + batch);
  await Promise.all(
    slice.map(async (p) => {
      const [docs, live] = await Promise.all([checkDocs(p.probe.docs_url), checkLive(p)]);
      results[p.id] = { name: p.name, category: p.category, checked_at: started, docs, live };
      console.log(`${p.id.padEnd(36)} docs=${docs.state.padEnd(8)} live=${live.state.padEnd(8)} ${live.detail}`);
    })
  );
  await sleep(250);
}

const summary = {
  checked_at: started,
  providers: data.providers.length,
  live_up: Object.values(results).filter((r) => r.live.state === "up").length,
  live_down: Object.values(results).filter((r) => r.live.state === "down").length,
  docs_broken: Object.values(results).filter((r) => r.docs.state === "broken").length,
};
writeFileSync(join(root, "data/status.json"), JSON.stringify({ summary, results }, null, 2) + "\n");
mkdirSync(join(root, "badges"), { recursive: true });
for (const [id, r] of Object.entries(results)) writeFileSync(join(root, `badges/${id}.json`), JSON.stringify(badge(r.live, r.docs)) + "\n");
writeFileSync(
  join(root, "badges/_summary.json"),
  JSON.stringify({ schemaVersion: 1, label: "live checks", message: `${summary.live_up} up · ${summary.live_down} down · ${summary.docs_broken} docs broken`, color: summary.live_down || summary.docs_broken ? "orange" : "brightgreen" }) + "\n"
);
console.log(`\n${summary.live_up} live, ${summary.live_down} down, ${summary.docs_broken} broken docs (${summary.providers} providers)`);
