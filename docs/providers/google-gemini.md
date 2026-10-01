# 🇺🇸 Google Gemini API

[← All providers](../../README.md#-text--chat-llms) · 💬 Text & chat LLMs

![status](https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2FIdoY12%2Fawesome-free-ai-apis%2Fmain%2Fbadges%2Fgoogle-gemini.json&cacheSeconds=3600) <sub>live: skipped · docs: ok</sub> <sub>🟡 partial · last verified 2026-09-26</sub>

> **Gemini Flash / Flash-Lite family free of charge; per-project limits visible only in AI Studio**

Free usage tier ('Free' usage tier) with per-model RPM/TPM/RPD limits that are no longer published on the docs page; current limits are shown in AI Studio (aistudio.google.com/rate-limit). Most Flash / Flash-Lite / TTS / Live models are 'Free of charge' on the free tier; Pro and image models are 'Not available' on the free tier.

**Website:** <https://ai.google.dev/>  
**Get a key:** <https://aistudio.google.com/apikey>  
**Base URL:** `https://generativelanguage.googleapis.com/v1beta` · OpenAI-compatible: 🟡 partial

| API key | Credit card | Trains on your data | Commercial use | DPA / GDPR | Hosting |
|:--|:--|:--|:--|:--|:--|
| 🔑 Yes · 🪪 Google account; must be 18+ and may need to verify age on the Google Account (available-regions page). | 🟢 No | 🔴 Yes | 🟢 Yes | 🟢 Yes | Global (Google) |

## Limits

Not published per model on the docs page as of 2026-09-26: 'Rate limits depend on a variety of factors (such as your usage tier) and can be viewed in Google AI Studio'. Limits are per project (not per key); RPD resets at midnight Pacific. Free tier: spend-based limit N/A. Tier 1 requires linking a billing account.

## Models

| Model | ID | Context | Max out | Modality | Tools | JSON | Vision | Reason | Rate limit |
|:--|:--|--:|--:|:--|:-:|:-:|:-:|:-:|:--|
| Gemini 3.8 Flash | `gemini-3.8-flash` | 1M | 64K | text, image, video, audio,… | ✅ | ✅ | ✅ | ✅ | see AI Studio |
| Gemini 3.7 Flash | `gemini-3.7-flash` | — | — | multimodal -> text | ✅ | ✅ | ✅ | ✅ | see AI Studio |
| Gemini 3.6 Flash | `gemini-3.6-flash` | — | — | multimodal -> text | ✅ | ✅ | ✅ | ✅ | see AI Studio |
| Gemini 3.5 Flash | `gemini-3.5-flash` | 1M | 64K | multimodal -> text | ✅ | ✅ | ✅ | ✅ | see AI Studio |
| Gemini 3.5 Flash-Lite | `gemini-3.5-flash-lite` | 1M | 64K | text, image, video, audio,… | ✅ | ✅ | ✅ | ✅ | see AI Studio |
| Gemini 3.1 Flash-Lite | `gemini-3.1-flash-lite` | 1M | 64K | text, image, video, audio,… | ✅ | ✅ | ✅ | ✅ | see AI Studio |
| Gemini 3 Flash Preview | `gemini-3-flash-preview` | — | — | multimodal -> text | ✅ | ✅ | ✅ | ✅ | see AI Studio |

<sub>Tools = tool calling · JSON = structured output · Vision = image input · Reason = reasoning model. ✅ documented · — no · · unknown.</sub>

## Fine print

- **Training:** Unpaid Services: 'Google uses the content you submit ... to provide, improve, and develop Google products' (free tier only; paid tier 'No'). EXCEPTION: EEA/Switzerland/UK users get Paid Services data terms on unpaid quota.
- **Commercial use:** No prohibition; terms say use 'is for developers building with Google AI models for professional or business purposes, not for consumer use'. Terms also say 'Do not submit sensitive, confidential, or personal information to the Unpaid Services.'
- **DPA / GDPR:** Paid Services processed 'in accordance with the Data Processing Addendum for Products Where Google is a Data Processor'; for EEA/CH/UK users those Paid Services data terms apply to unpaid quota too. Outside those regions the DPA does not apply to the free tier.
- **Retention:** 55 days abuse monitoring (prompts, context, outputs; human review of flagged content); Grounding with Google Search/Maps stores prompts+output 30 days
- **Hosting:** not stated; 'may be stored transiently or cached in any country in which Google or its agents maintain facilities'
- **Alt endpoint:** OpenAI-compatible: https://generativelanguage.googleapis.com/v1beta/openai/
- **Notes:** Change vs. earlier lists: the public per-model free-tier table (15-30 RPM, 1,500 RPD etc.) is gone from the docs; only AI Studio shows your project's live limits. Model generation is now Gemini 3.x (3.5/3.6/3.7/3.8 Flash); 2.x models are no longer on the pricing page. Live and TTS models are listed under Speech.

## Model notes

- **Gemini 3.8 Flash:** Free of charge on free tier; 'Used to improve our products: Yes'.
- **Gemini 3.5 Flash:** '1M token context window, 65k max output tokens' (whats-new page). Free of charge on free tier.
- **Gemini 3 Flash Preview:** Preview; free of charge on free tier.

## Official sources

- [Gemini API rate limits](https://ai.google.dev/gemini-api/docs/rate-limits) <sub>2026-09-26</sub>
- [Gemini API pricing (Free tier column)](https://ai.google.dev/gemini-api/docs/pricing) <sub>2026-09-26</sub>
- [Gemini models](https://ai.google.dev/gemini-api/docs/models) <sub>2026-09-26</sub>
- [Gemini 3.8 Flash model page](https://ai.google.dev/gemini-api/docs/models/gemini-3.8-flash) <sub>2026-09-26</sub>
- [Gemini API additional terms (Unpaid Services data use; EEA/UK/CH exception)](https://ai.google.dev/gemini-api/terms) <sub>2026-09-26</sub>
- [Available regions](https://ai.google.dev/gemini-api/docs/available-regions) <sub>2026-09-26</sub>
- [Gemini API abuse monitoring](https://ai.google.dev/gemini-api/docs/abuse-monitoring) <sub>2026-09-26</sub>

---

<sub>Generated from [`data/providers.json`](../../data/providers.json). Edit the data, not this file.</sub>
