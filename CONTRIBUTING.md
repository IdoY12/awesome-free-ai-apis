# Contributing

Thanks for helping keep this list accurate. The whole project rests on one rule:

> **Every number links to the official page that states it.** Blog posts, Reddit threads, screenshots and "I tried it and it worked" are leads, not sources.

## What qualifies

A provider belongs in the main list only if its free tier is **permanent** — an allowance that renews every day, week or month for as long as the account exists.

| ✅ Qualifies | ❌ Goes to the Graveyard instead |
|:--|:--|
| "1,000 requests per day", "10,000 credits/month", "$5 credit every month" | One-time sign-up credits ("$10 to get started") |
| Anonymous / keyless endpoints with published rate limits | 14/30/90-day trials, "free during beta", "free until <date>" |
| Free tiers that require a card but never charge it (flagged 💳) | "Free" tiers that need a paid plan or a minimum top-up to unlock |

The Graveyard is a first-class part of the list — adding an entry there is just as valuable as adding a provider.

## How to add or update a provider

The README is **generated**. Never edit it by hand; edit `data/providers.json`.

1. Fork and clone.
2. Add or edit the entry in `data/providers.json`. Copy an existing entry of the same `category` as a template; `data/schema.json` documents every field.
3. Fill in `sources` with the official URLs you read (rate-limit page, pricing page, terms, privacy policy) and today's date in `accessed` / `last_verified`.
4. Set `confidence`:
   - `verified` — every key number comes from an official page;
   - `partial` — the provider does not publish some numbers (say so in `notes`);
   - `community` — you had to rely on a forum/staff statement (link it).
5. Set the policy fields honestly. `"unclear"` is a valid, useful answer; guessing is not.
6. If the API can be probed without a key, add a `probe` (see existing keyless examples: `ovhcloud-ai-endpoints`, `llm7`, `openrouter`). Never commit a key.
7. Run:

   ```bash
   npm run validate   # schema + sanity checks
   npm test           # unit tests for the validator and badge logic
   npm run build      # regenerates README.md
   ```

8. Open a PR. The template asks for the source links; CI re-runs validation and checks that the README matches the data.

## Field cheat-sheet

| Field | Meaning |
|:--|:--|
| `free_tier.headline` | One line, ≤160 chars, the numbers a developer scans for. Appears in the tables. |
| `free_tier.limits` | Full published limits, with units (RPM/RPD/TPM/TPD, chars/month, credits/month…). |
| `policy.trains_on_your_data` | For **free-tier API** traffic specifically: `yes` / `no` / `opt-out` / `unclear`. Quote the clause in `training_note`. |
| `policy.commercial_use` | Whether free-tier output may be used commercially / in production. |
| `policy.gdpr_dpa` | Whether a DPA is offered (publicly or on request). |
| `region` | Short label for tables (`US`, `EU 🇫🇷 Gravelines`, `Varies (upstream)`…); put the full statement in `hosting_regions`. |
| `probe` | How the daily bot checks it: `openai_models`, `openai_chat`, `http`, or `docs` (page ping only). |

## Reporting a change you can't fully verify

Open an issue with the "Limit changed / provider update" template. Partial evidence (a console screenshot, an email from support) is welcome there — we'll mark the entry `partial` or move it to **Help wanted** until an official page confirms it.

## Style

- Model IDs exactly as the API expects them (`openai/gpt-oss-120b`, not "GPT OSS").
- Numbers as the provider writes them; convert audio-seconds → hours etc. only in `headline`, and show the math in `limits`.
- English only in the dataset. Non-English official quotes may be included verbatim with a short gloss.
- No marketing adjectives. "Fast", "powerful" and "best" are for the provider's homepage, not ours.

## Code of conduct

Be kind, assume good faith, cite sources. Disagreements about whether something counts as "permanent" get settled by the provider's own wording.
