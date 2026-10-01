/**
 * Minimal JSON Schema checker: the subset of draft-07 that data/schema.json uses
 * (type, required, enum, pattern, maxLength, properties, items, minItems, $ref).
 * Returns a list of human-readable problems; an empty list means the value is valid.
 */
const typeOf = (v) =>
  v === null ? "null" : Array.isArray(v) ? "array" : Number.isInteger(v) ? "integer" : typeof v;

export function checkSchema(schema, value) {
  const errors = [];
  const resolve = (ref) => ref.replace(/^#\//, "").split("/").reduce((o, k) => o[k], schema);

  function visit(node, value, path) {
    if (node.$ref) node = { ...resolve(node.$ref), ...node, $ref: undefined };
    if (node.type) {
      const allowed = [].concat(node.type);
      const t = typeOf(value);
      const ok = allowed.some((a) => a === t || (a === "number" && t === "integer"));
      if (!ok) return errors.push(`${path}: expected ${allowed.join("|")}, got ${t}`);
    }
    if (node.enum && !node.enum.includes(value)) errors.push(`${path}: "${value}" not in [${node.enum.join(", ")}]`);
    if (node.pattern && typeof value === "string" && !new RegExp(node.pattern).test(value))
      errors.push(`${path}: "${value}" does not match ${node.pattern}`);
    if (node.maxLength != null && typeof value === "string" && [...value].length > node.maxLength)
      errors.push(`${path}: ${[...value].length} characters, max ${node.maxLength}`);
    if (node.required && value && typeof value === "object")
      for (const k of node.required) if (!(k in value)) errors.push(`${path}: missing required "${k}"`);
    if (node.properties && value && typeof value === "object")
      for (const [k, sub] of Object.entries(node.properties)) if (k in value) visit(sub, value[k], `${path}.${k}`);
    if (node.items && Array.isArray(value)) {
      if (node.minItems != null && value.length < node.minItems) errors.push(`${path}: needs at least ${node.minItems} item(s)`);
      value.forEach((v, i) => visit(node.items, v, `${path}[${i}]`));
    }
  }

  visit(schema, value, "$");
  return errors;
}

/** Dataset rules that a schema cannot express. */
export function checkDataset(data) {
  const errors = [];
  const ids = new Set();
  for (const p of data.providers) {
    if (ids.has(p.id)) errors.push(`duplicate provider id "${p.id}"`);
    ids.add(p.id);
    if (p.category === "text_llm" && !(p.models?.length)) errors.push(`${p.id}: text_llm provider needs at least one model row`);
    if (p.probe.type !== "docs" && !p.probe.url) errors.push(`${p.id}: probe.url required for probe.type=${p.probe.type}`);
    if (p.probe.type !== "docs" && !p.probe.auth) errors.push(`${p.id}: probe.auth required for probe.type=${p.probe.type}`);
    if (p.probe.type === "openai_chat" && !p.probe.model) errors.push(`${p.id}: probe.model required for openai_chat`);
  }
  return errors;
}
