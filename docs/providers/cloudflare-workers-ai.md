# 🇺🇸 Cloudflare Workers AI

[← All providers](../../README.md#-text--chat-llms) · 💬 Text & chat LLMs

![status](https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2FIdoY12%2Fawesome-free-ai-apis%2Fmain%2Fbadges%2Fcloudflare-workers-ai.json&cacheSeconds=3600) <sub>live: n/a · docs: unknown</sub> <sub>🟢 verified · last verified 2026-09-26</sub>

> **10,000 Neurons/day across all Workers AI models (≈ 300K input tokens of GPT-OSS 120B)**

'Our free allocation allows anyone to use a total of 10,000 Neurons per day at no charge.' Free Workers plan cannot exceed the allocation; overage requires Workers Paid ($0.011 / 1,000 Neurons). Limits reset 00:00 UTC.

**Website:** <https://developers.cloudflare.com/workers-ai/>  
**Get a key:** <https://dash.cloudflare.com/profile/api-tokens>  
**Base URL:** `https://api.cloudflare.com/client/v4/accounts/{account_id}/ai/v1` · OpenAI-compatible: ✅

| API key | Credit card | Trains on your data | Commercial use | DPA / GDPR | Hosting |
|:--|:--|:--|:--|:--|:--|
| 🔑 Yes | 🟢 No | 🟢 No | 🟢 Yes | 🟢 Yes | Global edge |

## Limits

10,000 Neurons/day. Text generation: 300 requests per minute by default; models that require Workers Paid: 20 RPM (standard billing) or 50 RPM (prepaid AI Gateway credits).

## Models

| Model | ID | Context | Max out | Modality | Tools | JSON | Vision | Reason | Rate limit |
|:--|:--|--:|--:|:--|:-:|:-:|:-:|:-:|:--|
| GPT-OSS 120B | `@cf/openai/gpt-oss-120b` | 128K | — | text | ✅ | · | — | ✅ | $0.35/$0.75 per M = 31,818 / 68,182 neu… |
| GPT-OSS 20B | `@cf/openai/gpt-oss-20b` | — | — | text | ✅ | · | — | ✅ | 18,182 / 27,273 neurons per M in/out |
| Llama 3.3 70B Instruct FP8 Fast | `@cf/meta/llama-3.3-70b-instruct-fp8-fast` | 24K | — | text | ✅ | · | — | — | 26,668 / 204,805 neurons per M in/out |
| Qwen3.8 27B | `@cf/qwen/qwen3.8-27b` | 256K | — | text+image | ✅ | · | ✅ | ✅ | 40,909 / 290,909 neurons per M in/out |
| GLM-4.7-Flash | `@cf/zai-org/glm-4.7-flash` | 128K | — | text | ✅ | · | — | ✅ | 5,500 / 36,400 neurons per M in/out |
| Nemotron 3 120B A12B | `@cf/nvidia/nemotron-3-120b-a12b` | 256K | — | text | ✅ | · | — | ✅ | 45,455 / 136,364 neurons per M |
| Gemma 4 26B A4B IT | `@cf/google/gemma-4-26b-a4b-it` | — | — | text | · | · | · | · | 9,091 / 27,273 neurons per M |
| Llama 4 Scout 17B 16E | `@cf/meta/llama-4-scout-17b-16e-instruct` | — | — | text+image | · | · | ✅ | — | 24,545 / 77,273 neurons per M |
| Mistral Small 3.1 24B | `@cf/mistralai/mistral-small-3.1-24b-instruct` | 128K | — | text+image | · | · | ✅ | — | 31,876 / 50,488 neurons per M |
| Qwen3 30B A3B FP8 | `@cf/qwen/qwen3-30b-a3b-fp8` | — | — | text | · | · | — | ✅ | $0.051/$0.335 per M |
| Granite 4.0 H Micro | `@cf/ibm-granite/granite-4.0-h-micro` | — | — | text | ✅ | · | — | — | $0.017/$0.112 per M |
| Other free-eligible text models | `@cf/meta/llama-3.2-1b-instruct, @cf/meta/llama-3.2-3b-instr…` | — | — | text | · | · | · | · | see pricing table |

<sub>Tools = tool calling · JSON = structured output · Vision = image input · Reason = reasoning model. ✅ documented · — no · · unknown.</sub>

## Fine print

- **Training:** 'Cloudflare does not use your Customer Content to (1) train any AI models made available on Workers AI or (2) improve any Cloudflare or third-party services'.
- **DPA / GDPR:** Self-Serve Subscription Agreement 6.1: Cloudflare's Data Processing Addendum 'is hereby incorporated by reference into this Agreement'.
- **Retention:** Workers AI does not store Customer Content unless you use a storage service (R2, KV, DO, Vectorize)
- **Hosting:** Cloudflare global network (not documented per model); DPA anticipates processing outside EEA/UK/CH
- **Alt endpoint:** OpenAI-compatible; native REST at /ai/run/{model}
- **Notes:** CHANGE: seven frontier models (Kimi K2.6/K2.7, GLM-5.x, DeepSeek V4) are excluded from the free allocation and require Workers Paid or prepaid AI Gateway credits.

## Model notes

- **GPT-OSS 120B:** ~314K input tokens/day on free neurons if output-free.
- **Llama 3.3 70B Instruct FP8 Fast:** Context on model page: 24,000 tokens.
- **GLM-4.7-Flash:** Cheapest strong model on free neurons; NOT in the paid-only list.

## Official sources

- [Workers AI pricing](https://developers.cloudflare.com/workers-ai/platform/pricing/) <sub>2026-09-26</sub>
- [Workers AI limits](https://developers.cloudflare.com/workers-ai/platform/limits/) <sub>2026-09-26</sub>
- [Models catalog](https://developers.cloudflare.com/workers-ai/models/) <sub>2026-09-26</sub>
- [Workers AI product page (no credit card)](https://www.cloudflare.com/products/workers-ai/) <sub>2026-09-26</sub>
- [Workers AI data usage](https://developers.cloudflare.com/workers-ai/platform/data-usage/) <sub>2026-09-26</sub>
- [Cloudflare Service-Specific Terms: Developer Platform](https://www.cloudflare.com/service-specific-terms-developer-platform/) <sub>2026-09-26</sub>
- [Cloudflare Self-Serve Subscription Agreement](https://www.cloudflare.com/terms/) <sub>2026-09-26</sub>
- [Cloudflare Customer DPA](https://www.cloudflare.com/cloudflare-customer-dpa/) <sub>2026-09-26</sub>

---

<sub>Generated from [`data/providers.json`](../../data/providers.json). Edit the data, not this file.</sub>
