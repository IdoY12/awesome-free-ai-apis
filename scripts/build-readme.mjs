#!/usr/bin/env node
/**
 * Renders README.md from data/providers.json (+ data/status.json when present).
 * The README is generated — edit the JSON, then `npm run build`.
 */
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const REPO = "IdoY12/awesome-free-ai-apis";
const RAW = `https://raw.githubusercontent.com/${REPO}/main`;
const data = JSON.parse(readFileSync(join(root, "data/providers.json"), "utf8"));
const status = existsSync(join(root, "data/status.json")) ? JSON.parse(readFileSync(join(root, "data/status.json"), "utf8")) : null;

/* ---------- helpers ---------- */
const flag = (cc) => (cc ? String.fromCodePoint(...[...cc.toUpperCase()].map((c) => 0x1f1e6 + c.charCodeAt(0) - 65)) : "🌐");
const esc = (s) => (s == null ? "" : String(s).replace(/\|/g, "\\|").replace(/\r?\n+/g, " ").trim());
const clip = (s, n) => (s && s.length > n ? s.slice(0, n - 1).trimEnd() + "…" : s || "");
const num = (n) => {
  if (n == null) return "—";
  const bin = n % 1024 === 0 && n % 1000 !== 0; // 65536 → 64K, 1048576 → 1M, but 128000 → 128K
  const K = bin ? 1024 : 1000, M = K * K;
  if (n >= M) { const v = n / M; return `${Number.isInteger(v) ? v : v.toFixed(1)}M`; }
  if (n >= K) return `${Math.round(n / K)}K`;
  return String(n);
};
// Mirrors GitHub's heading-anchor algorithm: lowercase, drop punctuation/emoji, spaces → hyphens (not collapsed).
const anchor = (s) => "#" + s.toLowerCase().replace(/[^\w\s-]/g, "").replace(/ /g, "-");
const badgeUrl = (id) => `https://img.shields.io/endpoint?url=${encodeURIComponent(`${RAW}/badges/${id}.json`)}&cacheSeconds=3600`;
const bool = (v) => (v === true ? "✅" : v === false ? "—" : "·");

const TRAIN = { yes: "🔴 Yes", no: "🟢 No", "opt-out": "🟡 Opt-out", unclear: "⚪ Unclear" };
const COMM = { yes: "🟢 Yes", no: "🔴 No", "opt-out": "🟡", unclear: "⚪ Unclear" };
const DPA = { yes: "🟢 Yes", no: "🔴 No", unclear: "⚪ Unclear", "opt-out": "🟡" };
const CONF = { verified: "🟢 verified", partial: "🟡 partial", community: "🟠 community-sourced" };
const card = (v) => (v === false ? "🟢 No" : v === true ? "💳 Yes" : "⚪ Unclear");
const key = (v) => (v === false ? "🔓 None" : v === true ? "🔑 Yes" : "⚪ Unclear");
const compat = (v) => (v === true ? "✅" : v === false ? "❌" : v ? `🟡 ${esc(v)}` : "·");

const CATEGORIES = [
  ["text_llm", "Text & chat LLMs", "💬"],
  ["image_generation", "Image generation", "🎨"],
  ["stt", "Speech-to-text", "🎙️"],
  ["tts", "Text-to-speech", "🔊"],
  ["embeddings", "Embeddings & reranking", "🧭"],
  ["vector_db", "Vector databases", "🗄️"],
  ["web_search", "Web search, scraping & crawling", "🔎"],
  ["ocr_document", "OCR & document parsing", "📄"],
  ["moderation", "Moderation & safety", "🛡️"],
  ["translation", "Translation", "🌍"],
  ["vision_other", "Vision & other", "👁️"],
];
const TEXT_ORDER = [
  "google-gemini", "groq", "openrouter", "cloudflare-workers-ai", "mistral", "cohere", "sambanova", "ovhcloud-ai-endpoints",
  "nvidia-nim", "huggingface-inference-providers", "ollama-cloud", "z-ai", "aion-labs", "kilo-gateway", "llm7", "opencode-zen",
  "vercel-ai-gateway", "ibm-watsonx-ai", "nlp-cloud", "novita", "siliconflow", "modelscope", "baidu-qianfan", "iflytek-spark",
];

const L = (label, heading) => `[${label}](${anchor(heading)})`;
const byCat = (c) => data.providers.filter((p) => p.category === c);
const textProviders = byCat("text_llm").sort((a, b) => TEXT_ORDER.indexOf(a.id) - TEXT_ORDER.indexOf(b.id));
const liveState = (id) => status?.results?.[id]?.live?.state;
const docsState = (id) => status?.results?.[id]?.docs?.state;

/* ---------- blocks ---------- */
function policyStrip(p) {
  const f = p.free_tier, q = p.policy;
  const idv = f.identity_verification_required;
  const idvTxt = idv === false || idv == null ? "" : idv === true ? " · 🪪 ID verification" : ` · 🪪 ${esc(clip(idv, 60))}`;
  return [
    "| API key | Credit card | Trains on your data | Commercial use | DPA / GDPR | Hosting |",
    "|:--|:--|:--|:--|:--|:--|",
    `| ${key(f.api_key_required)}${idvTxt} | ${card(f.credit_card_required)} | ${TRAIN[q.trains_on_your_data]} | ${COMM[q.commercial_use]} | ${DPA[q.gdpr_dpa]} | ${esc(p.region)} |`,
  ].join("\n");
}

function modelsTable(models) {
  const rows = models.map((m) => {
    const c = m.capabilities || {};
    return `| ${esc(m.name)} | ${m.id ? "`" + esc(clip(m.id, 60)) + "`" : "<sub>not published</sub>"} | ${num(m.context)} | ${num(m.max_output)} | ${esc(clip(m.modality || "—", 28))} | ${bool(c.tool_calling)} | ${bool(c.json_mode)} | ${bool(c.vision)} | ${bool(c.reasoning)} | ${esc(clip(m.rate_limit || "—", 40))} |`;
  });
  return ["| Model | ID | Context | Max out | Modality | Tools | JSON | Vision | Reason | Rate limit |", "|:--|:--|--:|--:|:--|:-:|:-:|:-:|:-:|:--|", ...rows].join("\n");
}

function details(p) {
  const q = p.policy;
  const notes = [];
  if (q.training_note) notes.push(`- **Training:** ${esc(q.training_note)}`);
  if (q.commercial_note) notes.push(`- **Commercial use:** ${esc(q.commercial_note)}`);
  if (q.gdpr_note) notes.push(`- **DPA / GDPR:** ${esc(q.gdpr_note)}`);
  if (q.data_retention) notes.push(`- **Retention:** ${esc(q.data_retention)}`);
  if (p.hosting_regions) notes.push(`- **Hosting:** ${esc(p.hosting_regions)}`);
  if (p.base_url_note) notes.push(`- **Alt endpoint:** ${esc(p.base_url_note)}`);
  if (p.notes) notes.push(`- **Notes:** ${esc(p.notes)}`);
  const models = (p.models || []).filter((m) => m.notes).map((m) => `- **${esc(m.name)}:** ${esc(m.notes)}`);
  const srcs = p.sources.filter((s) => s.url).map((s) => `- [${esc(s.title || s.url)}](${s.url})${s.accessed ? ` <sub>${s.accessed}</sub>` : ""}`);
  return [
    "<details><summary><b>Notes &amp; sources</b> · last verified " + p.last_verified + "</summary>",
    "",
    ...notes,
    ...(models.length ? ["", "**Model notes**", ...models] : []),
    "",
    "**Official sources**",
    ...srcs,
    "",
    "</details>",
  ].join("\n");
}

function statusLine(p) {
  const l = liveState(p.id), d = docsState(p.id);
  const parts = [`![status](${badgeUrl(p.id)})`];
  if (status) parts.push(`<sub>live: ${l} · docs: ${d}</sub>`);
  parts.push(`<sub>${CONF[p.confidence]}</sub>`);
  if (p.stale) parts.push("<sub>⚠️ **possibly stale** — official pages could not be re-read</sub>");
  return parts.join(" ");
}

function textBlock(p) {
  const f = p.free_tier;
  return [
    `### ${flag(p.country)} [${p.name}](${p.website})`,
    "",
    statusLine(p),
    "",
    `> **${esc(f.headline)}**`,
    "",
    `${esc(f.summary)}`,
    "",
    `**Get a key:** ${p.api_key_url ? `<${p.api_key_url}>` : "—"}  `,
    `**Base URL:** ${p.base_url ? "`" + esc(p.base_url) + "`" : "—"} · OpenAI-compatible: ${compat(p.openai_compatible)}`,
    "",
    policyStrip(p),
    "",
    f.limits ? `**Limits:** ${esc(f.limits)}` : "",
    "",
    modelsTable(p.models),
    "",
    details(p),
    "",
  ].join("\n");
}

function categoryTable(cat) {
  const ps = byCat(cat);
  if (!ps.length) return "";
  const rows = ps.map((p) => {
    const f = p.free_tier, q = p.policy;
    const feats = (p.features || []).map((x) => esc(x.name)).filter(Boolean).slice(0, 4).join(", ");
    return `| ${flag(p.country)} **[${esc(p.name)}](${p.api_key_url || p.website})**<br><sub>${CONF[p.confidence]}</sub> | ${esc(f.headline)}<br><sub>${esc(clip(f.limits && f.limits !== f.headline ? f.limits : "", 170))}</sub> | ${esc(clip(feats, 90)) || "—"} | ${key(f.api_key_required)}<br>${card(f.credit_card_required)} | ${TRAIN[q.trains_on_your_data]}<br>${COMM[q.commercial_use]} | ${esc(p.region)} | ![](${badgeUrl(p.id)}) |`;
  });
  const det = ps.map((p) => details(p).replace("Notes &amp; sources", `${esc(p.name)} — notes &amp; sources`)).join("\n");
  return [
    "| Provider | Permanent free tier | Models / features | Key · Card | Trains · Commercial | Hosting | Status |",
    "|:--|:--|:--|:--|:--|:--|:--|",
    ...rows,
    "",
    det,
  ].join("\n");
}

function complianceMatrix() {
  const rows = data.providers.map((p) => {
    const q = p.policy, cat = CATEGORIES.find((c) => c[0] === p.category);
    return `| ${flag(p.country)} ${esc(p.name)} | ${cat[2]} ${cat[1]} | ${TRAIN[q.trains_on_your_data]} | ${COMM[q.commercial_use]} | ${DPA[q.gdpr_dpa]} | ${esc(p.region)} | ${esc(clip(q.data_retention || "—", 60))} |`;
  });
  return ["| Provider | Category | Trains on free-tier data | Commercial use | DPA | Hosting | Retention |", "|:--|:--|:--|:--|:--|:--|:--|", ...rows].join("\n");
}

function graveyard() {
  const groups = [
    ["retired", "☠️ Retired or discontinued", "Was free once. Isn't any more."],
    ["trial_only", "⏳ One-time credits / time-limited trials", "Generous sometimes, but not *permanent* — so not listed above."],
    ["never_free", "💸 No free API tier", "Confirmed from official pricing. Saves you a signup."],
  ];
  return groups
    .map(([st, title, sub]) => {
      const rows = data.graveyard.filter((g) => g.status === st).map((g) => `| ${esc(g.name)} | ${esc(clip(g.reason, 190))} | ${g.sources?.[0]?.url ? `[source](${g.sources[0].url})` : "—"} |`);
      return rows.length ? `#### ${title}\n\n<sub>${sub}</sub>\n\n| Provider | Why it's here | Source |\n|:--|:--|:--|\n${rows.join("\n")}\n` : "";
    })
    .join("\n");
}

function unresolved() {
  const rows = (data.unresolved || []).map((u) => `| \`${esc(u.id)}\` | ${esc(clip(u.what, 160))} | ${esc(clip(u.why || "", 110))} |`);
  return ["| Provider | What we couldn't confirm | Why |", "|:--|:--|:--|", ...rows].join("\n");
}

/* ---------- counts ---------- */
const counts = Object.fromEntries(CATEGORIES.map(([c]) => [c, byCat(c).length]));
const totalModels = textProviders.reduce((n, p) => n + p.models.length, 0);
const keyless = data.providers.filter((p) => p.free_tier.api_key_required === false).length;
const noCard = data.providers.filter((p) => p.free_tier.credit_card_required === false).length;
const textKeyless = textProviders.filter((p) => p.free_tier.api_key_required === false).length;
const textNoCard = textProviders.filter((p) => p.free_tier.credit_card_required === false).length;
const noTrain = data.providers.filter((p) => p.policy.trains_on_your_data === "no").length;
const checked = status ? new Date(status.summary.checked_at).toISOString().slice(0, 16).replace("T", " ") + " UTC" : "not yet run";

/* ---------- README ---------- */
const md = `<div align="center">

<img src="media/banner.svg" alt="Awesome Free AI APIs" width="100%">

<br>

**Every AI API with a *permanent* free tier — verified against official docs, re-checked daily, with the data-policy fine print nobody else lists.**

[![Awesome](https://awesome.re/badge-flat2.svg)](https://awesome.re)
![Providers](https://img.shields.io/badge/providers-${data.providers.length}-8b5cf6?style=flat-square)
![Categories](https://img.shields.io/badge/categories-${CATEGORIES.length}-6366f1?style=flat-square)
![Reviewed](https://img.shields.io/badge/full%20review-${data.meta.last_full_review.replace(/-/g, "--")}-0ea5e9?style=flat-square)
[![Live checks](https://img.shields.io/endpoint?url=${encodeURIComponent(`${RAW}/badges/_summary.json`)}&style=flat-square)](data/status.json)
[![Verify](https://github.com/${REPO}/actions/workflows/verify.yml/badge.svg)](https://github.com/${REPO}/actions/workflows/verify.yml)
[![License: CC0](https://img.shields.io/badge/license-CC0--1.0-lightgrey?style=flat-square)](LICENSE)
[![PRs welcome](https://img.shields.io/badge/PRs-welcome-22c55e?style=flat-square)](CONTRIBUTING.md)

</div>

---

## Why this list is different

| | |
|:--|:--|
| 🔬 **Primary sources only** | Every number links to the provider's own rate-limit, pricing or terms page — never a blog, never a screenshot. Each entry shows its *confidence* and *last-verified* date. |
| 🟢 **Live status, daily** | A GitHub Action calls each API (or pings its docs) every day and turns the badges red when something breaks${status ? "" : " (first run pending)"}. Keyless endpoints are exercised for real; keyed ones when a secret is configured. |
| 🧾 **The fine print** | Does the free tier **train on your prompts**? Is **commercial use** allowed? Is a **DPA** offered? Where is it **hosted**? That's a column here, not a footnote. |
| 🧰 **Beyond chat** | ${CATEGORIES.length - 1} more categories a real app needs: image, speech, embeddings, vector DBs, web search, OCR, moderation, translation, vision. |
| ☠️ **The graveyard** | ${data.graveyard.length} providers people *think* are free and aren't — retired tiers, one-time credits, paid-only. Checked so you don't have to. |
| 🧩 **Machine-readable** | Everything lives in [\`data/providers.json\`](data/providers.json) (schema in [\`data/schema.json\`](data/schema.json)). The README is generated from it. |

**Ground rules.** Only tiers that renew forever (per day / per month) count. One-time sign-up credits, 30-day trials and "free for the first N calls" go to the ${L("Graveyard","☠️ Graveyard")}. Limits shown are the ones the provider publishes; "unclear" means we looked and the official page doesn't say.

## Contents

${CATEGORIES.map(([c, t, e]) => `- [${e} ${t}](${anchor(e + " " + t)}) <sub>${counts[c]}</sub>`).join("\n")}
- [🧾 Compliance matrix](${anchor("🧾 Compliance matrix")})
- [☠️ Graveyard](${anchor("☠️ Graveyard")})
- [🙋 Help wanted](${anchor("🙋 Help wanted")})
- [⚙️ How verification works](${anchor("⚙️ How verification works")})
- [🤝 Contributing](${anchor("🤝 Contributing")})

## Quick picks

<sub>Opinionated starting points; check the per-provider limits before you build on them.</sub>

| If you want… | Start with | Why |
|:--|:--|:--|
| The most generous general-purpose free chat API | ${L("Google Gemini API","🇺🇸 Google Gemini API")} | Whole Gemini Flash family free of charge; 1M context. Trade-off: free-tier prompts are used to improve Google products (except EEA/UK/CH). |
| Fastest responses, no training on your data | ${L("Groq","🇺🇸 Groq")} | GPT-OSS 120B / 20B and Qwen at LPU speed; contract says Groq may not train on inputs. |
| Many open models behind one key | ${L("OpenRouter","🇺🇸 OpenRouter (free models)")} | A rotating set of \`:free\` models (14 on ${data.meta.last_full_review}) + an \`openrouter/free\` router. 50 RPD, or 1,000 RPD once you've ever bought $10 of credit. |
| Zero signup, zero key | ${L("OVHcloud AI Endpoints","🇫🇷 OVHcloud AI Endpoints")}, ${L("LLM7.io","🇬🇧 LLM7.io")}, ${L("Kilo Gateway","🇺🇸 Kilo Gateway")}, ${L("Pollinations","🎨 Image generation")} | Anonymous access by IP. Low limits, great for prototypes and CI. |
| EU hosting + no training | ${L("OVHcloud AI Endpoints","🇫🇷 OVHcloud AI Endpoints")} (France), ${L("Mistral","🇫🇷 Mistral AI (Experiment plan)")} (EU, opt-out) | For GDPR-sensitive workloads. |
| A free tier baked into a full platform | ${L("Cloudflare Workers AI","🇺🇸 Cloudflare Workers AI")} | 10,000 neurons/day across text, image, embeddings, STT, TTS — plus Vectorize on the same free plan. |
| Speech in & out | ${L("Groq","🎙️ Speech-to-text")} (Whisper), ${L("Google Cloud TTS","🔊 Text-to-speech")} | 8 free audio-hours/day of Whisper; 4M chars/month of WaveNet TTS. |
| A vector store for a side project | ${L("Qdrant Cloud","🗄️ Vector databases")}, ${L("Pinecone","🗄️ Vector databases")}, ${L("Supabase","🗄️ Vector databases")} | Permanent free clusters (Qdrant calls its "free forever"); Supabase/Neon give you Postgres + pgvector. |
| Web search for an agent | ${L("Tavily","🔎 Web search, scraping & crawling")} (1,000 credits/mo), ${L("Exa","🔎 Web search, scraping & crawling")} ($10/mo credit) | Both train on queries — see the matrix. ${L("Jina Reader","🔎 Web search, scraping & crawling")} is keyless and doesn't. |

### Legend

| Symbol | Meaning |
|:--|:--|
| 🔑 / 🔓 | API key required / works anonymously |
| 💳 / 🟢 No | Credit card required / not required · 🪪 identity or phone verification |
| 🔴 Yes · 🟡 Opt-out · 🟢 No · ⚪ Unclear | Whether **free-tier** API traffic is used to train the provider's models |
| 🟢 verified · 🟡 partial · 🟠 community-sourced | All key numbers from official pages · some numbers unpublished by the provider · relies on forum/staff statements |
| ![status](https://img.shields.io/badge/status-live-brightgreen) | Real API call succeeded in the last daily run · ![](https://img.shields.io/badge/status-docs%20ok-green) docs reachable, no API probe · ![](https://img.shields.io/badge/status-down-red) probe failed |
| Tools / JSON / Vision / Reason | Tool calling · JSON / structured output · image input · reasoning model (✅ documented · — no · · unknown) |

---

## 💬 Text & chat LLMs

<sub>${textProviders.length} providers · ${totalModels} model rows · ${textKeyless} need no key at all · ${textNoCard} need no credit card. (Whole list: ${keyless} keyless, ${noCard} of ${data.providers.length} without a card.)</sub>

### At a glance

| Provider | Free tier in one line | Key · Card | Trains | Commercial | Hosting | Status |
|:--|:--|:--|:--|:--|:--|:--|
${textProviders.map((p) => `| ${flag(p.country)} ${L(esc(p.name), flag(p.country) + " " + p.name)} | ${esc(p.free_tier.headline)} | ${key(p.free_tier.api_key_required)} · ${card(p.free_tier.credit_card_required)} | ${TRAIN[p.policy.trains_on_your_data]} | ${COMM[p.policy.commercial_use]} | ${esc(p.region)} | ![](${badgeUrl(p.id)}) |`).join("\n")}

---

${textProviders.map(textBlock).join("\n")}
${CATEGORIES.slice(1)
  .map(([c, t, e]) => `## ${e} ${t}\n\n${categoryTable(c)}\n`)
  .join("\n")}
## 🧾 Compliance matrix

<sub>What the official terms say about **free-tier** API traffic. "Unclear" = the public pages don't say — a good reason to ask before shipping. ${noTrain} providers state explicitly that they do **not** train on your data.</sub>

${complianceMatrix()}

> 🇪🇺 **EEA / UK / Switzerland note.** Google applies its *paid-tier* data terms to free Gemini quota for users in these regions (no training, no human review) but its terms still require paid services when you expose an API client to end users there. Mistral and OVHcloud are the EU-headquartered options with permanent free tiers; OVHcloud publishes its inference location (Gravelines, FR). Scaleway is EU-based but offers only a one-time token grant.

## ☠️ Graveyard

<sub>Not free, not any more, or never was. Listed so you don't waste a signup — and so this list can be trusted for what it *leaves out*. Entries without a link were read from the provider's pricing page but the URL was not captured; PRs adding sources are welcome.</sub>

${graveyard()}
## 🙋 Help wanted

Things we could not confirm from an official page. If you have a screenshot of the console, a docs link, or an email from the provider, [open a PR](CONTRIBUTING.md) or an issue.

${unresolved()}

## ⚙️ How verification works

\`\`\`text
data/providers.json ──▶ scripts/validate.mjs   (schema + sanity checks, runs on every PR)
        │
        ├──────────▶ scripts/verify.mjs     (daily cron: real API calls + docs pings)
        │                    │
        │                    └──▶ data/status.json + badges/*.json  (shields.io endpoints)
        │
        └──────────▶ scripts/build-readme.mjs ──▶ README.md
\`\`\`

- **Keyless probes** (OpenRouter's public model list, OVHcloud, LLM7, Kilo, Pollinations, Jina Reader, MyMemory…) run unconditionally.
- **Keyed probes** run only when the matching repository secret exists (\`GROQ_API_KEY\`, \`GEMINI_API_KEY\`, \`MISTRAL_API_KEY\`, \`COHERE_API_KEY\`, \`SAMBANOVA_API_KEY\`, \`NVIDIA_API_KEY\`, \`HF_TOKEN\`, \`AION_API_KEY\`, \`ZAI_API_KEY\`, \`OLLAMA_API_KEY\`, \`OPENCODE_API_KEY\`, \`TAVILY_API_KEY\`). Missing secret → badge says *unchecked*, never *down*.
- **Docs pings** treat 403/429 (bot walls) as *unknown*, not *broken*. Only a 404/410/5xx marks docs as broken.
- The bot never edits facts. Humans change \`providers.json\`; the bot only reports.
- Last run: **${checked}**${status ? ` — ${status.summary.live_up} live, ${status.summary.live_down} down, ${status.summary.docs_broken} broken docs` : ""}.

Run it yourself:

\`\`\`bash
npm run validate   # schema + sanity checks
npm run verify     # live probes (set API keys as env vars to cover keyed providers)
npm run build      # regenerate README.md
\`\`\`

## 🤝 Contributing

Know a permanent free tier we missed, or spotted a limit that changed? See [CONTRIBUTING.md](CONTRIBUTING.md). The bar is simple: **link the official page that states the number.** Trial credits and time-limited promos belong in the Graveyard, not the list.

## License

[CC0 1.0](LICENSE) — public domain. Copy, fork, remix. Provider names and logos belong to their owners.

<div align="center"><sub>Built and maintained by <a href="https://github.com/IdoY12">Ido Yahav</a>. Not affiliated with any provider listed. Data is best-effort — always confirm limits in your own console before you depend on them.</sub></div>
`;

writeFileSync(join(root, "README.md"), md.replace(/\n{3,}/g, "\n\n"));
console.log(`README.md written — ${data.providers.length} providers, ${data.graveyard.length} graveyard entries${status ? "" : " (no status.json yet)"}`);
