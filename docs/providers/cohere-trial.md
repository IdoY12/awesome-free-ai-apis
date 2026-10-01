# 🇨🇦 Cohere (Trial key)

[← All providers](../../README.md#-embeddings--reranking) · 🧭 Embeddings & reranking

![status](https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2FIdoY12%2Fawesome-free-ai-apis%2Fmain%2Fbadges%2Fcohere-trial.json&cacheSeconds=3600) <sub>live: skipped · docs: ok</sub> <sub>🟢 verified · last verified 2026-09-26</sub>

> **Trial key: 1,000 calls/month; Embed 2,000 inputs/min, Rerank 10 RPM — not for production**

Free rate-limited trial key for every user; 1,000 API calls/month across endpoints; not for production.

**Website:** <https://cohere.com>  
**Get a key:** <https://dashboard.cohere.com/api-keys>  
**Base URL:** `https://api.cohere.com/v2` · OpenAI-compatible: ❌

| API key | Credit card | Trains on your data | Commercial use | DPA / GDPR | Hosting |
|:--|:--|:--|:--|:--|:--|
| 🔑 Yes | 🟢 No | 🔴 Yes | ⚪ Unclear | 🟢 Yes | US (GCP) |

## Limits

Trial keys 'limited to 1,000 API calls a month'. Per-minute: Embed 2,000 inputs/min (rate-limits page; FAQ says 5 calls/min), Embed images 5 inputs/min, EmbedJob 5 req/min, Rerank 10 req/min, Chat 20 req/min, Tokenize 100 req/min.

## What the free tier covers

- **embed-v4.0 / embed-multilingual-v3**: embeddings
- **rerank-v3.5**: reranking
- **Classify, Parse**: also rate-limited

## Fine print

- **Training:** Privacy Policy: trial inputs/outputs may be used 'to conduct research and development'; trial users are told not to submit personal information. The dashboard opt-out is documented only under Enterprise Data Commitments for paying customers.
- **Commercial use:** No non-commercial clause found; Terms of Use forbid 'personal, family or household purposes' only; docs describe trial keys as evaluation keys.
- **DPA / GDPR:** On request: 'Contact privacy@cohere.com if you are a SaaS Platform customer and need a Data Processing Addendum'; Privacy Policy: 'Enterprise Users ... can request a DPA'.
- **Retention:** 'We automatically delete logged prompts and generations after 30 days' (Enterprise Data Commitments); zero data retention available on approval
- **Hosting:** US (GCP) per privacy policy ('cloud infrastructure provided by GCP in the United States')
- **Notes:** Docs: production keys needed 'for serving Cohere in a public-facing application'; commercial_use_allowed set false on that basis. Also a reranking entry.

## Official sources

- [Cohere rate limits](https://docs.cohere.com/docs/rate-limits) <sub>2026-09-26</sub>
- [Cohere FAQ](https://docs.cohere.com/docs/cohere-faqs) <sub>2026-09-26</sub>
- [Going live](https://docs.cohere.com/docs/going-live) <sub>2026-09-26</sub>
- [cohere.com/terms-of-use](https://cohere.com/terms-of-use) <sub>2026-09-26</sub>
- [Cohere Privacy Policy](https://cohere.com/privacy) <sub>2026-09-26</sub>
- [Cohere Enterprise Data Commitments](https://cohere.com/enterprise-data-commitments) <sub>2026-09-26</sub>
- [Cohere Security](https://cohere.com/security) <sub>2026-09-26</sub>

---

<sub>Generated from [`data/providers.json`](../../data/providers.json). Edit the data, not this file.</sub>
