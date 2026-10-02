#!/usr/bin/env python3
"""Check .github/ISSUE_TEMPLATE/*.yml against GitHub's issue-form schema.

GitHub drops an invalid form from the "New issue" chooser without telling
anyone, so a typo here is invisible until a contributor can't find the form.
The classic case: a comma inside a flow-style label,

    attributes: { label: The limits, as written on that page }

which YAML reads as two keys ("label" and "as written on that page").

Usage: python3 scripts/check-issue-forms.py   (needs PyYAML)
"""
import glob
import sys

import yaml

TOP_REQUIRED = {"name", "description", "body"}
TOP_ALLOWED = TOP_REQUIRED | {"title", "labels", "assignees", "projects", "type"}

# Allowed keys under `attributes`, per element type.
ATTRIBUTES = {
    "markdown": {"value"},
    "input": {"label", "description", "placeholder", "value"},
    "textarea": {"label", "description", "placeholder", "value", "render"},
    "dropdown": {"label", "description", "multiple", "options", "default"},
    "checkboxes": {"label", "description", "options"},
}
ELEMENT_ALLOWED = {"type", "id", "attributes", "validations"}


def check_form(form):
    """Return a list of problems found in one parsed form."""
    if not isinstance(form, dict):
        return ["file is not a YAML mapping"]

    problems = []
    for key in sorted(TOP_REQUIRED - form.keys()):
        problems.append(f"missing top-level key '{key}'")
    for key in sorted(form.keys() - TOP_ALLOWED):
        problems.append(f"unknown top-level key '{key}'")

    body = form.get("body")
    if not isinstance(body, list) or not body:
        return problems + ["'body' must be a non-empty list"]

    seen_ids, seen_labels = set(), set()
    has_input = False
    for i, el in enumerate(body, 1):
        where = f"body[{i}]"
        if not isinstance(el, dict):
            problems.append(f"{where}: not a mapping")
            continue
        kind = el.get("type")
        if kind not in ATTRIBUTES:
            problems.append(f"{where}: unknown type '{kind}'")
            continue
        if el.get("id"):
            where = f"body[{i}] ({el['id']})"
        for key in sorted(el.keys() - ELEMENT_ALLOWED):
            problems.append(f"{where}: unknown key '{key}'")

        attrs = el.get("attributes")
        if not isinstance(attrs, dict):
            problems.append(f"{where}: 'attributes' must be a mapping")
            continue
        for key in sorted(attrs.keys() - ATTRIBUTES[kind], key=str):
            problems.append(
                f"{where}: unknown attribute '{key}' "
                "(a comma inside an unquoted flow-style value?)"
            )

        if kind == "markdown":
            if not attrs.get("value"):
                problems.append(f"{where}: markdown needs 'value'")
            continue

        has_input = True
        label = attrs.get("label")
        if not isinstance(label, str) or not label.strip():
            problems.append(f"{where}: missing 'label'")
        elif label in seen_labels:
            problems.append(f"{where}: duplicate label '{label}'")
        else:
            seen_labels.add(label)

        el_id = el.get("id")
        if el_id is not None:
            if el_id in seen_ids:
                problems.append(f"{where}: duplicate id '{el_id}'")
            seen_ids.add(el_id)

        if kind in ("dropdown", "checkboxes"):
            options = attrs.get("options")
            if not isinstance(options, list) or not options:
                problems.append(f"{where}: needs a non-empty 'options' list")
            elif kind == "checkboxes":
                for n, opt in enumerate(options, 1):
                    if not isinstance(opt, dict) or not opt.get("label"):
                        problems.append(f"{where}: option {n} needs a 'label'")
            elif len(set(map(str, options))) != len(options):
                problems.append(f"{where}: duplicate options")

    if not has_input:
        problems.append("'body' needs at least one non-markdown element")
    return problems


def main():
    paths = sorted(
        p
        for p in glob.glob(".github/ISSUE_TEMPLATE/*.yml")
        if not p.endswith("/config.yml")
    )
    failed = False
    for path in paths:
        try:
            with open(path, encoding="utf-8") as fh:
                problems = check_form(yaml.safe_load(fh))
        except yaml.YAMLError as err:
            problems = [f"invalid YAML: {err}"]
        for problem in problems:
            print(f"::error file={path}::{problem}")
        print(("FAIL " if problems else "ok   ") + path)
        failed = failed or bool(problems)
    if not paths:
        print("no issue forms found")
    return 1 if failed else 0


if __name__ == "__main__":
    sys.exit(main())
