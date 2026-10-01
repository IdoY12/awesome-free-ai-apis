# 🇺🇸 Hugging Face Inference Providers

[← All providers](../../README.md#-image-generation) · 🎨 Image generation

![status](https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2FIdoY12%2Fawesome-free-ai-apis%2Fmain%2Fbadges%2Fhuggingface-inference-providers-image.json&cacheSeconds=3600) <sub>live: skipped · docs: unknown</sub> <sub>🟢 verified · last verified 2026-09-26</sub>

> **$0.10/month credit spendable on text-to-image, embeddings, ASR/TTS via routed providers**

Every free HF user receives monthly credits ($0.10, 'subject to change') to spend on Inference Providers across tasks (text-to-image, feature-extraction/embeddings, chat, text-to-video, and others).

**Website:** <https://huggingface.co/docs/inference-providers>  
**Get a key:** <https://huggingface.co/settings/tokens>  
**Base URL:** `https://router.huggingface.co/v1` · OpenAI-compatible: ✅

| API key | Credit card | Trains on your data | Commercial use | DPA / GDPR | Hosting |
|:--|:--|:--|:--|:--|:--|
| 🔑 Yes | 🟢 No | 🟢 No | 🟢 Yes | 🟢 Yes | Varies (upstream) |

## Limits

$0.10 per month for Free users (PRO: $2.00/month; Team/Enterprise: $2.00 per seat). Rate limits not published on pricing page.

## What the free tier covers

- **text-to-image (e.g. FLUX.1-dev via fal/replicate/hf-inference)**
- **feature-extraction (embeddings)**
- **text-ranking / text-classification models**: mentioned
- **ASR / TTS**: not confirmed in fetched pricing docs

## Fine print

- **Training:** (HF routing only) 'Hugging Face does not store any user data for training purposes. We do not store the request body or response when routing requests through Hugging Face.' Routed providers' own policies apply.
- **Commercial use:** Pricing page: free credits usable on Inference Providers; 'All users can continue using the API after exhausting their monthly credits ... for production workloads'. No non-commercial clause.
- **DPA / GDPR:** 'GDPR data processing agreements are available through an Enterprise Plan' (Hub security docs) -- paid plan only.
- **Retention:** 'Logs are kept for debugging purposes for up to 30 days, but no user data or tokens are stored.'
- **Hosting:** HF servers in the US ('The Company and its servers are located in the United States'); inference runs at the routed provider
- **Notes:** Credit is tiny; ZeroGPU Spaces are a separate free GPU allowance. Also relevant to embeddings/reranking categories.

## Official sources

- [Inference Providers pricing](https://huggingface.co/docs/inference-providers/pricing) <sub>2026-09-26</sub>
- [HF pricing](https://huggingface.co/pricing) <sub>2026-09-26</sub>
- [Inference Providers: Security & Compliance](https://huggingface.co/docs/inference-providers/en/security) <sub>2026-09-26</sub>
- [Inference Providers pricing](https://huggingface.co/docs/inference-providers/en/pricing) <sub>2026-09-26</sub>
- [Hub security](https://huggingface.co/docs/hub/security) <sub>2026-09-26</sub>
- [Hugging Face Privacy Policy](https://huggingface.co/privacy) <sub>2026-09-26</sub>

---

<sub>Generated from [`data/providers.json`](../../data/providers.json). Edit the data, not this file.</sub>
