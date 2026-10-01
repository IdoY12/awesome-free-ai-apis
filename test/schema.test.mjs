import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { checkSchema, checkDataset } from "../scripts/lib/schema.mjs";

const load = (p) => JSON.parse(readFileSync(new URL(`../${p}`, import.meta.url), "utf8"));
const schema = load("data/schema.json");
const data = load("data/providers.json");
const clone = (v) => JSON.parse(JSON.stringify(v));

test("the committed dataset is valid", () => {
  assert.deepEqual(checkSchema(schema, data), []);
  assert.deepEqual(checkDataset(data), []);
});

test("type mismatches are reported with their path", () => {
  const bad = clone(data);
  bad.providers[0].name = 42;
  assert.deepEqual(checkSchema(schema, bad), ["$.providers[0].name: expected string, got integer"]);
});

test("missing required fields are reported", () => {
  const bad = clone(data);
  delete bad.providers[0].last_verified;
  assert.ok(checkSchema(schema, bad).includes('$.providers[0]: missing required "last_verified"'));
});

test("enum values are enforced", () => {
  const bad = clone(data);
  bad.providers[0].confidence = "probably";
  assert.equal(checkSchema(schema, bad).length, 1);
});

test("headline longer than 160 characters is rejected", () => {
  const bad = clone(data);
  bad.providers[0].free_tier.headline = "x".repeat(161);
  assert.deepEqual(checkSchema(schema, bad), ["$.providers[0].free_tier.headline: 161 characters, max 160"]);
});

test("maxLength counts characters, not UTF-16 units", () => {
  const ok = clone(data);
  ok.providers[0].region = "🇫🇷".repeat(20); // 40 code points, 80 UTF-16 units
  assert.deepEqual(checkSchema(schema, ok), []);
});

test("probe.docs_url must be a bare URL", () => {
  const bad = clone(data);
  bad.providers[0].probe.docs_url = "https://example.com/keys (sign in first)";
  assert.equal(checkSchema(schema, bad).length, 1);
});

test("source URLs must be http(s) with no trailing prose", () => {
  const bad = clone(data);
  bad.providers[0].sources[0].url = "ftp://example.com";
  bad.graveyard[0].sources = [{ url: "https://example.com (unofficial)" }];
  assert.equal(checkSchema(schema, bad).length, 2);
});

test("a provider needs at least one source", () => {
  const bad = clone(data);
  bad.providers[0].sources = [];
  assert.deepEqual(checkSchema(schema, bad), ["$.providers[0].sources: needs at least 1 item(s)"]);
});

test("duplicate provider ids are rejected", () => {
  const bad = clone(data);
  bad.providers.push(clone(bad.providers[0]));
  assert.deepEqual(checkDataset(bad), [`duplicate provider id "${data.providers[0].id}"`]);
});

test("text_llm providers need a model row", () => {
  const bad = clone(data);
  const p = bad.providers.find((x) => x.category === "text_llm");
  p.models = [];
  assert.deepEqual(checkDataset(bad), [`${p.id}: text_llm provider needs at least one model row`]);
});

test("API probes need url, auth and (for chat) a model", () => {
  const bad = clone(data);
  bad.providers[0].probe = { type: "openai_chat" };
  assert.equal(checkDataset(bad).length, 3);
});
