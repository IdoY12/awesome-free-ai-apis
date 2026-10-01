# 🇬🇧 LLM7.io

[← All providers](../../README.md#-text--chat-llms) · 💬 Text & chat LLMs

![status](https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2FIdoY12%2Fawesome-free-ai-apis%2Fmain%2Fbadges%2Fllm7.json&cacheSeconds=3600) <sub>live: up · docs: ok</sub> <sub>🟢 verified · last verified 2026-09-26</sub>

> **Anonymous 10 RPM / 60 req/h / 500K tokens/day; free token doubles it (40 RPM, 1M tokens/day)**

Anonymous: 1 RPS, 10 RPM, 60 requests/hour, 500,000 tokens per 24 hours. Free token: 2 RPS, 40 RPM, 100 requests/hour, 1,000,000 tokens per 24 hours. Pro $12/month: 25 RPS, 1,500 RPM, 15,000/hour.

**Website:** <https://llm7.io/>  
**Get a key:** <https://token.llm7.io>  
**Base URL:** `https://api.llm7.io/v1` · OpenAI-compatible: ✅

| API key | Credit card | Trains on your data | Commercial use | DPA / GDPR | Hosting |
|:--|:--|:--|:--|:--|:--|
| 🔓 None | 🟢 No | ⚪ Unclear | ⚪ Unclear | ⚪ Unclear | Varies (upstream) |

## Limits

See summary (docs.llm7.io/limits). Image/video endpoints billed separately.

## Models

| Model | ID | Context | Max out | Modality | Tools | JSON | Vision | Reason | Rate limit |
|:--|:--|--:|--:|:--|:-:|:-:|:-:|:-:|:--|
| Rotating `turbo` catalog — GPT-OSS, Gemma 4, MiniMax M2.7, Codestral, Mistral Nemo per README; list via `GET /v1/models` | <sub>not published</sub> | — | — | text / multimodal | · | · | · | · | tier limits above |

<sub>Tools = tool calling · JSON = structured output · Vision = image input · Reason = reasoning model. ✅ documented · — no · · unknown.</sub>

## Fine print

- **Training:** not on the limits page; project is AGPL open source and proxies to third-party providers.
- **Hosting:** upstream providers (Azure, Cloudflare, OpenAI and others per README)
- **Notes:** Matches earlier circulated lists; adds 'Free token' tier (40 RPM / 100 per hour / 1M tokens per day).

## Model notes

- **Rotating `turbo` catalog — GPT-OSS, Gemma 4, MiniMax M2.7, Codestral, Mistral Nemo per README; list via `GET /v1/models`:** Model IDs from third-party snapshot; official model list not fetched.

## Official sources

- [LLM7 limits](https://docs.llm7.io/limits) <sub>2026-09-26</sub>
- [llm7.io README (base URL, OpenAI-compatible)](https://github.com/chigwell/llm7.io/blob/main/README.md) <sub>2026-09-26</sub>

---

<sub>Generated from [`data/providers.json`](../../data/providers.json). Edit the data, not this file.</sub>
