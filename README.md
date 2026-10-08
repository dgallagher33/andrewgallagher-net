# Andrew Gallagher — Product & Systems

Personal portfolio site built with Astro.

## Update, preview and publish (October 2026 recovery)

**Canonical source:** `main`. Open a feature branch and PR; do not push work directly to `deploy`.

1. Open a PR to `main`. GitHub Actions installs locked dependencies, builds Astro, verifies internal routes/links, and checks the Cloudflare preview variant.
2. After connecting Cloudflare Pages as described in [the deployment runbook](docs/deployment.md), each PR also receives an individual hosted Pages preview URL.
3. The optional **Promote PR to shared staging** manual GitHub workflow points `staging` at a chosen open PR. Cloudflare Pages uses `staging` as that preview project's default branch and serves its custom domain at `test.andrewgallagher.net`.
4. After review, merge the PR into `main`. The production workflow builds and publishes the static `dist/` output to `deploy`. SPanel must still update its checkout to serve the result.
5. Compare the footer build revision to the intended source commit. See [recovery notes](docs/recovery.md) for the lost portfolio history and safety checks.

**Important:** The current server checkout and public document root must be verified and backed up before merging the recovery PR. Earlier references to `/home/andrewga/site` and `/home/andrewga/public_html` describe intended locations, not a confirmed present-day deploy mapping.

## Local development

Use Node.js 22 or later:

```sh
npm ci
npm run dev
```

Create a production build with:

```sh
npm run build
npm run preview
```

GitHub Actions also builds the site for pull requests. It updates `deploy` only after a push to `main`.

## Visitor experience

Visitors can choose product leadership, technical product, applied AI, or the full picture. The selection changes the recommended reading and filters professional examples. `?focus=product`, `?focus=technical`, and `?focus=ai` preserve that choice in a shareable URL; browser back/forward restores it. A linked case remains visible even when outside the current filter.

Case studies use native disclosures for deeper reading. All professional examples remain available without JavaScript, and print styling includes cases hidden by a visitor's filter. The interactive homelab map is retained. The site is generated as static HTML with a small client script and requires no Node server, visitor account, or external AI service.

See `docs/content-evidence.md` for the editorial source mapping and limits on the claims used here.

## Detailed project pages

Home Assistant has an optional deep dive at `/projects/home-assistant/`, linked from the short homelab overview. The full narrative lives in `src/pages/projects/home-assistant.astro`, with reusable project chrome in `src/layouts/ProjectLayout.astro`.

Add or update interaction walkthroughs and future research directions in `src/data/home-assistant.ts`. The walkthrough selector is in `src/scripts/home-assistant.ts`, and page styles are in `src/styles/home-assistant.css`. All scenarios remain readable without JavaScript and when printing.

Keep setup observations, intended interactions, acceptance checks, and future research clearly distinguished as this project grows. Add measured or verified results only when supported by new evidence.


## Systems in Motion expansion

The site now includes standalone routes for `/resume/`, `/work/`, `/projects/`, and `/projects/ai-sysadmin/`, using `src/layouts/ProjectLayout.astro` and lightweight shared styling in `src/styles/evolution.css`. The existing Home Assistant deep dive remains intact.

**Résumé maintenance:** edit `src/data/resume.ts` for experience, skills, and validated highlights; the page template is `src/pages/resume/index.astro`, with dedicated screen/print styling in `src/styles/resume.css`. Visitors can use the browser's Print / Save as PDF action. Do not present estimates as audited results; update `docs/content-evidence.md` when evidence changes.

**Content and interaction:** Professional cases remain sourced in `src/data/career.ts` and rendered by `CareerCases.astro`. The existing `?focus=` query-string reader is preserved. The notice workflow comparison is conceptual, not an operational blueprint. The AI Sysadmin narrative does not expose private infrastructure access details.

**Development checks:** run `npm ci`, `npm run check` (if Astro's checker is installed), and `npm run build`. Review keyboard access, narrow viewport overflow, reduced motion and the résumé in US Letter print preview. GitHub Actions builds PRs, but publishes generated site files to `deploy` only after merging to `main`.

## Interactive systems / accessibility

The homepage renders `SystemsNetwork.astro` as an SVG map of professional capabilities with links to real portfolio content. Hover and keyboard focus update a short preview; activating a node follows the link. If JavaScript is disabled, every SVG link still works and the static introduction remains readable.

`GaiaExplorer.astro` and `src/data/gaia.ts` describe a public, conceptual view of Gaia's architecture. Node links jump to in-page descriptions without JavaScript. With scripting available, selection narrows the view to one node. This is **not live infrastructure data** and must never include private hostnames, control endpoints or permission configuration.

Theme selection is implemented by `ThemeToggle.astro`, `src/scripts/theme.ts`, and `src/styles/theme.css`. The site uses system appearance unless a visitor explicitly selects and stores light/dark mode in their browser. Maintain print styles and reduced-motion behavior when extending the system. `src/styles/systems.css` owns the diagram and explorer presentation; `src/scripts/systems.ts` owns their progressive enhancements.

**Live revision identifier:** The build step supplies `PUBLIC_BUILD_SHA` from the GitHub commit. `BuildRevision.astro` displays its short SHA in the static footer. For a completed deployment, compare that label with the commit built for `main` to distinguish stale SPanel output from stale source. Local builds omit the label unless the variable is supplied; no private secrets are used.

The professional workflow page uses `src/scripts/process.ts` for optional Before / After / Compare controls. Both conceptual stages remain visible without JavaScript and when printed.

The landing diagram uses a full-size two-column link grid below 520px rather than compressing SVG labels to unreadable sizes. Each link leads to the same evidence-backed page. Shared `PersonMetadata.astro` emits basic professional structured data only; canonical/sitemap URLs are intentionally omitted until the production hostname is confirmed.

## LinkedIn-backed career updates

The resume content model in src/data/resume.ts includes dated role history, earlier technical work, education, languages, prior employment and LinkedIn-listed learning. Update the model rather than scattering role details across individual pages.

The owner's LinkedIn export is not committed: it contains an outdated physical mailing address. docs/content-evidence.md documents the source and differentiates self-reported dates, interview-based achievements, and independently unverified graduation or certification details. Keep the full early career history on /resume/ while reserving homepage space for relevant product and technical experience.
