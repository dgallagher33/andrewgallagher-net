type Focus = 'all' | 'product' | 'technical' | 'ai';
const lenses = {
  all: { title: 'Product perspective. Hands-on curiosity.', description: 'Explore the professional work and the lab: two ways I turn complex systems into useful experiences.', first: '#notice-automation', firstLabel: 'Explore professional work', second: '#ai-sysadmin', secondLabel: 'Explore the AI sysadmin project' },
  product: { title: 'Connecting business intent to delivery.', description: 'Company-wide prioritization, workflow modernization, and portal strategy, grounded in first-hand insurance operations experience.', first: '#product-cadence', firstLabel: 'See product leadership', second: '#portal-strategy', secondLabel: 'See portal strategy' },
  technical: { title: 'Enough technical depth to investigate.', description: 'Hands-on SQL, API testing, and operational tools, alongside a working homelab where I troubleshoot across infrastructure layers.', first: '#notice-automation', firstLabel: 'See SQL & API work', second: '#ai-sysadmin', secondLabel: 'Explore the infrastructure work' },
  ai: { title: 'AI adoption with practical operating experience.', description: 'AI user-group leadership and claims use cases at work; scoped agent access, a cluster upgrade, and GPU troubleshooting in the lab.', first: '#ai-adoption', firstLabel: 'See AI adoption at work', second: '#ai-sysadmin', secondLabel: 'See AI in the homelab' },
} satisfies Record<Focus, {title:string;description:string;first:string;firstLabel:string;second:string;secondLabel:string}>;

const controls = Array.from(document.querySelectorAll<HTMLButtonElement>('[data-focus]'));
const cards = Array.from(document.querySelectorAll<HTMLElement>('[data-case]'));
const title = document.getElementById('lens-title');
const description = document.getElementById('lens-description');
const first = document.querySelector<HTMLAnchorElement>('#lens-first');
const second = document.querySelector<HTMLAnchorElement>('#lens-second');
const count = document.getElementById('case-count');
const showAll = document.querySelector<HTMLButtonElement>('#show-all');

function validFocus(value: string | null): Focus {
  return value === 'product' || value === 'technical' || value === 'ai' ? value : 'all';
}

function applyFocus(focus: Focus, updateUrl = false) {
  const lens = lenses[focus];
  controls.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.focus === focus)));
  cards.forEach(card => {
    // Keep an explicitly linked case visible even when outside the selected lens.
    card.hidden = focus !== 'all' && !card.dataset.roles?.split(' ').includes(focus) && `#${card.id}` !== location.hash;
  });
  if (title) title.textContent = lens.title;
  if (description) description.textContent = lens.description;
  if (first) { first.href = lens.first; first.textContent = lens.firstLabel; }
  if (second) { second.href = lens.second; second.textContent = lens.secondLabel; }
  if (count) count.textContent = `${cards.filter(card => !card.hidden).length} professional examples${focus === 'all' ? '' : ` for ${focus === 'ai' ? 'applied AI' : `${focus} roles`}`}`;
  if (showAll) showAll.hidden = focus === 'all';
  if (updateUrl) {
    const url = new URL(location.href);
    focus === 'all' ? url.searchParams.delete('focus') : url.searchParams.set('focus', focus);
    history.pushState(null, '', url);
  }
}

document.querySelectorAll<HTMLElement>('[data-enhanced]').forEach(element => { element.hidden = false; });
controls.forEach(button => button.addEventListener('click', () => applyFocus(validFocus(button.dataset.focus ?? null), true)));
showAll?.addEventListener('click', () => applyFocus('all', true));
const restoreFocus = () => applyFocus(validFocus(new URL(location.href).searchParams.get('focus')));
window.addEventListener('popstate', restoreFocus);
window.addEventListener('hashchange', restoreFocus);
restoreFocus();

const nodeDescriptions: Record<string,string> = {
  sierra: 'Sierra runs lightweight services and monitoring on an Intel NUC, including uptime checks and a dashboard for the lab.',
  k2: 'K2 is the storage-focused node, combining Proxmox with ZFS storage on a NAS system.',
  fuji: 'Fuji hosts services including Jellyfin, document tools, and a Home Assistant OS virtual machine.',
  olympus: 'Olympus brings GPU compute to the lab: an RTX 3080 Mobile supports Ollama in a Linux container for local AI experimentation.',
};
const nodes = Array.from(document.querySelectorAll<HTMLButtonElement>('[data-node]'));
nodes.forEach(button => button.addEventListener('click', () => {
  nodes.forEach(node => node.setAttribute('aria-pressed', String(node === button)));
  const output = document.getElementById('node-description');
  if (output) output.textContent = nodeDescriptions[button.dataset.node ?? 'sierra'];
}));
