# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repository is

Coachella Computer Aid (CCA) is a community tech-education nonprofit. This repo now contains a **working React website** plus the brand/planning docs it was built from:

- `src/` — the live app: React 18 + TypeScript + Vite 6 + Tailwind CSS 4. `App.tsx` composes the homepage from section components in `src/components/` (Navbar, Hero, Mission, WhoWeHelp, Services, HowItWorks, PayWhatYouCan, Workshops, Stories, Survey, Footer, plus `HelpRequestModal`/`WorkshopModal`). All EN/ES copy lives in one keyed object in `src/data/translations.ts` — there is no i18n library, components just index into `translations[lang]`. `src/assets/images/illustrations/` holds the exported PNG/WebP illustration assets, organized by category (`characters`, `hero`, `service`, `icon`, `background`, `device`, `ui`, `workshop`, `marketing`, `community`), imported directly by the components that use them.
- `docs/` — an Obsidian vault of planning docs (mission, strategy, design language). Numbered folders (`01-Project-Foundation` … `06-Assets`) form the intended reading order; `docs/README.md` is the hub, cross-linked via `[[wikilink]]`s. **Some of these docs are stale** — see "Known doc drift" below.
- `files/` — finished static HTML/PDF deliverables (Brand Bible, Character Poses, Illustration Library) for stakeholder review.
- `tools/illustrations/` — the Node.js pipeline that originally generated the illustration catalog. **No longer in active use** — see below.
- `.claude/agents/` — five subagents from an earlier phase of the project. **No longer in active use** — see below.

### Known doc drift

`docs/05-Technical/Tech-Stack.md` and `docs/CLAUDE.md` still describe a planned **Vue 3 + Vuetify 4 + Pinia + Supabase** stack. That plan was superseded — the app actually shipped as **React + TypeScript + Vite + Tailwind**, with no state library and no backend yet (all content is static/local state). Trust `src/` and this file over those two docs until they're updated; don't scaffold or suggest Vue/Vuetify code.

### Illustration pipeline — unused

`tools/illustrations/` (manifest, prompt/candidate/pick scripts, `scan.mjs`, etc.) is still on disk but is **not part of the current workflow**. The illustration assets it produced are already exported into `src/assets/images/illustrations/` and are consumed as ordinary static imports by components — that part is very much in use. What's unused is the *generation tooling* itself: don't run `scan.mjs`, `build-prompts.mjs`, `generate-images.mjs`, `apply-picks.mjs`, etc., or treat `manifest.json`/`status.generated.*` as sources of truth for new work. If new illustrations are needed, ask how the user wants to handle it rather than assuming the old pipeline should be revived.

### Subagents — unused

`.claude/agents/` still contains `vuetify-builder.md`, `content-brand.md`, `bilingual-content.md`, `accessibility-check.md`, and `docs-sync.md`, kept for reference. They are **not part of the current workflow** and shouldn't be auto-delegated to — `vuetify-builder` in particular targets the old Vuetify stack, which no longer applies. Do component/copy/accessibility/docs work directly rather than routing through these agents.

There are two `CLAUDE.md` files in this repo with different scopes: this one (repo-wide dev workflow — trust this for anything touching `src/`) and `docs/CLAUDE.md` (navigation guide for the docs vault).

## Running the app

```bash
npm install
npm run dev      # Vite dev server, http://0.0.0.0:3000
npm run build     # tsc typecheck + vite build
npm run preview   # preview the production build
npm run lint       # tsc --noEmit (no separate linter configured)
```

## Brand constraints that apply everywhere

From the Brand Bible — relevant any time you're producing visuals or copy for CCA:

- Palette only: cream `#FDF6EC`, sand `#F8E9D5`, orange `#F4A259`, clay `#B95E23`, sky `#78B8D9`, sage `#8BAE7B`, charcoal `#343434`.
- Flat vector illustration, rounded soft shapes, warm golden lighting, not photorealistic, no dark/cold tones, no text or logos baked into illustrations.
- Six recurring characters with fixed descriptors (see `docs/01-Project-Foundation/Brand-Bible.md`): Robert (72, retired teacher, blue cardigan, glasses, silver hair), Maria (68, orange cardigan, brown bun), Helen (76, sage cardigan, silver hair), Carlos (veteran, sage shirt, grey mustache), Ana (28, volunteer, orange top, dark ponytail, backpack), David (wheelchair user, sky-blue shirt, headset, glasses).
- Copy voice: warm, patient, plain-language, anxiety-reducing, bilingual EN/ES, WCAG AA minimum. CCA's users skew older, disabled, and low digital-literacy — would an anxious 80-year-old, possibly with low vision or a tremor, be able to use this without help?
- When adding or changing copy, update both `en` and `es` keys in `src/data/translations.ts` together — don't let the two languages drift out of parity.
