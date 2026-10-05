# 🇫🇷 OVHcloud AI Endpoints

[← All providers](../../README.md#-text--chat-llms) · 💬 Text & chat LLMs

![status](https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2FIdoY12%2Fawesome-free-ai-apis%2Fmain%2Fbadges%2Fovhcloud-ai-endpoints.json&cacheSeconds=3600) <sub>live: up · docs: ok</sub> <sub>🟢 verified · last verified 2026-09-26</sub>

> **Anonymous: 2 RPM per IP per model, no signup; EU-hosted (Gravelines)**

Anonymous (no API key, no signup): '2 requests per minute, per IP and per model'. Authenticated: 400 requests/minute per project per model — but 'Access keys created from Public Cloud projects in Discovery mode (without a payment method) cannot use the service.' So the free path is anonymous only.

**Website:** <https://www.ovhcloud.com/en/public-cloud/ai-endpoints/>  
**Get a key:** <https://www.ovh.com/manager/> (Public Cloud project > AI Endpoints > API keys; keys require a payment method on the project.)  
**Base URL:** `https://oai.endpoints.kepler.ai.cloud.ovh.net/v1` · OpenAI-compatible: ✅

| API key | Credit card | Trains on your data | Commercial use | DPA / GDPR | Hosting |
|:--|:--|:--|:--|:--|:--|
| 🔓 None | 🟢 No | 🟢 No | ⚪ Unclear | ⚪ Unclear | EU 🇫🇷 Gravelines |

## Limits

Anonymous (no token): '2 requests per minute, per IP and per model'. Authenticated: '400 requests per minute, per Public Cloud project and per model' (429 on excess). Payload: '2 MB per request body' (VLMs '10 MB per request body'). 'No usage limits currently apply beyond rate and payload restrictions', OVHcloud may add token-consumption limits in future.

## Models

| Model | ID | Context | Max out | Modality | Tools | JSON | Vision | Reason | Rate limit |
|:--|:--|--:|--:|:--|:-:|:-:|:-:|:-:|:--|
| gpt-oss-120b | `gpt-oss-120b` | 131K | — | text -> text | · | · | — | ✅ | anon 2 RPM/IP/model; auth 400 RPM |
| gpt-oss-20b | `gpt-oss-20b` | 131K | — | text -> text | · | · | — | ✅ | anon 2 RPM/IP/model; auth 400 RPM |
| Qwen3.8-27B | `qwen-3-8-27b` | 262K | — | text, image -> text | · | · | ✅ | · | anon 2 RPM/IP/model; auth 400 RPM |
| Qwen3.6-27B | `qwen-3-6-27b` | 262K | — | text, image -> text | · | · | ✅ | · | anon 2 RPM/IP/model; auth 400 RPM |
| Qwen3.5-397B-A17B | `qwen-3-5-397b` | 262K | — | text, image -> text | · | · | ✅ | · | anon 2 RPM/IP/model; auth 400 RPM |
| Qwen3.5-9B | `qwen-3-5-9b` | 262K | — | text, image -> text | · | · | ✅ | · | anon 2 RPM/IP/model; auth 400 RPM |
| Qwen2.5-VL-72B-Instruct | `qwen-2-5-vl-72b-instruct` | 32K | — | text, image -> text | · | · | ✅ | — | anon 2 RPM/IP/model; auth 400 RPM |
| Mistral-Small-3.2-24B-Instruct-2506 | `mistral-small-3-2-24b-instruct-2506` | 128K | — | text, image -> text | · | · | ✅ | — | anon 2 RPM/IP/model; auth 400 RPM |
| Meta-Llama-3.3-70B-Instruct | `llama-3-3-70b-instruct` | 131K | — | text -> text | · | · | — | — | anon 2 RPM/IP/model; auth 400 RPM |
| Mistral-Nemo-Instruct-2407 | `mistral-nemo-instruct-2407` | 118K | — | text -> text | · | · | — | — | anon 2 RPM/IP/model; auth 400 RPM |
| Mistral-7B-Instruct-v0.3 | `mistral-7b-instruct-v0-3` | 32K | — | text -> text | · | · | — | — | anon 2 RPM/IP/model; auth 400 RPM |
| Qwen3-Coder-30B-A3B-Instruct | `qwen-3-coder-30b-a3b-instruct` | 256K | — | text -> text | · | · | — | — | anon 2 RPM/IP/model; auth 400 RPM |
| Qwen3Guard-Gen-8B / Qwen3Guard-Gen-0.6B | `qwen-guard-gen-8b, qwen-guard-gen-06b` | 32K | — | text -> safety classificati… | — | · | — | — | anon 2 RPM/IP/model; auth 400 RPM |

<sub>Tools = tool calling · JSON = structured output · Vision = image input · Reason = reasoning model. ✅ documented · — no · · unknown.</sub>

## Fine print

- **Training:** 'Data is not stored or shared during or after model use.'
- **DPA / GDPR:** OVHcloud is an EU (French) provider and states data is not stored; a DPA page was not among the sources read.
- **Hosting:** Gravelines, France (EU)
- **Notes:** Model list and contexts now verified directly from the official catalog API (catalog.endpoints.ai.ovh.net/rest/v1/models_v2) and the public catalog page. Qwen3Guard-Gen (8B/0.6B), nvr-tts-* and stable-diffusion-xl-base-v10 are listed with price 'Free' on the catalog page (i.e. free even with an authenticated key). Data: 'Data is not stored or shared during or after model use.' Hosted in Gravelines, France. Keys: Public Cloud project → AI Endpoints → API keys (only needed for the 400 RPM authenticated tier).

## Model notes

- **gpt-oss-120b:** Reasoning LLM; paid price 0.08/0.4 EUR per Mtoken
- **gpt-oss-20b:** Reasoning LLM
- **Qwen3.8-27B:** Vision LLM
- **Qwen3.6-27B:** Vision LLM
- **Qwen3.5-397B-A17B:** Vision LLM
- **Qwen3.5-9B:** Vision LLM
- **Qwen2.5-VL-72B-Instruct:** Vision LLM
- **Mistral-Small-3.2-24B-Instruct-2506:** Vision LLM
- **Qwen3-Coder-30B-A3B-Instruct:** Code LLM
- **Qwen3Guard-Gen-8B / Qwen3Guard-Gen-0.6B:** Catalog price: 'Free' (also for authenticated use)

## Official sources

- [AI Endpoints — features, capabilities and limitations (rate limits, data)](https://docs.ovhcloud.com/en/guides/public-cloud/ai-machine-learning/ai-endpoints-capabilities) <sub>2026-09-26</sub>
- [AI Endpoints — getting started (Discovery-mode keys cannot use the service)](https://docs.ovhcloud.com/en/guides/public-cloud/ai-machine-learning/ai-endpoints-getting-started) <sub>2026-09-26</sub>
- [AI Endpoints — catalog API](https://docs.ovhcloud.com/en/guides/public-cloud/ai-machine-learning/ai-endpoints-catalog-api) <sub>2026-09-26</sub>
- [catalog.endpoints.ai.ovh.net/rest/v1/models_v2](https://catalog.endpoints.ai.ovh.net/rest/v1/models_v2) <sub>2026-09-26</sub>
- [www.ovhcloud.com/en/public-cloud/ai-endpoints/catalog/](https://www.ovhcloud.com/en/public-cloud/ai-endpoints/catalog/) <sub>2026-09-26</sub>

---

<sub>Generated from [`data/providers.json`](../../data/providers.json). Edit the data, not this file.</sub>
