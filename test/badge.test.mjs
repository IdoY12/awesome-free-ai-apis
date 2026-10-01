import { test } from "node:test";
import assert from "node:assert/strict";
import { badge, summaryBadge } from "../scripts/lib/badge.mjs";

const b = (live, docs) => {
  const { message, color } = badge({ state: live }, { state: docs });
  return [message, color];
};

test("a successful API call wins over the docs state", () => {
  assert.deepEqual(b("up", "ok"), ["live", "brightgreen"]);
  assert.deepEqual(b("up", "broken"), ["live", "brightgreen"]);
});

test("failed and unauthorised probes are shown as such", () => {
  assert.deepEqual(b("down", "ok"), ["down", "red"]);
  assert.deepEqual(b("auth", "ok"), ["auth error", "orange"]);
});

test("without an API probe the badge falls back to the docs check", () => {
  assert.deepEqual(b("n/a", "ok"), ["docs ok", "green"]);
  assert.deepEqual(b("skipped", "ok"), ["docs ok", "green"]);
  assert.deepEqual(b("n/a", "broken"), ["docs broken", "red"]);
  assert.deepEqual(b("skipped", "broken"), ["docs broken", "red"]);
});

test("a bot wall on the docs page is not reported as broken", () => {
  assert.deepEqual(b("n/a", "unknown"), ["docs only", "lightgrey"]);
  assert.deepEqual(b("skipped", "unknown"), ["unchecked", "lightgrey"]);
});

test("unknown live states do not crash", () => {
  assert.deepEqual(b("something-new", "ok"), ["unknown", "lightgrey"]);
});

test("badges follow the shields.io endpoint schema", () => {
  assert.deepEqual(Object.keys(badge({ state: "up" }, { state: "ok" })), ["schemaVersion", "label", "message", "color"]);
});

test("summary badge is green only when nothing is down or broken", () => {
  assert.equal(summaryBadge({ live_up: 7, live_down: 0, docs_broken: 0 }).color, "brightgreen");
  assert.equal(summaryBadge({ live_up: 7, live_down: 1, docs_broken: 0 }).color, "orange");
  assert.equal(summaryBadge({ live_up: 7, live_down: 0, docs_broken: 2 }).color, "orange");
  assert.equal(summaryBadge({ live_up: 7, live_down: 0, docs_broken: 2 }).message, "7 up · 0 down · 2 docs broken");
});
