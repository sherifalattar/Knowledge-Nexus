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

---

## D-19 · 9 September 2026 · The introduction is folded into the Content Map

**Source:** this session. **[RECORDED]** — your words: *"ادمج ال introduction and wiki
together and remove the fluff."*

`introduction.html` no longer exists as a page. Its two surviving parts — the signed
foreword and the three foundational pillars — now open `wiki.html`, above the deck and the
record. Everything else was cut as duplication, measured rather than assumed:

| Cut | Why |
|---|---|
| The `.sub` under the title | Restated the foreword's second paragraph |
| "Specialized Functional Modules" (8 cards) | The Observatory hub, verbatim |
| "How It Came to Be" | Every sentence already appeared in the foreword |
| "The Content Map" pointer section | The page *is* the content map |

The foreword itself was rewritten from roughly 250 words to 120, with no phrase repeated.
The three pillars are now **metered**: each carries a figure beneath it, and the first —
*Provenance over Assertion* — links to the Verification Register with the honest number,
**73 / 192**. A claim of provenance that carries its own audit is worth more than one that
does not.

**Consequences.** The record's page 04 is no longer "Introduction / introduction.html" but
"Foreword & Principles / this page", holding 5 entries where it held 11. Every count on the
page moved with it: **711 entries — 107 sections, 604 points, 14 pages** (was 717 / 109 /
608). `introduction.html` survives only as a `noindex` redirect leaf to `wiki.html#foreword`,
because the published PDF and outside links still point at it.

---

## D-20 · 9 September 2026 · The Compendium is numbered, and the numbering is audited

**Source:** this session. **[RECORDED]** — your words: *"الفكره انى قصدى ان هنا drgs
validation ليه بصمه كتاب اكاديمى"* and *"قصد ترقيم دقيق و تتبع للمحتوى بدقه"*.

Two halves of one idea — the academic-book signature you asked for:

1. **Precise numbering.** Every block in `drgs-compendium.html` carries a stable address of
   the form `I.1.2.4` (chapter · section · topic · block), rendered in the margin, linkable,
   and click-to-copy.
2. **Precise traceability.** `verification.html` — the Verification Register — lists all
   **192** blocks against those addresses and records, for each, whether it names an
   authority. **73 do; 119 do not; 38%.**

The register publishes the gap rather than hiding it. That is the point: a book's apparatus
is trusted because it shows what it cannot support, not because it claims everything.

**Correction on the record.** An earlier figure of *41 of 188* was quoted in this project
from the PDF text. It was wrong. Reading the live `DATA` array in the browser gives
**73 of 192**. The register carries the measured number.

---

## D-21 · 9 September 2026 · The record carries its passages, not only its labels

**Source:** this session. **[RECORDED]** — your words: *"الترقيم بيحمل عناوين فقط not
pearls"* and *"كل كارت يظهر تحته البنود الخاصه بالموضوع"*.

The Content Map was an index of **headings**. It reproduced the label of every section
and point and nothing beneath it, so the knowledge itself — what you call the pearls —
stayed in the source pages and never reached the record.

The substance was harvested back, from the source rather than written fresh:

| Harvested from | Rows |
|---|---|
| All 192 Compendium blocks, driven chapter by chapter through `openChapter()` | 192 |
| Compendium section and topic summaries, read off the live `DATA` array | 60 |
| Denial Navigator code descriptions | 78 |
| Prose under every heading on the other eleven pages | ~230 |

441 entries received a passage; 29 were dropped because the harvested text only echoed
its own heading, and 98 were cleaned of a repeated title or a swept-up kind label.
**412 entries now carry real content.** Page 10 carries none by design — its entries
already state their IR-DRG and relative weights inline.

**Consequence for the hero's claim.** The page used to say each entry *"reproduces the
label as it appears in the source"*. That sentence was true of an index and would have
become a false description of a record, so it was rewritten rather than left standing.

---

## D-22 · 9 September 2026 · No starfield, no navy — a graphite slab lit from behind

**Source:** this session. **[RECORDED]** — your words: *"الكارت لما يظهر يبقى لونه اسود
او رمادى ورا اضاءه مفيش نجوم فى الكروت خالص"*, then, when the ground was still blue:
*"بلاش الكحلى ده قلتلك اسود او رمادى باضاءه خلفيه"*.

The per-card constellation painter is deleted — canvas, painter and repaint loop. A card
is a graphite slab, `#20252C` to `#080A0E`, and the only light is thrown from behind it.

**The mechanism, because it is not obvious.** The backlight is an outward `box-shadow`
on the slab itself. A child element cannot do it: `.gcard` clips its children so the item
list stays inside the rounded corners, and a glow `div` was therefore trapped on the face,
reading as a stain rather than a light behind an object. An element's own shadow is not
clipped by its own `overflow`.

The second instruction was broader than the first: the navy left the whole page, not only
the card. Every blue-black token was remapped to neutral graphite at matched luminance,
and the two blue radials in the body ground became one warm backlight.

---

## D-23 · 9 September 2026 · The record is set in three columns

**Source:** this session. **[RECORDED]** — your words: *"المحاذاه مش مزبوطه فى الترقيم
خالص"*.

Two faults, not one. The address column was `auto`, so a row numbered `5.6.2.17` pushed
its title further right than one numbered `5.1`. And the kind chips sat inline *inside*
the title, so `CODING` and `ADJUDICATION` ragged the text edge again within a single level.

The record is now set in three fixed columns — **address · kind · text**. The chips were
lifted out of `.t` to become direct grid children so they could hold a column of their own.
Depth is carried by an indent *inside* the address column, which leaves every title on one
vertical line, the way a set index reads. Measured: one title x per width, 390 → 1440.

---

## D-24 · 10 September 2026 · One click opens a page — and why two clicks were needed

**Source:** this session. **[RECORDED]** — your words: *"الكروت مش بتفتح على الصفحه"*.

Two faults sat behind one symptom, and the second is worth keeping on the record
because it will bite anyone who touches this layout again:

1. Opening a page took **two** clicks — one to bring the card forward, one to
   navigate — and nothing on the card said so.
2. The second click often did nothing. `.page-block` is `position: sticky`, so
   `getBoundingClientRect()` reports where the element is **currently stuck**, not
   where it sits in the document. `scrollIntoView` therefore aimed at the wrong row,
   and on the first block it did not move at all (measured: scroll 1903 before,
   1903 after).

`knGoToPage()` now sums `offsetTop` up the `offsetParent` chain — the un-stuck flow
position — and the *Open page NN* affordance is a real anchor rather than a span, so
it works on every card and not only the front one.

---

## D-25 · 10 September 2026 · The record is divided by page and by nothing else

**Source:** this session. **[RECORDED]** — your words: *"تقسيم المواضيع حسب الصفحه
للسهوله مش تقسيم clinical coding pearl لان العنوان لكل topic is inclusive"*.

The clinical / coding / adjudication / coverage / pearl labels were a **second
taxonomy laid over the same rows**. Since every topic title already states which it
is, the labels carried no information the reader did not already have. Removed: 110
chips and 5 filter buttons.

Their column went with them, so the record is set in two columns now instead of
three, which tightened the gutter measurably — the title's left edge at 1280px moved
from 301px to 187px.

The page chips took over the filtering: a chip narrows the record to that page and
takes you there; pressing it again restores the whole record. An **All pages** chip
leads the row.

---

## D-26 · 10 September 2026 · The wordmark is engraved, and the background field is gone

**Source:** this session. **[RECORDED]** — your words: *"Knowledge Nexus Label is huge
and it could be alot better - engraved within the canvus… scroll if heavy - no need
for it if heavy javascript is used… the wiki is designed to be directive as a main
objective"*.

**The wordmark** was 86px of expanded black sans raised off a steel plate — the
loudest object on a page whose whole purpose is to point elsewhere. It is now cut
into the surface: set in the serif, tracked wide, at 50px, painted a shade darker
than the panel with a single lit lower lip. **Legibility comes from the lip, not from
lightening the letter** — that is what a chiselled edge actually does to light. The
polished-metal sheen was removed with it; a sheen belongs to a raised plate.

**The background constellation** ran a `requestAnimationFrame` loop over 711 stars for
the life of the page and told the reader nothing they could act on. The sheen was a
`setInterval` doing the same. Both gone:

| | before | after |
|---|---|---|
| Page JavaScript | 20,599 B | 11,168 B |
| `requestAnimationFrame` sites | 3 | 1 |
| Canvases | 1 | 0 |

**The governing sentence for this page, in your words:** *the wiki is designed to be
directive as a main objective.* Anything that does not help the reader find and reach
something does not belong on it.

---

## D-27 · 10 September 2026 · Correction — the documented typography was wrong

**Source:** this session. **[DERIVED]** — found while looking for "the typography I
prefer".

`CLAUDE.md` stated the type system as **Fraunces** (display serif) and **Hanken
Grotesk** (reading grotesque). **No page in the repository loads either family.** The
document had been describing an intention, not the site.

What the files actually use, checked page by page:

| Page group | Display | Reading | Data |
|---|---|---|---|
| `wiki.html`, `executive-summary.html` | Cormorant Garamond | Archivo | JetBrains Mono |
| `drgs-compendium.html` | Archivo | Inter | JetBrains Mono |
| `observatory.html` | Arial Narrow / Aptos Display | Inter | — |
| psychiatry pages, `source-corpus.html` | Manrope | Manrope | JetBrains Mono |

`CLAUDE.md` now carries this table instead of the aspiration.

---

## D-28 · 10 September 2026 · The music becomes a library, and the library is never preloaded

**Source:** this session. **[RECORDED]** — you uploaded four pieces and had said
earlier *"the music is short and boring"* and *"انا عندى افكار كتير للمزيكا لانها عشق
ليا و حابب اعمل music library"*.

Five pieces now, about sixty-one minutes: `background-music.mp3` and
`Background-music-2..5.mp3`. `audio.js` plays them as a playlist — one ends and the
next begins, the last returns to the first, and a skip control moves through them by
hand. The piece **and its position** persist across pages, so navigating continues
the music rather than restarting it.

**The constraint that shaped the code, and the one to preserve.** The five files are
~41 MB together. `preload` is `none`; nothing is fetched until Sound is pressed, and
the next piece is not touched until the current one ends. Measured in Chromium: **0**
mp3 requests at rest, **1** after pressing Sound, **2** across a whole session that
played and skipped. A visitor on mobile data must never pay for a minute they do not
hear — any future change here has to keep that true.

Filenames are **case-sensitive** on GitHub Pages. `Background-music-2.mp3` is not
`background-music-2.mp3`.

**Found while testing:** `drgs-compendium.html` had never included `audio.js` at all,
so the music died on the flagship page. One line.

---

## D-29 · 10 September 2026 · The record holds the science, and keeps its old numbers

**Source:** this session. **[RECORDED]** — your words: *"خلى القائمه مقتصره على المحتوى
العلمى فقط - الصفحات العلميه فقط --- شيل الجزء الخاص بالصفحات التانيه"*.

Out of the record: the cinematic opening, the pyramids, the observatory hub, the
foreword, the gallery and the dossier. What remains is the eight scientific pages —
**622 entries, 83 sections, 539 points** (was 711 / 107 / 604).

**They were deliberately not renumbered to 1–8.** Every address on this site is meant
to be citable; the Compendium stays `5.x` and the Source Corpus stays `12.x`. A tidier
sequence is not worth breaking every link that already points at them. The deck now
opens on card `05` rather than `01`, and that is the honest consequence.

---

## D-30 · 10 September 2026 · The deck holds its place while the record changes beneath it

**Source:** this session. **[RECORDED]** — your words: *"الكروت محتاجه تبقى ثابته فى
نفس الوقت - مش اول ما دوس عليها تطلع القائمه - ممكن تدوس على الكارت و يظهر فى نفس الوقت
تحت القائمه"*.

Clicking a card no longer travels. The card comes to the front and the record beneath
it switches to that page at the same moment, with the deck exactly where it was.

**The part that needed work, and will catch anyone who touches this again:** hiding
the other blocks makes the document shorter, and the browser then shifts `scrollY` on
its own — so the deck drifted even though nothing asked it to move. The fix measures
the deck's position in the viewport *before* the filter and restores it *after*.
Verified at 390 / 768 / 1280: deck top **104px before, 104px after**.

---

## D-31 · 10 September 2026 · No italics, and champagne gold instead of stars

**Source:** this session. **[RECORDED]** — your words: *"شيل الخط المائل مبحبوش اصلا"*
and *"the stars - to be replaced with light / champagne gold as a background"*.

Every italic is gone from `wiki.html` — 0 italic elements. The line under the title is
yours verbatim: *"The house — where clinical validation of DRGs is a textbook
signature."*

In the Observatory, the drifting starfield is deleted — 92 points and a permanent
`requestAnimationFrame` loop — and the cool cyan/violet ambient light it sat in is now
champagne gold.

**A judgement recorded because it was a choice, not a certainty.** "Light / champagne
gold as a background" could mean the whole page inverts to a pale ground. That would
have made its near-white text unreadable and re-skinned the page uninvited, so the
gold was applied as *the light falling on the page* and the panels were left dark.
Sherif was asked whether he wants the panels light too; until he says so, this is
where it stands.

---

## D-32 · 10 September 2026 · Images belong in files once they are large

**Source:** this session. **[DERIVED]** — from replacing the RDD Process picture.

`CLAUDE.md` prefers inlined base64 so documents travel self-contained. The RDD
picture was a **686 KB** base64 blob inside `gallery.html`. Replacing it with the new
`3D-Processes-Picture.png` as a plain file reference made the page **686 KB smaller**
and the image cacheable on its own.

The convention stands for small glyphs and gradients. Past roughly a hundred
kilobytes it costs more than it buys, and the root already holds loose images
(`psychiatry-hero.jpg`, `signature.png`) that establish the exception.

---

## D-33 · 10 September 2026 · The opening is a descent onto Antarctica

**Source:** this session. **[RECORDED]** — your words: *"عايز unreal صوره للقطب الجنوبى
حقيقيه كانك نازل على القطب الجنوبى فعلا على index"*.

`index.html` was a **566,242-byte** generated bundle that unpacked itself at runtime to
display **454 visible characters**. It is now **19 KB**, hand-authored, and in the
architecture the rest of the site actually uses.

Three real photographs, in sequence: the DC-8's engines banking over the Amundsen Sea
ice shelf, the Ellsworth Range, and the Thurston Island calving front. Each is a sticky
full-viewport frame whose photograph scales down as you scroll, so **the camera falls
towards the ice rather than the ice sliding past the window**. An altitude readout
falls with it, 37,000 ft to 600.

**On the images, because it matters here more than on most sites.** You asked for real
ones and none had arrived, so rather than stall I took **NASA / Operation IceBridge**
photographs — aerial survey images of Antarctica, shot from the aircraft, in the
**public domain**. That licence was chosen deliberately over Unsplash or Pexels: NASA
imagery carries no copyright at all, so there is no permission that could later be
withdrawn or misread. They are credited in the page footer regardless. On a site whose
first principle is provenance, an unattributed object would be the one indefensible
thing on it.

**A legibility fix worth keeping.** The first frame puts white type over a sunlit engine
cowling, where it vanished. The answer was a radial scrim pooled behind the words, not
a darker photograph — darkening the whole image to rescue two lines of text would have
spent the picture to save the caption.

