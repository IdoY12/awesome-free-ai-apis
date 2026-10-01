import { test } from "node:test";
import assert from "node:assert/strict";
import { collectLinks, classify, report } from "../scripts/lib/links.mjs";

const data = {
  providers: [
    { id: "a", website: "https://a.example", api_key_url: "https://a.example/keys", sources: [{ url: "https://a.example/pricing" }] },
    { id: "b", website: "https://b.example", api_key_url: null, sources: [{ url: "https://a.example/pricing" }] },
  ],
  graveyard: [{ id: "c", sources: [{ url: "https://c.example/blog" }] }, { id: "d" }],
};

test("collects website, key page and source URLs from providers and graveyard", () => {
  assert.deepEqual(
    collectLinks(data).map((l) => l.url),
    ["https://a.example", "https://a.example/keys", "https://a.example/pricing", "https://b.example", "https://c.example/blog"]
  );
});

test("a URL cited twice is checked once and lists both users", () => {
  const shared = collectLinks(data).find((l) => l.url === "https://a.example/pricing");
  assert.deepEqual(shared.usedBy, ["a (source)", "b (source)"]);
});

test("status codes map to verdicts", () => {
  assert.equal(classify(200), "ok");
  assert.equal(classify(301), "ok");
  assert.equal(classify(404), "broken");
  assert.equal(classify(410), "broken");
  for (const wall of [401, 403, 429]) assert.equal(classify(wall), "unknown");
  assert.equal(classify(503), "unknown");
});

test("the report lists broken links and folds away unchecked ones", () => {
  const md = report([
    { url: "https://ok.example", usedBy: ["a (source)"], state: "ok", detail: "HTTP 200" },
    { url: "https://gone.example", usedBy: ["b (source)"], state: "broken", detail: "HTTP 404" },
    { url: "https://wall.example", usedBy: ["c (website)"], state: "unknown", detail: "HTTP 403" },
  ]);
  assert.match(md, /3 links: 1 ok, 1 broken, 1 could not be checked\./);
  assert.match(md, /### Broken\n\n\| URL \| Result \| Used by \|\n\|:--\|:--\|:--\|\n\| https:\/\/gone\.example \| HTTP 404 \| b \(source\) \|/);
  assert.match(md, /<details><summary>Could not be checked \(1\)<\/summary>/);
});

test("a clean run has no Broken section", () => {
  assert.doesNotMatch(report([{ url: "https://ok.example", usedBy: ["a"], state: "ok", detail: "HTTP 200" }]), /Broken/);
});
