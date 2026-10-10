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
