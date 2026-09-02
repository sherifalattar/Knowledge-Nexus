# decisions.md — Knowledge Nexus

A flat, chronological list of decisions that **still bind the project** as of
**2 September 2026**: the design system, naming, deployment workflow, what was deleted and
why. Superseded decisions are listed only where the supersession itself is the binding
fact.

Each decision carries its date, its source, and — where your own words settled it — a
verbatim quotation.

---

## D-01 · 24–28 June 2026 · Consolidate the corpus; delete the superseded pages

**Source:** commits `1b58c88`, `2206e34`, `cfb9620`, `c9349ff`, `d24286f`. **[DERIVED]** —
no written rationale survives.

Five artefacts were deleted in the first four days and never restored:

| Deleted | Date | Successor (inferred) |
|---|---|---|
| `denial-navigator.html` | 24 Jun 2026 | `denial-codes-semantic.html` |
| `denial-codes-walkthrough.html` | 28 Jun 2026 | `denial-codes.html` |
| `doh-codes-dictionary.html` | 28 Jun 2026 | the Shafafiya callout in `denial-codes.html` (5 Jul) |
| `codes-global-atlas.html` | 28 Jun 2026 | **none** — dropped entirely |
| `codes-global-atlas.xlsx` | 28 Jun 2026 | **none** — the only spreadsheet the repo ever held |

**Why this still binds.** The Denial Navigator survives as a *concept* (a module name in
`README.md` and `CLAUDE.md`) but not as a *file* — it lives at
`denial-codes-semantic.html`. Anyone looking for `denial-navigator.html` will not find it,
and should not recreate it.

**[UNCERTAIN]** The rationale is inferred from filenames and timing. No commit message or
PR states it.

---

## D-02 · 22 June 2026 (declared) · The site's publication date is 22 June 2026

**Source:** PR #3, merged as `5fd4e34`, 29 June 2026. **[RECORDED]**

`article:published_time` is set to `2026-06-22` and `og:type` to `article`, quoted from the
PR: *"so LinkedIn's Post Inspector reports them… so the published date is recognized."*

The declared publication date precedes the first commit (24 June 2026) by two days. This is
the canonical date the site presents to the world.

---

## D-03 · 28–29 June 2026 · Every page carries Open Graph and Twitter Card metadata

**Source:** PRs #2, #3; extended site-wide 5 July 2026 (`5369f1f`, 11 pages). **[RECORDED]**

Social preview cards are treated as part of the deliverable, not an afterthought. Preview
images are 1200×630.

---

## D-04 · 4 July 2026 · One page, one URL — no redirect stubs

**Source:** PR #7 then PR #8, three minutes apart. **[RECORDED]**

PR #7 renamed the About page and *"leaves a redirect at the old URL"*. PR #8, quoted
verbatim, reversed that within minutes:

> Deletes the about-me redirect stub so there is a single page/URL.

**This is a standing architectural rule.** `about-me-sherif-alattar.html` does not exist and
must not be recreated as a stub.

---

## D-05 · 4 July 2026 · `executive-summary.html` is the canonical name for the Executive Dossier

**Source:** PR #7, commit `8a1f3d2`. **[RECORDED]**

The page is titled *"Dr. Sherif Alattar — Executive Dossier"* and described in its own meta
description as *"Executive dossier of Dr. Sherif Alattar, MD — physician and healthcare
insurance operations consultant and architect, and author of Knowledge Nexus, an analysis
of the logic of UAE health insurance."*

Note the deliberate split: the **filename** says *executive-summary*; the **content** says
*Executive Dossier*. Both are correct and both are load-bearing — the filename is a public
URL, the title is the object's name.

---

## D-06 · 4 July 2026 · `background-music.mp3` is the canonical audio filename, and it lives at the repository root

**Source:** PR #5, commit `df08402` (rename `R100 ambient.mp3 → background-music.mp3`);
restated in `CLAUDE.md`, 17 July 2026. **[RECORDED]**

From `CLAUDE.md`, verbatim:

> `audio.js` is a single shared script that carries background music across pages and remembers playback state so the music never restarts on navigation. `background-music.mp3` must live at the repository root.

And in the working conventions, verbatim:

> Keep `background-music.mp3` and `audio.js` at the repository root; do not break cross-page audio continuity.

**Implementation detail, verified 2 September 2026** — the contract `audio.js` actually
enforces: off by default (browsers block autoplay with sound); state persisted in
`sessionStorage` under the key `kn-audio`; volume fades to `0.42`; the toggle is a fixed
pill at `right:22px; bottom:22px`, gold `#E7C887` when off, teal `#2FE6C8` when on; a
`window.knAudioArm()` hook lets the cinematic ENTER click start audio inside its own user
gesture. A re-attachment guard re-appends the button if a framework reconciles the DOM.

---

## D-07 · 4 July 2026 · GoatCounter is the analytics tool

**Source:** PR #6, commit `1c4307a`. **[RECORDED]** — *"Adds the GoatCounter snippet to the
10 pages that lacked it."*

Endpoint: `gc.zgo.at/count.js`.

**Verified 2 September 2026 — coverage is incomplete.** GoatCounter is present on 12 pages
but **absent from `drgs-compendium.html` and `source-corpus.html`**. Those are the same two
pages that were found missing `audio.js` in August 2026 (PR #42) — they are consistently
the two that get missed in site-wide sweeps. See `open-items.md`, OI-02.

---

## D-08 · 4 July 2026 · The six Pyramids chamber cards navigate to their modules

**Source:** PR #11, commit `4285038`. **[RECORDED]**

Verbatim: *"Outer-document click handler routes each dead chamber card to its module page.
Verified all six navigate correctly; exit link unaffected."*

The mechanism — an **outer-document click handler**, not per-card anchors — matters: the
page builds its body from a bundler template, so ordinary inline links were not available.

---

## D-09 · 5 July 2026 · Four chosen social images, named accurately, mapped to pages

**Source:** PR #26, commit `5c0f4ab`. **[RECORDED]** — this reversed the ten auto-generated
`og-*.png` cards, which were deleted across PRs #16–#25 in about twenty minutes.

The mapping, quoted verbatim and **still live at `main` HEAD**:

> Mapping: pyramid -> drgs, denial-codes, setting-of-care, psychiatry-tree; constellation -> observatory, source-corpus, psychiatry-semantic; six-chambers -> gallery, denial-codes-semantic, psychiatry-intro; sherif-alattar -> index.

The four canonical filenames, quoted verbatim:

> Knowledge-Nexus.png (pyramid doctrine), Knowledge-Nexus-Constellation.png, Knowledge-Nexus-Six-Chambers.png, Knowledge-Nexus-Sherif-Alattar.png

Also decided: *"set og:image:width/height to each image's true dimensions."*

**The principle underneath.** Generated placeholder cards were rejected in favour of
author-selected images. This is the same instinct that governs the whole design system —
nothing decorative for its own sake.

---

## D-10 · 5 July 2026 · The DoH · Shafafiya Data Dictionary is cited as a primary source, and linked

**Source:** PRs #9 and #13, commits `a6ae5f1`, `423d825`; the link corrected in PR #4
(2 July). **[RECORDED]**

Canonical URL, as recorded in `README.md`:
`https://www.doh.gov.ae/-/media/Feature/shafifya/dictionary/Codes.ashx`

*(The path segment reads `shafifya`, not `shafafiya` — that spelling is the Department of
Health's own and is reproduced exactly as recorded.)*

The provenance table in `README.md` binds four systems to four custodians:

| System | Custodian |
|---|---|
| ICD‑10‑CM | U.S. CDC / NCHS |
| DSM‑5‑TR | American Psychiatric Association (© 2022) |
| IR‑DRG | Solventum |
| Adjudication rules · denial & remittance codes · pricing | Abu Dhabi Department of Health — *Shafafiya* |

---

## D-11 · 11–14 July 2026 · Gallery pictures are embedded, always static, always visible

**Source:** commits `58acd54` and `e250454`. **[DERIVED]** from the commit messages, which
state it twice, two days apart:

> Gallery: embed pictures, always static & visible; RDD Process moved down

> Gallery: finalize static/visible pictures — remove duplicate card, RDD Process with the cards

No lazy-loading, no reveal-on-interaction. The films are the exception: they are
**YouTube-nocookie click-to-play iframes** (verified 2 September 2026), i.e. the
privacy-preserving embed, not the standard `youtube.com` one.

---

## D-12 · 17 July 2026 · The README LinkedIn badge is a shields.io image, not LinkedIn's widget

**Source:** `CLAUDE.md`, PR #34. **[RECORDED]** — this is the most fully reasoned decision
in the entire record, and `CLAUDE.md` preserves the reasoning verbatim:

> **Why an image badge (not the official widget):** LinkedIn's official Profile Badge is a JavaScript widget (`platform.linkedin.com/badges/js/profile.js`) that only builds its card when that script runs. GitHub sanitizes README HTML and never executes scripts, so the widget collapsed to a bare text link on GitHub. The image badge renders everywhere — including on GitHub — because it is a plain image wrapped in a link. Trade-off: it shows a static badge (name + logo), not the live card with photo and headline.

The exact markup, quoted from `CLAUDE.md`:

```markdown
[![LinkedIn — Dr. Sherif Alattar](https://img.shields.io/badge/LinkedIn-Dr.%20Sherif%20Alattar-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://ae.linkedin.com/in/sherifalattar)
```

**Scope limit.** This decision governs **the README only**. The in-page badge on
`executive-summary.html` went the opposite way — it uses LinkedIn's actual widget (D-15),
and has been fighting the same class of problem ever since.

---

## D-13 · 17 July 2026 · The architecture rules, as committed to `CLAUDE.md`

**Source:** `CLAUDE.md`. **[RECORDED]** — binding on every agent session that opens the repo.

Quoted verbatim:

> - **No build step, no framework, nothing to install.** Every surface is hand-authored HTML, CSS, and inline SVG.
> - Imagery is largely **inlined** (gradients, vector glyphs, base64 data-URIs), so documents travel self-contained.
> - Nothing is fetched from a data file at runtime — every module is self-contained.
> - Typefaces, the icon set, and the films load over HTTPS, so the canonical experience is the live URL. Opening files directly from disk will not load those embeds.

And the working conventions, verbatim:

> - Preserve the single design system (colours, type, restrained motion) when editing any page.
> - Keep documents self-contained: prefer inlined SVG/CSS and base64 data-URIs over new loose asset files.
> - To preview locally, serve the folder over HTTP (any static server) rather than opening files from disk — the embeds need a real origin.

### The design system — the binding token table

| Token | Value | Role |
|---|---|---|
| Void | `#02040a` · `#040711` | Background, deep space |
| Panel | `#09101d` | Raised surfaces |
| Signal | `#22e8ff` | The single accent |
| Teal | `#2dd6e3` | Secondary accent |
| Ice | `#8fbdff` | Tertiary highlight |
| Silver / Light | `#dce9f7` · `#eef6ff` | Text |

And the type system, verbatim:

> Type is a three-voice system: **Fraunces** (display serif), **Hanken Grotesk** (reading grotesque), and **JetBrains Mono** (data/detail). Motion is restrained — constellations, orbits, slow gradients — never decorative for its own sake.

**Two accent colours sit outside this table and are nonetheless live** — the identifier
badge is gold `#C9A24B` / `#E7C887`, and the audio toggle turns teal `#2FE6C8` when
playing. Neither is in the documented palette. See `open-items.md`, OI-07.

---

## D-14 · 20 July 2026 · The Executive Dossier must be edited through assertion-guarded exact-match replacements

**Source:** PR #36. **[RECORDED]** — a hard-won operational rule, quoted verbatim:

> `executive-summary.html` renders its body from an escaped `__bundler/template` string; edits were applied to that template with exact-match assertions (**no blind writes**) to avoid corrupting the file.

**Why this binds absolutely.** On 9 July 2026, commit `00ae74b` — a site-wide badge sweep —
**silently truncated `psychiatry-semantic-layer.html` and `psychiatry-ir-drg-tree.html`**,
and the damage was not discovered for eleven days (PR #38, 20 July). There is no build
step, and the only check that runs (CodeQL, on JavaScript/TypeScript) does not look at
HTML — so nothing catches a truncated file. `executive-summary.html` is 4.9 MB;
`drgs-compendium.html` is 310 KB; `gallery.html` is 1.9 MB. A blind regex write against
any of them is a live hazard.

**The rule, stated plainly:** never write blind to a bundled page. Assert an exact single
match before replacing, and verify the file's tail after writing.

---

## D-15 · 20 July 2026 · The About page carries the official LinkedIn card, with a self-contained fallback

**Source:** PRs #36 and #37. **[RECORDED]**

Quoted verbatim: *"It uses the official `LI-profile-badge` markup **with a self-contained
styled fallback pill** ("Connect on LinkedIn", blue, inline SVG logo)… so on the live site
it upgrades to the full official card where LinkedIn's script can run; otherwise the styled
fallback badge always renders."*

And the standing requirement, verbatim: *"If the card doesn't upgrade on the live page, the
fallback badge remains visible — **no bare text link**."*

The render fix (PR #37), verbatim: *"Drop `async/defer` from the `profile.js` tag… Add a
tiny poll right after it that calls `window.LIRenderAll()` as soon as `profile.js` defines
it."*

**The declared fallback plan, should it still fail** — verbatim: *"the remaining cause would
be LinkedIn's own JSONP declining the external embed, and we'd switch to a **static card
replica**."* This is the pre-agreed next move, and on the August evidence it is now due.
See `open-items.md`, OI-01.

---

## D-16 · 20 July 2026 · Identifiers live in the corner badge, not in a separate footer

**Source:** PR #35. **[RECORDED]** — explicitly *"Per the author's direction"*, quoted
verbatim:

> Implements the footer-identifiers task by **augmenting the existing corner identifier badge** rather than adding a separate footer… Per the author's direction, the existing badge's look and position are preserved (**no separate cyan footer, no duplicated ORCID**).

ORCID iD: **`orcid.org/0009-0000-8799-9395`**.

Also decided: the LinkedIn logo is an **inlined SVG**, *"keeps pages self-contained, per
`CLAUDE.md`"* — the architecture rule (D-13) applied to a concrete case.

---

## D-17 · 23 July 2026 · The site is indexed via `sitemap.xml`; `introduction.html` stays unlinked

**Source:** PR #39. **[RECORDED]**

Quoted verbatim: *"Adds sitemap.xml (14 URLs) to enable Google/Bing indexing. **Includes
introduction.html, which is live but not linked from any page, so it is only discoverable
via the sitemap.**"*

A deliberate asymmetry: the page is published and indexable but not navigable. Anyone
"fixing" the missing link would be undoing a decision.

Google Search Console verification is by **URL-prefix property**, via the root file
`google7f5a774d4427ac0c.html` (PR #40).

---

## D-18 · 10 August 2026 · Unused root assets are kept, not pruned

**Source:** PR #42. **[RECORDED]** — quoted verbatim:

> Unused root assets (`3d-process.png`, `service-hero.jpg`, `social-image.jpg`) are not referenced by any page. **Left in place; not removed as part of this pass.**

Verified 2 September 2026: all three are still present and still unreferenced. This is a
deliberate hold, not an oversight — but it was never converted into a permanent decision.
See `open-items.md`, OI-06.

---

## D-19 · 10 August 2026 · `audio.js` on every content page is a site invariant

**Source:** PR #42. **[RECORDED]**

Quoted verbatim: *"Neither page loaded `audio.js`, so background music stopped when a
visitor navigated to them. Added the script tag to restore cross-page audio continuity,
**matching the convention on the other pages**."*

Verified 2 September 2026: `audio.js` is present on all 14 content pages. The invariant
holds.

---

## D-20 · Standing · Authorship, AI, and rights

**Source:** `README.md` and `CLAUDE.md`. **[RECORDED]** — these govern how the work may be
described anywhere, and are quoted verbatim:

> Knowledge Nexus is authored, curated, and designed by **Dr. Sherif Alattar, MD** — a physician working in the UAE health‑insurance domain. The reasoning, the structure, and the synthesis are his.
>
> Artificial intelligence is used here openly, as an instrument — for research assistance, organization, drafting, and visualization — much as a writer uses a fine pen or an architect uses CAD. It accelerates the craft; it does not replace the judgment. Every clinical and coding claim is the author's to stand behind.

And the rights position, verbatim:

> © 2026 Dr. Sherif Alattar. All rights reserved. Referenced code systems and standards belong to their respective owners and appear for educational reference only. This is a personal, educational portfolio — not medical, legal, or reimbursement advice, and not an official source for coding or adjudication decisions.

---

## D-21 · Standing · The deployment workflow

**Source:** commit and PR patterns across 24 June – 28 August 2026. **[DERIVED]** — never
written down anywhere in the repository.

**The workflow as actually practised:**

1. **Host:** GitHub Pages, serving `main` from the repository root.
   Live at `https://sherifalattar.github.io/Knowledge-Nexus/`.
2. **No build step, and no CI defined in the repository** — verified 2 September 2026:
   there is no `.github/` directory, and there never has been on any ref. **One check does
   run**: GitHub **CodeQL code scanning**, enabled through repository *default setup* rather
   than a workflow file, which is why it leaves no trace in the tree. It reports as
   `CodeQL` and `Analyze (javascript-typescript)`. It scans JavaScript/TypeScript for
   security issues — **it does not validate HTML**, so it would not have caught the
   truncation described in D-14. A push to `main` is a deploy.
3. **Branch-and-PR is the normal path.** 44 PRs against 89 commits.
4. **Direct-to-`main` commits happen** — and the worst regression in the project's history
   (`00ae74b`, D-14) came in through exactly that route.
5. **Merges are performed by `sherifalattar`.** PR #38 records `merged_by: sherifalattar`.
6. **[UNCERTAIN]** GitHub's API reports `merged: false` for most PRs even where the
   corresponding commit is demonstrably on `main` (e.g. #42 → `05c7613`). The likely
   explanation is that changes were merged locally and pushed, leaving GitHub to mark the
   PR merely "closed". I flag this rather than assert it: it means **PR merge-state is not
   a reliable indicator of what shipped** in this repository. Always check `git log`.

**The gap this leaves.** The single most valuable process improvement available — given
that a silent truncation went unnoticed for eleven days — would be a trivial CI check that
every HTML file ends with a closing `</html>` tag. CodeQL does not do this, and nothing
else in the repository does either.

---

## D-22 · Standing (22 July 2026) · Where outputs are stored

**Source:** your standing preferences. **[RECORDED]** — quoted verbatim:

> The outputs to be stored in Claude-Outputs Folder. The path is DESKTOP ->  Master Library Folder --> Claude-Outputs Folder only. DONT STORE OR USE GOOGLE DRIVE.

Binding on every deliverable, this export included.

---

## D-23 · Standing (22 July 2026) · The division of labour on the site

**Source:** your standing preferences. **[RECORDED]** — quoted verbatim:

> Claude code works on update and maintenance of my website. Claude co work assists on the website as well.

The record bears this out: every PR from `claude/*` head branches is a Claude Code session
(#1–#3, #34–#38, #41–#44), while the `sherifalattar-patch-*` and named-feature branches are
direct authoring.
