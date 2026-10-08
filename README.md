# Andrew Gallagher — Product & Systems

Personal portfolio site built with Astro.

## Update and publish

1. Edit the page and homelab content in `src/pages/index.astro`, professional case studies in `src/data/career.ts`, and styles in `src/styles/base.css` / `src/styles/portfolio.css`.
2. Push changes to `main`.
3. GitHub Actions installs the locked dependencies, runs `npm run build`, and publishes Astro's `dist/` output to the `deploy` branch.
4. In SPanel, connect this private repository using the `deploy` branch and set its deployment/document root to:

   `/home/andrewga/public_html`

SPanel needs read access to the private repository. If its Git integration supports a webhook for branch updates, connect it to the `deploy` branch; otherwise use SPanel's pull/update action after a successful GitHub Actions run.

The `main` branch is the editable source. The `deploy` branch contains only the generated static site.

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
