import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { posix } from "node:path";
import { render, providerPath, CATEGORIES } from "../scripts/lib/render.mjs";

const load = (p) => JSON.parse(readFileSync(new URL(`../${p}`, import.meta.url), "utf8"));
const data = load("data/providers.json");
const files = render(data, null);
const readme = files["README.md"];

test("one page per provider plus the four docs pages and the README", () => {
  assert.equal(Object.keys(files).length, data.providers.length + 5);
  for (const p of data.providers) assert.ok(files[providerPath(p.id)], `missing page for ${p.id}`);
  for (const f of ["docs/graveyard.md", "docs/compliance.md", "docs/help-wanted.md", "docs/verification.md"]) assert.ok(files[f], f);
});

test("the README stays short", () => {
  const lines = readme.split("\n").length;
  assert.ok(lines < 300, `README has ${lines} lines`);
  assert.doesNotMatch(readme, /<details>/);
});

test("every provider is linked from the README exactly once in its category table", () => {
  for (const p of data.providers) {
    const rows = readme.split("\n").filter((l) => l.includes(`](${providerPath(p.id)}) |`) && l.includes("![](https://img.shields.io/endpoint"));
    assert.equal(rows.length, 1, p.id);
  }
});

test("every category with providers has a heading that the contents list links to", () => {
  for (const [c, title, emoji] of CATEGORIES) {
    if (!data.providers.some((p) => p.category === c)) continue;
    assert.ok(readme.includes(`\n## ${emoji} ${title}\n`), title);
  }
});

test("relative links in generated files point at files that exist", () => {
  const repoFiles = new Set([...Object.keys(files), "LICENSE", "CONTRIBUTING.md", "data/providers.json", "data/schema.json", "media/banner.svg"]);
  for (const [path, content] of Object.entries(files)) {
    for (const m of content.matchAll(/\]\((?!https?:|#|mailto:)([^)\s]+)\)/g)) {
      const target = posix.normalize(posix.join(posix.dirname(path), m[1].split("#")[0]));
      assert.ok(repoFiles.has(target), `${path} links to ${m[1]} (${target})`);
    }
  }
});

test("nothing is lost: each provider page carries its headline, limits, models and every source", () => {
  for (const p of data.providers) {
    const page = files[providerPath(p.id)];
    assert.ok(page.includes(p.name), `${p.id}: name`);
    for (const s of p.sources) assert.ok(page.includes(`](${s.url})`), `${p.id}: source ${s.url}`);
    for (const m of p.models || []) if (m.id && m.id.length <= 60) assert.ok(page.includes(m.id.replace(/\|/g, "\\|")), `${p.id}: model ${m.id}`);
    assert.ok(page.includes("## Official sources"), `${p.id}: sources heading`);
    if (p.free_tier.limits) assert.ok(page.includes("## Limits"), `${p.id}: limits`);
  }
});

test("graveyard, compliance and help-wanted pages cover every entry", () => {
  for (const g of data.graveyard) assert.ok(files["docs/graveyard.md"].includes(`| ${g.name.replace(/\|/g, "\\|")} |`), g.id);
  for (const p of data.providers) assert.ok(files["docs/compliance.md"].includes(`](providers/${p.id}.md)`), p.id);
  for (const u of data.unresolved || []) assert.ok(files["docs/help-wanted.md"].includes("`" + u.id + "`"), u.id);
});

test("rendering is deterministic", () => {
  assert.deepEqual(render(data, null), files);
});

test("text from the dataset cannot inject HTML tags", () => {
  const d = JSON.parse(JSON.stringify(data));
  d.unresolved = [{ id: "x", what: "only <title> readable", why: "a < b stays as is" }];
  const page = render(d, null)["docs/help-wanted.md"];
  assert.ok(page.includes("only &lt;title> readable"));
  assert.ok(page.includes("a < b stays as is"));
});
