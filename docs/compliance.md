# 🧾 Compliance matrix

[← Back to the list](../README.md)

What the official terms say about **free-tier** API traffic. "Unclear" means the public pages don't say, which is a good reason to ask before shipping. 30 of 79 providers state explicitly that they do **not** train on your data. The quoted clause for each answer is on the provider's own page.

| Provider | Category | Trains on free-tier data | Commercial use | DPA | Hosting | Retention |
|:--|:--|:--|:--|:--|:--|:--|
| 🇺🇸 [Google Gemini API](providers/google-gemini.md) | 💬 Text & chat LLMs | 🔴 Yes | 🟢 Yes | 🟢 Yes | Global (Google) | 55 days abuse monitoring (prompts, context, outputs; human… |
| 🇫🇷 [Mistral AI (Experiment plan)](providers/mistral.md) | 💬 Text & chat LLMs | 🟡 Opt-out | ⚪ Unclear | 🟢 Yes | EU (opt. US) | Input/Output kept 'for thirty (30) rolling days to monitor… |
| 🇨🇦 [Cohere (Trial key)](providers/cohere.md) | 💬 Text & chat LLMs | 🔴 Yes | ⚪ Unclear | 🟢 Yes | US (GCP) | 'We automatically delete logged prompts and generations aft… |
| 🇺🇸 [Groq](providers/groq.md) | 💬 Text & chat LLMs | 🟢 No | ⚪ Unclear | 🟢 Yes | US | Customer Data deleted within 30 days after termination; no… |
| 🇺🇸 [OpenRouter (free models)](providers/openrouter.md) | 💬 Text & chat LLMs | 🔴 Yes | ⚪ Unclear | ⚪ Unclear | Varies (upstream) | OpenRouter: zero retention by default ('OpenRouter itself h… |
| 🇺🇸 [Cloudflare Workers AI](providers/cloudflare-workers-ai.md) | 💬 Text & chat LLMs | 🟢 No | 🟢 Yes | 🟢 Yes | Global edge | Workers AI does not store Customer Content unless you use a… |
| 🇺🇸 [NVIDIA NIM](providers/nvidia-nim.md) | 💬 Text & chat LLMs | ⚪ Unclear | ⚪ Unclear | ⚪ Unclear | Not stated | — |
| 🇺🇸 [Hugging Face Inference Providers](providers/huggingface-inference-providers.md) | 💬 Text & chat LLMs | 🟢 No | 🟢 Yes | 🟢 Yes | Varies (upstream) | 'Logs are kept for debugging purposes for up to 30 days, bu… |
| 🇺🇸 [Ollama Cloud](providers/ollama-cloud.md) | 💬 Text & chat LLMs | 🟢 No | ⚪ Unclear | ⚪ Unclear | US (+EU/SG overflow) | transient: 'content is not stored beyond the time required… |
| 🇺🇸 [SambaNova Cloud](providers/sambanova.md) | 💬 Text & chat LLMs | 🟢 No | ⚪ Unclear | ⚪ Unclear | US | — |
| 🇺🇸 [Kilo Gateway](providers/kilo-gateway.md) | 💬 Text & chat LLMs | 🔴 Yes | ⚪ Unclear | 🟢 Yes | Varies (upstream) | — |
| 🇬🇧 [LLM7.io](providers/llm7.md) | 💬 Text & chat LLMs | ⚪ Unclear | ⚪ Unclear | ⚪ Unclear | Varies (upstream) | — |
| 🇫🇷 [OVHcloud AI Endpoints](providers/ovhcloud-ai-endpoints.md) | 💬 Text & chat LLMs | 🟢 No | ⚪ Unclear | ⚪ Unclear | EU 🇫🇷 Gravelines | — |
| 🇨🇳 [Z.ai (Zhipu GLM Flash)](providers/z-ai.md) | 💬 Text & chat LLMs | 🟢 No | ⚪ Unclear | 🟢 Yes | Singapore | 'The Company do not store any of the content the Customer o… |
| 🇨🇳 [SiliconFlow (CN)](providers/siliconflow.md) | 💬 Text & chat LLMs | ⚪ Unclear | ⚪ Unclear | 🔴 No | China | — |
| 🇨🇳 [ModelScope API-Inference (CN)](providers/modelscope.md) | 💬 Text & chat LLMs | ⚪ Unclear | ⚪ Unclear | 🔴 No | China | — |
| 🇮🇱 [Aion Labs](providers/aion-labs.md) | 💬 Text & chat LLMs | ⚪ Unclear | 🟢 Yes | ⚪ Unclear | Not stated | — |
| 🇺🇸 [Vercel AI Gateway](providers/vercel-ai-gateway.md) | 💬 Text & chat LLMs | 🟢 No | 🟢 Yes | ⚪ Unclear | Varies (upstream) | — |
| 🇺🇸 [OpenCode Zen](providers/opencode-zen.md) | 💬 Text & chat LLMs | 🔴 Yes | ⚪ Unclear | ⚪ Unclear | US | zero retention for most providers; OpenAI/Anthropic 30 days… |
| 🇺🇸 [IBM watsonx.ai (Lite)](providers/ibm-watsonx-ai.md) | 💬 Text & chat LLMs | ⚪ Unclear | ⚪ Unclear | 🟢 Yes | US/EU/JP/AU regions | — |
| 🇫🇷 [NLP Cloud](providers/nlp-cloud.md) | 💬 Text & chat LLMs | 🟢 No | 🔴 No | ⚪ Unclear | Not stated | no request data stored; only request metadata (account id,… |
| 🇨🇳 [Baidu Qianfan (CN)](providers/baidu-qianfan.md) | 💬 Text & chat LLMs | ⚪ Unclear | ⚪ Unclear | 🔴 No | China | — |
| 🇸🇬 [Novita AI (Ling free models)](providers/novita.md) | 💬 Text & chat LLMs | 🟢 No | ⚪ Unclear | ⚪ Unclear | Not stated | 'we will not ... retain your Content beyond the time it tak… |
| 🇨🇳 [iFlytek Spark Lite (CN)](providers/iflytek-spark.md) | 💬 Text & chat LLMs | ⚪ Unclear | ⚪ Unclear | 🔴 No | China | — |
| 🇩🇪 [Pollinations.ai](providers/pollinations.md) | 🎨 Image generation | ⚪ Unclear | ⚪ Unclear | ⚪ Unclear | Not stated | 'zero data storage and completely anonymous usage' (README… |
| 🇺🇸 [Cloudflare Workers AI (Neurons)](providers/cloudflare-workers-ai-image.md) | 🎨 Image generation | 🟢 No | 🟢 Yes | 🟢 Yes | Global edge | Workers AI does not store Customer Content unless you use a… |
| 🇺🇸 [Hugging Face Inference Providers](providers/huggingface-inference-providers-image.md) | 🎨 Image generation | 🟢 No | 🟢 Yes | 🟢 Yes | Varies (upstream) | 'Logs are kept for debugging purposes for up to 30 days, bu… |
| 🇺🇸 [Groq (Whisper)](providers/groq-whisper.md) | 🎙️ Speech-to-text | 🟢 No | ⚪ Unclear | 🟢 Yes | US | Customer Data deleted within 30 days after termination; no… |
| 🇺🇸 [Google Cloud Speech-to-Text (V1)](providers/google-cloud-speech-to-text.md) | 🎙️ Speech-to-text | 🟡 Opt-out | 🟢 Yes | 🟢 Yes | Selectable GCP regions | — |
| 🇺🇸 [Azure AI Speech (F0)](providers/azure-ai-speech.md) | 🎙️ Speech-to-text | ⚪ Unclear | 🟢 Yes | 🟢 Yes | Selectable Azure regions | — |
| 🇺🇸 [IBM Watson STT (Lite)](providers/ibm-watson-stt.md) | 🎙️ Speech-to-text | ⚪ Unclear | ⚪ Unclear | ⚪ Unclear | IBM Cloud regions | — |
| 🇺🇸 [ElevenLabs](providers/elevenlabs-free.md) | 🔊 Text-to-speech | 🟡 Opt-out | 🔴 No | 🟢 Yes | Not stated | voice data kept up to 3 years after last interaction |
| 🇺🇸 [Google Cloud Text-to-Speech](providers/google-cloud-tts.md) | 🔊 Text-to-speech | ⚪ Unclear | 🟢 Yes | 🟢 Yes | Selectable GCP regions | — |
| 🇺🇸 [Google Gemini API (TTS)](providers/gemini-api-tts.md) | 🔊 Text-to-speech | 🔴 Yes | 🟢 Yes | 🟢 Yes | Global (Google) | 55 days abuse monitoring (prompts, context, outputs; human… |
| 🇺🇸 [Groq (Orpheus TTS)](providers/groq-tts.md) | 🔊 Text-to-speech | 🟢 No | ⚪ Unclear | 🟢 Yes | US | Customer Data deleted within 30 days after termination; no… |
| 🇺🇸 [Azure AI Speech TTS (F0)](providers/azure-ai-speech-tts.md) | 🔊 Text-to-speech | ⚪ Unclear | 🟢 Yes | 🟢 Yes | Selectable Azure regions | — |
| 🇺🇸 [Cartesia](providers/cartesia.md) | 🔊 Text-to-speech | 🟡 Opt-out | 🔴 No | 🟢 Yes | US | — |
| 🇺🇸 [Hume AI](providers/hume.md) | 🔊 Text-to-speech | 🔴 Yes | 🔴 No | ⚪ Unclear | Not stated | — |
| 🇺🇸 [IBM Watson TTS (Lite)](providers/ibm-watson-tts.md) | 🔊 Text-to-speech | ⚪ Unclear | ⚪ Unclear | ⚪ Unclear | IBM Cloud regions | — |
| 🇨🇦 [Cohere (Trial key)](providers/cohere-trial.md) | 🧭 Embeddings & reranking | 🔴 Yes | ⚪ Unclear | 🟢 Yes | US (GCP) | 'We automatically delete logged prompts and generations aft… |
| 🇺🇸 [Google Gemini API (embeddings)](providers/gemini-embedding.md) | 🧭 Embeddings & reranking | 🔴 Yes | 🟢 Yes | 🟢 Yes | Global (Google) | 55 days abuse monitoring (prompts, context, outputs; human… |
| 🇫🇷 [Mistral AI (embed / OCR / moderation)](providers/mistral-free.md) | 🧭 Embeddings & reranking | 🟡 Opt-out | ⚪ Unclear | 🟢 Yes | EU | Input/Output kept 'for thirty (30) rolling days to monitor… |
| 🇺🇸 [Pinecone Inference](providers/pinecone-inference.md) | 🧭 Embeddings & reranking | ⚪ Unclear | ⚪ Unclear | ⚪ Unclear | US (us-east-1) | — |
| 🇺🇸 [Pinecone](providers/pinecone-starter.md) | 🗄️ Vector databases | 🟢 No | 🟢 Yes | 🟢 Yes | US (us-east-1) | — |
| 🇩🇪 [Qdrant Cloud](providers/qdrant-cloud.md) | 🗄️ Vector databases | 🟢 No | 🟢 Yes | 🟢 Yes | Selectable (AWS/GCP/Azure) | free clusters 'automatically suspended after 1 week, and de… |
| 🇳🇱 [Weaviate Cloud](providers/weaviate-cloud.md) | 🗄️ Vector databases | 🟢 No | 🟢 Yes | 🟢 Yes | Selectable | free cluster suspended after 7 days inactivity, 'permanentl… |
| 🇺🇸 [Zilliz Cloud (Milvus)](providers/zilliz-cloud.md) | 🗄️ Vector databases | 🟢 No | 🟢 Yes | ⚪ Unclear | GCP | — |
| 🇺🇸 [MongoDB Atlas](providers/mongodb-atlas-free.md) | 🗄️ Vector databases | 🟢 No | 🟢 Yes | 🟢 Yes | Selectable (AWS/GCP/Azure) | — |
| 🇺🇸 [Supabase (pgvector)](providers/supabase-free.md) | 🗄️ Vector databases | 🟢 No | 🟢 Yes | 🟢 Yes | Selectable | — |
| 🇺🇸 [Neon (pgvector)](providers/neon-free.md) | 🗄️ Vector databases | 🟢 No | 🟢 Yes | 🟢 Yes | Selectable | — |
| 🇺🇸 [Upstash Vector](providers/upstash-vector.md) | 🗄️ Vector databases | 🟢 No | 🟢 Yes | 🟢 Yes | US/EU regions | after cancellation 'your data will be completely deleted in… |
| 🇺🇸 [DataStax Astra DB](providers/astra-db-free.md) | 🗄️ Vector databases | 🟢 No | 🟢 Yes | ⚪ Unclear | Selectable | — |
| 🇺🇸 [Redis Cloud](providers/redis-cloud-free.md) | 🗄️ Vector databases | 🟢 No | ⚪ Unclear | 🟢 Yes | Selectable | 'Redis may delete inactive Evaluation Services instances an… |
| 🇺🇸 [Cloudflare Vectorize](providers/cloudflare-vectorize.md) | 🗄️ Vector databases | 🟢 No | 🟢 Yes | ⚪ Unclear | Global edge | — |
| 🇺🇸 [Tavily](providers/tavily.md) | 🔎 Web search, scraping & crawling | 🔴 Yes | ⚪ Unclear | ⚪ Unclear | US | — |
| 🇺🇸 [Brave Search API](providers/brave-search-api.md) | 🔎 Web search, scraping & crawling | ⚪ Unclear | ⚪ Unclear | 🟢 Yes | Not stated | query records 'retained for a maximum of 90 days'; Zero Dat… |
| 🇺🇸 [Exa](providers/exa.md) | 🔎 Web search, scraping & crawling | 🔴 Yes | ⚪ Unclear | 🟢 Yes | US | — |
| 🇺🇸 [SerpApi](providers/serpapi.md) | 🔎 Web search, scraping & crawling | ⚪ Unclear | ⚪ Unclear | 🟢 Yes | US | 'Search data is retained for 31 days'; ZeroTrace Mode store… |
| 🇩🇪 [Jina Reader](providers/jina-reader.md) | 🔎 Web search, scraping & crawling | 🟢 No | ⚪ Unclear | 🟢 Yes | Not stated | 'will only store Input or Output on its servers to the exte… |
| 🇺🇸 [Firecrawl](providers/firecrawl.md) | 🔎 Web search, scraping & crawling | ⚪ Unclear | ⚪ Unclear | ⚪ Unclear | US | personal data retained 'until you request in writing that w… |
| 🇨🇿 [Apify](providers/apify.md) | 🔎 Web search, scraping & crawling | 🟢 No | ⚪ Unclear | 🟢 Yes | Not stated | free plan: '10 most recent runs are retained for 4 months';… |
| 🇺🇸 [Parallel](providers/parallel.md) | 🔎 Web search, scraping & crawling | 🔴 Yes | ⚪ Unclear | 🟢 Yes | Not stated | 'Zero data retention available' (homepage) |
| 🇺🇸 [You.com](providers/you-com.md) | 🔎 Web search, scraping & crawling | 🔴 Yes | ⚪ Unclear | 🟢 Yes | US | — |
| 🇺🇸 [LlamaParse (LlamaCloud)](providers/llamaparse.md) | 📄 OCR & document parsing | 🟢 No | ⚪ Unclear | 🟢 Yes | NA (+EU endpoint) | 'Your files are cached for 48 hours and then permanently de… |
| 🇺🇸 [Azure Document Intelligence (F0)](providers/azure-document-intelligence.md) | 📄 OCR & document parsing | ⚪ Unclear | 🟢 Yes | 🟢 Yes | Selectable Azure regions | — |
| 🇩🇪 [OCR.space](providers/ocr-space.md) | 📄 OCR & document parsing | ⚪ Unclear | ⚪ Unclear | 🟢 Yes | Not stated | deleted after processing; searchable PDFs kept 60 minutes |
| 🇺🇸 [OpenAI Moderation](providers/openai-moderation.md) | 🛡️ Moderation & safety | ⚪ Unclear | ⚪ Unclear | 🟢 Yes | US | — |
| 🇺🇸 [Azure Content Safety (F0)](providers/azure-content-safety.md) | 🛡️ Moderation & safety | ⚪ Unclear | 🟢 Yes | 🟢 Yes | Selectable Azure regions | — |
| 🇺🇸 [Groq (Llama Prompt Guard 2)](providers/groq-prompt-guard.md) | 🛡️ Moderation & safety | 🟢 No | ⚪ Unclear | 🟢 Yes | US | Customer Data deleted within 30 days after termination; no… |
| 🇺🇸 [Google Cloud Translation](providers/google-cloud-translation.md) | 🌍 Translation | ⚪ Unclear | 🟢 Yes | 🟢 Yes | Selectable GCP regions | — |
| 🇺🇸 [Azure Translator (F0)](providers/azure-translator.md) | 🌍 Translation | ⚪ Unclear | 🟢 Yes | 🟢 Yes | Selectable Azure regions | — |
| 🇮🇹 [MyMemory](providers/mymemory.md) | 🌍 Translation | ⚪ Unclear | ⚪ Unclear | ⚪ Unclear | Not stated | — |
| 🇺🇸 [Google Cloud Vision](providers/google-cloud-vision.md) | 👁️ Vision & other | ⚪ Unclear | 🟢 Yes | 🟢 Yes | Selectable GCP regions | — |
| 🇺🇸 [Azure AI Vision (F0)](providers/azure-ai-vision.md) | 👁️ Vision & other | ⚪ Unclear | 🟢 Yes | 🟢 Yes | Selectable Azure regions | — |
| 🇺🇸 [Roboflow](providers/roboflow.md) | 👁️ Vision & other | 🔴 Yes | 🔴 No | ⚪ Unclear | Not stated | — |
| 🇺🇸 [Clarifai](providers/clarifai.md) | 👁️ Vision & other | 🔴 Yes | ⚪ Unclear | 🟢 Yes | Not stated | — |
| 🇫🇷 [Linkup](providers/linkup.md) | 🔎 Web search, scraping & crawling | ⚪ Unclear | ⚪ Unclear | 🟢 Yes | US/EU/CA/APAC | Zero Data Retention 'available on request' (queries not log… |
| 🇺🇸 [Diffbot](providers/diffbot.md) | 🔎 Web search, scraping & crawling | ⚪ Unclear | 🟢 Yes | 🟢 Yes | US | — |
| 🇺🇸 [Datalab (Marker API)](providers/datalab.md) | 📄 OCR & document parsing | 🟢 No | ⚪ Unclear | 🟢 Yes | US (EU option) | — |

> 🇪🇺 **EEA / UK / Switzerland note.** Google applies its *paid-tier* data terms to free Gemini quota for users in these regions (no training, no human review) but its terms still require paid services when you expose an API client to end users there. Mistral and OVHcloud are the EU-headquartered options with permanent free tiers; OVHcloud publishes its inference location (Gravelines, FR). Scaleway is EU-based but offers only a one-time token grant.

---

<sub>Generated from [`data/providers.json`](../data/providers.json). Edit the data, not this file.</sub>
