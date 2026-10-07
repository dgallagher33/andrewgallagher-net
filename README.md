# Andrew Gallagher — Product & Systems

Personal portfolio site built with Astro.

## Update and publish

1. Edit the portfolio in `src/pages/index.astro`. Its markup, responsive styles, and small interactive lab map live in the Astro page.
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
