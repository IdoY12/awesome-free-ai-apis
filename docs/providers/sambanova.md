# 🇺🇸 SambaNova Cloud

[← All providers](../../README.md#-text--chat-llms) · 💬 Text & chat LLMs

![status](https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2FIdoY12%2Fawesome-free-ai-apis%2Fmain%2Fbadges%2Fsambanova.json&cacheSeconds=3600) <sub>live: skipped · docs: ok</sub> <sub>🟢 verified · last verified 2026-09-26</sub>

> **20 RPM · 20 RPD · 200K TPD per model (DeepSeek-V3.x, Llama 3.3 70B, gpt-oss-120b, Gemma 4)**

Rate-limits page still lists a 'Free Tier' with 20 RPM, 20 RPD and 200,000 tokens/day per model. Developer tier requires linking a payment method.

**Website:** <https://cloud.sambanova.ai/>  
**Get a key:** <https://cloud.sambanova.ai/apis>  
**Base URL:** `https://api.sambanova.ai/v1` · OpenAI-compatible: ✅

| API key | Credit card | Trains on your data | Commercial use | DPA / GDPR | Hosting |
|:--|:--|:--|:--|:--|:--|
| 🔑 Yes | 🟢 No | 🟢 No | ⚪ Unclear | ⚪ Unclear | US |

## Limits

Free tier per model: 20 RPM, 20 RPD, 200,000 TPD (DeepSeek-V3.1, Meta-Llama-3.3-70B-Instruct, gpt-oss-120b; preview DeepSeek-V3.2, gemma-4-31B-it). Developer tier: 60 RPM / 12,000 RPD (Llama 3.3 70B: 240 RPM / 48,000 RPD), 20M tokens/day across models.

## Models

| Model | ID | Context | Max out | Modality | Tools | JSON | Vision | Reason | Rate limit |
|:--|:--|--:|--:|:--|:-:|:-:|:-:|:-:|:--|
| DeepSeek-V3.1 | `DeepSeek-V3.1` | — | — | text | · | · | — | ✅ | 20 RPM / 20 RPD / 200K TPD |
| Meta-Llama-3.3-70B-Instruct | `Meta-Llama-3.3-70B-Instruct` | — | — | text | ✅ | · | — | — | 20 RPM / 20 RPD / 200K TPD |
| gpt-oss-120b | `gpt-oss-120b` | — | — | text | ✅ | · | — | ✅ | 20 RPM / 20 RPD / 200K TPD |
| DeepSeek-V3.2 (preview) | `DeepSeek-V3.2` | — | — | text | · | · | — | ✅ | 20 RPM / 20 RPD / 200K TPD |
| Gemma 4 31B IT (preview) | `gemma-4-31B-it` | — | — | text | · | · | · | · | 20 RPM / 20 RPD / 200K TPD |

<sub>Tools = tool calling · JSON = structured output · Vision = image input · Reason = reasoning model. ✅ documented · — no · · unknown.</sub>

## Fine print

- **Training:** Terms of Service define Service Usage Data as 'any data (but not Customer Content)…' — Customer Content is excluded from usage data.
- **Commercial use:** No restriction found; docs: 'Preview models ... are offered as early access models primarily for trial purposes'.
- **DPA / GDPR:** No DPA link on legal page; privacy policy references SCCs for EEA transfers.
- **Hosting:** US ('As SambaNova is located in the United States, your Personal Information needs to be transferred to the United States')
- **Notes:** Only 20 requests/day per model — effectively a smoke-test tier. Some third-party lists claim SambaNova discontinued free access; the official rate-limit page still documents the Free tier rows as of today, so it is included with that caveat. MiniMax-M2.7 is Developer-tier only.

## Official sources

- [Rate limits policy](https://docs.sambanova.ai/docs/en/models/rate-limits) <sub>2026-09-26</sub>
- [Developer tier launch blog ($5 credit expires in 3 months — separate from the Free tier rows)](https://sambanova.ai/blog/sambanova-cloud-developer-tier-is-live) <sub>2026-09-26</sub>
- [SambaCloud Terms of Service](https://sambanova.ai/cloud-end-user-license-agreement) <sub>2026-09-26</sub>
- [SambaNova Privacy Policy](https://sambanova.ai/privacy-policy) <sub>2026-09-26</sub>

---

<sub>Generated from [`data/providers.json`](../../data/providers.json). Edit the data, not this file.</sub>
