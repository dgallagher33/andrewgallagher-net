# Portfolio deployment runbook

## Environments and responsibilities

| Environment | Git ref | Hosting | Address |
| --- | --- | --- | --- |
| Source of truth | `main` | GitHub | `dgallagher33/andrewgallagher-net` |
| PR previews | `feature/*` and recovery branches | Cloudflare Pages | unique `*.pages.dev` preview URL |
| Shared staging | `staging` | Cloudflare Pages | `test.andrewgallagher.net` |
| Production artifact | `deploy` | GitHub branch containing generated `dist` | consumed by SPanel |
| Production serving | built from `main` | ExtraVM/SPanel | `andrewgallagher.net` |

No website secret, server SSH key, or Cloudflare API token is required in GitHub for the preview path.

## Initial recovery and safety checks (before merging)

1. Recovered source commit: `3648ca142c3332dbecd29a3c8a7e9d0b1b13152d` (merge of PR #10).
2. Compare `main`, the recovery branch, and the current live site. The old `main` still has the starter version.
3. Save a snapshot of the live production document root and any checkout directory on ExtraVM/SPanel. Do not overwrite these paths without the snapshot.
4. On the server, identify the active repository URL, checkout branch, working tree, build command, document root, and whether SPanel automatically pulls new commits. Historical notes mention `/home/andrewga/site` and `/home/andrewga/public_html`; both must be checked, not assumed.
5. Review this recovery PR's Actions result and generated routes. Merge only after the server state is understood and the production rollback method works.

## Cloudflare Pages connection (account-owner setup)

1. Cloudflare dashboard → Workers & Pages → Create a Pages project → Connect to Git.
2. Authorize only `dgallagher33/andrewgallagher-net` when selecting repositories, if offered.
3. Project name suggestion: `andrewgallagher-portfolio-preview`.
4. Set this **Cloudflare Pages project's** production branch to **`main`**. It is only the Pages project's technical default, not the live website: the actual public production site remains SPanel. The **`staging`** branch stays a Cloudflare Pages preview branch and can be aliased safely.
5. Framework: Astro; Node.js version 22; build command: **`npm run build:preview`**; build output: **`dist`**; root directory: repository root.
6. Enable automatic preview builds for **all non-production branches**, including `staging` and feature/recovery branches. Cloudflare should post a preview URL and status on each PR; branch previews may be disabled for forks.
7. On the Pages project, Custom Domains → add `test.andrewgallagher.net`, then edit Cloudflare DNS so its **proxied** CNAME target points to `staging.<your-project>.pages.dev`. A DNS-only CNAME will NOT select the staging branch.
8. Verify HTTPS, mobile view, scripts, links, and the response header `X-Robots-Tag: noindex, nofollow, noarchive`. The header is generated only by `build:preview`; production `npm run build` must not emit `_headers`.
9. Optional: add Cloudflare Access to limit review traffic. Never publish nonpublic employer or homelab secrets, even on a protected preview.

Docs: https://developers.cloudflare.com/pages/configuration/git-integration/ and https://developers.cloudflare.com/pages/how-to/custom-branch-aliases/

## PR preview

Open a PR into `main` from a feature branch. GitHub runs `Validate Astro site`; Cloudflare Pages builds an individual preview after its Git integration is connected. Commit further changes to the branch to refresh its preview.

To make one PR the shared staging candidate, run GitHub Actions → **Promote PR to shared staging** → Run workflow → enter the open PR number. This intentionally moves only `staging`. Confirm the Pages deployment has actually run and its commit matches the selected PR. GitHub-generated pushes sometimes do not trigger other GitHub workflows; if Pages does not receive the update, redeploy that branch from Cloudflare's dashboard or change the staging branch through a normal Git push.

Only PRs from this same repository into `main` are eligible. Never use the shared staging URL alone as proof that a PR's isolated preview is current.

## Production publishing

The production workflow runs only on pushes to `main` (or explicit manual dispatch), builds Astro, checks local links, and publishes generated files to `deploy` with non-orphan history. It does **not** directly update SPanel. Production automation remains conditional on verifying the actual SPanel checkout/deploy mechanism.

Before connecting a webhook, ensure the SPanel Git checkout has the correct remote and can fast-forward its `deploy` branch. Compare the footer build revision with the Git commit intended for production. Never enable `force push` or delete the production content directory automatically.

## Protection to configure in GitHub (account-owner setup)

Settings → Rules → Rulesets → New branch ruleset targeting `main`: block force pushes and deletions; require PR before merge; require `build-and-check` status after it has run once. Optionally require the Cloudflare preview check after Pages integration is operational. Do not mark a nonexistent check required, or merging will become blocked.

Separate CI / production concurrency groups ensure a PR build cannot cancel production publication. GitHub Actions token is read-only by default; write access is granted only to publishing/promotion jobs.

## Rollback

Revert the offending `main` change through a PR, rebuild a known-good source commit, and republish the generated `deploy` artifact. Restore SPanel's saved document-root snapshot if needed. A Git revert alone does not prove the live server updated: verify served revision and visible content.
