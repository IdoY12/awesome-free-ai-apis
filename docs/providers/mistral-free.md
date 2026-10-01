# 🇫🇷 Mistral AI (embed / OCR / moderation)

[← All providers](../../README.md#-embeddings--reranking) · 🧭 Embeddings & reranking

![status](https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2FIdoY12%2Fawesome-free-ai-apis%2Fmain%2Fbadges%2Fmistral-free.json&cacheSeconds=3600) <sub>live: n/a · docs: unknown</sub> <sub>🟡 partial · last verified 2026-09-26</sub>

> **mistral-embed, mistral-ocr, mistral-moderation under the Experiment plan; limits in console only**

Free mode enabled by default 'with limited rate limits, intended for evaluation and prototyping'; exact limits shown only in Admin Console. Pricing page also shows a Free plan with '$10 /mo in API credits'.

**Website:** <https://mistral.ai>  
**Get a key:** <https://console.mistral.ai/api-keys>  
**Base URL:** `https://api.mistral.ai/v1` · OpenAI-compatible: ✅

| API key | Credit card | Trains on your data | Commercial use | DPA / GDPR | Hosting |
|:--|:--|:--|:--|:--|:--|
| 🔑 Yes | 🟢 No | 🟡 Opt-out | ⚪ Unclear | 🟢 Yes | EU |

## What the free tier covers

- **mistral-embed / codestral-embed**
- **mistral-ocr**: priced per 1,000 pages
- **mistral-moderation**

## Fine print

- **Training:** Free mode (Studio): 'we may use your data (input and output) to train our artificial intelligence models'; users 'have the right to opt out at any time' via account control. Commercial ToS 4.2: no training except when not opted out on opt-in-by-default products.
- **Commercial use:** No prohibition found; docs: free tier 'designed to allow you to try and explore our API' and 'For actual projects and production use, we recommend upgrading to a higher tier.'
- **DPA / GDPR:** Public Data Processing Addendum at legal.mistral.ai; Commercial ToS 12.3: 'the Data Processing Agreement ... will apply between the Parties' when Mistral processes personal data on Mistral infrastructure.
- **Retention:** Input/Output kept 'for thirty (30) rolling days to monitor abuse (unless zero data retention is activated)'; Agents API data kept until account termination
- **Hosting:** EU by default ('your data is hosted in the European Union'); US endpoint optional ('explicitly use our US API endpoint')
- **Notes:** Whether embed/OCR/moderation endpoints are included in free mode is not stated. Limits null on purpose.

## Official sources

- [Mistral usage and limits](https://docs.mistral.ai/admin/user-management-finops/tier) <sub>2026-09-26</sub>
- [Mistral pricing](https://mistral.ai/pricing/) <sub>2026-09-26</sub>
- [Mistral Privacy Policy](https://legal.mistral.ai/terms/privacy-policy) <sub>2026-09-26</sub>
- [Mistral Commercial Terms of Service](https://legal.mistral.ai/terms/commercial-terms-of-service) <sub>2026-09-26</sub>
- [Mistral Data Processing Addendum](https://legal.mistral.ai/terms/data-processing-addendum) <sub>2026-09-26</sub>
- [Help: Do you use my user data to train your AI models?](https://help.mistral.ai/en/articles/347617-do-you-use-my-user-data-to-train-your-artificial-intelligence-models) <sub>2026-09-26</sub>
- [Help: Where do you store my data?](https://help.mistral.ai/en/articles/347629-where-do-you-store-my-data-or-my-organization-s-data) <sub>2026-09-26</sub>
- [Mistral docs: tiers](https://docs.mistral.ai/deployment/laplateforme/tier/) <sub>2026-09-26</sub>

---

<sub>Generated from [`data/providers.json`](../../data/providers.json). Edit the data, not this file.</sub>
