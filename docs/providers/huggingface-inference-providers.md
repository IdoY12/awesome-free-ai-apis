# 🇺🇸 Hugging Face Inference Providers

[← All providers](../../README.md#-text--chat-llms) · 💬 Text & chat LLMs

![status](https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2FIdoY12%2Fawesome-free-ai-apis%2Fmain%2Fbadges%2Fhuggingface-inference-providers.json&cacheSeconds=3600) <sub>live: skipped · docs: unknown</sub> <sub>🟡 partial · last verified 2026-09-26</sub>

> **$0.10/month of Inference Provider credit (tiny; routes to 18 providers)**

Free users get '$0.10, subject to change' in monthly credits spendable on Inference Providers; PRO $2.00/month; Team/Enterprise $2.00 per seat. Beyond credits: 'credits purchase required'. Custom provider keys (BYOK) do not use credits.

**Website:** <https://huggingface.co/docs/inference-providers>  
**Get a key:** <https://huggingface.co/settings/tokens>  
**Base URL:** `https://router.huggingface.co/v1` · OpenAI-compatible: ✅

| API key | Credit card | Trains on your data | Commercial use | DPA / GDPR | Hosting |
|:--|:--|:--|:--|:--|:--|
| 🔑 Yes | 🟢 No | 🟢 No | 🟢 Yes | 🟢 Yes | Varies (upstream) |

## Limits

No RPM figure published; usage is metered against the $0.10 monthly credit at each provider's price.

## Models

| Model | ID | Context | Max out | Modality | Tools | JSON | Vision | Reason | Rate limit |
|:--|:--|--:|--:|:--|:-:|:-:|:-:|:-:|:--|
| Any Inference-Providers model, e.g. `openai/gpt-oss-120b`, `Qwen/Qwen3-…`, `meta-llama/Llama-…` (append `:provider` to pin a host) | <sub>not published</sub> | — | — | text / multimodal | · | · | · | · | $0.10/month credit |

<sub>Tools = tool calling · JSON = structured output · Vision = image input · Reason = reasoning model. ✅ documented · — no · · unknown.</sub>

## Fine print

- **Training:** (HF routing only) 'Hugging Face does not store any user data for training purposes. We do not store the request body or response when routing requests through Hugging Face.' Routed providers' own policies apply.
- **Commercial use:** Pricing page: free credits usable on Inference Providers; 'All users can continue using the API after exhausting their monthly credits ... for production workloads'. No non-commercial clause.
- **DPA / GDPR:** 'GDPR data processing agreements are available through an Enterprise Plan' (Hub security docs) -- paid plan only.
- **Retention:** 'Logs are kept for debugging purposes for up to 30 days, but no user data or tokens are stored.'
- **Hosting:** HF servers in the US ('The Company and its servers are located in the United States'); inference runs at the routed provider
- **Notes:** Matches earlier circulated lists. $0.10/month is tiny (a few hundred K tokens on cheap models).

## Model notes

- **Any Inference-Providers model, e.g. `openai/gpt-oss-120b`, `Qwen/Qwen3-…`, `meta-llama/Llama-…` (append `:provider` to pin a host):** Public AI provider usage was 'free of charge' at time of its launch blog.

## Official sources

- [Pricing and billing](https://huggingface.co/docs/inference-providers/pricing) <sub>2026-09-26</sub>
- [Inference Providers index](https://huggingface.co/docs/inference-providers/index) <sub>2026-09-26</sub>
- [Public AI on Inference Providers (blog)](https://huggingface.co/blog/inference-providers-publicai) <sub>2026-09-26</sub>
- [Inference Providers: Security & Compliance](https://huggingface.co/docs/inference-providers/en/security) <sub>2026-09-26</sub>
- [Inference Providers pricing](https://huggingface.co/docs/inference-providers/en/pricing) <sub>2026-09-26</sub>
- [Hub security](https://huggingface.co/docs/hub/security) <sub>2026-09-26</sub>
- [Hugging Face Privacy Policy](https://huggingface.co/privacy) <sub>2026-09-26</sub>

---

<sub>Generated from [`data/providers.json`](../../data/providers.json). Edit the data, not this file.</sub>
