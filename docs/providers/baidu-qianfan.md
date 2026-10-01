# 🇨🇳 Baidu Qianfan (CN)

[← All providers](../../README.md#-text--chat-llms) · 💬 Text & chat LLMs

![status](https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2FIdoY12%2Fawesome-free-ai-apis%2Fmain%2Fbadges%2Fbaidu-qianfan.json&cacheSeconds=3600) <sub>live: n/a · docs: ok</sub> <sub>🟠 community-sourced · last verified 2026-09-26</sub> <sub>⚠️ **possibly stale**: official pages could not be re-read</sub>

> **ERNIE Speed / ERNIE Lite free since 2024; Chinese real-name ID; permanence not re-confirmed**

Baidu Cloud article: 'ERNIE Speed and ERNIE Lite 全面免费开放' (fully free) effective 2024-05-21; requires Baidu Cloud registration, real-name authentication, activating the model service and creating AK/SK.

**Website:** <https://cloud.baidu.com/product/qianfan.html>  
**Get a key:** <https://console.bce.baidu.com/qianfan/>  
**Base URL:** `https://qianfan.baidubce.com/v2` · OpenAI-compatible: ✅

| API key | Credit card | Trains on your data | Commercial use | DPA / GDPR | Hosting |
|:--|:--|:--|:--|:--|:--|
| 🔑 Yes · 🪪 Real-name authentication (Chinese ID) on Baidu Intelligent Cloud. | 🟢 No | ⚪ Unclear | ⚪ Unclear | 🔴 No | China |

## Limits

Not stated on the fetched pages (third parties claim QPS 50).

## Models

| Model | ID | Context | Max out | Modality | Tools | JSON | Vision | Reason | Rate limit |
|:--|:--|--:|--:|:--|:-:|:-:|:-:|:-:|:--|
| ERNIE Speed (8K / 128K) | `ernie-speed-8k, ernie-speed-128k` | 8K | — | text | · | · | — | — | — |
| ERNIE Lite (8K) | `ernie-lite-8k` | 8K | — | text | · | · | — | — | — |

<sub>Tools = tool calling · JSON = structured output · Vision = image input · Reason = reasoning model. ✅ documented · — no · · unknown.</sub>

## Fine print

- **Hosting:** China
- **Alt endpoint:** OpenAI-compatible v2 API
- **Notes:** Not re-confirmed on a current official page. The only official statement of free ERNIE Speed/Lite remains the 2024-05-21 article ('全面免费开放', no expiry stated).5 Turbo at ¥0.0008/千tokens and mentions a 'Token Plan个人版' but no permanently free models. Model-billing pages (doc/qianfan-docs/s/Wm9k4qj6i, qm9k5xg80, product/wenxinworkshop/pricing.html) returned 404. Treat the free-model claim as stale until the current 模型服务计费 page is read.

## Model notes

- **ERNIE Speed (8K / 128K):** Free since 2024-05-21.
- **ERNIE Lite (8K):** Free since 2024-05-21.

## Official sources

- [Baidu Cloud article: ERNIE Speed free usage guide](https://cloud.baidu.com/article/3366724) <sub>2026-09-26</sub>
- [Qianfan docs hub (20 CNY voucher for new users)](https://cloud.baidu.com/doc/WENXINWORKSHOP/s/wlwg8f1i3) <sub>2026-09-26</sub>

---

<sub>Generated from [`data/providers.json`](../../data/providers.json). Edit the data, not this file.</sub>
