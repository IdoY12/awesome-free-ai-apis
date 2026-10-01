/**
 * Maps one provider's check results to a shields.io "endpoint" badge.
 * Format: https://shields.io/badges/endpoint-badge
 */
export function badge(live, docs) {
  const map = {
    up: ["live", "brightgreen"],
    down: ["down", "red"],
    auth: ["auth error", "orange"],
    skipped: ["unchecked", "lightgrey"],
    "n/a": ["docs only", "lightgrey"],
  };
  let [message, color] = map[live.state] || ["unknown", "lightgrey"];
  if (live.state === "n/a" || live.state === "skipped") {
    if (docs.state === "ok") [message, color] = ["docs ok", "green"];
    else if (docs.state === "broken") [message, color] = ["docs broken", "red"];
  }
  return { schemaVersion: 1, label: "status", message, color };
}

/** Summary badge for the whole run. */
export function summaryBadge(summary) {
  return {
    schemaVersion: 1,
    label: "live checks",
    message: `${summary.live_up} up · ${summary.live_down} down · ${summary.docs_broken} docs broken`,
    color: summary.live_down || summary.docs_broken ? "orange" : "brightgreen",
  };
}
