import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { join, resolve, relative, sep } from 'node:path';

const root = resolve('dist');
const routes = ['index.html', 'resume/index.html', 'work/index.html', 'projects/index.html', 'projects/ai-sysadmin/index.html', 'projects/home-assistant/index.html'];
const errors = [];
for (const route of routes) if (!existsSync(join(root, route))) errors.push('Missing route: ' + route);

function htmlFiles(dir) {
  if (!existsSync(dir)) return [];
  const files = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) files.push(...htmlFiles(path));
    else if (entry.isFile() && entry.name.endsWith('.html')) files.push(path);
  }
  return files;
}

for (const file of htmlFiles(root)) {
  const html = readFileSync(file, 'utf8');
  const pagePath = '/' + relative(root, file).split(sep).join('/').replace(/index\.html$/, '');
  for (const match of html.matchAll(/\b(?:href|src)\s*=\s*["']([^"']+)["']/g)) {
    const target = match[1];
    if (target.startsWith('#') || /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i.test(target)) continue;
    let pathname;
    try {
      pathname = decodeURIComponent(new URL(target, 'https://portfolio.invalid' + pagePath).pathname);
    } catch {
      continue;
    }
    if (pathname.includes('\0')) continue;
    const local = resolve(root, '.' + pathname);
    if (local !== root && !local.startsWith(root + sep)) {
      errors.push('Link escapes site root: ' + target + ' in ' + pagePath);
      continue;
    }
    if (![local, join(local, 'index.html'), local + '.html'].some(existsSync)) {
      errors.push('Broken local link: ' + target + ' in ' + pagePath);
    }
  }
}
if (process.env.EXPECT_PREVIEW_HEADERS === '1') {
  const path = join(root, '_headers');
  if (!existsSync(path) || !readFileSync(path, 'utf8').includes('X-Robots-Tag: noindex')) errors.push('Missing preview noindex header');
}
if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}
console.log('Generated routes and local links verified.');
