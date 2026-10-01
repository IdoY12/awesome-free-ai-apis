# 🇨🇳 iFlytek Spark Lite (CN)

[← All providers](../../README.md#-text--chat-llms) · 💬 Text & chat LLMs

![status](https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2FIdoY12%2Fawesome-free-ai-apis%2Fmain%2Fbadges%2Fiflytek-spark.json&cacheSeconds=3600) <sub>live: n/a · docs: ok</sub> <sub>🟡 partial · last verified 2026-09-26</sub>

> **Spark Lite (8K in / 4K out) marked free to use; QPS not published**

Official HTTP API doc lists model 'lite' (Spark Lite) as '轻量级大语言模型，具有更高的响应速度，支持免费使用' (supports free use). Free quota is claimed on the product page ('请点击前往产品页面领取免费额度'); amount and QPS not stated in the docs fetched.

**Website:** <https://xinghuo.xfyun.cn/sparkapi>  
**Get a key:** <https://console.xfyun.cn/> (The credential is called APIPassword in the console.)  
**Base URL:** `https://spark-api-open.xf-yun.com/v1` · OpenAI-compatible: ✅

| API key | Credit card | Trains on your data | Commercial use | DPA / GDPR | Hosting |
|:--|:--|:--|:--|:--|:--|
| 🔑 Yes | 🟢 No | ⚪ Unclear | ⚪ Unclear | 🔴 No | China |

## Limits

Not stated; error codes 11202 (秒级流控超限) and 11203 (并发流控超限) indicate per-second and concurrency caps; higher concurrency by contacting sales.

## Models

| Model | ID | Context | Max out | Modality | Tools | JSON | Vision | Reason | Rate limit |
|:--|:--|--:|--:|:--|:-:|:-:|:-:|:-:|:--|
| Spark Lite | `lite` | 8K | 4K | text -> text | · | · | — | — | — |

<sub>Tools = tool calling · JSON = structured output · Vision = image input · Reason = reasoning model. ✅ documented · — no · · unknown.</sub>

## Fine print

- **Hosting:** China
- **Notes:** Product/pricing page (xinghuo.xfyun.cn/sparkapi) is JS-only; free quota size and whether it is time-limited could not be read. Chinese account required.

## Model notes

- **Spark Lite:** Max input 8K, max output 4K, default max_tokens 4096; marked 免费使用

## Official sources

- [Spark HTTP 调用文档 (OpenAI-compatible)](https://www.xfyun.cn/doc/spark/HTTP%E8%B0%83%E7%94%A8%E6%96%87%E6%A1%A3.html) <sub>2026-09-26</sub>
- [Spark WebSocket doc](https://www.xfyun.cn/doc/spark/Web.html) <sub>2026-09-26</sub>

---

<sub>Generated from [`data/providers.json`](../../data/providers.json). Edit the data, not this file.</sub>
