# Andrew Gallagher — Product & Systems

Personal portfolio site.

## Update and publish

1. Put the static website files in `site/`. The entry page must be `site/index.html`.
2. Commit and push changes to `main`.
3. GitHub Actions publishes the contents of `site/` to the `deploy` branch when `site/index.html` or `site/assets/` changes.
4. In SPanel, connect this repository using the `deploy` branch and set its deployment/document root to:

   `/home/andrewga/public_html`

For a private repository, SPanel needs GitHub read access. Configure an SPanel Git webhook for updates to the `deploy` branch if the panel offers it; otherwise use SPanel's pull/update action after each successful workflow run.

The deployment branch contains only the static website files. The `main` branch is the editable source. Do not point the live domain at `main`.

## GitHub Actions

The workflow is `.github/workflows/deploy-spanel.yml`. It checks that `site/index.html` exists and publishes the files to `deploy`. It can also be started manually from the Actions tab after the site source is present.
