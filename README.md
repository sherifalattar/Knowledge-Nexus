<div align="center">

# Knowledge Nexus

### An observatory for the logic of UAE health insurance
clinical coding · reimbursement · clinical reasoning · the connections between them

**[ Enter the observatory → ](https://sherifalattar.github.io/Knowledge-Nexus/)**

*Authored, curated, and designed by Dr. Sherif Alattar, MD*

</div>

---

> Knowledge Nexus began as a desire to understand the UAE health‑insurance system, and how it differs in concept from the Saudi market where much of my earlier experience was formed. What started as personal notes grew — through reading, research, validation, comparison of references, and conversations with colleagues — into a broader repository spanning healthcare regulation, coding systems, reimbursement methodology, clinical guidelines, and operational practice.

## The idea

The aim was never to *collect* information. It was to **structure** it — to build a reference that makes a complex domain legible, and that keeps refining itself as understanding deepens. Knowledge Nexus is where that structure lives: part working reference, part portfolio, part design object.

It is offered in the open, as a study aid and a record of practice. It is **not** an official publication of any authority, and nothing within it is medical, legal, or reimbursement advice.

## The experience

The site is built as a short journey rather than a page.

1. **A cinematic opening** — a constellation you step through.
2. **The Observatory** — a hub where every module orbits a single point.
3. **The modules** — each a self‑contained study of one part of the domain.

A continuous ambient score follows you from page to page and never restarts as you move. The whole site is meant to be *entered*, not merely browsed.

## Inside the Nexus

| Module | What lives there |
|---|---|
| **Cinematic Opening** | The constellation you pass through to arrive. |
| **The Observatory** | The hub; every module orbits here. |
| **DRGs Compendium** | The IR‑DRG system — how inpatient encounters group, and the logic beneath it. |
| **Denial Codes** | The consolidated study — what denial codes are as shared infrastructure, how one is built (group code → CARC → RARC → the DoH·Shafafiya layer), and a claim's journey through them. |
| **Denial Navigator** | An offline, colour‑keyed taxonomy across eight reason families — searchable by code, family, or phrase. |
| **Psychiatry — A Triangulated Lens** | An introduction to psychiatric disease across three perspectives. |
| **Psychiatry — Semantic Layer** | The DSM‑5‑TR framing, made navigable. |
| **Psychiatry across DSM‑5 & IR‑DRG** | Psychiatric disease mapped between diagnostic and grouping systems. |
| **Setting‑of‑Care Principles** | When care belongs where — and why it matters to a claim. |
| **Source Corpus** | The reference foundation: every source the work stands on. |
| **Gallery** | The visual archive — dashboards and short films. |
| **About the Author** | The path that led here. |

## Design language

The look is a single, deliberate system — a deep‑navy observatory lit by one cyan signal.

| Token | Value | Role |
|---|---|---|
| Void | `#02040a` · `#040711` | Background, deep space |
| Panel | `#09101d` | Raised surfaces |
| Signal | `#22e8ff` | The single accent — light in the dark |
| Teal | `#2dd6e3` | Secondary accent |
| Ice | `#8fbdff` | Tertiary highlight |
| Silver / Light | `#dce9f7` · `#eef6ff` | Text |

Type is a three‑voice system: a high‑contrast serif for display (**Fraunces**), a humanist grotesque for reading (**Hanken Grotesk**), and a monospace for data and fine detail (**JetBrains Mono**). Motion is restrained — constellations, orbits, slow gradients — never decorative for its own sake.

## Built as text

Knowledge Nexus is a static site with **no build step, no framework runtime, and nothing to install.**

- Every surface is hand‑authored HTML, CSS, and inline SVG.
- Imagery is **inlined** — gradients, vector glyphs, and base64 data‑URIs — so the crest and dashboards travel *inside* the documents themselves. The repository carries almost no loose image files; the observatory is, very nearly, made of text.
- A single shared script, `audio.js`, carries the ambient score across every page and remembers its state between them, so the music never restarts. `ambient.mp3` lives at the repository root.
- Nothing is fetched from a data file at runtime — every module is self‑contained.
- Typefaces, the icon set, and the films load over HTTPS, so the canonical experience is the live address. Opening the files directly from disk will not load those embeds.

```
Knowledge-Nexus/
├─ index.html                      cinematic opening
├─ observatory.html                the hub
├─ drgs-compendium.html
├─ denial-codes.html               denial codes as infrastructure
├─ denial-codes-semantic.html      the Navigator
├─ psychiatry-intro.html
├─ psychiatry-semantic-layer.html
├─ psychiatry-ir-drg-tree.html
├─ setting-of-care.html
├─ source-corpus.html
├─ gallery.html
├─ about-me-sherif-alattar.html
├─ audio.js                        shared ambient score
└─ ambient.mp3                     (root — required here)
```

**To preview locally**, serve the folder over HTTP (any static server) rather than opening files from disk — the embeds need a real origin.

## Sources & provenance

Knowledge Nexus reads, organizes, and connects **publicly available** material. The systems it references remain the property of their custodians.

| System | Custodian | Source |
|---|---|---|
| ICD‑10‑CM | U.S. CDC / NCHS | [cdc.gov](https://www.cdc.gov/nchs/icd/icd-10-cm/files.html) |
| DSM‑5‑TR | American Psychiatric Association (© 2022) | [psychiatry.org](https://www.psychiatry.org/psychiatrists/practice/dsm) |
| IR‑DRG | Solventum | [solventum.com](https://www.solventum.com/en-ae/home/health-information-technology/solutions/ir-drg/) |
| Adjudication rules · denial & remittance codes · pricing | Abu Dhabi Department of Health — *Shafafiya* | [doh.gov.ae](https://www.doh.gov.ae/en/Shafafiya) |

The original design, writing, and synthesis are the author's; the standards are not. Nothing here is an official source for coding or adjudication decisions.

## Authorship, and the role of AI

Knowledge Nexus is authored, curated, and designed by **Dr. Sherif Alattar, MD** — a physician working in the UAE health‑insurance domain. The reasoning, the structure, and the synthesis are his.

Artificial intelligence is used here openly, as an instrument — for research assistance, organization, drafting, and visualization — much as a writer uses a fine pen or an architect uses CAD. It accelerates the craft; it does not replace the judgment. Every clinical and coding claim is the author's to stand behind.

## Use & rights

© 2026 Dr. Sherif Alattar. All rights reserved.

You are welcome to read, learn from, and link to this work. Reuse or redistribution of the original material is by permission. Referenced code systems and standards belong to their respective owners and appear here for educational reference only. This is a personal, educational portfolio — not medical, legal, or reimbursement advice, and not an official source for coding or adjudication decisions.

---

<div align="center">

> *Knowledge Nexus remains an evolving body of work — a record of an ongoing pursuit of understanding, curiosity, and lifelong learning.*

**Knowledge Nexus** · Abu Dhabi · UAE · MMXXVI

</div>
