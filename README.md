# Knowledge Nexus

*A personal reference observatory for UAE healthcare insurance, clinical coding, and reimbursement — authored and curated by Dr. Sherif Alattar.*

**Live site:** https://sherifalattar.github.io/Knowledge-Nexus/

---

## Overview

Knowledge Nexus began with a simple goal: to better understand the UAE healthcare insurance system and how it differs, conceptually, from the Saudi healthcare market where much of my earlier experience was developed.

What started as a collection of personal notes gradually grew into a broader knowledge repository — built through continuous reading, research, validation, comparison of references, discussion with colleagues, and exploration of healthcare regulations, coding systems, reimbursement methodologies, clinical guidelines, and operational practice.

The project uses modern technology, including artificial intelligence, as a tool for research, organization, visualization, and knowledge synthesis — not as a substitute for domain understanding. The aim was never to merely collect information, but to build a structured reference that supports learning, comparison, and continuous refinement.

Knowledge Nexus remains an evolving body of work that reflects an ongoing pursuit of understanding, curiosity, and lifelong learning.

---

## Structure

The site is a single, self-contained experience hosted on GitHub Pages:

```
index.html  ──ENTER──▶  observatory.html  ──▶  content modules
(cinematic opener)        (the hub)              (the references)
```

- **`index.html`** — the cinematic opening sequence. A one-time gateway; the ENTER action also arms the ambient audio.
- **`observatory.html`** — the navigation hub. Links out to every module; every module links back here.
- **Content modules** — the references themselves (listed below). Each carries a `⌂ Nexus` link back to the hub.

---

## Contents

| Page | Module |
|------|--------|
| `index.html` | Cinematic opener |
| `observatory.html` | Observatory — the navigation hub |
| `DRGs_Compendium_Clean.html` | **DRGs Compendium** — a curated vade mecum of diagnosis-related groups |
| `codes-global-atlas.html` | **Codes · Global Atlas** — a universal alphanumeric logic for reading denial, adjustment, and remittance codes across markets |
| `psychiatry-intro.html` | **Psychiatry — Triangulated Lens** — introduction to the psychiatric-diseases framework |
| `psychiatry-semantic-layer.html` | Psychiatric Diseases — deeper semantic layer |
| `psychiatry-ir-drg-tree.html` | MDC 19 — Mental Diseases & Disorders · IR-DRG hierarchical tree |
| `setting-of-care.html` | **Setting of Care Principles** |
| `gallery.html` | **Visual Archive** — designs and data visualizations |
| `about-me-sherif-alattar.html` | **Executive Dossier** — professional profile |
| `source-corpus.html` | **Source Corpus** — the authorities beneath the compendium and psychiatric map |

The psychiatry semantic layer and IR-DRG tree are sub-pages reached from the psychiatry introduction; the rest open directly from the hub.

---

## Ambient audio

The site shares one ambient sound system across every page:

- **`audio.js`** — a single shared module. Each page loads it once; it injects one "Sound" toggle (bottom-right) and manages a single `<audio>` element. Sound is **off by default** (browsers block autoplay with sound until a user gesture), persists across pages within a session, and resumes on navigation.
- **`ambient.mp3`** — the audio track.

**Both `audio.js` and `ambient.mp3` must remain in the repository root.** All page links to them are relative (`audio.js`, `ambient.mp3`); moving either into a subfolder breaks the toggle and the track. The toggle is created by `audio.js` at runtime, so it appears only when a page is served alongside that file — i.e. on the live site, not in an isolated single-file preview.

---

## Design language

The interface aims for a calm, homogeneous, executive-grade feel — consistent palette, typography, and motion across every page.

- **Palette:** deep navy (`#070A11` / `#0B0F17`), panels (`#0E141E`), accent cyan (`#19D3F3`), with warm-gold detailing on the audio control.
- **Typography:** Fraunces (display) · Hanken Grotesk (text) · JetBrains Mono (technical labels).
- **Motion:** restrained, purposeful transitions; the cinematic opener is the only full animation sequence.

---

## Deployment

Hosted on **GitHub Pages**; updated entirely through the **GitHub web interface**.

- Uploading a file automatically overwrites the existing file of the same name — no manual deletion needed.
- Keep `audio.js` and `ambient.mp3` in the repository root.
- Large media (videos, interactive dashboards) live on external services (e.g. YouTube, Power BI) and are embedded, to stay within GitHub Pages' file-size limits.
- Preview changes on the live `sherifalattar.github.io` URL rather than by opening a single downloaded file — relative links to shared assets only resolve when the whole site is served together.

---

## Authorship & sources

Knowledge Nexus is a personal educational and reference project. The written commentary, structure, visualizations, and design are my own work; AI tools were used for research support, organization, and visualization. Where the material draws on regulatory frameworks, coding standards, and clinical references, it synthesizes publicly available sources — catalogued in the **Source Corpus** page — into an original, structured reference.

---

*© Dr. Sherif Alattar. A continuously evolving work of curiosity and lifelong learning.*
