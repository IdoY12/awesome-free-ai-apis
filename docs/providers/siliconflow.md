# 🇨🇳 SiliconFlow (CN)

[← All providers](../../README.md#-text--chat-llms) · 💬 Text & chat LLMs

![status](https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2FIdoY12%2Fawesome-free-ai-apis%2Fmain%2Fbadges%2Fsiliconflow.json&cacheSeconds=3600) <sub>live: n/a · docs: ok</sub> <sub>🟡 partial · last verified 2026-09-26</sub>

> **Older 7B-class models (Qwen2 7B, GLM-4 9B…) free on the .cn platform; ID verification**

Docs model list marks seven small open models as free (免费) 'provided they do not exceed the platform's rate limits'; 'The Rate Limits for free models are fixed'. The international site (siliconflow.com) shows no free models.

**Website:** <https://siliconflow.cn/>  
**Get a key:** <https://cloud.siliconflow.cn/account/ak>  
**Base URL:** `https://api.siliconflow.cn/v1` · OpenAI-compatible: ✅

| API key | Credit card | Trains on your data | Commercial use | DPA / GDPR | Hosting |
|:--|:--|:--|:--|:--|:--|
| 🔑 Yes · 🪪 Identity verification required to lift the 100 requests/day cap on DeepSeek-R1/V3; free models list does not state a verification requirement. Chinese phone number typically needed for cn platform (not verified on docs). | 🟢 No | ⚪ Unclear | ⚪ Unclear | 🔴 No | China |

## Limits

Free models: fixed limits (values not printed on the fetched page; usage tier L0 is 1,000 RPM / 40,000 TPM for paid models). Unverified users: 100 requests/day on DeepSeek-R1 and DeepSeek-V3.

## Models

| Model | ID | Context | Max out | Modality | Tools | JSON | Vision | Reason | Rate limit |
|:--|:--|--:|--:|:--|:-:|:-:|:-:|:-:|:--|
| Qwen2 7B Instruct | `Qwen/Qwen2-7B-Instruct` | 32K | — | text | · | · | — | — | fixed |
| Qwen2 1.5B Instruct | `Qwen/Qwen2-1.5B-Instruct` | 32K | — | text | · | · | — | — | fixed |
| Qwen1.5 7B Chat | `Qwen/Qwen1.5-7B-Chat` | 32K | — | text | · | · | — | — | fixed |
| GLM-4 9B Chat | `THUDM/glm-4-9b-chat` | 32K | — | text | · | · | — | — | fixed |
| ChatGLM3 6B | `THUDM/chatglm3-6b` | 32K | — | text | · | · | — | — | fixed |
| InternLM2.5 7B Chat | `internlm/internlm2_5-7b-chat` | 32K | — | text | · | · | — | — | fixed |
| Mistral 7B Instruct v0.2 | `mistralai/Mistral-7B-Instruct-v0.2` | 32K | — | text | · | · | — | — | fixed |

<sub>Tools = tool calling · JSON = structured output · Vision = image input · Reason = reasoning model. ✅ documented · — no · · unknown.</sub>

## Fine print

- **Commercial use:** 'the company retains interpretation rights regarding the free model offerings'.
- **Hosting:** China
- **Notes:** Change vs. earlier lists: the '1,000 RPM / 50,000 TPM for free models' figure is not on the fetched rate-limit page (those are L0/L1 paid-tier numbers). Free models are old-generation (Qwen2, GLM-4-9B). The docs model-list page may be stale; re-check cloud.siliconflow.cn/models. International site: https://siliconflow.com/ (lists no free models).

## Official sources

- [SiliconFlow model list (free models marked 免费)](https://docs.siliconflow.com/quickstart/models) <sub>2026-09-26</sub>
- [Rate limits and upgrades](https://docs.siliconflow.com/en/userguide/rate-limits/rate-limit-and-upgradation) <sub>2026-09-26</sub>
- [International models page (no free models)](https://www.siliconflow.com/models) <sub>2026-09-26</sub>

---

<sub>Generated from [`data/providers.json`](../../data/providers.json). Edit the data, not this file.</sub>
