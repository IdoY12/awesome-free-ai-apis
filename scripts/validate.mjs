#!/usr/bin/env node
/**
 * Validates data/providers.json against data/schema.json.
 * Zero dependencies: the checks live in scripts/lib/schema.mjs so they can be unit-tested.
 */
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { checkSchema, checkDataset } from "./lib/schema.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const schema = JSON.parse(readFileSync(join(root, "data/schema.json"), "utf8"));
const data = JSON.parse(readFileSync(join(root, "data/providers.json"), "utf8"));

const errors = [...checkSchema(schema, data), ...checkDataset(data)];

if (errors.length) {
  console.error(`✗ ${errors.length} problem(s):\n` + errors.map((e) => "  - " + e).join("\n"));
  process.exit(1);
}
console.log(`✓ data/providers.json valid — ${data.providers.length} providers, ${data.graveyard.length} graveyard entries`);
