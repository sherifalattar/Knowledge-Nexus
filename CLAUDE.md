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
