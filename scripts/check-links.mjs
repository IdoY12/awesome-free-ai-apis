#!/usr/bin/env node
/**
 * Link check — runs weekly in GitHub Actions (and locally with `npm run links`).
 *
 * Requests every website, key page and source URL in data/providers.json (providers and
 * graveyard) and exits non-zero if any of them is gone (4xx other than login/bot walls).
 * The daily verifier only pings one page per provider; this covers the citations too.
 *
 * Pass --report-only to print the report without failing.
 * Writes a Markdown report to $GITHUB_STEP_SUMMARY when it is set.
 */
import { readFileSync, appendFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { collectLinks, classify, report } from "./lib/links.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const data = JSON.parse(readFileSync(join(root, "data/providers.json"), "utf8"));
const TIMEOUT_MS = 20_000;
const UA = "awesome-free-ai-apis-linkcheck/1.0 (+https://github.com/IdoY12/awesome-free-ai-apis)";

async function request(url, method) {
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), TIMEOUT_MS);
  try {
    return await fetch(url, { method, redirect: "follow", signal: ctrl.signal, headers: { "user-agent": UA } });
  } finally {
    clearTimeout(t);
  }
}

async function check(url) {
  try {
    let res = await request(url, "HEAD");
    // Many servers answer HEAD with 403/404/405 but serve GET fine.
    if (!res.ok) res = await request(url, "GET");
    return { state: classify(res.status), detail: `HTTP ${res.status}` };
  } catch (e) {
    return { state: "unknown", detail: e.name === "AbortError" ? "timeout" : String(e.cause?.code || e.message || e) };
  }
}

const links = collectLinks(data);
const results = [];
const batch = 8;
for (let i = 0; i < links.length; i += batch) {
  const slice = links.slice(i, i + batch);
  results.push(...(await Promise.all(slice.map(async (l) => ({ ...l, ...(await check(l.url)) })))));
}

// One retry for anything that looked broken, so a transient error does not fail the run.
for (const r of results.filter((r) => r.state === "broken")) Object.assign(r, await check(r.url));

const md = report(results);
if (process.env.GITHUB_STEP_SUMMARY) appendFileSync(process.env.GITHUB_STEP_SUMMARY, md);
console.log(md);

const broken = results.filter((r) => r.state === "broken");
for (const r of broken) console.error(`::error::${r.url} -> ${r.detail} (used by ${r.usedBy.join(", ")})`);
// --report-only: print the report but never fail (used on pull requests that change the checker itself).
process.exit(broken.length && !process.argv.includes("--report-only") ? 1 : 0);
