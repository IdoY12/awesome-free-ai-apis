# 🇫🇷 Mistral AI (Experiment plan)

[← All providers](../../README.md#-text--chat-llms) · 💬 Text & chat LLMs

![status](https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2FIdoY12%2Fawesome-free-ai-apis%2Fmain%2Fbadges%2Fmistral.json&cacheSeconds=3600) <sub>live: skipped · docs: unknown</sub> <sub>🟡 partial · last verified 2026-09-26</sub>

> **Experiment plan: all models, phone verification, limits shown in console only; trains by default (opt-out)**

Two free paths: (1) Experiment plan — 'You can try Mistral's API for free with the Experiment plan. All you need is a verified phone number (one phone number per plan). No credit card is required.' 'API requests made under the Experiment plan may be used to train Mistral's models.' Rate limits 'restrictive', shown only at console.mistral.ai/limits. (2) mistral.ai/pricing 'Free' plan ($0) now lists '$10 /mo in API credits' among its features ('Subject to fair usage limits and Mistral's Terms of Service'); expiry/conditions of the monthly credits are not stated.

**Website:** <https://mistral.ai/>  
**Get a key:** <https://console.mistral.ai/api-keys>  
**Base URL:** `https://api.mistral.ai/v1` · OpenAI-compatible: 🟡 partial

| API key | Credit card | Trains on your data | Commercial use | DPA / GDPR | Hosting |
|:--|:--|:--|:--|:--|:--|
| 🔑 Yes · 🪪 Verified phone number (one per plan). | 🟢 No | 🟡 Opt-out | ⚪ Unclear | 🟢 Yes | EU (opt. US) |

## Limits

Not published; docs say 'Please visit https://console.mistral.ai/limits/ for detailed information on the current rate limit and usage tiers for your workspace.' Limits are workspace-level, expressed as requests per second and tokens per minute/month.

## Models

| Model | ID | Context | Max out | Modality | Tools | JSON | Vision | Reason | Rate limit |
|:--|:--|--:|--:|:--|:-:|:-:|:-:|:-:|:--|
| Mistral Medium 3.5 | `mistral-medium-latest` | — | — | multimodal -> text | ✅ | ✅ | ✅ | · | console |
| Mistral Small 4 | `mistral-small-latest` | — | — | multimodal -> text | ✅ | ✅ | ✅ | ✅ | console |
| Mistral Large 3 | `mistral-large-latest` | — | — | multimodal -> text | ✅ | ✅ | ✅ | · | console |
| Ministral 3 (14B / 8B / 3B) | `ministral-14b-latest, ministral-8b-latest, ministral-3b-lat…` | — | — | text | ✅ | ✅ | · | · | console |
| Codestral | `codestral-latest` | — | — | text (code) | · | · | — | — | console |

<sub>Tools = tool calling · JSON = structured output · Vision = image input · Reason = reasoning model. ✅ documented · — no · · unknown.</sub>

## Fine print

- **Training:** Free mode (Studio): 'we may use your data (input and output) to train our artificial intelligence models'; users 'have the right to opt out at any time' via account control. Commercial ToS 4.2: no training except when not opted out on opt-in-by-default products.
- **Commercial use:** No prohibition found; docs: free tier 'designed to allow you to try and explore our API' and 'For actual projects and production use, we recommend upgrading to a higher tier.'
- **DPA / GDPR:** Public Data Processing Addendum at legal.mistral.ai; Commercial ToS 12.3: 'the Data Processing Agreement ... will apply between the Parties' when Mistral processes personal data on Mistral infrastructure.
- **Retention:** Input/Output kept 'for thirty (30) rolling days to monitor abuse (unless zero data retention is activated)'; Agents API data kept until account termination
- **Hosting:** EU by default ('your data is hosted in the European Union'); US endpoint optional ('explicitly use our US API endpoint')
- **Notes:** Change vs. earlier lists: no official statement of '500K TPM / 1 RPS' — those numbers are not on any official page; the plan is now called 'Experiment' and requires phone verification. Model IDs above use the -latest aliases documented by Mistral; exact context lengths not on the overview page.

## Model notes

- **Mistral Medium 3.5:** Docs do not state which models the Experiment plan excludes; help center says the Scale plan adds 'access to additional features' incl. frontier models.
- **Mistral Small 4:** Apache 2.0 open-weight; hybrid instruct/reasoning/coding.
- **Mistral Large 3:** Apache 2.0.
- **Ministral 3 (14B / 8B / 3B):** Apache 2.0.
- **Codestral:** v25.08.

## Official sources

- [How can I try the API for free with the Experiment plan?](https://help.mistral.ai/en/articles/450104-how-can-i-try-the-api-for-free-with-the-experiment-plan) <sub>2026-09-26</sub>
- [Rate limits and usage tiers](https://docs.mistral.ai/deployment/laplateforme/tier) <sub>2026-09-26</sub>
- [Do you use my user data to train your models?](https://help.mistral.ai/en/articles/323757-do-you-use-my-user-data-to-train-your-artificial-intelligence-models) <sub>2026-09-26</sub>
- [Models overview](https://docs.mistral.ai/getting-started/models/models_overview) <sub>2026-09-26</sub>
- [mistral.ai/pricing/](https://mistral.ai/pricing/) <sub>2026-09-26</sub>
- [Mistral Privacy Policy](https://legal.mistral.ai/terms/privacy-policy) <sub>2026-09-26</sub>
- [Mistral Commercial Terms of Service](https://legal.mistral.ai/terms/commercial-terms-of-service) <sub>2026-09-26</sub>
- [Mistral Data Processing Addendum](https://legal.mistral.ai/terms/data-processing-addendum) <sub>2026-09-26</sub>
- [Help: Do you use my user data to train your AI models?](https://help.mistral.ai/en/articles/347617-do-you-use-my-user-data-to-train-your-artificial-intelligence-models) <sub>2026-09-26</sub>
- [Help: Where do you store my data?](https://help.mistral.ai/en/articles/347629-where-do-you-store-my-data-or-my-organization-s-data) <sub>2026-09-26</sub>
- [Mistral docs: tiers](https://docs.mistral.ai/deployment/laplateforme/tier/) <sub>2026-09-26</sub>

---

<sub>Generated from [`data/providers.json`](../../data/providers.json). Edit the data, not this file.</sub>
