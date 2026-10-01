# 🇺🇸 Ollama Cloud

[← All providers](../../README.md#-text--chat-llms) · 💬 Text & chat LLMs

![status](https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2FIdoY12%2Fawesome-free-ai-apis%2Fmain%2Fbadges%2Follama-cloud.json&cacheSeconds=3600) <sub>live: skipped · docs: ok</sub> <sub>🟡 partial · last verified 2026-09-26</sub>

> **Free plan: undisclosed monthly "starter" usage, 1 concurrent request, no logging/training**

Free plan: 'Free accounts include a starter amount of usage for a smaller set of starter models'; 'On the Free plan, usage resets monthly from the date you signed up'; 'Free includes 1 concurrent request'; 'Add credits to unlock all models'. Starter amount and starter-model list are not published.

**Website:** <https://ollama.com/cloud>  
**Get a key:** <https://ollama.com/settings/keys>  
**Base URL:** `https://ollama.com/api` · OpenAI-compatible: 🟡 partial

| API key | Credit card | Trains on your data | Commercial use | DPA / GDPR | Hosting |
|:--|:--|:--|:--|:--|:--|
| 🔑 Yes · 🪪 One account per person. | 🟢 No | 🟢 No | ⚪ Unclear | ⚪ Unclear | US (+EU/SG overflow) |

## Limits

1 concurrent request (Free); monthly included usage amount not disclosed; usage metered in tokens at per-model rates.

## Models

| Model | ID | Context | Max out | Modality | Tools | JSON | Vision | Reason | Rate limit |
|:--|:--|--:|--:|:--|:-:|:-:|:-:|:-:|:--|
| Cloud catalog: gemma4, gpt-oss, qwen3.5, glm-5.x, deepseek-v4.x, kimi-k2.x/k3, minimax-m3, nemotron-3, mistral-large-3 (which are "starter models" is not published) | <sub>not published</sub> | — | — | text / multimodal | ✅ | · | ✅ | ✅ | monthly starter usage |

<sub>Tools = tool calling · JSON = structured output · Vision = image input · Reason = reasoning model. ✅ documented · — no · · unknown.</sub>

## Fine print

- **Training:** 'We do not use your inputs or outputs to train any AI models' (Privacy Policy); cloud page: 'Prompt or response data is never logged or trained on.'
- **Commercial use:** No restriction found in Terms; free accounts 'include a starter amount of usage for a smaller set of starter models'.
- **DPA / GDPR:** Privacy Policy mentions GDPR rights only; no DPA found.
- **Retention:** transient: 'content is not stored beyond the time required to fulfill the request'
- **Hosting:** US primarily; may route to Europe and Singapore ('Ollama hosts models and compute resources primarily in the United States. To serve global demand, we may route to Europe and Singapore')
- **Alt endpoint:** native); OpenAI- and Anthropic-compatible clients supported per docs (endpoint page not fetched
- **Notes:** Change vs. earlier lists: Ollama moved to per-token pricing; the free plan is now 'a small amount of monthly usage for a set of starter models' (amount undisclosed), not the old session/weekly limits.

## Model notes

- **Cloud catalog: gemma4, gpt-oss, qwen3.5, glm-5.x, deepseek-v4.x, kimi-k2.x/k3, minimax-m3, nemotron-3, mistral-large-3 (which are "starter models" is not published):** gemma4:31b-cloud page: 256K context, native function calling, thinking modes, image input; $0.14/$0.40 per M in/out.

## Official sources

- [Ollama pricing + FAQ](https://ollama.com/pricing) <sub>2026-09-26</sub>
- [Ollama's transparent pricing (blog)](https://ollama.com/blog/transparent-pricing) <sub>2026-09-26</sub>
- [Cloud docs](https://docs.ollama.com/cloud) <sub>2026-09-26</sub>
- [Cloud model search](https://ollama.com/search?c=cloud) <sub>2026-09-26</sub>
- [Ollama Privacy Policy](https://ollama.com/privacy) <sub>2026-09-26</sub>
- [Ollama Terms of Service](https://ollama.com/terms) <sub>2026-09-26</sub>
- [Ollama Cloud](https://ollama.com/cloud) <sub>2026-09-26</sub>

---

<sub>Generated from [`data/providers.json`](../../data/providers.json). Edit the data, not this file.</sub>
