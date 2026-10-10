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
