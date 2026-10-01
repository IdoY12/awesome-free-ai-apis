# 🇮🇱 Aion Labs

[← All providers](../../README.md#-text--chat-llms) · 💬 Text & chat LLMs

![status](https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2FIdoY12%2Fawesome-free-ai-apis%2Fmain%2Fbadges%2Faion-labs.json&cacheSeconds=3600) <sub>live: skipped · docs: ok</sub> <sub>🟢 verified · last verified 2026-09-26</sub>

> **15 RPM · 20K TPM · 20K tokens/day; Israeli lab, reasoning + roleplay models**

Free tier ('Default on signup'): 15 RPM, 20,000 TPM, 20,000 tokens/day. Pricing page: 'A daily credit allowance to try agent jobs, the API, and browser chat. No card required.' 'Once reached, a tier is never reduced.'

**Website:** <https://www.aionlabs.ai/>  
**Get a key:** <https://www.aionlabs.ai/app/api-keys/>  
**Base URL:** `https://api.aionlabs.ai/v1` · OpenAI-compatible: ✅

| API key | Credit card | Trains on your data | Commercial use | DPA / GDPR | Hosting |
|:--|:--|:--|:--|:--|:--|
| 🔑 Yes | 🟢 No | ⚪ Unclear | 🟢 Yes | ⚪ Unclear | Not stated |

## Limits

Free: 15 RPM / 20,000 TPM / 20,000 tokens per day. Tier 1 (any top-up): 50 RPM / 1M TPM / unlimited daily; up to Tier 5 ($1,000 lifetime): 1,000 RPM / 20M TPM.

## Models

| Model | ID | Context | Max out | Modality | Tools | JSON | Vision | Reason | Rate limit |
|:--|:--|--:|--:|:--|:-:|:-:|:-:|:-:|:--|
| Aion 3.5 | `aion-labs/aion-3.5` | — | — | text | · | · | · | · | free tier limits |
| Aion 3.5 Mini | `aion-labs/aion-3.5-mini` | — | — | text | · | · | · | · | free tier limits |
| Aion 3.0 / 3.0 Mini | `aion-labs/aion-3.0, aion-labs/aion-3.0-mini` | — | — | text | · | · | · | · | free tier limits |
| Aion 2.0 | `aion-labs/aion-2.0` | — | — | text | · | · | · | · | free tier limits |
| Aion RP Llama 3.1 8B | `aion-labs/aion-rp-llama-3.1-8b` | — | — | text | · | · | — | — | free tier limits |

<sub>Tools = tool calling · JSON = structured output · Vision = image input · Reason = reasoning model. ✅ documented · — no · · unknown.</sub>

## Fine print

- **Training:** Privacy: 'we do not review the content of your prompts or generated outputs'; prompts 'are transmitted to one or more third-party providers for processing'. No statement on training by Aion or upstream.
- **Commercial use:** ToS 5.1 grants license 'in commercial contexts such as building and operating products and services using the Aion Labs API' (no free-tier distinction).
- **DPA / GDPR:** GDPR rights acknowledged; no DPA found.
- **Hosting:** not stated (company in Poland; 'may be transferred to, stored, and processed in countries' with different laws)
- **Notes:** Matches earlier circulated lists; adds aion-3.5 / 3.5-mini.

## Model notes

- **Aion 3.5:** Paid price $3/$6 per M; free tier not stated to exclude any model.
- **Aion RP Llama 3.1 8B:** Roleplay model.

## Official sources

- [Aion Labs rate limits](https://www.aionlabs.ai/docs/rate-limits/) <sub>2026-09-26</sub>
- [Aion Labs pricing page (no card required)](https://www.aionlabs.ai/pricing/) <sub>2026-09-26</sub>
- [Aion Labs docs (base URL, OpenAI compatibility)](https://www.aionlabs.ai/docs/) <sub>2026-09-26</sub>
- [Model prices](https://www.aionlabs.ai/docs/pricing/) <sub>2026-09-26</sub>
- [Aion Labs Terms](https://www.aionlabs.ai/terms) <sub>2026-09-26</sub>
- [Aion Labs Privacy](https://www.aionlabs.ai/privacy) <sub>2026-09-26</sub>

---

<sub>Generated from [`data/providers.json`](../../data/providers.json). Edit the data, not this file.</sub>
