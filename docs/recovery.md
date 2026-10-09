# Source recovery record — October 2026

The public repository `dgallagher33/andrewgallagher-net` reported `main` at `3d94fa7f64b9f58314fa71acefe8e3b596e991b4` (the old Astro starter), although previous portfolio PRs #7–#10 were reported as merged.

The complete portfolio was independently located at merged PR #10 commit `3648ca142c3332dbecd29a3c8a7e9d0b1b13152d`. GitHub's commit comparison reported this commit **68 commits ahead / 0 behind** the old `main`, which permits non-force recovery.

Recovered routes include `/`, `/resume/`, `/work/`, `/projects/`, `/projects/ai-sysadmin/`, and `/projects/home-assistant/`.

This repository PR intentionally recovers that source and introduces CI, a separate shared staging pointer, and Cloudflare Pages-ready preview builds. It does not claim the production server has been inspected, DNS changed, Pages provisioned, or any SPanel deployment completed.

Do not reset `main` to historical commits, or force-update `deploy`, without inspecting live server state and keeping a rollback snapshot.
