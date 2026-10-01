# 🇺🇸 Groq

[← All providers](../../README.md#-text--chat-llms) · 💬 Text & chat LLMs

![status](https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2FIdoY12%2Fawesome-free-ai-apis%2Fmain%2Fbadges%2Fgroq.json&cacheSeconds=3600) <sub>live: skipped · docs: ok</sub> <sub>🟢 verified · last verified 2026-09-26</sub>

> **30 RPM · 1K RPD · 8K TPM · 200K TPD per model (GPT-OSS 120B/20B, Qwen3.8 27B)**

Free plan with per-model RPM/RPD/TPM/TPD limits; 'Upgrade to Developer plan to access higher limits, Batch and Flex processing, and more.'

**Website:** <https://groq.com/>  
**Get a key:** <https://console.groq.com/keys>  
**Base URL:** `https://api.groq.com/openai/v1` · OpenAI-compatible: ✅

| API key | Credit card | Trains on your data | Commercial use | DPA / GDPR | Hosting |
|:--|:--|:--|:--|:--|:--|
| 🔑 Yes | 🟢 No | 🟢 No | ⚪ Unclear | 🟢 Yes | US |

## Limits

Free plan (per model): gpt-oss-120b / gpt-oss-20b / gpt-oss-safeguard-20b / qwen3.8-27b: 30 RPM, 1K RPD, 8K TPM, 200K TPD. llama-prompt-guard-2 (22m/86m): 30 RPM, 14.4K RPD, 15K TPM, 500K TPD. whisper-large-v3 / -turbo: 20 RPM, 2K RPD. Orpheus TTS: 10 RPM, 100 RPD, 1.2K TPM, 3.6K TPD. (llama-3.3-70b-versatile, llama-3.1-8b-instant, minimaxai/minimax-m2.7 are still on the models page but had no rows in the free-tier table fetched.)

## Models

| Model | ID | Context | Max out | Modality | Tools | JSON | Vision | Reason | Rate limit |
|:--|:--|--:|--:|:--|:-:|:-:|:-:|:-:|:--|
| GPT-OSS 120B | `openai/gpt-oss-120b` | 128K | 64K | text | ✅ | ✅ | — | ✅ | 30 RPM / 1K RPD / 8K TPM / 200K TPD |
| GPT-OSS 20B | `openai/gpt-oss-20b` | 128K | 64K | text | ✅ | ✅ | — | ✅ | 30 RPM / 1K RPD / 8K TPM / 200K TPD |
| GPT-OSS Safeguard 20B | `openai/gpt-oss-safeguard-20b` | 128K | 64K | text | · | · | — | ✅ | 30 RPM / 1K RPD / 8K TPM / 200K TPD |
| Qwen3.8 27B | `qwen/qwen3.8-27b` | 128K | 16K | text+image -> text | ✅ | ✅ | ✅ | ✅ | 30 RPM / 1K RPD / 8K TPM / 200K TPD |

<sub>Tools = tool calling · JSON = structured output · Vision = image input · Reason = reasoning model. ✅ documented · — no · · unknown.</sub>

## Fine print

- **Training:** Services Agreement: 'Groq is not permitted to use Inputs or Outputs for training or fine-tuning any AI Model Services or other models, unless explicitly granted permission or instructed by Customer.'
- **Commercial use:** No restriction found; Services Agreement only says services 'are not for consumer use'.
- **DPA / GDPR:** Public 'Groq Customer Data Processing Addendum' incorporated into the Groq Services Agreement.
- **Retention:** Customer Data deleted within 30 days after termination; no per-request retention period stated
- **Hosting:** US and other countries ('Groq may transfer and Process Personal Data to and in the United States and other countries where Groq or its Subprocessors maintain Processing operations')
- **Notes:** Change vs. earlier lists: Llama 3.x and Llama 4 models are deprecated; free text catalog is now gpt-oss-120b/20b + qwen3.8-27b. Free TPM is only 8K on the main models (RPD 1K). llama-3.3-70b-versatile and llama-3.1-8b-instant are still listed as Production models but have no rows in the Free-plan rate-limit table, so they are omitted. Whisper STT and Orpheus TTS appear in their own sections.

## Model notes

- **GPT-OSS 120B:** Production. Tool Use, Browser Search, Code Execution, JSON Object Mode, JSON Schema Mode, Reasoning.
- **GPT-OSS Safeguard 20B:** Preview; safety classifier.
- **Qwen3.8 27B:** Preview. Tool Use, JSON Object Mode, JSON Schema Mode, Reasoning, Vision.

## Official sources

- [Rate limits](https://console.groq.com/docs/rate-limits) <sub>2026-09-26</sub>
- [Supported models](https://console.groq.com/docs/models) <sub>2026-09-26</sub>
- [Model deprecations](https://console.groq.com/docs/deprecations) <sub>2026-09-26</sub>
- [Services agreement (no training on inputs/outputs)](https://console.groq.com/docs/legal/services-agreement) <sub>2026-09-26</sub>
- [gpt-oss-120b model page](https://console.groq.com/docs/model/openai/gpt-oss-120b) <sub>2026-09-26</sub>
- [Groq Customer Data Processing Addendum](https://console.groq.com/docs/legal/customer-data-processing-addendum) <sub>2026-09-26</sub>
- [Groq legal index](https://console.groq.com/docs/legal) <sub>2026-09-26</sub>

---

<sub>Generated from [`data/providers.json`](../../data/providers.json). Edit the data, not this file.</sub>
