import { test } from "node:test";
import assert from "node:assert/strict";
import { classifyChat } from "../scripts/lib/probe.mjs";

const reply = (message, finish_reason = "stop") => ({ choices: [{ message, finish_reason }] });
const state = (body) => classifyChat(body, "m").state;

test("a normal completion is up", () => {
  assert.deepEqual(classifyChat(reply({ role: "assistant", content: "ok" }), "m"), { state: "up", detail: "chat ok (m)" });
  assert.equal(state(reply({ role: "assistant", content: "" })), "up");
});

test("a reasoning model that ran out of tokens before answering is still up", () => {
  assert.equal(state(reply({ role: "assistant", content: null, reasoning_content: "The user" }, "length")), "up");
  assert.equal(state(reply({ role: "assistant", content: null, reasoning: "The user" }, "length")), "up");
  assert.equal(state(reply({ role: "assistant", content: null }, "length")), "up");
  assert.match(classifyChat(reply({ content: null, reasoning_content: "x" }, "length"), "m").detail, /reasoning only/);
});

test("a 200 without a usable choice is down", () => {
  assert.equal(state(null), "down");
  assert.equal(state({}), "down");
  assert.equal(state({ choices: [] }), "down");
  assert.equal(state({ error: { message: "model not found" } }), "down");
  assert.equal(state(reply({ role: "assistant", content: null })), "down");
});

import { isTransient, probeWithRetry } from "../scripts/lib/probe.mjs";

test("only timeouts, 5xx and network errors are transient", () => {
  assert.equal(isTransient({ state: "down", detail: "timeout" }), true);
  assert.equal(isTransient({ state: "down", detail: "HTTP 503" }), true);
  assert.equal(isTransient({ state: "down", detail: "fetch failed" }), true);
  assert.equal(isTransient({ state: "down", detail: "HTTP 404" }), false);
  assert.equal(isTransient({ state: "down", detail: "no completion in response" }), false);
  assert.equal(isTransient({ state: "auth", detail: "HTTP 401" }), false);
  assert.equal(isTransient({ state: "up", detail: "chat ok (m)" }), false);
});

test("a transient miss followed by a success is up, with no retry note", async () => {
  const calls = [];
  const probe = async () => (calls.push(1), calls.length === 1 ? { state: "down", detail: "timeout" } : { state: "up", detail: "HTTP 200" });
  const res = await probeWithRetry(probe, { sleep: async () => {} });
  assert.deepEqual(res, { state: "up", detail: "HTTP 200" });
  assert.equal(calls.length, 2);
});

test("two transient misses stay down and say so", async () => {
  const probe = async () => ({ state: "down", detail: "timeout" });
  const res = await probeWithRetry(probe, { sleep: async () => {} });
  assert.deepEqual(res, { state: "down", detail: "timeout (after retry)" });
});

test("a definite result is not retried", async () => {
  let calls = 0;
  const probe = async () => (calls++, { state: "down", detail: "HTTP 404" });
  const res = await probeWithRetry(probe, { sleep: async () => {} });
  assert.deepEqual(res, { state: "down", detail: "HTTP 404" });
  assert.equal(calls, 1);
});
