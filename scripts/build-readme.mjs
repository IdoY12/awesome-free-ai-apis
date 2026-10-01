#!/usr/bin/env node
/**
 * Writes README.md and everything under docs/ from data/providers.json
 * (+ data/status.json when present). All of it is generated: edit the JSON,
 * then `npm run build`. The rendering itself lives in scripts/lib/render.mjs.
 */
import { readFileSync, writeFileSync, existsSync, mkdirSync, readdirSync, rmSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { render } from "./lib/render.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const data = JSON.parse(readFileSync(join(root, "data/providers.json"), "utf8"));
const statusPath = join(root, "data/status.json");
const status = existsSync(statusPath) ? JSON.parse(readFileSync(statusPath, "utf8")) : null;

const files = render(data, status);

// Remove pages of providers that no longer exist, so docs/providers/ always mirrors the dataset.
const providersDir = join(root, "docs/providers");
if (existsSync(providersDir)) {
  for (const name of readdirSync(providersDir)) {
    if (name.endsWith(".md") && !(`docs/providers/${name}` in files)) rmSync(join(providersDir, name));
  }
}

for (const [path, content] of Object.entries(files)) {
  mkdirSync(dirname(join(root, path)), { recursive: true });
  writeFileSync(join(root, path), content);
}

console.log(
  `${Object.keys(files).length} files written — README.md, ${data.providers.length} provider pages, 4 docs pages` +
    ` (${data.providers.length} providers, ${data.graveyard.length} graveyard entries${status ? "" : ", no status.json yet"})`
);
