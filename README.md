<div align="center">

<a href="https://github.com/IdoY12/awesome-free-ai-apis"><img src="media/banner.svg" alt="Awesome Free AI APIs" width="100%"></a>

**Every AI API with a *permanent* free tier: checked against official docs, re-checked daily, with the data-policy fine print.**

[![Awesome](https://awesome.re/badge-flat2.svg)](https://awesome.re)
![Providers](https://img.shields.io/badge/providers-79-8b5cf6?style=flat-square)
[![Live checks](https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2FIdoY12%2Fawesome-free-ai-apis%2Fmain%2Fbadges%2F_summary.json&style=flat-square)](docs/verification.md)
[![License: CC0](https://img.shields.io/badge/license-CC0--1.0-lightgrey?style=flat-square)](LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/IdoY12/awesome-free-ai-apis?style=flat-square&color=f59e0b)](https://github.com/IdoY12/awesome-free-ai-apis/stargazers)

</div>

- **Primary sources only.** Every number links to the provider's own pricing, rate-limit or terms page. Click a provider for its limits, models and sources.
- **Checked every day.** A GitHub Action calls each API or pings its docs, and the status column goes red when something breaks.
- **The fine print is a column.** Does the free tier train on your prompts? Is commercial use allowed? Is a DPA offered? Where is it hosted?

Only tiers that renew (per day or per month) for as long as the account exists are listed. One-time credits and trials are in the [Graveyard](docs/graveyard.md).

## Contents

- [💬 Text & chat LLMs](#-text--chat-llms) <sub>24</sub>
- [🎨 Image generation](#-image-generation) <sub>3</sub>
- [🎙️ Speech-to-text](#-speech-to-text) <sub>4</sub>
- [🔊 Text-to-speech](#-text-to-speech) <sub>8</sub>
- [🧭 Embeddings & reranking](#-embeddings--reranking) <sub>4</sub>
- [🗄️ Vector databases](#-vector-databases) <sub>11</sub>
- [🔎 Web search, scraping & crawling](#-web-search-scraping--crawling) <sub>11</sub>
- [📄 OCR & document parsing](#-ocr--document-parsing) <sub>4</sub>
- [🛡️ Moderation & safety](#-moderation--safety) <sub>3</sub>
- [🌍 Translation](#-translation) <sub>3</sub>
- [👁️ Vision & other](#-vision--other) <sub>4</sub>
- More: [☠️ Graveyard](docs/graveyard.md) <sub>69</sub> · [🧾 Compliance matrix](docs/compliance.md) · [⚙️ How verification works](docs/verification.md) · [🙋 Help wanted](docs/help-wanted.md)

## Quick picks

| If you want… | Start with |
|:--|:--|
| The most generous general-purpose chat API | [Google Gemini API](docs/providers/google-gemini.md) (trains on free-tier prompts outside EEA/UK/CH) |
| Speed, and no training on your data | [Groq](docs/providers/groq.md) |
| Many open models behind one key | [OpenRouter](docs/providers/openrouter.md) |
| No signup and no key | [OVHcloud AI Endpoints](docs/providers/ovhcloud-ai-endpoints.md), [LLM7.io](docs/providers/llm7.md), [Kilo Gateway](docs/providers/kilo-gateway.md), [Pollinations.ai](docs/providers/pollinations.md) |
| EU hosting | [OVHcloud AI Endpoints](docs/providers/ovhcloud-ai-endpoints.md) (France), [Mistral](docs/providers/mistral.md) (training is opt-out) |

## Legend

| Symbol | Meaning |
|:--|:--|
| 🔑 Yes · 🔓 None | API key required · works anonymously |
| 💳 Yes · 🟢 No | Credit card required · not required |
| 🔴 Yes · 🟡 Opt-out · 🟢 No · ⚪ Unclear | Whether free-tier traffic trains the provider's models (*Trains*), and whether commercial use is allowed (*Commercial*) |
| ![](https://img.shields.io/badge/status-live-brightgreen) ![](https://img.shields.io/badge/status-docs%20ok-green) ![](https://img.shields.io/badge/status-down-red) | Real API call succeeded · docs reachable, no API probe · probe failed ([details](docs/verification.md)) |

## 💬 Text & chat LLMs

| Provider | Free tier in one line | Key · Card | Trains | Commercial | Hosting | Status |
|:--|:--|:--|:--|:--|:--|:--|
| 🇺🇸 [Google Gemini API](docs/providers/google-gemini.md) | Gemini Flash / Flash-Lite family free of charge; per-project limits visible only in AI Studio | 🔑 Yes · 🟢 No | 🔴 Yes | 🟢 Yes | Global (Google) | ![](https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2FIdoY12%2Fawesome-free-ai-apis%2Fmain%2Fbadges%2Fgoogle-gemini.json&cacheSeconds=3600) |
| 🇺🇸 [Groq](docs/providers/groq.md) | 30 RPM · 1K RPD · 8K TPM · 200K TPD per model (GPT-OSS 120B/20B, Qwen3.8 27B) | 🔑 Yes · 🟢 No | 🟢 No | ⚪ Unclear | US | ![](https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2FIdoY12%2Fawesome-free-ai-apis%2Fmain%2Fbadges%2Fgroq.json&cacheSeconds=3600) |
| 🇺🇸 [OpenRouter (free models)](docs/providers/openrouter.md) | All `:free` models: 20 RPM, 50 RPD (1,000 RPD once you have ever bought ≥$10 credit) | 🔑 Yes · 🟢 No | 🔴 Yes | ⚪ Unclear | Varies (upstream) | ![](https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2FIdoY12%2Fawesome-free-ai-apis%2Fmain%2Fbadges%2Fopenrouter.json&cacheSeconds=3600) |
| 🇺🇸 [Cloudflare Workers AI](docs/providers/cloudflare-workers-ai.md) | 10,000 Neurons/day across all Workers AI models (≈ 300K input tokens of GPT-OSS 120B) | 🔑 Yes · 🟢 No | 🟢 No | 🟢 Yes | Global edge | ![](https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2FIdoY12%2Fawesome-free-ai-apis%2Fmain%2Fbadges%2Fcloudflare-workers-ai.json&cacheSeconds=3600) |
| 🇫🇷 [Mistral AI (Experiment plan)](docs/providers/mistral.md) | Experiment plan: all models, phone verification, limits shown in console only; trains by default (opt-out) | 🔑 Yes · 🟢 No | 🟡 Opt-out | ⚪ Unclear | EU (opt. US) | ![](https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2FIdoY12%2Fawesome-free-ai-apis%2Fmain%2Fbadges%2Fmistral.json&cacheSeconds=3600) |
| 🇨🇦 [Cohere (Trial key)](docs/providers/cohere.md) | Trial key: 20 RPM chat, 1,000 API calls/month, all Command models | 🔑 Yes · 🟢 No | 🔴 Yes | ⚪ Unclear | US (GCP) | ![](https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2FIdoY12%2Fawesome-free-ai-apis%2Fmain%2Fbadges%2Fcohere.json&cacheSeconds=3600) |
| 🇺🇸 [SambaNova Cloud](docs/providers/sambanova.md) | 20 RPM · 20 RPD · 200K TPD per model (DeepSeek-V3.x, Llama 3.3 70B, gpt-oss-120b, Gemma 4) | 🔑 Yes · 🟢 No | 🟢 No | ⚪ Unclear | US | ![](https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2FIdoY12%2Fawesome-free-ai-apis%2Fmain%2Fbadges%2Fsambanova.json&cacheSeconds=3600) |
| 🇫🇷 [OVHcloud AI Endpoints](docs/providers/ovhcloud-ai-endpoints.md) | Anonymous: 2 RPM per IP per model, no signup; EU-hosted (Gravelines) | 🔓 None · 🟢 No | 🟢 No | ⚪ Unclear | EU 🇫🇷 Gravelines | ![](https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2FIdoY12%2Fawesome-free-ai-apis%2Fmain%2Fbadges%2Fovhcloud-ai-endpoints.json&cacheSeconds=3600) |
| 🇺🇸 [NVIDIA NIM](docs/providers/nvidia-nim.md) | Free with NVIDIA Developer account; ~40 RPM per staff forum post — limits not officially published | 🔑 Yes · 🟢 No | ⚪ Unclear | ⚪ Unclear | Not stated | ![](https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2FIdoY12%2Fawesome-free-ai-apis%2Fmain%2Fbadges%2Fnvidia-nim.json&cacheSeconds=3600) |
| 🇺🇸 [Hugging Face Inference Providers](docs/providers/huggingface-inference-providers.md) | $0.10/month of Inference Provider credit (tiny; routes to 18 providers) | 🔑 Yes · 🟢 No | 🟢 No | 🟢 Yes | Varies (upstream) | ![](https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2FIdoY12%2Fawesome-free-ai-apis%2Fmain%2Fbadges%2Fhuggingface-inference-providers.json&cacheSeconds=3600) |
| 🇺🇸 [Ollama Cloud](docs/providers/ollama-cloud.md) | Free plan: undisclosed monthly "starter" usage, 1 concurrent request, no logging/training | 🔑 Yes · 🟢 No | 🟢 No | ⚪ Unclear | US (+EU/SG overflow) | ![](https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2FIdoY12%2Fawesome-free-ai-apis%2Fmain%2Fbadges%2Follama-cloud.json&cacheSeconds=3600) |
| 🇨🇳 [Z.ai (Zhipu GLM Flash)](docs/providers/z-ai.md) | GLM-4.7-Flash, GLM-4.5-Flash, GLM-4.6V-Flash priced Free on the international platform | 🔑 Yes · 🟢 No | 🟢 No | ⚪ Unclear | Singapore | ![](https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2FIdoY12%2Fawesome-free-ai-apis%2Fmain%2Fbadges%2Fz-ai.json&cacheSeconds=3600) |
| 🇮🇱 [Aion Labs](docs/providers/aion-labs.md) | 15 RPM · 20K TPM · 20K tokens/day; Israeli lab, reasoning + roleplay models | 🔑 Yes · 🟢 No | ⚪ Unclear | 🟢 Yes | Not stated | ![](https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2FIdoY12%2Fawesome-free-ai-apis%2Fmain%2Fbadges%2Faion-labs.json&cacheSeconds=3600) |
| 🇺🇸 [Kilo Gateway](docs/providers/kilo-gateway.md) | No key needed: 200 req/hour per IP on `kilo-auto/free` and `:free` models (logged upstream) | 🔓 None · 🟢 No | 🔴 Yes | ⚪ Unclear | Varies (upstream) | ![](https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2FIdoY12%2Fawesome-free-ai-apis%2Fmain%2Fbadges%2Fkilo-gateway.json&cacheSeconds=3600) |
| 🇬🇧 [LLM7.io](docs/providers/llm7.md) | Anonymous 10 RPM / 60 req/h / 500K tokens/day; free token doubles it (40 RPM, 1M tokens/day) | 🔓 None · 🟢 No | ⚪ Unclear | ⚪ Unclear | Varies (upstream) | ![](https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2FIdoY12%2Fawesome-free-ai-apis%2Fmain%2Fbadges%2Fllm7.json&cacheSeconds=3600) |
| 🇺🇸 [OpenCode Zen](docs/providers/opencode-zen.md) | Rotating set of free (often stealth/preview) models; limits unpublished; free-period data may train | 🔑 Yes · 🟢 No | 🔴 Yes | ⚪ Unclear | US | ![](https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2FIdoY12%2Fawesome-free-ai-apis%2Fmain%2Fbadges%2Fopencode-zen.json&cacheSeconds=3600) |
| 🇺🇸 [Vercel AI Gateway](docs/providers/vercel-ai-gateway.md) | Monthly free credit on Hobby teams (card required); only a few free-tier models | 🔑 Yes · 💳 Yes | 🟢 No | 🟢 Yes | Varies (upstream) | ![](https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2FIdoY12%2Fawesome-free-ai-apis%2Fmain%2Fbadges%2Fvercel-ai-gateway.json&cacheSeconds=3600) |
| 🇺🇸 [IBM watsonx.ai (Lite)](docs/providers/ibm-watsonx-ai.md) | Lite plan: 300,000 tokens/month on Granite + selected models; IBM Cloud regions incl. Frankfurt/London | 🔑 Yes · ⚪ Unclear | ⚪ Unclear | ⚪ Unclear | US/EU/JP/AU regions | ![](https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2FIdoY12%2Fawesome-free-ai-apis%2Fmain%2Fbadges%2Fibm-watsonx-ai.json&cacheSeconds=3600) |
| 🇫🇷 [NLP Cloud](docs/providers/nlp-cloud.md) | Free plan for testing only ("must not be used in production"); limits unpublished | 🔑 Yes · 🟢 No | 🟢 No | 🔴 No | Not stated | ![](https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2FIdoY12%2Fawesome-free-ai-apis%2Fmain%2Fbadges%2Fnlp-cloud.json&cacheSeconds=3600) |
| 🇸🇬 [Novita AI (Ling free models)](docs/providers/novita.md) | inclusionAI Ling 3.0 Flash Fin / Sante priced Free (input + output); 256K context | 🔑 Yes · ⚪ Unclear | 🟢 No | ⚪ Unclear | Not stated | ![](https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2FIdoY12%2Fawesome-free-ai-apis%2Fmain%2Fbadges%2Fnovita.json&cacheSeconds=3600) |
| 🇨🇳 [SiliconFlow (CN)](docs/providers/siliconflow.md) | Older 7B-class models (Qwen2 7B, GLM-4 9B…) free on the .cn platform; ID verification | 🔑 Yes · 🟢 No | ⚪ Unclear | ⚪ Unclear | China | ![](https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2FIdoY12%2Fawesome-free-ai-apis%2Fmain%2Fbadges%2Fsiliconflow.json&cacheSeconds=3600) |
| 🇨🇳 [ModelScope API-Inference (CN)](docs/providers/modelscope.md) | 2,000 API calls/day on API-Inference-enabled community models; Alibaba account | 🔑 Yes · 🟢 No | ⚪ Unclear | ⚪ Unclear | China | ![](https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2FIdoY12%2Fawesome-free-ai-apis%2Fmain%2Fbadges%2Fmodelscope.json&cacheSeconds=3600) |
| 🇨🇳 [Baidu Qianfan (CN)](docs/providers/baidu-qianfan.md) | ERNIE Speed / ERNIE Lite free since 2024; Chinese real-name ID; permanence not re-confirmed | 🔑 Yes · 🟢 No | ⚪ Unclear | ⚪ Unclear | China | ![](https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2FIdoY12%2Fawesome-free-ai-apis%2Fmain%2Fbadges%2Fbaidu-qianfan.json&cacheSeconds=3600) |
| 🇨🇳 [iFlytek Spark Lite (CN)](docs/providers/iflytek-spark.md) | Spark Lite (8K in / 4K out) marked free to use; QPS not published | 🔑 Yes · 🟢 No | ⚪ Unclear | ⚪ Unclear | China | ![](https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2FIdoY12%2Fawesome-free-ai-apis%2Fmain%2Fbadges%2Fiflytek-spark.json&cacheSeconds=3600) |

## 🎨 Image generation

| Provider | Free tier in one line | Key · Card | Trains | Commercial | Hosting | Status |
|:--|:--|:--|:--|:--|:--|:--|
| 🇩🇪 [Pollinations.ai](docs/providers/pollinations.md) | Keyless & anonymous: `flux` images always free; other free models cost 0 Pollen; numeric limits unpublished | 🔓 None · 🟢 No | ⚪ Unclear | ⚪ Unclear | Not stated | ![](https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2FIdoY12%2Fawesome-free-ai-apis%2Fmain%2Fbadges%2Fpollinations.json&cacheSeconds=3600) |
| 🇺🇸 [Cloudflare Workers AI (Neurons)](docs/providers/cloudflare-workers-ai-image.md) | Same 10,000 Neurons/day: FLUX.1 schnell (≈4.8 neurons per 512² tile + 9.6/step), SDXL, Whisper, TTS, embeddings | 🔑 Yes · ⚪ Unclear | 🟢 No | 🟢 Yes | Global edge | ![](https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2FIdoY12%2Fawesome-free-ai-apis%2Fmain%2Fbadges%2Fcloudflare-workers-ai-image.json&cacheSeconds=3600) |
| 🇺🇸 [Hugging Face Inference Providers](docs/providers/huggingface-inference-providers-image.md) | $0.10/month credit spendable on text-to-image, embeddings, ASR/TTS via routed providers | 🔑 Yes · 🟢 No | 🟢 No | 🟢 Yes | Varies (upstream) | ![](https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2FIdoY12%2Fawesome-free-ai-apis%2Fmain%2Fbadges%2Fhuggingface-inference-providers-image.json&cacheSeconds=3600) |

## 🎙️ Speech-to-text

| Provider | Free tier in one line | Key · Card | Trains | Commercial | Hosting | Status |
|:--|:--|:--|:--|:--|:--|:--|
| 🇺🇸 [Groq (Whisper)](docs/providers/groq-whisper.md) | Whisper large-v3 / v3-turbo: 20 RPM · 2,000 RPD · 2 audio-hours/hour · 8 audio-hours/day | 🔑 Yes · 🟢 No | 🟢 No | ⚪ Unclear | US | ![](https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2FIdoY12%2Fawesome-free-ai-apis%2Fmain%2Fbadges%2Fgroq-whisper.json&cacheSeconds=3600) |
| 🇺🇸 [Google Cloud Speech-to-Text (V1)](docs/providers/google-cloud-speech-to-text.md) | V1 API: 60 minutes/month free (V2 / Chirp has no free allowance) | 🔑 Yes · ⚪ Unclear | 🟡 Opt-out | 🟢 Yes | Selectable GCP regions | ![](https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2FIdoY12%2Fawesome-free-ai-apis%2Fmain%2Fbadges%2Fgoogle-cloud-speech-to-text.json&cacheSeconds=3600) |
| 🇺🇸 [Azure AI Speech (F0)](docs/providers/azure-ai-speech.md) | F0: 5 audio-hours/month real-time STT (1 concurrent) + 5 h speech translation | 🔑 Yes · ⚪ Unclear | ⚪ Unclear | 🟢 Yes | Selectable Azure regions | ![](https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2FIdoY12%2Fawesome-free-ai-apis%2Fmain%2Fbadges%2Fazure-ai-speech.json&cacheSeconds=3600) |
| 🇺🇸 [IBM Watson STT (Lite)](docs/providers/ibm-watson-stt.md) | Lite: 500 minutes/month | 🔑 Yes · ⚪ Unclear | ⚪ Unclear | ⚪ Unclear | IBM Cloud regions | ![](https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2FIdoY12%2Fawesome-free-ai-apis%2Fmain%2Fbadges%2Fibm-watson-stt.json&cacheSeconds=3600) |

## 🔊 Text-to-speech

| Provider | Free tier in one line | Key · Card | Trains | Commercial | Hosting | Status |
|:--|:--|:--|:--|:--|:--|:--|
| 🇺🇸 [ElevenLabs](docs/providers/elevenlabs-free.md) | 10,000 credits/month (~74 min TTS incl. Scribe STT) — non-commercial, attribution required | 🔑 Yes · 🟢 No | 🟡 Opt-out | 🔴 No | Not stated | ![](https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2FIdoY12%2Fawesome-free-ai-apis%2Fmain%2Fbadges%2Felevenlabs-free.json&cacheSeconds=3600) |
| 🇺🇸 [Google Cloud Text-to-Speech](docs/providers/google-cloud-tts.md) | 4M chars/month Standard & WaveNet; 1M chars/month Neural2 / Studio / Chirp 3 HD | 🔑 Yes · 💳 Yes | ⚪ Unclear | 🟢 Yes | Selectable GCP regions | ![](https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2FIdoY12%2Fawesome-free-ai-apis%2Fmain%2Fbadges%2Fgoogle-cloud-tts.json&cacheSeconds=3600) |
| 🇺🇸 [Google Gemini API (TTS)](docs/providers/gemini-api-tts.md) | Gemini Flash TTS models free of charge on the Gemini API free tier | 🔑 Yes · 🟢 No | 🔴 Yes | 🟢 Yes | Global (Google) | ![](https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2FIdoY12%2Fawesome-free-ai-apis%2Fmain%2Fbadges%2Fgemini-api-tts.json&cacheSeconds=3600) |
| 🇺🇸 [Groq (Orpheus TTS)](docs/providers/groq-tts.md) | Orpheus TTS: 10 RPM · 100 RPD · 3.6K tokens/day | 🔑 Yes · 🟢 No | 🟢 No | ⚪ Unclear | US | ![](https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2FIdoY12%2Fawesome-free-ai-apis%2Fmain%2Fbadges%2Fgroq-tts.json&cacheSeconds=3600) |
| 🇺🇸 [Azure AI Speech TTS (F0)](docs/providers/azure-ai-speech-tts.md) | F0: 500K neural-TTS characters/month, 20 transactions/min | 🔑 Yes · ⚪ Unclear | ⚪ Unclear | 🟢 Yes | Selectable Azure regions | ![](https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2FIdoY12%2Fawesome-free-ai-apis%2Fmain%2Fbadges%2Fazure-ai-speech-tts.json&cacheSeconds=3600) |
| 🇺🇸 [Cartesia](docs/providers/cartesia.md) | 20,000 credits/month (~27 min Sonic TTS) — non-commercial | 🔑 Yes · ⚪ Unclear | 🟡 Opt-out | 🔴 No | US | ![](https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2FIdoY12%2Fawesome-free-ai-apis%2Fmain%2Fbadges%2Fcartesia.json&cacheSeconds=3600) |
| 🇺🇸 [Hume AI](docs/providers/hume.md) | 10,000 TTS characters/month + 5 EVI minutes — non-commercial | 🔑 Yes · ⚪ Unclear | 🔴 Yes | 🔴 No | Not stated | ![](https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2FIdoY12%2Fawesome-free-ai-apis%2Fmain%2Fbadges%2Fhume.json&cacheSeconds=3600) |
| 🇺🇸 [IBM Watson TTS (Lite)](docs/providers/ibm-watson-tts.md) | Lite: 10,000 characters/month | 🔑 Yes · ⚪ Unclear | ⚪ Unclear | ⚪ Unclear | IBM Cloud regions | ![](https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2FIdoY12%2Fawesome-free-ai-apis%2Fmain%2Fbadges%2Fibm-watson-tts.json&cacheSeconds=3600) |

## 🧭 Embeddings & reranking

| Provider | Free tier in one line | Key · Card | Trains | Commercial | Hosting | Status |
|:--|:--|:--|:--|:--|:--|:--|
| 🇨🇦 [Cohere (Trial key)](docs/providers/cohere-trial.md) | Trial key: 1,000 calls/month; Embed 2,000 inputs/min, Rerank 10 RPM — not for production | 🔑 Yes · 🟢 No | 🔴 Yes | ⚪ Unclear | US (GCP) | ![](https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2FIdoY12%2Fawesome-free-ai-apis%2Fmain%2Fbadges%2Fcohere-trial.json&cacheSeconds=3600) |
| 🇺🇸 [Google Gemini API (embeddings)](docs/providers/gemini-embedding.md) | gemini-embedding-001 on the free tier (≈100 RPM / 30K TPM / 1K RPD per Google forum staff) | 🔑 Yes · 🟢 No | 🔴 Yes | 🟢 Yes | Global (Google) | ![](https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2FIdoY12%2Fawesome-free-ai-apis%2Fmain%2Fbadges%2Fgemini-embedding.json&cacheSeconds=3600) |
| 🇫🇷 [Mistral AI (embed / OCR / moderation)](docs/providers/mistral-free.md) | mistral-embed, mistral-ocr, mistral-moderation under the Experiment plan; limits in console only | 🔑 Yes · 🟢 No | 🟡 Opt-out | ⚪ Unclear | EU | ![](https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2FIdoY12%2Fawesome-free-ai-apis%2Fmain%2Fbadges%2Fmistral-free.json&cacheSeconds=3600) |
| 🇺🇸 [Pinecone Inference](docs/providers/pinecone-inference.md) | 5M embedding tokens/month + 500 rerank requests/month on the Starter plan | 🔑 Yes · ⚪ Unclear | ⚪ Unclear | ⚪ Unclear | US (us-east-1) | ![](https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2FIdoY12%2Fawesome-free-ai-apis%2Fmain%2Fbadges%2Fpinecone-inference.json&cacheSeconds=3600) |

## 🗄️ Vector databases

| Provider | Free tier in one line | Key · Card | Trains | Commercial | Hosting | Status |
|:--|:--|:--|:--|:--|:--|:--|
| 🇺🇸 [Pinecone](docs/providers/pinecone-starter.md) | 2 GB storage · 2M write units · 1M read units per month · 5 serverless indexes | 🔑 Yes · ⚪ Unclear | 🟢 No | 🟢 Yes | US (us-east-1) | ![](https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2FIdoY12%2Fawesome-free-ai-apis%2Fmain%2Fbadges%2Fpinecone-starter.json&cacheSeconds=3600) |
| 🇩🇪 [Qdrant Cloud](docs/providers/qdrant-cloud.md) | "Free forever" 1 GB single-node cluster (~1M 768-d vectors); deleted after 4 weeks idle | 🔑 Yes · ⚪ Unclear | 🟢 No | 🟢 Yes | Selectable (AWS/GCP/Azure) | ![](https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2FIdoY12%2Fawesome-free-ai-apis%2Fmain%2Fbadges%2Fqdrant-cloud.json&cacheSeconds=3600) |
| 🇳🇱 [Weaviate Cloud](docs/providers/weaviate-cloud.md) | "Always free" cluster: 100K objects, 1 GB RAM, 2,000 embedding requests/day | 🔑 Yes · 🟢 No | 🟢 No | 🟢 Yes | Selectable | ![](https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2FIdoY12%2Fawesome-free-ai-apis%2Fmain%2Fbadges%2Fweaviate-cloud.json&cacheSeconds=3600) |
| 🇺🇸 [Zilliz Cloud (Milvus)](docs/providers/zilliz-cloud.md) | Free serverless Milvus: 5 collections, 5 GB, 2.5M vCUs/month | 🔑 Yes · 🟢 No | 🟢 No | 🟢 Yes | GCP | ![](https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2FIdoY12%2Fawesome-free-ai-apis%2Fmain%2Fbadges%2Fzilliz-cloud.json&cacheSeconds=3600) |
| 🇺🇸 [MongoDB Atlas](docs/providers/mongodb-atlas-free.md) | Free cluster: 512 MB + Atlas Vector Search; auto-pauses after 30 idle days | 🔑 Yes · 🟢 No | 🟢 No | 🟢 Yes | Selectable (AWS/GCP/Azure) | ![](https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2FIdoY12%2Fawesome-free-ai-apis%2Fmain%2Fbadges%2Fmongodb-atlas-free.json&cacheSeconds=3600) |
| 🇺🇸 [Supabase (pgvector)](docs/providers/supabase-free.md) | 2 projects × 500 MB Postgres with pgvector; paused after 1 week idle | 🔑 Yes · ⚪ Unclear | 🟢 No | 🟢 Yes | Selectable | ![](https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2FIdoY12%2Fawesome-free-ai-apis%2Fmain%2Fbadges%2Fsupabase-free.json&cacheSeconds=3600) |
| 🇺🇸 [Neon (pgvector)](docs/providers/neon-free.md) | Postgres + pgvector: 100 projects, 0.5 GB each, 100 CU-hours/month | 🔑 Yes · ⚪ Unclear | 🟢 No | 🟢 Yes | Selectable | ![](https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2FIdoY12%2Fawesome-free-ai-apis%2Fmain%2Fbadges%2Fneon-free.json&cacheSeconds=3600) |
| 🇺🇸 [Upstash Vector](docs/providers/upstash-vector.md) | 10K queries+updates/day per index, 1 GB, up to 10 free indexes | 🔑 Yes · 🟢 No | 🟢 No | 🟢 Yes | US/EU regions | ![](https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2FIdoY12%2Fawesome-free-ai-apis%2Fmain%2Fbadges%2Fupstash-vector.json&cacheSeconds=3600) |
| 🇺🇸 [DataStax Astra DB](docs/providers/astra-db-free.md) | Fixed monthly credit (amount not published); up to 5 serverless vector DBs | 🔑 Yes · ⚪ Unclear | 🟢 No | 🟢 Yes | Selectable | ![](https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2FIdoY12%2Fawesome-free-ai-apis%2Fmain%2Fbadges%2Fastra-db-free.json&cacheSeconds=3600) |
| 🇺🇸 [Redis Cloud](docs/providers/redis-cloud-free.md) | 30 MB Essentials DB with Redis Query Engine vector search; 100 ops/s | 🔑 Yes · ⚪ Unclear | 🟢 No | ⚪ Unclear | Selectable | ![](https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2FIdoY12%2Fawesome-free-ai-apis%2Fmain%2Fbadges%2Fredis-cloud-free.json&cacheSeconds=3600) |
| 🇺🇸 [Cloudflare Vectorize](docs/providers/cloudflare-vectorize.md) | 30M queried dimensions/month · 5M stored dimensions on the Workers Free plan | 🔑 Yes · ⚪ Unclear | 🟢 No | 🟢 Yes | Global edge | ![](https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2FIdoY12%2Fawesome-free-ai-apis%2Fmain%2Fbadges%2Fcloudflare-vectorize.json&cacheSeconds=3600) |

## 🔎 Web search, scraping & crawling

| Provider | Free tier in one line | Key · Card | Trains | Commercial | Hosting | Status |
|:--|:--|:--|:--|:--|:--|:--|
| 🇺🇸 [Tavily](docs/providers/tavily.md) | 1,000 credits/month (search = 1, advanced = 2); no card | 🔑 Yes · 🟢 No | 🔴 Yes | ⚪ Unclear | US | ![](https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2FIdoY12%2Fawesome-free-ai-apis%2Fmain%2Fbadges%2Ftavily.json&cacheSeconds=3600) |
| 🇺🇸 [Brave Search API](docs/providers/brave-search-api.md) | $5 credit/month (≈1,000 web searches); dedicated free tier removed Feb 2026 | 🔑 Yes · ⚪ Unclear | ⚪ Unclear | ⚪ Unclear | Not stated | ![](https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2FIdoY12%2Fawesome-free-ai-apis%2Fmain%2Fbadges%2Fbrave-search-api.json&cacheSeconds=3600) |
| 🇺🇸 [Exa](docs/providers/exa.md) | $10 credit every month (+$10 once), no payment method | 🔑 Yes · 🟢 No | 🔴 Yes | ⚪ Unclear | US | ![](https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2FIdoY12%2Fawesome-free-ai-apis%2Fmain%2Fbadges%2Fexa.json&cacheSeconds=3600) |
| 🇺🇸 [SerpApi](docs/providers/serpapi.md) | 250 searches/month | 🔑 Yes · ⚪ Unclear | ⚪ Unclear | ⚪ Unclear | US | ![](https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2FIdoY12%2Fawesome-free-ai-apis%2Fmain%2Fbadges%2Fserpapi.json&cacheSeconds=3600) |
| 🇩🇪 [Jina Reader](docs/providers/jina-reader.md) | Keyless r.jina.ai at 20 RPM forever; free key → 500 RPM (token grant one-time) | 🔓 None · 🟢 No | 🟢 No | ⚪ Unclear | Not stated | ![](https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2FIdoY12%2Fawesome-free-ai-apis%2Fmain%2Fbadges%2Fjina-reader.json&cacheSeconds=3600) |
| 🇺🇸 [Firecrawl](docs/providers/firecrawl.md) | 1,000 credits/month, 2 concurrent | 🔑 Yes · 🟢 No | ⚪ Unclear | ⚪ Unclear | US | ![](https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2FIdoY12%2Fawesome-free-ai-apis%2Fmain%2Fbadges%2Ffirecrawl.json&cacheSeconds=3600) |
| 🇨🇿 [Apify](docs/providers/apify.md) | $5 platform usage/month; 5 concurrent Actor runs | 🔑 Yes · 🟢 No | 🟢 No | ⚪ Unclear | Not stated | ![](https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2FIdoY12%2Fawesome-free-ai-apis%2Fmain%2Fbadges%2Fapify.json&cacheSeconds=3600) |
| 🇺🇸 [Parallel](docs/providers/parallel.md) | $5/month for orgs with a card on file (~5,000 search/extract requests) | 🔑 Yes · 💳 Yes | 🔴 Yes | ⚪ Unclear | Not stated | ![](https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2FIdoY12%2Fawesome-free-ai-apis%2Fmain%2Fbadges%2Fparallel.json&cacheSeconds=3600) |
| 🇺🇸 [You.com](docs/providers/you-com.md) | Web Search API: 100 queries/day | 🔑 Yes · ⚪ Unclear | 🔴 Yes | ⚪ Unclear | US | ![](https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2FIdoY12%2Fawesome-free-ai-apis%2Fmain%2Fbadges%2Fyou-com.json&cacheSeconds=3600) |
| 🇫🇷 [Linkup](docs/providers/linkup.md) | $20 credit/month for accounts with a professional email (~4,000 searches) | 🔑 Yes · ⚪ Unclear | ⚪ Unclear | ⚪ Unclear | US/EU/CA/APAC | ![](https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2FIdoY12%2Fawesome-free-ai-apis%2Fmain%2Fbadges%2Flinkup.json&cacheSeconds=3600) |
| 🇺🇸 [Diffbot](docs/providers/diffbot.md) | 10,000 credits/month, 5 RPM, no card (Extract, Search, Knowledge Graph, NL) | 🔑 Yes · 🟢 No | ⚪ Unclear | 🟢 Yes | US | ![](https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2FIdoY12%2Fawesome-free-ai-apis%2Fmain%2Fbadges%2Fdiffbot.json&cacheSeconds=3600) |

## 📄 OCR & document parsing

| Provider | Free tier in one line | Key · Card | Trains | Commercial | Hosting | Status |
|:--|:--|:--|:--|:--|:--|:--|
| 🇺🇸 [LlamaParse (LlamaCloud)](docs/providers/llamaparse.md) | 10,000 credits (Fast parse = 1/page); monthly reset not explicitly stated | 🔑 Yes · ⚪ Unclear | 🟢 No | ⚪ Unclear | NA (+EU endpoint) | ![](https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2FIdoY12%2Fawesome-free-ai-apis%2Fmain%2Fbadges%2Fllamaparse.json&cacheSeconds=3600) |
| 🇺🇸 [Azure Document Intelligence (F0)](docs/providers/azure-document-intelligence.md) | F0: 500 pages/month (Read, Layout, prebuilt models) | 🔑 Yes · ⚪ Unclear | ⚪ Unclear | 🟢 Yes | Selectable Azure regions | ![](https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2FIdoY12%2Fawesome-free-ai-apis%2Fmain%2Fbadges%2Fazure-document-intelligence.json&cacheSeconds=3600) |
| 🇩🇪 [OCR.space](docs/providers/ocr-space.md) | 25,000 requests/month, 500/day per IP, 1 MB files | 🔑 Yes · 🟢 No | ⚪ Unclear | ⚪ Unclear | Not stated | ![](https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2FIdoY12%2Fawesome-free-ai-apis%2Fmain%2Fbadges%2Focr-space.json&cacheSeconds=3600) |
| 🇺🇸 [Datalab (Marker API)](docs/providers/datalab.md) | $20/month allowance with a work email ($10 personal) — ≈5,000 pages of Marker conversion | 🔑 Yes · 🟢 No | 🟢 No | ⚪ Unclear | US (EU option) | ![](https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2FIdoY12%2Fawesome-free-ai-apis%2Fmain%2Fbadges%2Fdatalab.json&cacheSeconds=3600) |

## 🛡️ Moderation & safety

| Provider | Free tier in one line | Key · Card | Trains | Commercial | Hosting | Status |
|:--|:--|:--|:--|:--|:--|:--|
| 🇺🇸 [OpenAI Moderation](docs/providers/openai-moderation.md) | Moderation endpoint free for any OpenAI API account (needs an OpenAI key) | 🔑 Yes · ⚪ Unclear | ⚪ Unclear | ⚪ Unclear | US | ![](https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2FIdoY12%2Fawesome-free-ai-apis%2Fmain%2Fbadges%2Fopenai-moderation.json&cacheSeconds=3600) |
| 🇺🇸 [Azure Content Safety (F0)](docs/providers/azure-content-safety.md) | F0: 5,000 text records + 5,000 images/month incl. Prompt Shields | 🔑 Yes · ⚪ Unclear | ⚪ Unclear | 🟢 Yes | Selectable Azure regions | ![](https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2FIdoY12%2Fawesome-free-ai-apis%2Fmain%2Fbadges%2Fazure-content-safety.json&cacheSeconds=3600) |
| 🇺🇸 [Groq (Llama Prompt Guard 2)](docs/providers/groq-prompt-guard.md) | Llama Prompt Guard 2 (22M/86M): 30 RPM · 14,400 RPD · 500K TPD | 🔑 Yes · 🟢 No | 🟢 No | ⚪ Unclear | US | ![](https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2FIdoY12%2Fawesome-free-ai-apis%2Fmain%2Fbadges%2Fgroq-prompt-guard.json&cacheSeconds=3600) |

## 🌍 Translation

| Provider | Free tier in one line | Key · Card | Trains | Commercial | Hosting | Status |
|:--|:--|:--|:--|:--|:--|:--|
| 🇺🇸 [Google Cloud Translation](docs/providers/google-cloud-translation.md) | 500K characters/month (as a $10 monthly credit), Basic + Advanced NMT | 🔑 Yes · ⚪ Unclear | ⚪ Unclear | 🟢 Yes | Selectable GCP regions | ![](https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2FIdoY12%2Fawesome-free-ai-apis%2Fmain%2Fbadges%2Fgoogle-cloud-translation.json&cacheSeconds=3600) |
| 🇺🇸 [Azure Translator (F0)](docs/providers/azure-translator.md) | F0: 2M characters/month | 🔑 Yes · ⚪ Unclear | ⚪ Unclear | 🟢 Yes | Selectable Azure regions | ![](https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2FIdoY12%2Fawesome-free-ai-apis%2Fmain%2Fbadges%2Fazure-translator.json&cacheSeconds=3600) |
| 🇮🇹 [MyMemory](docs/providers/mymemory.md) | 5K chars/day anonymous, 50K chars/day with an email | 🔓 None · 🟢 No | ⚪ Unclear | ⚪ Unclear | Not stated | ![](https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2FIdoY12%2Fawesome-free-ai-apis%2Fmain%2Fbadges%2Fmymemory.json&cacheSeconds=3600) |

## 👁️ Vision & other

| Provider | Free tier in one line | Key · Card | Trains | Commercial | Hosting | Status |
|:--|:--|:--|:--|:--|:--|:--|
| 🇺🇸 [Google Cloud Vision](docs/providers/google-cloud-vision.md) | 1,000 units/month per feature (OCR, labels, faces, logos, safe-search…) | 🔑 Yes · ⚪ Unclear | ⚪ Unclear | 🟢 Yes | Selectable GCP regions | ![](https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2FIdoY12%2Fawesome-free-ai-apis%2Fmain%2Fbadges%2Fgoogle-cloud-vision.json&cacheSeconds=3600) |
| 🇺🇸 [Azure AI Vision (F0)](docs/providers/azure-ai-vision.md) | F0: 5,000 transactions/month, 20/min (Image Analysis 4.0, OCR, embeddings) | 🔑 Yes · ⚪ Unclear | ⚪ Unclear | 🟢 Yes | Selectable Azure regions | ![](https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2FIdoY12%2Fawesome-free-ai-apis%2Fmain%2Fbadges%2Fazure-ai-vision.json&cacheSeconds=3600) |
| 🇺🇸 [Roboflow](docs/providers/roboflow.md) | Public plan: 15 credits/month; your data & models are public on Universe | 🔑 Yes · 🟢 No | 🔴 Yes | 🔴 No | Not stated | ![](https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2FIdoY12%2Fawesome-free-ai-apis%2Fmain%2Fbadges%2Froboflow.json&cacheSeconds=3600) |
| 🇺🇸 [Clarifai](docs/providers/clarifai.md) | Community: 1,000 API calls/month at 1 RPS | 🔑 Yes · ⚪ Unclear | 🔴 Yes | ⚪ Unclear | Not stated | ![](https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2FIdoY12%2Fawesome-free-ai-apis%2Fmain%2Fbadges%2Fclarifai.json&cacheSeconds=3600) |

## More

- [☠️ Graveyard](docs/graveyard.md): 69 APIs people expect to be free that aren't (retired, one-time credits, paid-only).
- [🧾 Compliance matrix](docs/compliance.md): training, commercial use, DPA, hosting and retention for all 79 providers in one table.
- [⚙️ How verification works](docs/verification.md): what the daily bot checks, and what the badges mean.
- [🙋 Help wanted](docs/help-wanted.md): 25 facts we could not confirm from an official page.
- Machine-readable: [`data/providers.json`](data/providers.json), schema in [`data/schema.json`](data/schema.json). This README and everything under `docs/` are generated from it.
- Related lists: [mnfst/awesome-free-llm-apis](https://github.com/mnfst/awesome-free-llm-apis), [cheahjs/free-llm-api-resources](https://github.com/cheahjs/free-llm-api-resources), [sindresorhus/awesome](https://github.com/sindresorhus/awesome). This dataset was built independently.

## Contributing

Know a permanent free tier that's missing, or a limit that changed? See [CONTRIBUTING.md](CONTRIBUTING.md). The bar is one rule: link the official page that states the number.

## License

[CC0 1.0](LICENSE), public domain. Provider names belong to their owners; this project is not affiliated with any of them. Data is best-effort: confirm limits in your own console before you depend on them.

<div align="center"><sub>Made in Israel 🇮🇱 by <a href="https://github.com/IdoY12">Ido Yahav</a>. If this saved you a signup, a ⭐ helps others find it.</sub></div>
