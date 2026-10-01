# 🇺🇸 Cloudflare Workers AI (Neurons)

[← All providers](../../README.md#-image-generation) · 🎨 Image generation

![status](https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2FIdoY12%2Fawesome-free-ai-apis%2Fmain%2Fbadges%2Fcloudflare-workers-ai-image.json&cacheSeconds=3600) <sub>live: n/a · docs: unknown</sub> <sub>🟢 verified · last verified 2026-09-26</sub>

> **Same 10,000 Neurons/day: FLUX.1 schnell (≈4.8 neurons per 512² tile + 9.6/step), SDXL, Whisper, TTS, embeddings**

10,000 Neurons per day free on both Free and Paid plans; over the limit requests fail (Free) or bill at $0.011/1k Neurons (Paid). Covers image gen, STT, TTS, embeddings, reranking, guard, translation, image-to-text.

**Website:** <https://developers.cloudflare.com/workers-ai/>  
**Get a key:** <https://dash.cloudflare.com/profile/api-tokens>  
**Base URL:** `https://api.cloudflare.com/client/v4/accounts/{account_id}/ai/v1` · OpenAI-compatible: ✅

| API key | Credit card | Trains on your data | Commercial use | DPA / GDPR | Hosting |
|:--|:--|:--|:--|:--|:--|
| 🔑 Yes | ⚪ Unclear | 🟢 No | 🟢 Yes | 🟢 Yes | Global edge |

## Limits

10,000 Neurons/day (resets daily). Neuron costs: flux-1-schnell '4.80 neurons per 512x512 tile' + '9.60 neurons per step'; whisper 41.14/audio-min; whisper-large-v3-turbo 46.63/audio-min; nova-3 472.73/audio-min; melotts 18.63/audio-min; aura-1 1,363.64 per 1k chars; bge-m3 1,075 per M tokens; bge-small 1,841; bge-base 6,058; bge-large 18,582; bge-reranker-base 283 per M tokens; llama-guard-3-8b 44,003 per M input tokens; m2m100-1.2b 31,050 per M tokens.

## What the free tier covers

- **@cf/black-forest-labs/flux-1-schnell**: image
- **flux-2-dev / flux-2-klein-4b / flux-2-klein-9b**: image
- **stable-diffusion-xl-base-1.0 / sdxl-lightning / dreamshaper-8-lcm / lucid-origin / phoenix-1.0**: image; not in pricing table
- **whisper / whisper-large-v3-turbo / whisper-tiny-en / nova-3 / flux (ASR)**: STT
- **melotts / aura-1 / aura-2-en / aura-2-es**: TTS
- **bge-small/base/large-en-v1.5, bge-m3, embeddinggemma-300m, qwen3-embedding-0.6b, plamo-embedding-1b**: embeddings
- **bge-reranker-base**: reranking
- **llama-guard-3-8b**: moderation
- **m2m100-1.2b, indictrans2-en-indic-1B**: translation
- **llava-1.5-7b-hf, moondream3.1-9B-A2B**: image-to-text

## Fine print

- **Training:** 'Cloudflare does not use your Customer Content to (1) train any AI models made available on Workers AI or (2) improve any Cloudflare or third-party services'.
- **DPA / GDPR:** Self-Serve Subscription Agreement 6.1: Cloudflare's Data Processing Addendum 'is hereby incorporated by reference into this Agreement'.
- **Retention:** Workers AI does not store Customer Content unless you use a storage service (R2, KV, DO, Vectorize)
- **Hosting:** Cloudflare global network (not documented per model); DPA anticipates processing outside EEA/UK/CH
- **Notes:** Single entry spanning categories image_generation, stt, tts, embeddings, reranking, moderation, translation, vision_other. Some models (Kimi, DeepSeek variants) require a paid billing method. Credit-card requirement for Workers Free plan not stated on pricing page.

## Official sources

- [Workers AI pricing](https://developers.cloudflare.com/workers-ai/platform/pricing/) <sub>2026-09-26</sub>
- [Workers AI models catalog](https://developers.cloudflare.com/workers-ai/models/) <sub>2026-09-26</sub>
- [Workers AI data usage](https://developers.cloudflare.com/workers-ai/platform/data-usage/) <sub>2026-09-26</sub>
- [Cloudflare Service-Specific Terms: Developer Platform](https://www.cloudflare.com/service-specific-terms-developer-platform/) <sub>2026-09-26</sub>
- [Cloudflare Self-Serve Subscription Agreement](https://www.cloudflare.com/terms/) <sub>2026-09-26</sub>
- [Cloudflare Customer DPA](https://www.cloudflare.com/cloudflare-customer-dpa/) <sub>2026-09-26</sub>

---

<sub>Generated from [`data/providers.json`](../../data/providers.json). Edit the data, not this file.</sub>
