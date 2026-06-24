# Knowledge Nexus

A personal professional portfolio by **Dr. Sherif Alattar, MD** — work in UAE healthcare
insurance, clinical coding (IR-DRG, ICD-10-CM, DSM-5-TR), reimbursement, and the Roving
Doctors Department (RDD).

**Live:** https://sherifalattar.github.io/Knowledge-Nexus

All written content, taxonomy, framing, and design are the author's own. AI is used as a
research and visualization aid, not a substitute for domain expertise.

## How the site is built

A cinematic opener (`index.html`) leads into a central hub, which links to every content page.
One ambient track (`ambient.mp3`, in the repository root) plays through a single sound toggle
shared across pages, so the audio stays consistent throughout the site.

## Content

- **DRGs Compendium** — a self-authored study of the Abu Dhabi DRG landscape, grounded in the
  public DOH framework, IR-DRG methodology, and ICD-10-CM coding.
- **Denial Codes Navigator** — fast denial-code lookup, organized by family.
- **Codes Global Atlas** — companion reference to the authorization/denial code structure, with a
  one-click download of the code set (`Codes.xlsx`).
- **Psychiatry pages** — DSM-5-TR diagnostic criteria mapped to ICD-10-CM diagnosis codes and
  IR-DRG relative weights.
- **Visual archive** and **About**.

The psychiatric relative weights are the published figures from **Appendix A, Addendum 05 to the
DOH Claims & Adjudication Rules, V2025** (effective 01 October 2025).

## Hosting

GitHub Pages serves static files only — HTML, CSS, JavaScript, images, and downloads, but no
server-side code.

- Images and very short clips are hosted in the repository.
- Large videos live on YouTube and are embedded, since GitHub caps files at 100 MB and is not
  built for video streaming.
- Dashboards (e.g. Power BI) are embedded via their own publish-to-web iframes.
- Downloads such as `Codes.xlsx` sit in the repository root and are served directly.

The full interactive experience needs the live `github.io` URL. Environments that cannot run the
scripts (e.g. SharePoint previews) will not render it — a flat PDF is the fallback there.

## Deploying (and avoiding duplicate files)

Everything is done through the GitHub web interface:

1. Open the repository on github.com.
2. **Add file → Upload files**, drag in the updated file(s), then **Commit changes.**

GitHub serves **one file per name.** Uploading a file with the **exact same name**
(capitalization included) replaces the old version — no separate delete step is needed. To remove
a file that has a *different* or outdated name (a renamed or superseded page), open it on
github.com, use the **trash icon**, and commit. Keep a single canonical copy of each page so
nothing stale is ever served.

Filenames are **case-sensitive**: `README.md` and `Readme.md` would be treated as two different
files, so keep only one.

## Copyright

© 2026 Dr. Sherif Alattar. Original educational design, explanatory content, taxonomy
presentation, and HTML implementation. Official code systems and standards remain the property of
their respective owners.
