# 🇺🇸 NVIDIA NIM

[← All providers](../../README.md#-text--chat-llms) · 💬 Text & chat LLMs

![status](https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2FIdoY12%2Fawesome-free-ai-apis%2Fmain%2Fbadges%2Fnvidia-nim.json&cacheSeconds=3600) <sub>live: skipped · docs: ok</sub> <sub>🟠 community-sourced · last verified 2026-09-26</sub>

> **Free with NVIDIA Developer account; ~40 RPM per staff forum post — limits not officially published**

'Free serverless APIs for development' (build.nvidia.com). NVIDIA does not publish per-model limits; staff on the developer forum describe a 40 RPM trial rate limit and state 'We do not plan to publish specific model limits'. Older forum posts describe 1,000 sign-up credits (5,000 with business email); current forum threads reference the same figures but no official page confirms credits or expiry.

**Website:** <https://build.nvidia.com/>  
**Get a key:** <https://build.nvidia.com/settings/api-keys>  
**Base URL:** `https://integrate.api.nvidia.com/v1` · OpenAI-compatible: ✅

| API key | Credit card | Trains on your data | Commercial use | DPA / GDPR | Hosting |
|:--|:--|:--|:--|:--|:--|
| 🔑 Yes · 🪪 NVIDIA developer account (business email unlocks more credits per 2024 staff post). | 🟢 No | ⚪ Unclear | ⚪ Unclear | ⚪ Unclear | Not stated |

## Limits

Not officially documented. Forum (NVIDIA staff): ~40 requests/min for trial APIs; 'There is no official way to circumvent this rate limit or to receive a rate limit increase on that same tier.'

## Models

| Model | ID | Context | Max out | Modality | Tools | JSON | Vision | Reason | Rate limit |
|:--|:--|--:|--:|:--|:-:|:-:|:-:|:-:|:--|
| Full catalog (100+ models): Nemotron 3 family, Llama 3.x/4, Qwen, DeepSeek, GPT-OSS, Mistral | <sub>not published</sub> | — | — | text / multimodal | · | · | · | · | ~40 RPM (forum) |

<sub>Tools = tool calling · JSON = structured output · Vision = image input · Reason = reasoning model. ✅ documented · — no · · unknown.</sub>

## Fine print

- **Training:** NVIDIA Technology Access Terms: 'NVIDIA may collect data, such as the NVIDIA Content you have downloaded or NVIDIA Services you have accessed ... for improving NVIDIA products and services' (usage data). Resellers (Kilo, OpenCode) reproduce an NVIDIA notice: 'Your use is logged for security purposes and to improve NVIDIA products and services' -- not verifiable on nvidia.com (pages JS-only).
- **Commercial use:** Terms: 'NVIDIA may offer free or discounted pricing programs for the Technology for trial, evaluation or academic use.'
- **DPA / GDPR:** NVIDIA Cloud Services DPA exists but Appendix 3 lists DGX Cloud, Brev and Omniverse on DGX Cloud only; API catalog / build.nvidia.com not listed.
- **Hosting:** not stated for API catalog; privacy policy: 'in most cases we need to securely transfer and store your information in the United States'
- **Notes:** Qualifies only on the basis of NVIDIA's own 'free serverless APIs for development' wording + staff forum statements; the '10,000 RPD' in the earlier circulated lists is not on any official page. Whether credits are finite (trial) or unlimited is not officially documented — flag as 'permanence unverified'.

## Model notes

- **Full catalog (100+ models): Nemotron 3 family, Llama 3.x/4, Qwen, DeepSeek, GPT-OSS, Mistral:** Catalog page could not be enumerated by the fetcher; list is dynamic.

## Official sources

- [build.nvidia.com discover ('Free serverless APIs for development')](https://build.nvidia.com/explore/discover) <sub>2026-09-26</sub>
- [NVIDIA forum: Model limits (staff: limits not published; 40 RPM)](https://forums.developer.nvidia.com/t/model-limits/331075) <sub>2026-09-26</sub>
- [NVIDIA forum: API credits for build.nvidia.com (staff, 2024: 1,000 credits, up to 5,000)](https://forums.developer.nvidia.com/t/api-credits-for-build-nvidia-com/306633/2) <sub>2026-09-26</sub>
- [NVIDIA forum: rate limit increase request (moderator: no increase on free tier)](https://forums.developer.nvidia.com/t/request-for-nvidia-nim-api-rate-limit-increase-40-to-200-rpm/374542) <sub>2026-09-26</sub>
- [NVIDIA Technology Access Terms of Use](https://developer.nvidia.com/legal/terms) <sub>2026-09-26</sub>
- [NVIDIA Cloud Services Data Processing Addendum](https://www.nvidia.com/en-us/agreements/data-processing-addendum/nvidia-cloud-services-data-processing-addendum/) <sub>2026-09-26</sub>
- [NVIDIA Privacy Policy](https://www.nvidia.com/en-us/about-nvidia/privacy-policy/) <sub>2026-09-26</sub>

---

<sub>Generated from [`data/providers.json`](../../data/providers.json). Edit the data, not this file.</sub>
