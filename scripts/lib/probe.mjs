/**
 * Interprets the body of a successful (HTTP 200) /chat/completions response.
 *
 * The probe asks for only a few tokens. A reasoning model can spend all of
 * them on its reasoning and return `content: null` with the text in
 * `reasoning_content` (or `reasoning`) and `finish_reason: "length"`.
 * That is a working endpoint, not an outage.
 */
export function classifyChat(body, model) {
  const choice = body?.choices?.[0];
  const msg = choice?.message;
  if (!msg || typeof msg !== "object") return { state: "down", detail: "no completion in response" };
  if (msg.content != null) return { state: "up", detail: `chat ok (${model})` };
  const reasoned = msg.reasoning_content != null || msg.reasoning != null;
  if (reasoned || choice.finish_reason === "length") {
    return { state: "up", detail: `chat ok (${model}, reasoning only)` };
  }
  return { state: "down", detail: "no completion in response" };
}

/**
 * Decides whether a live-probe result is worth one more attempt.
 *
 * A single timeout, connection reset or 5xx says more about the network at
 * the moment of the probe than about the provider. The daily run has no
 * second chance, so one such miss used to flip a badge to "down" for a day.
 */
export function isTransient(result) {
  if (!result || result.state !== "down") return false;
  const d = String(result.detail || "");
  return d === "timeout" || /^HTTP 5\d\d$/.test(d) || /fetch failed|ECONN|ENOTFOUND|EAI_AGAIN|socket/i.test(d);
}

/**
 * Runs `probe` and, if the result looks transient, waits `delayMs` and runs
 * it once more. The second result wins either way; `detail` notes the retry
 * so the status page shows which outages survived two attempts.
 */
export async function probeWithRetry(probe, { delayMs = 2000, sleep = (ms) => new Promise((r) => setTimeout(r, ms)) } = {}) {
  const first = await probe();
  if (!isTransient(first)) return first;
  await sleep(delayMs);
  const second = await probe();
  if (second.state === "down") return { ...second, detail: `${second.detail} (after retry)` };
  return second;
}
