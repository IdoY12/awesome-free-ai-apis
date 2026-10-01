# 🇨🇦 Cohere (Trial key)

[← All providers](../../README.md#-text--chat-llms) · 💬 Text & chat LLMs

![status](https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2FIdoY12%2Fawesome-free-ai-apis%2Fmain%2Fbadges%2Fcohere.json&cacheSeconds=3600) <sub>live: skipped · docs: ok</sub> <sub>🟢 verified · last verified 2026-09-26</sub>

> **Trial key: 20 RPM chat, 1,000 API calls/month, all Command models**

'Every Cohere user receives a free, rate-limited trial key.' 'Trial API key usage is free, but limited.' Chat: 20 requests/min; 'Trial keys (and prod keys on newer Chat model variants) are limited to 1,000 API calls a month.'

**Website:** <https://cohere.com/>  
**Get a key:** <https://dashboard.cohere.com/api-keys>  
**Base URL:** `https://api.cohere.com/v2` · OpenAI-compatible: 🟡 partial

| API key | Credit card | Trains on your data | Commercial use | DPA / GDPR | Hosting |
|:--|:--|:--|:--|:--|:--|
| 🔑 Yes | 🟢 No | 🔴 Yes | ⚪ Unclear | 🟢 Yes | US (GCP) |

## Limits

Chat (all Command models): 20 req/min trial; 1,000 API calls/month. Embed 2,000 inputs/min (images 5/min); Rerank 10 req/min; Tokenize 100 req/min; Audio transcriptions 5 req/min; default 500 req/min.

## Models

| Model | ID | Context | Max out | Modality | Tools | JSON | Vision | Reason | Rate limit |
|:--|:--|--:|--:|:--|:-:|:-:|:-:|:-:|:--|
| Command A+ | `command-a-plus-05-2026` | 128K | 64K | text+image -> text | ✅ | ✅ | ✅ | ✅ | 20 RPM; 1,000 calls/month |
| Command A | `command-a-03-2025` | 256K | 8K | text | ✅ | ✅ | — | — | 20 RPM; 1,000 calls/month |
| Command A Reasoning | `command-a-reasoning-08-2025` | 256K | 32K | text | ✅ | ✅ | — | ✅ | 20 RPM; 1,000 calls/month |
| Command A Vision | `command-a-vision-07-2025` | 128K | 8K | text+image -> text | · | · | ✅ | — | 20 RPM; 1,000 calls/month |
| Command A Translate | `command-a-translate-08-2025` | 8K | 8K | text | — | — | — | — | 20 RPM; 1,000 calls/month |
| Command R7B | `command-r7b-12-2024` | 128K | 4K | text | ✅ | ✅ | — | · | 20 RPM; 1,000 calls/month |
| Command R+ / Command R | `command-r-plus-08-2024, command-r-08-2024` | 128K | 4K | text | ✅ | ✅ | — | — | 20 RPM; 1,000 calls/month |
| North Mini Code | `north-mini-code-1-0` | 256K | 64K | text (code) | ✅ | · | — | · | 20 RPM trial |

<sub>Tools = tool calling · JSON = structured output · Vision = image input · Reason = reasoning model. ✅ documented · — no · · unknown.</sub>

## Fine print

- **Training:** Privacy Policy: trial inputs/outputs may be used 'to conduct research and development'; trial users are told not to submit personal information. The dashboard opt-out is documented only under Enterprise Data Commitments for paying customers.
- **Commercial use:** No non-commercial clause found; Terms of Use forbid 'personal, family or household purposes' only; docs describe trial keys as evaluation keys.
- **DPA / GDPR:** On request: 'Contact privacy@cohere.com if you are a SaaS Platform customer and need a Data Processing Addendum'; Privacy Policy: 'Enterprise Users ... can request a DPA'.
- **Retention:** 'We automatically delete logged prompts and generations after 30 days' (Enterprise Data Commitments); zero data retention available on approval
- **Hosting:** US (GCP) per privacy policy ('cloud infrastructure provided by GCP in the United States')
- **Alt endpoint:** OpenAI-compatible: https://api.cohere.ai/compatibility/v1
- **Notes:** earlier circulated lists's 'non-commercial use only' claim could not be confirmed on the fetched official pages (may be in the ToS).

## Model notes

- **Command A+:** MoE; production key = contact sales.
- **Command R+ / Command R:** Older generation.
- **North Mini Code:** Listed in the rate-limit table; also on OpenRouter as cohere/north-mini-code:free.

## Official sources

- [Different types of API keys and rate limits](https://docs.cohere.com/docs/rate-limits) <sub>2026-09-26</sub>
- [Cohere FAQs](https://docs.cohere.com/docs/cohere-faqs) <sub>2026-09-26</sub>
- [Going live](https://docs.cohere.com/docs/going-live) <sub>2026-09-26</sub>
- [Models](https://docs.cohere.com/docs/models) <sub>2026-09-26</sub>
- [cohere.com/terms-of-use](https://cohere.com/terms-of-use) <sub>2026-09-26</sub>
- [Cohere Privacy Policy](https://cohere.com/privacy) <sub>2026-09-26</sub>
- [Cohere Enterprise Data Commitments](https://cohere.com/enterprise-data-commitments) <sub>2026-09-26</sub>
- [Cohere Security](https://cohere.com/security) <sub>2026-09-26</sub>

---

<sub>Generated from [`data/providers.json`](../../data/providers.json). Edit the data, not this file.</sub>
