// Dependency-free checks of Astro's generated static HTML and local links.
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { join, resolve, relative, sep } from 'node:path';

const root = resolve('dist');
const expected = [
  'index.html',
  'resume/index.html',
  'work/index.html',
  'projects/index.html',
  'projects/ai-sysadmin/index.html',
  'projects/home-assistant/index.html',
];
const errors = [];
for (const file of expected) {
  if (!existsSync(join(root, file))) errors.push('Missing route: /' + file);
}

function htmlFiles(dir) {
  if (!existsSync(dir)) return [];
  const found = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) found.push(...htmlFiles(path));
    else if (entry.isFile() && entry.name.endsWith('.html')) found.push(path);
  }
  return found;
}

for (const file of htmlFiles(root)) {
  const content = readFileSync(file, 'utf8');
  const path = '/' + relative(root, file).split(sep).join('/').replace(/index\.html$/, '');
  // Only inspect local href/src references; external integrations are not checked.
  for (const match of content.matchAll(/\\b(?:href|src)\\s*=\\s*["']([^"']+)["']/g)) {
    const target = match[1];
    if (target.startsWith('#') || /^(?:[a-z][a-z0-9+.-]*:|\\/\\/)/i.test(target)) continue;
    let url;
    try { url = new URL(target, 'https://portfolio.invalid' + path); }
    catch { continue; }
    const decoded = decodeURIComponent(url.pathname);
    if (decoded.includes('\\0') || decoded.includes('..')) continue;
    const local = resolve(root, '.' + decoded);
    if (!(local === root || local.startsWith(root + sep))) {
      errors.push('Escaping site root: ' + target + ' in ' + path);
      continue;
    }
    const variants = [local, join(local, 'index.html'), local + '.html'];
    if (!variants.some((v) => existsSync(v))) {
      errors.push('Broken local reference ' + target + ' in ' + path);
    }
  }
}

if (process.env.EXPECT_PREVIEW_HEADERS === '1') {
  const headers = join(root, '_headers');
  if (!existsSync(headers) || !readFileSync(headers, 'utf8').includes('X-Robots-Tag: noindex')) {
    errors.push('Preview build has no Cloudflare noindex header.');
  }
}
if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}
console.log('Static routes and local references checked successfully.');
