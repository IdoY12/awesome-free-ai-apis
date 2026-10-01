# 🇺🇸 OpenRouter (free models)

[← All providers](../../README.md#-text--chat-llms) · 💬 Text & chat LLMs

![status](https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2FIdoY12%2Fawesome-free-ai-apis%2Fmain%2Fbadges%2Fopenrouter.json&cacheSeconds=3600) <sub>live: up · docs: ok</sub> <sub>🟢 verified · last verified 2026-09-26</sub>

> **All `:free` models: 20 RPM, 50 RPD (1,000 RPD once you have ever bought ≥$10 credit)**

Models with IDs ending in ':free' are $0. Limits: 20 RPM; 50 requests/day if you have bought < 10 credits (all time), 1,000 requests/day once you have bought >= 10 credits (granted from 9 credits to absorb fees). Daily counter resets on UTC day.

**Website:** <https://openrouter.ai/>  
**Get a key:** <https://openrouter.ai/settings/keys>  
**Base URL:** `https://openrouter.ai/api/v1` · OpenAI-compatible: ✅

| API key | Credit card | Trains on your data | Commercial use | DPA / GDPR | Hosting |
|:--|:--|:--|:--|:--|:--|
| 🔑 Yes | 🟢 No | 🔴 Yes | ⚪ Unclear | ⚪ Unclear | Varies (upstream) |

## Limits

FREE_MODEL_RATE_LIMIT_RPM = 20; FREE_MODEL_NO_CREDITS_RPD = 50; FREE_MODEL_HAS_CREDITS_RPD = 1000; FREE_MODEL_CREDITS_THRESHOLD = 10. Check GET /api/v1/key -> free_model_daily_requests. A negative balance blocks free models too.

## Models

| Model | ID | Context | Max out | Modality | Tools | JSON | Vision | Reason | Rate limit |
|:--|:--|--:|--:|:--|:-:|:-:|:-:|:-:|:--|
| Free Models Router | `openrouter/free` | — | — | text | · | · | · | · | 20 RPM / 50 or 1000 RPD |
| NVIDIA Nemotron 3 Ultra | `nvidia/nemotron-3-ultra-550b-a55b:free` | 1M | — | text | ✅ | · | — | ✅ | shared free limits |
| NVIDIA Nemotron 3 Super | `nvidia/nemotron-3-super-120b-a12b:free` | 262K | — | text | ✅ | · | — | ✅ | shared free limits |
| NVIDIA Nemotron 3.5 Lightning | `nvidia/nemotron-3.5-lightning:free` | 1M | — | text | ✅ | · | — | · | shared free limits |
| NVIDIA Nemotron 3 Nano Omni | `nvidia/nemotron-3-nano-omni-30b-a3b-reasoning:free` | 256K | — | text, image, video, audio -… | · | · | ✅ | ✅ | shared free limits |
| Qwen3.8 27B | `qwen/qwen3.8-27b:free` | 262K | — | text+image | ✅ | · | ✅ | ✅ | shared free limits |
| Cohere North Mini Code | `cohere/north-mini-code:free` | 256K | — | text (code) | ✅ | · | — | · | shared free limits |
| Thinking Machines Inkling / Inkling Small | `thinkingmachines/inkling:free, thinkingmachines/inkling-sma…` | 1.1M | — | text, image, audio | ✅ | · | ✅ | ✅ | shared free limits |
| Poolside Laguna S 2.1 / XS 2.1 | `poolside/laguna-s-2.1:free, poolside/laguna-xs-2.1:free` | 262K | — | text (code) | ✅ | · | — | ✅ | shared free limits |
| InclusionAI Ling 3.0 Flash Fin / Sante | `inclusionai/ling-3.0-flash-fin:free, inclusionai/ling-3.0-f…` | 262K | — | text | · | · | — | ✅ | shared free limits |
| Dots Studio Dots3-Note Preview | `dots-studio/dots-3-note-preview:free` | 512K | — | multimodal | ✅ | · | ✅ | ✅ | shared free limits |
| Space Bunny Alpha (stealth) | `stealth/space-bunny-alpha` | 1M | — | multimodal | · | · | ✅ | ✅ | shared free limits |
| Liquid LFM2.5 2.6B | `liquid/lfm-2.5-2.6b:free` | 64K | 8K | text | · | · | — | — | shared free limits |

<sub>Tools = tool calling · JSON = structured output · Vision = image input · Reason = reasoning model. ✅ documented · — no · · unknown.</sub>

## Fine print

- **Training:** (upstream) OpenRouter itself: 'your prompts are not retained unless you specifically opt in to prompt logging'. Free endpoints: 'If either is off, free endpoints that train or publish get filtered out' — i.e. most :free models require enabling the training and publishing toggles in privacy settings.
- **Commercial use:** No prohibition; FAQ says free models 'are usually not suitable for production use' due to rate limits (50 req/day, 1000 with $10 credits).
- **DPA / GDPR:** Enterprise page: 'Data protection and privacy agreements' offered ('we can provide ours, or review yours'); 'GDPR-compatible, SOC 2 compliant'. Not stated for self-serve accounts.
- **Retention:** OpenRouter: zero retention by default ('OpenRouter itself has a ZDR policy'); upstream providers have their own retention; ZDR-only routing available
- **Hosting:** varies by upstream provider; 'EU/US region locking' available (route only to providers inside the EU or the US)
- **Notes:** Free model catalog rotates constantly; 14 listed on the collection page on 2026-09-26.

## Model notes

- **Free Models Router:** 'selects free models at random from the models available on OpenRouter'.
- **Poolside Laguna S 2.1 / XS 2.1:** XS: 256K.
- **InclusionAI Ling 3.0 Flash Fin / Sante:** Domain models (finance / medical).
- **Space Bunny Alpha (stealth):** Stealth model; may be withdrawn at any time.
- **Liquid LFM2.5 2.6B:** 'Prompts and outputs may be retained and used to train Liquid models.'

## Official sources

- [API credit & rate limits](https://openrouter.ai/docs/api_reference/limits) <sub>2026-09-26</sub>
- [Free models collection](https://openrouter.ai/collections/free-models) <sub>2026-09-26</sub>
- [Why do all free models return a 404 (privacy toggles)](https://openrouter.zendesk.com/hc/en-us/articles/51690904755227) <sub>2026-09-26</sub>
- [Provider logging / privacy settings](https://openrouter.ai/docs/guides/privacy/provider-logging) <sub>2026-09-26</sub>
- [openrouter/free router](https://openrouter.ai/openrouter/free) <sub>2026-09-26</sub>
- [OpenRouter FAQ](https://openrouter.ai/docs/faq) <sub>2026-09-26</sub>
- [OpenRouter Zero Data Retention](https://openrouter.ai/docs/features/zdr) <sub>2026-09-26</sub>
- [OpenRouter Privacy and Logging](https://openrouter.ai/docs/features/privacy-and-logging) <sub>2026-09-26</sub>
- [OpenRouter Enterprise](https://openrouter.ai/enterprise) <sub>2026-09-26</sub>

---

<sub>Generated from [`data/providers.json`](../../data/providers.json). Edit the data, not this file.</sub>
