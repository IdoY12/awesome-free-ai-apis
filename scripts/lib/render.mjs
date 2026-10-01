/**
 * Renders every generated Markdown file from the dataset.
 *
 *   README.md                  short overview: one table per category
 *   docs/providers/<id>.md     everything known about one provider
 *   docs/graveyard.md          retired tiers, one-time credits, paid-only
 *   docs/compliance.md         training / commercial use / DPA matrix
 *   docs/help-wanted.md        facts that could not be confirmed
 *   docs/verification.md       how the daily checks work, last run
 *
 * Pure: takes the parsed data (and optional status), returns { path: content }.
 * scripts/build-readme.mjs writes the result to disk.
 */

const REPO = "IdoY12/awesome-free-ai-apis";
const RAW = `https://raw.githubusercontent.com/${REPO}/main`;

export const CATEGORIES = [
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

// Editorial order for the largest category; providers not listed keep their dataset order, after these.
const TEXT_ORDER = [
  "google-gemini", "groq", "openrouter", "cloudflare-workers-ai", "mistral", "cohere", "sambanova", "ovhcloud-ai-endpoints",
  "nvidia-nim", "huggingface-inference-providers", "ollama-cloud", "z-ai", "aion-labs", "kilo-gateway", "llm7", "opencode-zen",
  "vercel-ai-gateway", "ibm-watsonx-ai", "nlp-cloud", "novita", "siliconflow", "modelscope", "baidu-qianfan", "iflytek-spark",
];

/* ---------- helpers ---------- */
const flag = (cc) => (cc ? String.fromCodePoint(...[...cc.toUpperCase()].map((c) => 0x1f1e6 + c.charCodeAt(0) - 65)) : "🌐");
// Table-safe text: escape pipes, flatten newlines, and neutralise anything GitHub would parse as an HTML tag.
const esc = (s) => (s == null ? "" : String(s).replace(/\|/g, "\\|").replace(/<(?=[a-zA-Z\/!])/g, "&lt;").replace(/\r?\n+/g, " ").trim());
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

export const providerPath = (id) => `docs/providers/${id}.md`;
const GENERATED = "<sub>Generated from [`data/providers.json`](%DATA%). Edit the data, not this file.</sub>";
const footer = (dataPath) => GENERATED.replace("%DATA%", dataPath);

export function providersIn(data, cat) {
  const list = data.providers.filter((p) => p.category === cat);
  if (cat !== "text_llm") return list;
  const rank = (p) => { const i = TEXT_ORDER.indexOf(p.id); return i === -1 ? TEXT_ORDER.length : i; };
  return list.map((p, i) => [p, i]).sort((a, b) => rank(a[0]) - rank(b[0]) || a[1] - b[1]).map(([p]) => p);
}

/* ---------- provider page ---------- */
function modelsTable(models) {
  const rows = models.map((m) => {
    const c = m.capabilities || {};
    return `| ${esc(m.name)} | ${m.id ? "`" + esc(clip(m.id, 60)) + "`" : "<sub>not published</sub>"} | ${num(m.context)} | ${num(m.max_output)} | ${esc(clip(m.modality || "—", 28))} | ${bool(c.tool_calling)} | ${bool(c.json_mode)} | ${bool(c.vision)} | ${bool(c.reasoning)} | ${esc(clip(m.rate_limit || "—", 40))} |`;
  });
  return [
    "| Model | ID | Context | Max out | Modality | Tools | JSON | Vision | Reason | Rate limit |",
    "|:--|:--|--:|--:|:--|:-:|:-:|:-:|:-:|:--|",
    ...rows,
    "",
    "<sub>Tools = tool calling · JSON = structured output · Vision = image input · Reason = reasoning model. ✅ documented · — no · · unknown.</sub>",
  ].join("\n");
}

function providerPage(p, status) {
  const f = p.free_tier, q = p.policy;
  const cat = CATEGORIES.find((c) => c[0] === p.category);
  const st = status?.results?.[p.id];
  const idv = f.identity_verification_required;
  const idvTxt = idv === false || idv == null ? "" : idv === true ? " · 🪪 ID verification" : ` · 🪪 ${esc(idv)}`;

  const statusBits = [`![status](${badgeUrl(p.id)})`];
  if (st) statusBits.push(`<sub>live: ${st.live.state} · docs: ${st.docs.state}</sub>`);
  statusBits.push(`<sub>${CONF[p.confidence]} · last verified ${p.last_verified}</sub>`);
  if (p.stale) statusBits.push("<sub>⚠️ **possibly stale**: official pages could not be re-read</sub>");

  const out = [
    `# ${flag(p.country)} ${p.name}`,
    "",
    `[← All providers](../../README.md${anchor(`${cat[2]} ${cat[1]}`)}) · ${cat[2]} ${cat[1]}`,
    "",
    statusBits.join(" "),
    "",
    `> **${esc(f.headline)}**`,
    "",
  ];
  if (f.summary) out.push(esc(f.summary), "");

  out.push(`**Website:** <${p.website}>  `);
  out.push(`**Get a key:** ${p.api_key_url ? `<${p.api_key_url}>` : "—"}${p.api_key_note ? ` (${esc(p.api_key_note)})` : ""}  `);
  out.push(`**Base URL:** ${p.base_url ? "`" + esc(p.base_url) + "`" : "—"} · OpenAI-compatible: ${compat(p.openai_compatible)}`);
  out.push("");

  out.push(
    "| API key | Credit card | Trains on your data | Commercial use | DPA / GDPR | Hosting |",
    "|:--|:--|:--|:--|:--|:--|",
    `| ${key(f.api_key_required)}${idvTxt} | ${card(f.credit_card_required)} | ${TRAIN[q.trains_on_your_data]} | ${COMM[q.commercial_use]} | ${DPA[q.gdpr_dpa]} | ${esc(p.region)} |`,
    ""
  );

  if (f.limits) out.push("## Limits", "", esc(f.limits), "");

  if (p.models?.length) out.push("## Models", "", modelsTable(p.models), "");

  if (p.features?.length) {
    out.push("## What the free tier covers", "");
    for (const x of p.features) out.push(`- **${esc(x.name)}**${x.notes ? `: ${esc(x.notes)}` : ""}`);
    out.push("");
  }

  const notes = [];
  if (q.training_note) notes.push(`- **Training:** ${esc(q.training_note)}`);
  if (q.commercial_note) notes.push(`- **Commercial use:** ${esc(q.commercial_note)}`);
  if (q.gdpr_note) notes.push(`- **DPA / GDPR:** ${esc(q.gdpr_note)}`);
  if (q.data_retention) notes.push(`- **Retention:** ${esc(q.data_retention)}`);
  if (p.hosting_regions) notes.push(`- **Hosting:** ${esc(p.hosting_regions)}`);
  if (p.base_url_note) notes.push(`- **Alt endpoint:** ${esc(p.base_url_note)}`);
  if (p.notes) notes.push(`- **Notes:** ${esc(p.notes)}`);
  if (notes.length) out.push("## Fine print", "", ...notes, "");

  // Skip boilerplate model notes ("Free.", "Preview") — the model table already says it's free.
  const boilerplate = /^(free|free of charge|free of charge on free tier|production|preview)\.?$/i;
  const modelNotes = (p.models || []).filter((m) => m.notes && !boilerplate.test(m.notes.trim())).map((m) => `- **${esc(m.name)}:** ${esc(m.notes)}`);
  if (modelNotes.length) out.push("## Model notes", "", ...modelNotes, "");

  out.push("## Official sources", "");
  for (const s of p.sources.filter((s) => s.url)) out.push(`- [${esc(s.title || s.url)}](${s.url})${s.accessed ? ` <sub>${s.accessed}</sub>` : ""}`);
  out.push("", "---", "", footer("../../data/providers.json"), "");
  return out.join("\n");
}

/* ---------- standalone pages ---------- */
function graveyardPage(data) {
  const groups = [
    ["retired", "☠️ Retired or discontinued", "Was free once. Isn't any more."],
    ["trial_only", "⏳ One-time credits and time-limited trials", "Generous sometimes, but not *permanent*, so not on the main list."],
    ["never_free", "💸 No free API tier", "Saves you a signup."],
  ];
  const src = (g) => {
    const s = (g.sources || []).filter((x) => x.url);
    return s.length ? s.map((x, i) => `[source${s.length > 1 ? " " + (i + 1) : ""}](${x.url})`).join(" · ") : "—";
  };
  const sections = groups.map(([st, title, sub]) => {
    const rows = data.graveyard.filter((g) => g.status === st).map((g) => `| ${esc(g.name)} | ${esc(g.reason)} | ${src(g)} |`);
    return rows.length ? [`## ${title}`, "", `<sub>${sub}</sub>`, "", "| Provider | Why it's here | Source |", "|:--|:--|:--|", ...rows, ""].join("\n") : "";
  });
  const unsourced = data.graveyard.filter((g) => !(g.sources || []).some((x) => x.url)).length;
  return [
    "# ☠️ Graveyard",
    "",
    "[← Back to the list](../README.md)",
    "",
    `${data.graveyard.length} APIs people expect to be free that aren't: retired tiers, one-time credits, trials, paid-only. Listed so you don't waste a signup, and so the main list can be trusted for what it leaves out.`,
    "",
    unsourced ? `${unsourced} entries still have no source link ("—"). A pull request that adds the official page is welcome.` : "",
    "",
    ...sections,
    "---",
    "",
    footer("../data/providers.json"),
    "",
  ].join("\n");
}

function compliancePage(data) {
  const noTrain = data.providers.filter((p) => p.policy.trains_on_your_data === "no").length;
  const rows = data.providers.map((p) => {
    const q = p.policy, cat = CATEGORIES.find((c) => c[0] === p.category);
    return `| ${flag(p.country)} [${esc(p.name)}](providers/${p.id}.md) | ${cat[2]} ${cat[1]} | ${TRAIN[q.trains_on_your_data]} | ${COMM[q.commercial_use]} | ${DPA[q.gdpr_dpa]} | ${esc(p.region)} | ${esc(clip(q.data_retention || "—", 60))} |`;
  });
  return [
    "# 🧾 Compliance matrix",
    "",
    "[← Back to the list](../README.md)",
    "",
    `What the official terms say about **free-tier** API traffic. "Unclear" means the public pages don't say, which is a good reason to ask before shipping. ${noTrain} of ${data.providers.length} providers state explicitly that they do **not** train on your data. The quoted clause for each answer is on the provider's own page.`,
    "",
    "| Provider | Category | Trains on free-tier data | Commercial use | DPA | Hosting | Retention |",
    "|:--|:--|:--|:--|:--|:--|:--|",
    ...rows,
    "",
    "> 🇪🇺 **EEA / UK / Switzerland note.** Google applies its *paid-tier* data terms to free Gemini quota for users in these regions (no training, no human review) but its terms still require paid services when you expose an API client to end users there. Mistral and OVHcloud are the EU-headquartered options with permanent free tiers; OVHcloud publishes its inference location (Gravelines, FR). Scaleway is EU-based but offers only a one-time token grant.",
    "",
    "---",
    "",
    footer("../data/providers.json"),
    "",
  ].join("\n");
}

function helpWantedPage(data) {
  const rows = (data.unresolved || []).map((u) => `| \`${esc(u.id)}\` | ${esc(u.what)} | ${esc(u.why || "")} |`);
  return [
    "# 🙋 Help wanted",
    "",
    "[← Back to the list](../README.md)",
    "",
    "Things that could not be confirmed from an official page. If you have a screenshot of the console, a docs link, or an email from the provider, [open a pull request](../CONTRIBUTING.md) or an issue.",
    "",
    "| Provider | What we couldn't confirm | Why |",
    "|:--|:--|:--|",
    ...rows,
    "",
    "---",
    "",
    footer("../data/providers.json"),
    "",
  ].join("\n");
}

function verificationPage(data, status) {
  const checked = status ? new Date(status.summary.checked_at).toISOString().slice(0, 16).replace("T", " ") + " UTC" : "not yet run";
  const secrets = [...new Set(data.providers.map((p) => p.probe.auth).filter((a) => a && a.startsWith("env:")).map((a) => a.slice(4)))].sort();
  return [
    "# ⚙️ How verification works",
    "",
    "[← Back to the list](../README.md)",
    "",
    "```text",
    "data/providers.json ──▶ scripts/validate.mjs      schema + sanity checks, on every pull request",
    "        │",
    "        ├──────────▶ scripts/verify.mjs        daily: real API calls + docs pings",
    "        │                    └──▶ data/status.json + badges/*.json   (shields.io endpoints)",
    "        │",
    "        ├──────────▶ scripts/check-links.mjs   weekly: every cited URL still resolves",
    "        │",
    "        └──────────▶ scripts/build-readme.mjs  README.md + docs/",
    "```",
    "",
    "- **Keyless probes** (OpenRouter's public model list, OVHcloud, LLM7, Kilo, Pollinations, Jina Reader, MyMemory…) run unconditionally.",
    `- **Keyed probes** run only when the matching repository secret exists (${secrets.map((s) => "`" + s + "`").join(", ")}). Missing secret → the badge says *unchecked*, never *down*.`,
    "- **Docs pings** treat 401/403/429 (login and bot walls) as *unknown*, not *broken*. Only a real 4xx such as 404 marks docs as broken.",
    "- **Link check**: once a week every website, key page and source URL in the dataset is requested; a dead link fails the run.",
    "- The bot never edits facts. Humans change `providers.json`; the bot only reports.",
    `- Last run: **${checked}**${status ? `: ${status.summary.live_up} live, ${status.summary.live_down} down, ${status.summary.docs_broken} broken docs` : ""}.`,
    "",
    "## Run it yourself",
    "",
    "```bash",
    "npm run validate   # schema + sanity checks",
    "npm test           # unit tests",
    "npm run verify     # live probes (set API keys as env vars to cover keyed providers)",
    "npm run links      # request every cited URL",
    "npm run build      # regenerate README.md and docs/",
    "```",
    "",
    "## Confidence levels",
    "",
    "| Label | Meaning |",
    "|:--|:--|",
    "| 🟢 verified | Every key number comes from an official page. |",
    "| 🟡 partial | The provider does not publish some numbers; the entry says which. |",
    "| 🟠 community-sourced | Relies on a forum or staff statement, linked in the sources. |",
    "",
    "---",
    "",
    "<sub>Generated by `scripts/build-readme.mjs`. Edit `scripts/lib/render.mjs`, not this file.</sub>",
    "",
  ].join("\n");
}

/* ---------- README ---------- */
function readme(data) {
  const P = (id, label) => {
    const p = data.providers.find((x) => x.id === id);
    if (!p) throw new Error(`Quick picks reference unknown provider "${id}"`);
    return `[${label || esc(p.name)}](${providerPath(id)})`;
  };
  const catTable = ([c, title, emoji]) => {
    const ps = providersIn(data, c);
    if (!ps.length) return "";
    const rows = ps.map(
      (p) =>
        `| ${flag(p.country)} [${esc(p.name)}](${providerPath(p.id)}) | ${esc(p.free_tier.headline)} | ${key(p.free_tier.api_key_required)} · ${card(p.free_tier.credit_card_required)} | ${TRAIN[p.policy.trains_on_your_data]} | ${COMM[p.policy.commercial_use]} | ${esc(p.region)} | ![](${badgeUrl(p.id)}) |`
    );
    return [`## ${emoji} ${title}`, "", "| Provider | Free tier in one line | Key · Card | Trains | Commercial | Hosting | Status |", "|:--|:--|:--|:--|:--|:--|:--|", ...rows, ""].join("\n");
  };

  return `<div align="center">

<a href="https://github.com/${REPO}"><img src="media/banner.svg" alt="Awesome Free AI APIs" width="100%"></a>

**Every AI API with a *permanent* free tier: checked against official docs, re-checked daily, with the data-policy fine print.**

[![Awesome](https://awesome.re/badge-flat2.svg)](https://awesome.re)
![Providers](https://img.shields.io/badge/providers-${data.providers.length}-8b5cf6?style=flat-square)
[![Live checks](https://img.shields.io/endpoint?url=${encodeURIComponent(`${RAW}/badges/_summary.json`)}&style=flat-square)](docs/verification.md)
[![License: CC0](https://img.shields.io/badge/license-CC0--1.0-lightgrey?style=flat-square)](LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/${REPO}?style=flat-square&color=f59e0b)](https://github.com/${REPO}/stargazers)

</div>

- **Primary sources only.** Every number links to the provider's own pricing, rate-limit or terms page. Click a provider for its limits, models and sources.
- **Checked every day.** A GitHub Action calls each API or pings its docs, and the status column goes red when something breaks.
- **The fine print is a column.** Does the free tier train on your prompts? Is commercial use allowed? Is a DPA offered? Where is it hosted?

Only tiers that renew (per day or per month) for as long as the account exists are listed. One-time credits and trials are in the [Graveyard](docs/graveyard.md).

## Contents

${CATEGORIES.filter(([c]) => providersIn(data, c).length).map(([c, t, e]) => `- [${e} ${t}](${anchor(e + " " + t)}) <sub>${providersIn(data, c).length}</sub>`).join("\n")}
- More: [☠️ Graveyard](docs/graveyard.md) <sub>${data.graveyard.length}</sub> · [🧾 Compliance matrix](docs/compliance.md) · [⚙️ How verification works](docs/verification.md) · [🙋 Help wanted](docs/help-wanted.md)

## Quick picks

| If you want… | Start with |
|:--|:--|
| The most generous general-purpose chat API | ${P("google-gemini")} (trains on free-tier prompts outside EEA/UK/CH) |
| Speed, and no training on your data | ${P("groq")} |
| Many open models behind one key | ${P("openrouter", "OpenRouter")} |
| No signup and no key | ${P("ovhcloud-ai-endpoints")}, ${P("llm7")}, ${P("kilo-gateway")}, ${P("pollinations")} |
| EU hosting | ${P("ovhcloud-ai-endpoints")} (France), ${P("mistral", "Mistral")} (training is opt-out) |

## Legend

| Symbol | Meaning |
|:--|:--|
| 🔑 Yes · 🔓 None | API key required · works anonymously |
| 💳 Yes · 🟢 No | Credit card required · not required |
| 🔴 Yes · 🟡 Opt-out · 🟢 No · ⚪ Unclear | Whether free-tier traffic trains the provider's models (*Trains*), and whether commercial use is allowed (*Commercial*) |
| ![](https://img.shields.io/badge/status-live-brightgreen) ![](https://img.shields.io/badge/status-docs%20ok-green) ![](https://img.shields.io/badge/status-down-red) | Real API call succeeded · docs reachable, no API probe · probe failed ([details](docs/verification.md)) |

${CATEGORIES.map(catTable).filter(Boolean).join("\n")}
## More

- [☠️ Graveyard](docs/graveyard.md): ${data.graveyard.length} APIs people expect to be free that aren't (retired, one-time credits, paid-only).
- [🧾 Compliance matrix](docs/compliance.md): training, commercial use, DPA, hosting and retention for all ${data.providers.length} providers in one table.
- [⚙️ How verification works](docs/verification.md): what the daily bot checks, and what the badges mean.
- [🙋 Help wanted](docs/help-wanted.md): ${(data.unresolved || []).length} facts we could not confirm from an official page.
- Machine-readable: [\`data/providers.json\`](data/providers.json), schema in [\`data/schema.json\`](data/schema.json). This README and everything under \`docs/\` are generated from it.
- Related lists: [mnfst/awesome-free-llm-apis](https://github.com/mnfst/awesome-free-llm-apis), [cheahjs/free-llm-api-resources](https://github.com/cheahjs/free-llm-api-resources), [sindresorhus/awesome](https://github.com/sindresorhus/awesome). This dataset was built independently.

## Contributing

Know a permanent free tier that's missing, or a limit that changed? See [CONTRIBUTING.md](CONTRIBUTING.md). The bar is one rule: link the official page that states the number.

## License

[CC0 1.0](LICENSE), public domain. Provider names belong to their owners; this project is not affiliated with any of them. Data is best-effort: confirm limits in your own console before you depend on them.

<div align="center"><sub>Made in Israel 🇮🇱 by <a href="https://github.com/IdoY12">Ido Yahav</a>. If this saved you a signup, a ⭐ helps others find it.</sub></div>
`;
}

/* ---------- entry point ---------- */
export function render(data, status = null) {
  const files = {};
  files["README.md"] = readme(data);
  for (const p of data.providers) files[providerPath(p.id)] = providerPage(p, status);
  files["docs/graveyard.md"] = graveyardPage(data);
  files["docs/compliance.md"] = compliancePage(data);
  files["docs/help-wanted.md"] = helpWantedPage(data);
  files["docs/verification.md"] = verificationPage(data, status);
  for (const k of Object.keys(files)) files[k] = files[k].replace(/\n{3,}/g, "\n\n");
  return files;
}
