# open-items.md — Knowledge Nexus

Everything still pending, unverified, or contradictory, as of **2 September 2026**.

Each item states what it is, where it came from, what I verified today, and what remains
undone. Items are ordered by consequence, not by date.

Repository state at compile time: `main` HEAD = `05c7613` (10 August 2026). **No commit has
landed on `main` in 23 days.** Two pull requests (#43, #44) were opened and closed unmerged
in that window.

---

## OI-01 · The LinkedIn badge on the About page is probably still not rendering — **[HIGH]**

**Origin:** PR #37, 20 July 2026 (`session_01WhPTmQkbGwkev9P1iwfM5x`).

PR #37 fixed the render timing and then stated its own limit, verbatim:

> The official card still can't be previewed in an offline/headless sandbox (LinkedIn blocks automated rendering — HTTP `999`), so **this needs a live check after merge.** If the card still doesn't upgrade on the live page, the remaining cause would be LinkedIn's own JSONP declining the external embed, and we'd switch to a static card replica.

**No record of that live check exists.** And there is contrary evidence: five weeks later,
PRs #43/#44 (27–28 August) named *"blocked LinkedIn badge"* as one of two live resource
failures firing the page's error handler. That is direct evidence the badge is **still not
loading**.

**Verified 2 September 2026:** `LIRenderAll` and `LI-profile-badge` are both present in
`executive-summary.html`, so the July fix did land in the file. Whether it works in a real
browser is untested from here — I cannot load LinkedIn's script from this container.

**What remains.**
1. Open `https://sherifalattar.github.io/Knowledge-Nexus/executive-summary.html` in a
   browser and look at the contact block: official card, or the blue fallback pill?
2. If it is the fallback, execute the plan already agreed in PR #37 — **switch to a static
   card replica.** That decision was pre-made; it only needs carrying out.

---

## OI-02 · `count.js` is missing, and two pages have no analytics at all — **[HIGH]**

**Origin:** PRs #43/#44, 27–28 August 2026, which named *"missing count.js"* as a live
resource-load failure.

**Verified 2 September 2026 — confirmed and worse than reported.** GoatCounter
(`gc.zgo.at/count.js`) is present on **12** pages and **absent from two**:

- `drgs-compendium.html`
- `source-corpus.html`

Those two pages have been serving **no analytics since 4 July 2026** — the day PR #6 added
the snippet *"to the 10 pages that lacked it."* They were missed then and have been missed
ever since.

**These are the same two pages** that were found missing `audio.js` in August 2026 (PR #42).
That is not coincidence — it is a pattern. Both are large, standalone reference documents
(310 KB and 56 KB) that were authored outside the main page template, and every site-wide
sweep has skipped them.

**What remains.**
1. Add the GoatCounter snippet to `drgs-compendium.html` and `source-corpus.html`.
2. Determine why `count.js` is reported as *missing* on pages that do carry it —
   most likely a network/adblock condition rather than a markup fault, but unverified.
3. **Adopt a rule:** any site-wide sweep must be checked against all 14 pages by name.

---

## OI-03 · There is no integrity check on any page, and history shows exactly why one is needed — **[HIGH]**

**Origin:** commit `00ae74b`, 9 July 2026 → discovered in PR #38, 20 July 2026.

A single site-wide badge sweep **silently truncated two of the largest documents on the
site** (`psychiatry-semantic-layer.html`, `psychiatry-ir-drg-tree.html`). Nothing detected
it. It was found **eleven days later**, by chance, during unrelated work.

**Verified 2 September 2026 — the damage is repaired.** All 14 content pages now end with a
proper `</html>`; both psychiatry pages close cleanly. *(The one file without `</html>` is
`google7f5a774d4427ac0c.html`, a one-line Search Console stub — correct as it is.)*

**But the exposure is unchanged.** Verified today: there is **no `.github/` directory** — no
CI, no workflow, no check of any kind. The repository has no build step by design (D-13),
so a corrupted file ships the moment it is pushed. `executive-summary.html` is 4.9 MB,
`gallery.html` 1.9 MB, `index.html` 564 KB. None can be eyeballed.

**What remains.** A single GitHub Action, perhaps ten lines, asserting that every `*.html`
file (excluding the verification stub) ends with `</html>`. Given the history, this is the
highest-value unbuilt thing in the project.

---

## OI-04 · `sitemap.xml` timestamps are stale — **[MEDIUM]**

**Origin:** PR #39, 23 July 2026.

Every one of the 14 `<lastmod>` entries reads `2026-07-23`. But `index.html`,
`drgs-compendium.html` and `source-corpus.html` were all modified on **10 August 2026**
(commit `05c7613`). Search engines are being told those pages have not changed since July.

**What remains.** Update `lastmod` for the three changed pages; decide whether `lastmod` is
maintained by hand going forward or dropped (a sitemap with no `lastmod` is valid, and
honest, where an inaccurate one is not).

---

## OI-05 · The sitemap pre-stages a page that was deliberately deleted — **[MEDIUM]**

**A contradiction between two sessions. Both given, newest first.**

**Newer — 23 July 2026, PR #39.** The sitemap carries a commented-out entry, and the PR
body describes it as *"about-me pre-staged as a comment for when it deploys."* The comment
in the file reads: `<!-- Uncomment when the page is deployed live: … about-me-sherif-alattar.html … -->`

**Older — 4 July 2026, PR #8.** That very page was deleted, and the PR body states the
reason: *"Deletes the about-me redirect stub so there is a single page/URL."*

**These cannot both be current policy.** The July decision (D-04) treats
`about-me-sherif-alattar.html` as permanently retired in favour of one canonical URL; the
sitemap treats it as a page awaiting deployment. Reconciled a third time in PR #42
(10 August), which inspected the entry and, quoted verbatim, concluded: *"it is
intentionally inside an HTML comment — left untouched."* — i.e. it was checked and
consciously left, without resolving what it is for.

**Resolution I recommend, flagged as my reading rather than a recorded decision:** the
one-page-one-URL rule (D-04) is the stronger and better-reasoned decision, so the commented
block should be deleted from `sitemap.xml`. **But this is your call** — if the dossier is
ever to be published at a second, friendlier URL, the stub is a deliberate placeholder and
should stay.

---

## OI-06 · Three unused assets remain at the repository root — **[LOW]**

**Origin:** PR #42, 10 August 2026, which held them deliberately, verbatim: *"Left in
place; not removed as part of this pass."*

**Verified 2 September 2026 — all three still present, all three still referenced by zero
pages:** `3d-process.png` (514 KB), `service-hero.jpg` (128 KB), `social-image.jpg` (27 KB).

`3d-process.png` and `service-hero.jpg` were both added on 12 July 2026 in commit `58acd54`
— the gallery build-out that also produced the "RDD Process" card. [DERIVED] They were
probably superseded when the gallery moved to inlined base64 images (D-11), leaving the
loose files orphaned.

**What remains.** Decide: delete them, or record them as intentionally-kept source assets.
The architecture rule (D-13) prefers inlined assets over loose files, which argues for
deletion — but `3d-process.png` may be a source image worth keeping outside the page.

---

## OI-07 · `CLAUDE.md` is two months out of date on two points — **[MEDIUM]**

Your standing preference of 22/07/2026 says, verbatim: *"The memory of the project to be
updated regularly."* `CLAUDE.md` has not been touched since 17 July 2026 — before most of
the LinkedIn work and everything after it.

**Two specific gaps, both verified today:**

1. **The in-page LinkedIn badge is undocumented.** `CLAUDE.md`'s LinkedIn section covers
   only the README shields.io badge (D-12). It says nothing about the official
   `LI-profile-badge` widget on `executive-summary.html`, the `LIRenderAll` poll, the
   fallback pill, or — most importantly — **the rule that this page must be edited with
   assertion-guarded exact-match replacements and never blind writes** (D-14). That rule
   was learned expensively and is recorded only in a PR body, where the next agent session
   will not see it. **It belongs in `CLAUDE.md`.**

2. **Two live accent colours are missing from the documented palette.** The identifier
   badge uses gold `#C9A24B` / `#E7C887`, and the audio toggle turns teal `#2FE6C8` when
   playing. Neither appears in the token table (D-13). An agent told to "preserve the single
   design system" would read those as violations and might "correct" them to `#22e8ff`.

**What remains.** Update `CLAUDE.md`: add the bundled-page editing rule, the in-page badge,
the gold identifier accent, and the `audio.js` contract (`sessionStorage` key `kn-audio`,
volume `0.42`, `window.knAudioArm()`).

---

## OI-08 · Two different LinkedIn URLs are in use — **[LOW]**

**Origin:** PR #35, 20 July 2026, which raised it and left it, verbatim:

> The badge links to `www.linkedin.com/in/sherifalattar`, while the README badge uses `ae.linkedin.com/in/sherifalattar`. Both resolve to the same profile; **can standardize if desired.**

**Verified 2 September 2026 — still not standardised.** `https://www.linkedin.com/in/sherifalattar`
appears **7** times; `https://ae.linkedin.com/in/sherifalattar` appears **2** times
(including the README badge documented in `CLAUDE.md`).

**What remains.** Pick one and apply it everywhere. Note that changing the README form means
editing `CLAUDE.md`, which quotes the badge markup verbatim.

---

## OI-09 · The vCard download link on the live About page points at a file that does not exist — **[HIGH]**

**Origin:** PR #36, 20 July 2026.

PR #36 delivered, verbatim: *"**vCard** — new `dr-sherif-alattar.vcf` at the repo root, wired
to a **"Save contact (.vcf)"** link in the contact list (name, title, phone, email,
LinkedIn, ORCID, site, location)."*

**Verified 2 September 2026 — the file is not in the repository.**

- `dr-sherif-alattar.vcf` is **absent** from `main` HEAD.
- `git log --all -- dr-sherif-alattar.vcf` returns **nothing at all**.
- Yet commits `14e42b9` and `a5cbc8b`, which the PR says added it, **are** ancestors of
  `main`.
- `git ls-tree` confirms it is absent from `a5cbc8b`, from the merge `bca32ab`, and from
  `main`.

So the HTML edit survived into `main` and the file did not. **Anyone clicking "Save contact
(.vcf)" on the live dossier gets a 404** — on the page that exists specifically to be
handed to recruiters and employers. Given that your stated focus since 22/07/2026 includes
*"Job search"*, this is the item with the most immediate practical cost.

**[UNCERTAIN]** How the file was lost is not recorded. The pattern fits a merge that carried
the HTML change but dropped the newly-added file.

**What remains.** Recreate `dr-sherif-alattar.vcf` at the repository root with the eight
fields the PR lists, or remove the link. Then confirm by loading the live page.

---

## OI-10 · The cinematic intro film was built, documented in detail, and never merged — **[HIGH]**

**Origin:** PR #1, 28 June 2026 (`session_01Vjnqqf3yoFHv1Z5vdFW51c`).

A complete 34-second film was produced — 1920×1080, 30 fps, H.264 (yuv420p) + AAC, ~5.9 MB
— together with its deterministic canvas source (`media/intro-film.html`), a Playwright
frame grabber (`media/render.js`), and a build README.

**Verified 2 September 2026 — none of it is in the repository.**

- No commit on any ref in this clone contains `knowledge-nexus-intro.mp4` or `media/`.
- `git ls-remote --heads origin` returns **only `main`** — the head branch
  `claude/mp4-video-creation-kfyraz` has been **deleted from GitHub**.

**Why this is the most recoverable loss in the record.** Deleting a branch does not
immediately destroy its objects: a merged-or-closed PR's diff and files usually remain
viewable at `https://github.com/sherifalattar/Knowledge-Nexus/pull/1/files` for a long time,
and GitHub can serve blobs by SHA from a closed PR. **[UNCERTAIN]** — I could not test
whether those blobs are still fetchable from this container. But if they are, the film and
its full source are one download away; if the PR page has been garbage-collected, a
34-second render is gone.

**Your request of 2 September 2026 explicitly lists "the cinematic 3D film" as part of the
Knowledge Nexus body of work.** On the repository evidence, it is not part of the site.

**[UNCERTAIN]** It is possible the film exists elsewhere — uploaded to YouTube and embedded
in the gallery (which does carry YouTube-nocookie iframes), or held on your own machine. I
could not extract the gallery's film IDs to check, and I have not guessed them.

**What remains.**
1. Open PR #1's Files tab and check whether `knowledge-nexus-intro.mp4` and `media/` are
   still downloadable. **Do this first, and soon** — it is the time-sensitive item here.
2. If recoverable, decide whether the film belongs in the repository (5.9 MB) or on a video
   host embedded like the gallery films.
3. If not recoverable, note that PR #1's body preserves the complete method — the film is
   reproducible from its own description.

---

## OI-11 · The "brown strip": three reports, one suppression, no root-cause fix — **[MEDIUM]**

**A contradiction across sessions. Both diagnoses given, newest first.**

**Newer — 27–28 August 2026 (PRs #43, #44), verbatim:**

> The bundler scaffolding registered a window 'error' listener with **capture:true**, so it fired on **resource load failures** (blocked LinkedIn badge, missing count.js) — not just JS errors. It then painted a fixed full-width #2a1215 overlay across the bottom of the page reading "[bundle] error".
>
> Log to console instead of rendering the overlay.

**Older — 23 July 2026 (PR #41), verbatim:**

> Whenever **any JavaScript error** fires, that handler paints a fixed, full-width dark-maroon (`#2a1215`) bar across the bottom of the page… Set the debug error element's inline style to `display:none` in all three pages, so the bar can never render visibly.

**The August diagnosis is the better one** — it explains *why* errors were firing at all,
and names the two culprits (OI-01, OI-02). The July fix suppressed the display without
addressing either.

**Verified 2 September 2026:** the string `#2a1215` appears in **no file** in the working
tree, so the July suppression is present and the bar should not be able to paint. **Both
August PRs were closed without merging**, so the `capture:true` listener remains and the two
resource failures remain.

**[UNCERTAIN] — an unresolved question worth stating plainly.** If the July fix landed and
`#2a1215` is genuinely gone from every file, why was the strip reported again in late
August? Three possibilities, none of which I can settle from here: (a) a cached or
stale deploy was being viewed; (b) the strip appeared on a page the July fix did not touch —
July covered only `executive-summary.html`, `index.html`, `pyramids.html`; (c) the August
PRs were written against an older checkout. **This should be checked on the live site before
any further work is done on it** — the fix may already be in place and the reports stale.

**What remains.** Confirm on the live site whether the strip still appears, and where. Then
fix the causes (OI-01, OI-02) rather than the symptom.

---

## OI-12 · 23 days with no commits and two abandoned pull requests — **[MEDIUM]**

`main` has not advanced since 10 August 2026. PRs #43 and #44 were opened on 27 and
28 August and both closed unmerged, on 28 and 29 August respectively.

**[UNCERTAIN]** No reason is recorded anywhere reachable. The two PRs are byte-identical in
their bodies, which suggests a retry rather than two distinct attempts.

**What remains.** Decide whether the work in #43/#44 should be reopened — it contains the
best diagnosis anyone has produced of the error-handler problem, and closing it discarded
that analysis. The text is preserved verbatim in `sessions.md` S-02 and in OI-11 above, so
nothing is lost even if the PRs stay closed.

---

## OI-13 · PR merge state on GitHub is not a reliable record of what shipped — **[LOW, but affects any future audit]**

GitHub's API reports `merged: false` for most of the 44 PRs, including ones whose changes
are demonstrably on `main` — PR #42, for instance, is reported unmerged, yet commit
`05c7613` carrying its exact changes is the current HEAD.

**[DERIVED]** The likely cause is that changes were merged locally and pushed, so GitHub
marked the PRs merely "closed". PR #38 is the exception that supports this reading: it
reports `merged: true`, `merged_by: sherifalattar`, `merged_at: 2026-07-21T02:02:33Z`, i.e.
it went through the merge button.

**Practical consequence, and the reason it is recorded here:** anyone auditing this project
in future must check `git log`, not PR status. Reading merge state alone would wrongly
conclude that almost nothing ever shipped.

---

## OI-14 · The conversation and memory record itself — **[HIGH, and the reason this export is partial]**

The whole of `sessions.md` is a reconstruction from commits and pull requests. Four
sessions (S-09, S-10, S-12 in part, S-16) rest on commit messages alone, several of which
read simply `Commit`, `Fix`, or `Commit branch`. For those, *what you asked for* is
unrecoverable from here.

No claude.ai memory entry could be quoted, because the memory store is not reachable from a
Claude Code container.

**What remains.** Request the claude.ai data export (Settings → Privacy → **Export data**).
When that archive is available to a session, this export can be rebuilt with your actual
words, against this same structure. Four session IDs survive in PR bodies and will let you
locate the most substantial conversations directly:

| Session ID | Date(s) | What it produced |
|---|---|---|
| `session_01Vjnqqf3yoFHv1Z5vdFW51c` | 28–29 Jun 2026 | The cinematic film (OI-10), OG tags, author metadata |
| `session_01WhPTmQkbGwkev9P1iwfM5x` | 17 & 20 Jul 2026 | `CLAUDE.md`, the LinkedIn campaign, the vCard (OI-09) |
| `session_01YbroFz6KZixQNbPXXaXBRm` | 23 Jul 2026 | The brown strip, first fix (OI-11) |
| `session_01K7oxB7qeFBF4qRpnFsg9MS` | 10 Aug 2026 | The site health-check |

---

## Suggested order of work

If these were mine to sequence, I would take them in this order — cheapest-and-most-urgent
first, and the two time-sensitive ones before anything else:

1. **OI-10** — check PR #1 for the film **now**; deleted-branch blobs do not survive forever.
2. **OI-09** — restore the vCard. A 404 on the dossier's "Save contact" link, during a job
   search, is the costliest small fault here.
3. **OI-11** — load the live site and settle whether the brown strip is actually still there.
4. **OI-01 / OI-02** — fix the two resource failures the August diagnosis named.
5. **OI-03** — add the ten-line CI check. It is the only item that prevents a recurrence
   rather than repairing one.
6. **OI-07** — update `CLAUDE.md`, so the bundled-page editing rule stops living only in a
   pull-request body.
7. The rest: OI-04, OI-05, OI-06, OI-08, OI-12.
