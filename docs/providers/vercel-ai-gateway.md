# 🇺🇸 Vercel AI Gateway

[← All providers](../../README.md#-text--chat-llms) · 💬 Text & chat LLMs

![status](https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2FIdoY12%2Fawesome-free-ai-apis%2Fmain%2Fbadges%2Fvercel-ai-gateway.json&cacheSeconds=3600) <sub>live: n/a · docs: ok</sub> <sub>🟢 verified · last verified 2026-09-26</sub>

> **Monthly free credit on Hobby teams (card required); only a few free-tier models**

'The free tier is a monthly included credit, not an expiring trial. It covers a subset of models with lower per-model rate limits.' Amount of the monthly credit is not stated in the docs (third parties say $5). A valid payment method must be added before free credits can be used (403 customer_verification_required).

**Website:** <https://vercel.com/ai-gateway>  
**Get a key:** <https://vercel.com/d?to=/[team]/~/ai-gateway/api-keys>  
**Base URL:** `https://ai-gateway.vercel.sh/v1` · OpenAI-compatible: ✅

| API key | Credit card | Trains on your data | Commercial use | DPA / GDPR | Hosting |
|:--|:--|:--|:--|:--|:--|
| 🔑 Yes · 🪪 Payment method on the Vercel team ('customer_verification_required'). | 💳 Yes | 🟢 No | 🟢 Yes | ⚪ Unclear | Varies (upstream) |

## Limits

Free tier: 'Lower limit per model' — numbers not published ('Limits can change, so this page describes behavior rather than fixed numbers'). Paid tier: no AI Gateway limits.

## Models

| Model | ID | Context | Max out | Modality | Tools | JSON | Vision | Reason | Rate limit |
|:--|:--|--:|--:|:--|:-:|:-:|:-:|:-:|:--|
| Free-tier-eligible subset (4 models on 2026-09-26) | `stealth/pixel-canary, inclusionai/ling-3.0-flash-sante, inc…` | — | — | text | · | · | · | · | lower per-model limits |

<sub>Tools = tool calling · JSON = structured output · Vision = image input · Reason = reasoning model. ✅ documented · — no · · unknown.</sub>

## Fine print

- **Training:** (gateway) — 'Vercel does not train on your prompts, and AI Gateway itself does not retain prompt or response content'. Upstream provider policies apply; ZDR / disallow-prompt-training controls are Pro/Enterprise features.
- **Hosting:** varies by upstream provider (regional inference controls on paid plans)
- **Notes:** NEW vs earlier circulated lists. Borderline: permanent monthly credit, but a card must be on file and the free catalog is tiny.

## Model notes

- **Free-tier-eligible subset (4 models on 2026-09-26):** Browse https://vercel.com/ai-gateway/models?freeTier=true.

## Official sources

- [AI Gateway pricing (free and paid tiers)](https://vercel.com/docs/ai-gateway/pricing) <sub>2026-09-26</sub>
- [AI Gateway FAQ (free tier not a trial; payment method required; no training)](https://vercel.com/docs/ai-gateway/faq) <sub>2026-09-26</sub>
- [AI Gateway rate limits](https://vercel.com/docs/ai-gateway/rate-limits) <sub>2026-09-26</sub>
- [Free tier models](https://vercel.com/ai-gateway/models?freeTier=true) <sub>2026-09-26</sub>

---

<sub>Generated from [`data/providers.json`](../../data/providers.json). Edit the data, not this file.</sub>
