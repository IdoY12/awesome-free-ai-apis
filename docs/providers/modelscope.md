# 🇨🇳 ModelScope API-Inference (CN)

[← All providers](../../README.md#-text--chat-llms) · 💬 Text & chat LLMs

![status](https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2FIdoY12%2Fawesome-free-ai-apis%2Fmain%2Fbadges%2Fmodelscope.json&cacheSeconds=3600) <sub>live: n/a · docs: ok</sub> <sub>🟡 partial · last verified 2026-09-26</sub>

> **2,000 API calls/day on API-Inference-enabled community models; Alibaba account**

ModelScope headline (modelscope.cn/headlines/article/795): registration grants '每日2000次调用' (2,000 free API calls/day) via SDK token. Limits page title: 'API-Inference使用限制'; page meta describes the service as '开源模型服务化并通过API接口进行标准化，免费提供给广大开发者体验' and '非商业化，非盈利产品' (non-commercial, non-profit product). Body of the limits page could not be extracted (JS-rendered).

**Website:** <https://modelscope.cn/>  
**Get a key:** <https://modelscope.cn/my/myaccesstoken>  
**Base URL:** `https://api-inference.modelscope.cn/v1` · OpenAI-compatible: ✅

| API key | Credit card | Trains on your data | Commercial use | DPA / GDPR | Hosting |
|:--|:--|:--|:--|:--|:--|
| 🔑 Yes · 🪪 Third-party guides state Alibaba Cloud account binding + real-name verification is required; the official limits page body could not be extracted to confirm. | 🟢 No | ⚪ Unclear | ⚪ Unclear | 🔴 No | China |

## Limits

2,000 calls/day per user (official headline). Per-model cap (<= 500/day) and dynamic concurrency limits are reported by the earlier circulated lists/Cherry Studio docs but the official limits page was not readable by the fetcher.

## Models

| Model | ID | Context | Max out | Modality | Tools | JSON | Vision | Reason | Rate limit |
|:--|:--|--:|--:|:--|:-:|:-:|:-:|:-:|:--|
| API-Inference-enabled community models, e.g. `Qwen/Qwen3-235B-A22B-Instruct-2507`, `ZhipuAI/GLM-4.6` | <sub>not published</sub> | — | — | text | · | · | · | · | 2,000 calls/day total |

<sub>Tools = tool calling · JSON = structured output · Vision = image input · Reason = reasoning model. ✅ documented · — no · · unknown.</sub>

## Fine print

- **Commercial use:** official limits page metadata calls API-Inference a '非商业化，非盈利产品' (non-commercial, non-profit product), which describes the service itself; no explicit user-side commercial-use prohibition was readable.
- **Hosting:** China (Alibaba)

## Model notes

- **API-Inference-enabled community models, e.g. `Qwen/Qwen3-235B-A22B-Instruct-2507`, `ZhipuAI/GLM-4.6`:** Availability depends on model popularity in the community; list is dynamic.

## Official sources

- [ModelScope headline: free inference API, 2,000 calls/day on registration](https://modelscope.cn/headlines/article/795) <sub>2026-09-26</sub>
- [API-Inference usage limits (page body not extractable)](https://www.modelscope.ai/docs/model-service/API-Inference/limits) <sub>2026-09-26</sub>
- [modelscope.cn/docs/model-service/API-Inference/limits](https://modelscope.cn/docs/model-service/API-Inference/limits) <sub>2026-09-26</sub>

---

<sub>Generated from [`data/providers.json`](../../data/providers.json). Edit the data, not this file.</sub>
