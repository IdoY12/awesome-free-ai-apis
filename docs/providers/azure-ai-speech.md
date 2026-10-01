# 🇺🇸 Azure AI Speech (F0)

[← All providers](../../README.md#-speech-to-text) · 🎙️ Speech-to-text

![status](https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2FIdoY12%2Fawesome-free-ai-apis%2Fmain%2Fbadges%2Fazure-ai-speech.json&cacheSeconds=3600) <sub>live: n/a · docs: ok</sub> <sub>🟡 partial · last verified 2026-09-26</sub>

> **F0: 5 audio-hours/month real-time STT (1 concurrent) + 5 h speech translation**

Free F0 tier with monthly allowances for STT and neural TTS; throttled (HTTP 429), never billed, when exceeded.

**Website:** <https://azure.microsoft.com/pricing/details/speech/>  
**Get a key:** <https://portal.azure.com>  
**Base URL:** `https://{region}.api.cognitive.microsoft.com/` · OpenAI-compatible: ❌

| API key | Credit card | Trains on your data | Commercial use | DPA / GDPR | Hosting |
|:--|:--|:--|:--|:--|:--|
| 🔑 Yes | ⚪ Unclear | ⚪ Unclear | 🟢 Yes | 🟢 Yes | Selectable Azure regions |

## Limits

Official Azure Speech pricing page, Free (F0): Speech to text 'Real-time Transcription: 5 audio hours free per month' (Standard; Custom also 5 hours + 'Endpoint hosting: 1 model free per month'; 'Free audio hours for speech to text is shared between Standard and Custom, Batch is not supported'). Text to speech: '0.5 million characters free per month' (Neural voices). Speech translation: '5 audio hours free per month'. Quotas page: F0 real-time STT 1 concurrent request; TTS 20 transactions/60 s; F0 quotas not adjustable; fast/batch transcription, batch synthesis, custom/personal voice, avatars, Voice Live not available on F0.

## What the free tier covers

- **Speech to text (real-time)**
- **Neural text to speech**
- **Batch transcription**: not on F0
- **Custom voice / Voice Live**: not on F0

## Fine print

- **Hosting:** Azure regions
- **Notes:** Also a TTS entry. Azure pricing page itself could not be fetched; STT hour allowance left null. Azure subscription sign-up normally needs a card (not verified).

## Official sources

- [Speech quotas and limits](https://learn.microsoft.com/en-us/azure/ai-services/speech-service/speech-services-quotas-and-limits) <sub>2026-09-26</sub>
- [Microsoft Q&A: what happens after free tier exceeds](https://learn.microsoft.com/en-us/answers/questions/5566384/azure-ai-speech-what-happens-after-free-tier-t0-ex) <sub>2026-09-26</sub>
- [Microsoft Q&A: 0.5M characters free F0](https://learn.microsoft.com/en-us/answers/questions/1654938/text-to-speech-s0-standard-tier-0-5-million-charac) <sub>2026-09-26</sub>
- [azure.microsoft.com/en-us/pricing/details/cognitive-services/speech-se](https://azure.microsoft.com/en-us/pricing/details/cognitive-services/speech-services/) <sub>2026-09-26</sub>

---

<sub>Generated from [`data/providers.json`](../../data/providers.json). Edit the data, not this file.</sub>
