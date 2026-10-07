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

