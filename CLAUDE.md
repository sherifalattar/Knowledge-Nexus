# CLAUDE.md

Guidance for Claude Code (and other agents) working in this repository.

## What this is

**Knowledge Nexus** is a static site — an "observatory" for the logic of UAE
health insurance (clinical coding, reimbursement, and clinical reasoning). It is
authored, curated, and designed by Dr. Sherif Alattar, MD.

Live site: https://sherifalattar.github.io/Knowledge-Nexus/

## Architecture

- **No build step, no framework, nothing to install.** Every surface is
  hand-authored HTML, CSS, and inline SVG.
- Imagery is largely **inlined** (gradients, vector glyphs, base64 data-URIs),
  so documents travel self-contained. Only a few loose assets exist at the root
  (`*.png`, `*.jpg`, `Background-music-*.mp3`).
- `audio.js` is a single shared script that carries background music across
  pages and remembers **which piece and what position**, so navigation never
  restarts the music. It plays a four-piece library (~58 minutes) that must live
  at the repository root: `Background-music-2..5.mp3` — the capitalisation
  matters, GitHub Pages is case-sensitive. (`background-music.mp3`, the original
  short loop, was removed on 10 September 2026 at the author's request.)
  The pill is a **chooser**, not a skip: pressing it toggles sound, and the caret
  beside it opens the four pieces by name so any one can be reached in a single
  press. Choosing a row still fetches only that file.
  **The tracks are never preloaded.** Together they are ~38 MB; `preload` is
  `none` until Sound is pressed, and the next piece is fetched only when the
  current one ends. Any change here must preserve that — a visitor on mobile
  data should never pay for a minute they do not hear.
  Every page must include `audio.js`, or the music dies on that page.
- Nothing is fetched from a data file at runtime — every module is
  self-contained.
- Typefaces, the icon set, and the films load over HTTPS, so the canonical
  experience is the live URL. Opening files directly from disk will not load
  those embeds.

### Pages

| File | Role |
|---|---|
| `index.html` | The descent — a polar landscape raymarched in real time (WebGPU, WebGL2 fallback) |
| `pyramids.html` | A Doctrine in Stone — the doctrine, over a raymarched Giza (WebGPU, WebGL2 fallback) |
| `observatory.html` | The hub; every module orbits here |
| `drgs-compendium.html` | IR-DRG system |
| `denial-codes.html` | Denial codes as infrastructure |
| `denial-codes-semantic.html` | The Denial Navigator |
| `psychiatry-intro.html` | Psychiatry — a triangulated lens |
| `psychiatry-semantic-layer.html` | DSM-5-TR semantic layer |
| `psychiatry-ir-drg-tree.html` | Psychiatry across DSM-5 & IR-DRG |
| `setting-of-care.html` | Setting-of-care principles |
| `source-corpus.html` | The reference foundation |
| `gallery.html` | Visual archive — dashboards and short films |
| `executive-summary.html` | About the Author — the executive dossier |
| `wiki.html` | The foreword and the Content Map — 622 citable entries under five headings |
| `verification.html` | The Verification Register — which Compendium blocks name an authority |
| `introduction.html` | A `noindex` redirect leaf to `wiki.html#foreword` (the page was merged) |

### Third-party imagery

Everything on this site is Sherif's own work. The one exception is a set of NASA /
Operation IceBridge photographs of Antarctica (`pole-1-flight.jpg`,
`pole-2-range.jpg`, `pole-3-front.jpg`), which are **public domain** — NASA imagery
carries no copyright. `index.html` no longer displays them: it generates its
landscape on the GPU instead, and keeps one photograph only as the last-resort
fallback for a browser with neither WebGPU nor WebGL2. It is credited in the page
footer, because a site whose first principle is provenance should not have an
unattributed object on it.

If any image is ever added from a source that is *not* public domain, its
licence and author go in `project-record/decisions.md` before it is committed.

### The Content Map

`wiki.html` divides the record by **five headings**, and by nothing else:

| Heading | Pages | Entries |
|---|---|---|
| DRGs Compendium | 5 | 188 |
| Denial Codes Thesis | 6, 7 | 124 |
| Psychiatry | 8, 9, 10 | 240 |
| Setting of Care | 11 | 40 |
| Source Corpus | 12 | 30 |

**There is no "all" state.** Putting all 622 entries in the document at once made
it long enough that scrolling stuttered, so one heading is shown at a time and a
search — which does reach the whole record — is the only thing that spans them.
Entries carry their **names only**; the substance lines were removed for the same
reason. Both properties are load-bearing: restoring either brings the stutter back.

The deck above the record is generated from the `kn-map` JSON, one card per
heading. If pages are regrouped, that JSON, the chips, and the `data-group`
attribute on each `.page-block` must move together.

### Numbering and provenance

`drgs-compendium.html` addresses every block as `chapter.section.topic.block` (e.g.
`I.1.2.4`). The addresses are generated at runtime from the `DATA` array — `NUM` must be
declared **above** the renderers or every number renders empty — and each is a copyable
deep link. `verification.html` is the audit of those addresses: 192 blocks, 73 of which
name an authority. If you add or reorder Compendium blocks, the register's rows and its
tally must be regenerated from the live `DATA`, not edited by hand.

## Design language

A single, deliberate system — a deep-navy observatory lit by one cyan signal.

| Token | Value | Role |
|---|---|---|
| Void | `#02040a` · `#040711` | Background, deep space |
| Panel | `#09101d` | Raised surfaces |
| Signal | `#22e8ff` | The single accent |
| Teal | `#2dd6e3` | Secondary accent |
| Ice | `#8fbdff` | Tertiary highlight |
| Silver / Light | `#dce9f7` · `#eef6ff` | Text |

Type is a three-voice system, but the pages do not all speak it identically —
this was checked against the files rather than taken from this document, which
previously named two families (Fraunces, Hanken Grotesk) that no page loads:

| Page group | Display | Reading | Data |
|---|---|---|---|
| `wiki.html`, `executive-summary.html` | Cormorant Garamond | Archivo | JetBrains Mono |
| `drgs-compendium.html` | Archivo | Inter | JetBrains Mono |
| `observatory.html` | Arial Narrow / Aptos Display | Inter | — |
| psychiatry pages, `source-corpus.html` | Manrope | Manrope | JetBrains Mono |

Motion is restrained, and on `wiki.html` deliberately absent: its background
constellation and its sheen loop were removed because that page's purpose is to
direct the reader, and a permanent `requestAnimationFrame` loop bought nothing
towards that.

## The LinkedIn badge (README.md)

`README.md` uses a **shields.io image badge** linking to the author's LinkedIn
profile:

```markdown
[![LinkedIn — Dr. Sherif Alattar](https://img.shields.io/badge/LinkedIn-Dr.%20Sherif%20Alattar-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://ae.linkedin.com/in/sherifalattar)
```

It renders as a static, LinkedIn-blue badge with the LinkedIn logo and the
author's name, and the whole badge is a clickable link to
`https://ae.linkedin.com/in/sherifalattar`.

**Why an image badge (not the official widget):** LinkedIn's official Profile
Badge is a JavaScript widget (`platform.linkedin.com/badges/js/profile.js`) that
only builds its card when that script runs. GitHub sanitizes README HTML and
never executes scripts, so the widget collapsed to a bare text link on GitHub.
The image badge renders everywhere — including on GitHub — because it is a plain
image wrapped in a link. Trade-off: it shows a static badge (name + logo), not
the live card with photo and headline.

## Working conventions

### The design is not yours to change

**No design change without the author's explicit permission — none.** This is a
standing instruction from Dr. Alattar, given on 11 September 2026, and it is the
first rule in this file for a reason.

- "Add X to this page" means **add X**. It does not license a rebuild, a
  re-layout, a re-typesetting, or a removal of anything already there. When a page
  is broken and the ask cannot be done without touching its structure, say so and
  **ask** — do not decide.
- A page's look, its layout, its palette, its typography and the devices on it
  (a card deck, a hero band, a carousel) are the author's work. Fixing a defect
  does not extend to redesigning around it.
- Removing something is a design change. So is moving it, resizing it, or
  replacing the thing that renders it.
- When in doubt, the answer is to ask, not to proceed and report afterwards.

Everything in a page's history is recoverable from git, but a design decision the
author did not make is a cost he pays even when it is reverted.

- Preserve the single design system (colours, type, restrained motion) when
  editing any page.
- **The Six Chambers belong to `pyramids.html`.** The device — six doorways, one
  word each — is that page's, and only that page's. It was rendered as artwork
  (`psychiatry-hero.jpg`) and used as the hero band on `psychiatry-intro.html`;
  that band was removed on 11 September 2026, and the image is now unreferenced.
- **"Provenance over assertion" belongs to `observatory.html` alone.** The phrase
  was repeated on three pages; the idea may be restated elsewhere in other words,
  but the slogan itself appears once.
- Keep documents self-contained: prefer inlined SVG/CSS and base64 data-URIs
  over new loose asset files.
- Keep the `Background-music-*.mp3` files and `audio.js` at the repository root;
  do not break cross-page audio continuity.
- To preview locally, serve the folder over HTTP (any static server) rather than
  opening files from disk — the embeds need a real origin.

## Rights

© 2026 Dr. Sherif Alattar. All rights reserved. Referenced code systems and
standards belong to their respective owners and appear for educational reference
only. This is a personal, educational portfolio — not medical, legal, or
reimbursement advice, and not an official source for coding or adjudication
decisions.
