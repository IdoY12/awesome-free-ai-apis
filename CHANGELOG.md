# Changelog

All notable changes to the dataset. Daily bot commits (status + badges) are not listed.

## Unreleased

- README restructured: one short table per category. Per-provider limits, model tables, notes and sources moved to `docs/providers/<id>.md`; graveyard, compliance matrix, help-wanted list and verification notes moved to `docs/`. No data removed.
- 23 graveyard entries gained an official source link.
- Fixed false "docs broken" badges (prose in `probe.docs_url`); the validator now enforces `maxLength` and bare URLs.
- Verifier: a reasoning model that spends the whole probe budget on reasoning (`content: null`) is no longer reported as down.
- Added unit tests, a weekly link check, a bug-report template and a Code of Conduct.

## 1.0.0 — 2026-09-26

Initial release.

- 79 providers across 11 categories, every entry with official sources and a last-verified date.
- 69 graveyard entries (retired tiers, one-time credits, paid-only) with sources.
- Compliance fields (training on free-tier data, commercial use, DPA, hosting, retention) for every provider.
- Daily live verification via GitHub Actions; shields.io status badges per provider.
- Notable findings vs. previously circulated lists: GitHub Models retired (2026-07-30); Chutes free program ended (2026-03-15); Cerebras has no permanent free tier; Gemini per-model free limits no longer published; Groq Llama 3.x retired (2026-08-16); DeepL API Free discontinued; Brave Search free tier replaced by $5/month credit; Weaviate Cloud sandbox is now "always free".
