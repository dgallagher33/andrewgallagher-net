// Used only for Cloudflare Pages; never for the production SPanel publish.
import { spawnSync } from 'node:child_process';
import { writeFileSync } from 'node:fs';

const command = process.platform === 'win32' ? 'npm.cmd' : 'npm';
const revision =
  process.env.CF_PAGES_COMMIT_SHA ||
  process.env.GITHUB_SHA ||
  process.env.PUBLIC_BUILD_SHA ||
  'local-preview';

const build = spawnSync(command, ['run', 'build'], {
  stdio: 'inherit',
  env: { ...process.env, PUBLIC_BUILD_SHA: revision },
});

if (build.error) {
  console.error(build.error);
  process.exit(1);
}
if (build.status !== 0) process.exit(build.status ?? 1);

// Cloudflare Pages reads _headers from the output directory.
// Deliberately NOT under public/, which is also deployed to production.
writeFileSync(
  'dist/_headers',
  '/*\n  X-Robots-Tag: noindex, nofollow, noarchive\n',
  'utf8',
);
console.log('Preview built with X-Robots-Tag protection.');
