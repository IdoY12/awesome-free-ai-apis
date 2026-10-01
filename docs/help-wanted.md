# 🙋 Help wanted

[← Back to the list](../README.md)

Things that could not be confirmed from an official page. If you have a screenshot of the console, a docs link, or an email from the provider, [open a pull request](../CONTRIBUTING.md) or an issue.

| Provider | What we couldn't confirm | Why |
|:--|:--|:--|
| `modelscope` | Official per-model daily cap (500/day?), concurrency limits, and real-name/Alibaba Cloud binding requirement | modelscope.cn docs pages (limits, intro) are JS-rendered; only &lt;title>/meta readable ('API-Inference使用限制', '非商业化，非盈利产品'). modelscope.ai mirror blocked by proxy (CONNECT 403). WebSearch budget exhausted. |
| `pollinations` | Numeric anonymous/'standard' rate limits and daily Pollen grant amounts per tier (seed/flower/nectar); definitive list of 0-Pollen text models | docs.pollinations.ai returns HTTP 401; gen.pollinations.ai/v1/models and enter.pollinations.ai/api/docs blocked by robots.txt. FAQ confirms mechanism but publishes no numbers. |
| `baidu-qianfan` | Whether ERNIE Speed/Lite are still free in 2026 and their QPS | Current 模型服务计费 pages returned 404 (3 URL variants); reachable Qianfan pages mention only a one-month ¥20 voucher and paid ERNIE-4.5 Turbo. Only source for 'free' is the 2024-05-21 article. |
| `stability-ai` | Signup credits (25?) one-time vs recurring | platform.stability.ai pages (pricing, docs) return only &lt;title> metadata; stability.ai/pricing provenance-blocked; proxy CONNECT 403 via curl. |
| `ideogram` | Free API credits | developer.ideogram.ai/pricing 404; API reference page has no credit text; domain blocked for curl. |
| `playht` | Free plan characters/month and API access on free plan | play.ht/pricing provenance-blocked; docs.play.ht pricing 404; quickstart has no plan info. |
| `murf` | Free API tier amount and recurrence | murf.ai/api mentions 'Free API Key' and 'free trial' but no numbers; pricing page is JS-only; docs pricing 404. Only quantified free offer is a 3-month startup program (time-limited). |
| `chunkr` | Free pages per month | chunkr.ai/pricing, chunkr.ai and docs.chunkr.ai returned metadata only / 404. |
| `lancedb-cloud` | Free plan existence and limits | lancedb.com/pricing resolves to a contact-form page; docs.lancedb.com/cloud/pricing 404. |
| `marqo` | Free tier for Marqo Cloud | marqo.ai/pricing and /cloud are demo-booking pages without pricing; docs pricing 404. |
| `sea-lion-api` | Whether the SEA-LION API (api.sea-lion.ai/v1) is free of charge and whether 'trial' keys expire | Official docs: Google sign-in at playground.sea-lion.ai, 'Only 1 API key is allowed to be created per user', 'As of 04 Jun 2026, our rate limits is set to 10 requests per minute per user', models aisingapore/Qwen-SEA-LION-v4.5-27B-IT, Llama-SEA-LION-v3.5-70B-R, SEA-Guard, SEA-LION-ModernBERT-Embedding-600M. No pricing statement anywhere; Terms of Use say some services 'may be paid' and content may be used to 'improve our Services'. Candidate for inclusion if the parent accepts 'no pricing published' as free. |
| `nineteen-ai` | Current free access and rate limits | Homepage shows 'FREE FOR EVERYONE' / '$0.00 per 1m Tokens' dated 2024-11-11 alongside 'Payments are Now Live' banner; docs (docs.nineteen.ai, api.nineteen.ai/docs) unreachable (DNS/robots). |
| `inference-net` | Free credits | docs.inference.net has no pricing; inference.net/pricing provenance-blocked; docs pricing 404. |
| `targon` | Free tier | targon.com and docs.targon.com contain no pricing or free-tier text. |
| `volcengine-doubao` | Free quota per Doubao model, recurrence | docs.volcengine.com/docs/ark/model-pricing (zh and en) returned metadata only (JS). |
| `baichuan` | Free quota | platform.baichuan-ai.com/price 404. |
| `yi-01ai` | Free quota | platform.lingyiwanwu.com/docs fetch error. |
| `krutrim` | Free tier | cloud.olakrutrim.com robots-disallowed; docs.olakrutrim.com DNS failure. |
| `tii-falcon` | Hosted free Falcon API | falconllm.tii.ae mentions 'Try our Chat' but no API/base URL/limits. |
| `swiss-ai-apertus` | Public free Apertus API | swiss-ai.org/apertus redirects to apertus-ai.org which is provenance-blocked. Apertus is served via Public AI ($2 one-time) and HF Inference Providers. |
| `ai-sweden` | Public free GPT-SW3 API | ai.se lists GPT-SW3 as a project only; no API page fetched. |
| `iflytek-spark` | Free quota size, QPS, expiry, real-name requirement for Spark Lite | Product/pricing page xinghuo.xfyun.cn/sparkapi is JS-only; docs only say Lite '支持免费使用' and to claim quota on the product page. |
| `mistral-free-plan-credits` | Conditions/expiry of the '$10 /mo in API credits' on the mistral.ai/pricing Free plan and its relation to the Experiment plan | Pricing page has no footnote beyond 'Subject to fair usage limits'; help-center collection page 404. |
| `public-ai-free-plan` | Whether the Public AI 'Free' plan tier has any recurring allowance | platform.publicai.co/docs/plans provenance-blocked. |
| `novita-model-ids` | Exact model id strings for Ling 3.0 Flash Fin / Sante and whether 'Free' is time-limited | Pricing page shows display names only; models page not fetched. |

---

<sub>Generated from [`data/providers.json`](../data/providers.json). Edit the data, not this file.</sub>
