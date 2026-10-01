# 🇺🇸 Kilo Gateway

[← All providers](../../README.md#-text--chat-llms) · 💬 Text & chat LLMs

![status](https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2FIdoY12%2Fawesome-free-ai-apis%2Fmain%2Fbadges%2Fkilo-gateway.json&cacheSeconds=3600) <sub>live: up · docs: ok</sub> <sub>🟢 verified · last verified 2026-09-26</sub>

> **No key needed: 200 req/hour per IP on `kilo-auto/free` and `:free` models (logged upstream)**

'The gateway allows unauthenticated access for free models only' (IDs tagged ':free'); 'Anonymous requests are identified by IP address and are subject to rate limiting (200 requests per hour per IP).' Router 'kilo-auto/free' is 'Free with limited capability. No credits required.'

**Website:** <https://kilo.ai/gateway>  
**Get a key:** <https://kilo.ai/> (Optional; anonymous access is allowed for free models.)  
**Base URL:** `https://api.kilo.ai/api/gateway` · OpenAI-compatible: ✅

| API key | Credit card | Trains on your data | Commercial use | DPA / GDPR | Hosting |
|:--|:--|:--|:--|:--|:--|
| 🔓 None | 🟢 No | 🔴 Yes | ⚪ Unclear | 🟢 Yes | Varies (upstream) |

## Limits

200 requests/hour per IP for anonymous/free models (kilo-auto/free). Upstream providers may add their own limits.

## Models

| Model | ID | Context | Max out | Modality | Tools | JSON | Vision | Reason | Rate limit |
|:--|:--|--:|--:|:--|:-:|:-:|:-:|:-:|:--|
| Auto Free router | `kilo-auto/free` | — | — | text | · | · | · | · | 200 req/hour/IP |
| `:free`-suffixed models in the live catalog (e.g. `minimax/minimax-m2.5:free`); set changes often | <sub>not published</sub> | — | — | text | · | · | · | · | 200 req/hour/IP |

<sub>Tools = tool calling · JSON = structured output · Vision = image input · Reason = reasoning model. ✅ documented · — no · · unknown.</sub>

## Fine print

- **Training:** (upstream) 'Auto Free may route your requests to providers that log prompts and outputs and use them to improve their services.' NVIDIA free endpoints: 'Trial use only - do not submit personal or confidential data.' Kilo ToS grants license to use Customer Data 'to provide and improve the Service'.
- **Commercial use:** No free-tier commercial restriction found; NVIDIA endpoints marked 'Trial use only'.
- **DPA / GDPR:** ToS references 'Kilo's data processing agreement'; Privacy Policy mentions SCCs. EU Data Residency offered to enterprise (kilo.ai/eu).
- **Hosting:** US ('The Services are hosted in the United States'); EU data residency for enterprise; inference at upstream providers
- **Alt endpoint:** OpenRouter-compatible listing at /api/openrouter/models
- **Notes:** Matches earlier circulated lists. Note the router is spelled kilo-auto/free in the docs.

## Model notes

- **Auto Free router:** 'Availability changes; check the live model catalog for current free options and model IDs' via GET https://api.kilo.ai/api/gateway/models (no auth).
- **`:free`-suffixed models in the live catalog (e.g. `minimax/minimax-m2.5:free`); set changes often:** Catalog not enumerable by the fetcher; third-party trackers report ~40 free models.

## Official sources

- [Gateway authentication (anonymous free access, 200 req/hour/IP)](https://kilo.ai/docs/gateway/authentication) <sub>2026-09-26</sub>
- [Models & providers (free models, data caution)](https://kilo.ai/docs/gateway/models-and-providers) <sub>2026-09-26</sub>
- [Rate limits and costs](https://kilo.ai/docs/getting-started/rate-limits-and-costs) <sub>2026-09-26</sub>
- [Using Kilo for free](https://kilo.ai/docs/getting-started/using-kilo-for-free) <sub>2026-09-26</sub>
- [Kilo Terms of Service](https://kilo.ai/terms) <sub>2026-09-26</sub>
- [Kilo Privacy Policy](https://kilo.ai/privacy) <sub>2026-09-26</sub>

---

<sub>Generated from [`data/providers.json`](../../data/providers.json). Edit the data, not this file.</sub>
