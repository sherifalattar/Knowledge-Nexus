# memory.md — Knowledge Nexus

Every durable memory artefact touching the site, quoted in full, with its title, the date
it was written, and its type.

> **Provenance warning — read once.**
> These are **not** claude.ai memory-store entries. This session has no access to the
> claude.ai memory store (verified — see `00-READ-ME-FIRST.md` §1). What follows are the
> two durable, dated, standing instruction sets that *are* reachable: the repository's
> committed project memory, and the standing preferences block attached to this session.
> Both function as memory — they bind future sessions — but if you hold entries in the
> claude.ai memory store, they are absent here and I could not see them.

---

## Entry 1

| Field | Value |
|---|---|
| **Title** | `CLAUDE.md` — project instructions for Knowledge Nexus |
| **Date written** | **17 July 2026** (commit `bf72153`, "Add CLAUDE.md and clickable LinkedIn image badge in README") |
| **Introduced by** | PR [#34](https://github.com/sherifalattar/Knowledge-Nexus/pull/34), "Add CLAUDE.md documenting the site and LinkedIn badge" — opened 2026-07-17T16:33:58Z |
| **Type** | Repository-committed project memory. Binding on every agent session that opens this repo. |
| **Status at 2 Sep 2026** | Live at `main` HEAD (`05c7613`). Unmodified since it was written. |
| **Path** | `/CLAUDE.md` (repository root) |

**Quoted in full, verbatim:**

````markdown
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
  (`*.png`, `*.jpg`, `background-music.mp3`).
- `audio.js` is a single shared script that carries background music across
  pages and remembers playback state so the music never restarts on navigation.
  `background-music.mp3` must live at the repository root.
- Nothing is fetched from a data file at runtime — every module is
  self-contained.
- Typefaces, the icon set, and the films load over HTTPS, so the canonical
  experience is the live URL. Opening files directly from disk will not load
  those embeds.

### Pages

| File | Role |
|---|---|
| `index.html` | Cinematic opening (the constellation) |
| `pyramids.html` | The metaphoric landing |
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
| `introduction.html`, `psychiatry-intro.html` | Introductory framing pages |

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

Type is a three-voice system: **Fraunces** (display serif), **Hanken Grotesk**
(reading grotesque), and **JetBrains Mono** (data/detail). Motion is
restrained — constellations, orbits, slow gradients — never decorative for its
own sake.

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

- Preserve the single design system (colours, type, restrained motion) when
  editing any page.
- Keep documents self-contained: prefer inlined SVG/CSS and base64 data-URIs
  over new loose asset files.
- Keep `background-music.mp3` and `audio.js` at the repository root; do not
  break cross-page audio continuity.
- To preview locally, serve the folder over HTTP (any static server) rather than
  opening files from disk — the embeds need a real origin.

## Rights

© 2026 Dr. Sherif Alattar. All rights reserved. Referenced code systems and
standards belong to their respective owners and appear for educational reference
only. This is a personal, educational portfolio — not medical, legal, or
reimbursement advice, and not an official source for coding or adjudication
decisions.
````

**Note on Entry 1's accuracy as of 2 September 2026.** The `CLAUDE.md` section titled
"The LinkedIn badge (README.md)" describes the *README* badge — the shields.io image
badge — and its reasoning is still correct. It does **not** describe the separate
in-page LinkedIn badge work carried out on `executive-summary.html` on 20 July 2026
(PRs #35–#37), which came after it. `CLAUDE.md` has never been updated to record that
work. See `open-items.md`, item OI-07.

---

## Entry 2

| Field | Value |
|---|---|
| **Title** | Standing user preferences — Dr. Sherif Alattar |
| **Date written** | **22 July 2026** (the date carried on the entry itself) |
| **Type** | Standing personal preferences. Delivered into this session's context; governs how work is done and how outputs are delivered. |
| **Scope** | Cross-project — covers Knowledge Nexus and all other work |

**Quoted in full, verbatim:**

> On 22/07/2026: The outputs to be stored in Claude-Outputs Folder. The path is DESKTOP ->  Master Library Folder --> Claude-Outputs Folder only. DONT STORE OR USE GOOGLE DRIVE. The memory of the project to be updated regularly.  I generally prefer concise clear answers that is around a paragraph, not long text or back and forth, unless the topic necessitates further explanation. I have design guidelines, that you could refer to. I am working on Job search and Grievance these days. Claude code works on update and maintenance of my website. Claude co work assists on the website as well. Refer to the project updated memory and always follow chain-of-thought and beyond innovation when the project is related to design and knowledge in my projects. Refer to McKinsey for similar business presentations. I prefer Noble prize laureate verbal eloquence. During the chat regularly update the history and document in a mark down file the progress. Revise the previous chat sessions in the project. Learning-first collaboration -Sherif work with Claude is not restricted to outputs — it is deliberately a learning process. While completing tasks he learns AI, design, medicine, English, and more. When a non-obvious word, metaphor, or term is used, always give its exact literal meaning together with the precise Arabic equivalent — he prefers exact definitions over approximate imagery.

**What this entry establishes as binding rules** (each drawn from your own words above):

1. **Storage** — "The path is DESKTOP ->  Master Library Folder --> Claude-Outputs Folder
   **only**." And: "DONT STORE OR USE GOOGLE DRIVE."
2. **Memory upkeep** — "The memory of the project to be updated regularly."
3. **Answer length** — "around a paragraph, not long text or back and forth, unless the
   topic necessitates further explanation."
4. **Division of labour on the site** — "Claude code works on update and maintenance of my
   website. Claude co work assists on the website as well."
5. **Method for design/knowledge work** — "always follow chain-of-thought and beyond
   innovation when the project is related to design and knowledge."
6. **Register** — "Noble prize laureate verbal eloquence"; business presentations to
   "Refer to McKinsey."
7. **Running record** — "During the chat regularly update the history and document in a
   mark down file the progress."
8. **Learning-first** — "work with Claude is not restricted to outputs — it is deliberately
   a learning process… When a non-obvious word, metaphor, or term is used, always give its
   exact literal meaning together with the precise Arabic equivalent — he prefers exact
   definitions over approximate imagery."
9. **Current focus as of 22/07/2026** — "I am working on Job search and Grievance these
   days."

---

## Entry 3 (partial — public statement, not private memory)

| Field | Value |
|---|---|
| **Title** | `README.md` — the public doctrine of Knowledge Nexus |
| **Date written** | Created **28 June 2026** (`32d228a`); substantially revised **17 July 2026** (`bf72153`, `57de6b0`); footer year fixed **4 July 2026** (`9c18532`, PR #10) |
| **Type** | Public repository documentation. Included here because it is the authoritative written statement of the design system, the module inventory, the provenance table, and the authorship/AI position — all of which bind the project. |
| **Status at 2 Sep 2026** | Live, unmodified since 17 July 2026 |

Not re-quoted in full here — it is 8,225 bytes and travels with the repository. The
passages of it that carry **binding force** are extracted verbatim into `decisions.md`
(design tokens, type system, architecture rules, provenance, rights). One passage belongs
in memory because it states the project's founding intent in your own words:

> Knowledge Nexus began as a desire to understand the UAE health‑insurance system, and how it differs in concept from the Saudi market where much of my earlier experience was formed. What started as personal notes grew — through reading, research, validation, comparison of references, and conversations with colleagues — into a broader repository spanning healthcare regulation, coding systems, reimbursement methodology, clinical guidelines, and operational practice.

And the position on AI authorship, which governs how the work may be described:

> Artificial intelligence is used here openly, as an instrument — for research assistance, organization, drafting, and visualization — much as a writer uses a fine pen or an architect uses CAD. It accelerates the craft; it does not replace the judgment. Every clinical and coding claim is the author's to stand behind.

---

## Entry 4 (repository metadata — author's own description)

| Field | Value |
|---|---|
| **Title** | GitHub repository description |
| **Date written** | **Uncertain.** GitHub does not version repository descriptions, and this session cannot date it. |
| **Type** | Repository metadata, authored by you |
| **Status at 2 Sep 2026** | Live on the repository |

**Quoted verbatim:**

> Knowledge Nexus is a personal creativity and academic working synthesis,self and solely authored, designed and developed.It is built from sticky notes that developed into over 1000 working files while exploring  the UAE healthcare insurance and its contrast with Saudi practice, diving into the DRG methodology.

*(Punctuation and spacing reproduced exactly as recorded, including the missing spaces
after "synthesis," and "developed.".)*

**[UNCERTAIN]** The figure "over 1000 working files" is your own statement about the body
of work behind the site. The repository itself carries 28 files at `main` HEAD. The two
are not in conflict — the description refers to the working corpus, the repository to what
was published — but I cannot verify the 1000 figure from anything reachable here.

---

## Memory entries I could not retrieve

For completeness, and so the gap is explicit rather than silent:

- **claude.ai memory-store entries touching Knowledge Nexus** — not reachable. Count
  unknown.
- **Any project-memory markdown file** you may maintain outside this repository (your
  preferences of 22/07/2026 refer to "the project updated memory" and to documenting
  progress "in a mark down file") — not reachable from this container. If such a file
  lives in your `Claude-Outputs Folder`, it is not here.
