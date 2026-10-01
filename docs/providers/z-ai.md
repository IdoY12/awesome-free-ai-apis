# 🇨🇳 Z.ai (Zhipu GLM Flash)

[← All providers](../../README.md#-text--chat-llms) · 💬 Text & chat LLMs

![status](https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2FIdoY12%2Fawesome-free-ai-apis%2Fmain%2Fbadges%2Fz-ai.json&cacheSeconds=3600) <sub>live: skipped · docs: ok</sub> <sub>🟡 partial · last verified 2026-09-26</sub>

> **GLM-4.7-Flash, GLM-4.5-Flash, GLM-4.6V-Flash priced Free on the international platform**

Official pricing page lists GLM-4.7-Flash, GLM-4.5-Flash (text) and GLM-4.6V-Flash (vision) as 'Free' for input and output. Release notes describe GLM-4.7-Flash as 'the free-tier version of GLM-4.7'. No rate-limit or concurrency numbers are published for free models.

**Website:** <https://z.ai/>  
**Get a key:** <https://z.ai/manage-apikey/apikey-list> (International platform. China platform: https://open.bigmodel.cn/usercenter/apikeys)  
**Base URL:** `https://api.z.ai/api/paas/v4` · OpenAI-compatible: ✅

| API key | Credit card | Trains on your data | Commercial use | DPA / GDPR | Hosting |
|:--|:--|:--|:--|:--|:--|
| 🔑 Yes | 🟢 No | 🟢 No | ⚪ Unclear | 🟢 Yes | Singapore |

## Limits

Not published for free models (only paid GLM Coding Plan limits are documented). Third-party sources report 1 concurrent request; unverified.

## Models

| Model | ID | Context | Max out | Modality | Tools | JSON | Vision | Reason | Rate limit |
|:--|:--|--:|--:|:--|:-:|:-:|:-:|:-:|:--|
| GLM-4.7-Flash | `glm-4.7-flash` | — | — | text | ✅ | · | — | ✅ | — |
| GLM-4.5-Flash | `glm-4.5-flash` | — | — | text | ✅ | · | — | ✅ | — |
| GLM-4.6V-Flash | `glm-4.6v-flash` | — | — | text+image/video -> text | · | · | ✅ | · | — |

<sub>Tools = tool calling · JSON = structured output · Vision = image input · Reason = reasoning model. ✅ documented · — no · · unknown.</sub>

## Fine print

- **Training:** Terms of Use (API/enterprise): 'We will not use End User Content to develop or improve Services, unless you explicitly agree to such use'. (Individual chat users: Z.ai reserves right to process User Content to improve Services.)
- **Commercial use:** No restriction found for free Flash models on pricing page or terms.
- **DPA / GDPR:** Privacy Policy includes a public 'Data Processing Addendum for API Services' (Z.ai as Data Processor).
- **Retention:** 'The Company do not store any of the content the Customer or its End Users provide or generate'; processed in real time, temporary storage only as needed
- **Hosting:** Singapore ('Company generally provide the Services from Singapore')
- **Alt endpoint:** OpenAI-compatible); https://api.z.ai/api/anthropic (Anthropic-compatible
- **Notes:** Matches the previously circulated figure of model names. GLM-5.3-Flash is NOT free on Z.ai ($0.15/$0.50); only 4.x Flash models are free.

## Model notes

- **GLM-4.7-Flash:** Free. (Cloudflare's copy documents 131,072 context + function calling + reasoning; Z.ai model page returned 404 to the fetcher.)
- **GLM-4.6V-Flash:** Free (vision).

## Official sources

- [Z.ai pricing (Flash models 'Free')](https://docs.z.ai/guides/overview/pricing) <sub>2026-09-26</sub>
- [Z.ai release notes (GLM-4.7-Flash = free-tier version)](https://docs.z.ai/release-notes/new-released) <sub>2026-09-26</sub>
- [Z.ai quick start (base URL)](https://docs.z.ai/guides/overview/quick-start) <sub>2026-09-26</sub>
- [Z.ai Privacy Policy incl. DPA for API Services](https://docs.z.ai/legal-agreement/privacy-policy) <sub>2026-09-26</sub>
- [Z.ai Terms of Use](https://docs.z.ai/legal-agreement/terms-of-use) <sub>2026-09-26</sub>

---

<sub>Generated from [`data/providers.json`](../../data/providers.json). Edit the data, not this file.</sub>
