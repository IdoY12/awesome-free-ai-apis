# 🇩🇪 Pollinations.ai

[← All providers](../../README.md#-image-generation) · 🎨 Image generation

![status](https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2FIdoY12%2Fawesome-free-ai-apis%2Fmain%2Fbadges%2Fpollinations.json&cacheSeconds=3600) <sub>live: up · docs: ok</sub> <sub>🟡 partial · last verified 2026-09-26</sub>

> **Keyless & anonymous: `flux` images always free; other free models cost 0 Pollen; numeric limits unpublished**

Anonymous, keyless access to all free models; 'flux' image model is 'always free'. Registered devs get daily Pollen grants (expire daily) by tier (seed/flower/nectar).

**Website:** <https://pollinations.ai>  
**Get a key:** <https://enter.pollinations.ai/keys>  
**Base URL:** `https://gen.pollinations.ai/v1` · OpenAI-compatible: ✅

| API key | Credit card | Trains on your data | Commercial use | DPA / GDPR | Hosting |
|:--|:--|:--|:--|:--|:--|
| 🔓 None | 🟢 No | ⚪ Unclear | ⚪ Unclear | ⚪ Unclear | Not stated |

## Limits

POLLEN_FAQ.md: 'You can use our API with Anonymous access — no signup, account, or payment needed. You can call all free models, subject to standard rate limits.' 'Free models always cost 0 Pollen.' 'flux: ∞ images per Pollen (always free!)'. 'Registered developers receive daily Pollen grants to support experimentation based on their tier (seed, flower, or nectar)' — grant amounts not published; 'Pollen grants are always spent before your purchased Pollen balance, and it expires each day.' 'If you register but do not use a key, your rate limits will be the same as an anonymous user.' Front-end keys: 'Medium rate limits'; server-to-server keys: 'No platform rate limits'. APIDOCS.md: legacy raw pk_ keys 'Rate-limited to 1 pollen per IP per hour'. Numeric anonymous rate limits are not published anywhere fetched.

## What the free tier covers

- **flux**: FAQ: 'always free' / 'Unlimited flux images — completely free, always!'
- **sana, zimage, klein, gpt-image-2**: not flagged paidOnly in shared/registry/image.ts (main branch) — usable with free daily grants; Pollen cost per image listed in registry
- **kontext / nanobanana* / seedream* / ideogram-v4-* / gptimage* / grok-imagine* / wan-image* / qwen-image / p-image* / nova-canvas**: paidOnly: true in registry
- **text: nvidia/nemotron-3.5-lightning, z-ai/glm-5.3, z-ai/glm-5.3-flash, typesafe/jev-1.13**: not paidOnly in shared/registry/text.ts (main)
- **/v1/audio/speech, /v1/audio/transcriptions, /v1/embeddings**: endpoints exist per APIDOCS.md; Pollen cost / free status unclear

## Fine print

- **Training:** Official README claims 'No logins, no keys, no data stored' / 'zero data storage'; no terms/privacy page reachable.
- **Commercial use:** Code/API docs are MIT licensed; no service terms found.
- **Retention:** 'zero data storage and completely anonymous usage' (README claim)
- **Notes:** Also exposes text, video, audio and embeddings endpoints; only 'flux' is explicitly documented as always free. HQ country from general knowledge, not from fetched page.

## Official sources

- [Pollinations APIDOCS.md](https://raw.githubusercontent.com/pollinations/pollinations/master/APIDOCS.md) <sub>2026-09-26</sub>
- [Pollinations POLLEN_FAQ.md](https://github.com/pollinations/pollinations/blob/master/enter.pollinations.ai/POLLEN_FAQ.md) <sub>2026-09-26</sub>
- [raw.githubusercontent.com/pollinations/pollinations/master/enter.polli](https://raw.githubusercontent.com/pollinations/pollinations/master/enter.pollinations.ai/POLLEN_FAQ.md) <sub>2026-09-26</sub>
- [raw.githubusercontent.com/pollinations/pollinations/main/shared/regist](https://raw.githubusercontent.com/pollinations/pollinations/main/shared/registry/image.ts) <sub>2026-09-26</sub>
- [Pollinations README](https://github.com/pollinations/pollinations/blob/master/README.md) <sub>2026-09-26</sub>
- [Pollinations API docs](https://github.com/pollinations/pollinations/blob/master/APIDOCS.md) <sub>2026-09-26</sub>

---

<sub>Generated from [`data/providers.json`](../../data/providers.json). Edit the data, not this file.</sub>
