/**
 * Pure helpers for the weekly link check (scripts/check-links.mjs).
 */

/** Every URL the dataset cites, de-duplicated, with the entries that use it. */
export function collectLinks(data) {
  const byUrl = new Map();
  const add = (url, where) => {
    if (!url) return;
    if (!byUrl.has(url)) byUrl.set(url, []);
    byUrl.get(url).push(where);
  };
  for (const p of data.providers) {
    add(p.website, `${p.id} (website)`);
    add(p.api_key_url, `${p.id} (api_key_url)`);
    for (const s of p.sources || []) add(s.url, `${p.id} (source)`);
  }
  for (const g of data.graveyard || []) for (const s of g.sources || []) add(s.url, `graveyard/${g.id} (source)`);
  return [...byUrl].map(([url, usedBy]) => ({ url, usedBy }));
}

/**
 * Turns an HTTP status into a verdict.
 * 401/403/429 usually mean a login wall or bot protection, not a dead page, so they are
 * "unknown" rather than "broken" — the same rule the daily verifier applies to docs pages.
 */
export function classify(status) {
  if (status >= 200 && status < 400) return "ok";
  if ([401, 403, 429].includes(status)) return "unknown";
  if (status >= 500) return "unknown"; // server-side hiccup; a 5xx on one run is not evidence the page is gone
  return "broken";
}

/** Markdown report for the job summary. */
export function report(results) {
  const broken = results.filter((r) => r.state === "broken");
  const unknown = results.filter((r) => r.state === "unknown");
  const ok = results.length - broken.length - unknown.length;
  const row = (r) => `| ${r.url} | ${r.detail} | ${r.usedBy.join(", ")} |`;
  const table = (rows) => ["| URL | Result | Used by |", "|:--|:--|:--|", ...rows.map(row)].join("\n");
  const out = [`## Link check`, ``, `${results.length} links: ${ok} ok, ${broken.length} broken, ${unknown.length} could not be checked.`];
  if (broken.length) out.push(``, `### Broken`, ``, table(broken));
  if (unknown.length) out.push(``, `<details><summary>Could not be checked (${unknown.length})</summary>`, ``, table(unknown), ``, `</details>`);
  return out.join("\n") + "\n";
}
