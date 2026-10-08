/** Public architectural summaries only. No live status or operational endpoints. */
export interface GaiaNode {
  id: string;
  name: string;
  role: string;
  hardware: string;
  summary: string;
  capabilities: string[];
  lesson: string;
  link?: string;
}
export const gaiaNodes: GaiaNode[] = [
  {
    id:'sierra',name:'Sierra',role:'Operations and lightweight services',hardware:'Intel NUC',
    summary:'A compact Proxmox node for always-on utility workloads, monitoring, dashboards and supporting services.',
    capabilities:['Service monitoring','Lightweight workloads','Dashboards and automation'],
    lesson:'Right-size workloads to the hardware; reliability matters more than novelty.'
  },
  {
    id:'k2',name:'K2',role:'Storage and data services',hardware:'NAS / ZFS',
    summary:'The storage-focused node runs ZFS-backed services and supports data-heavy work in the lab.',
    capabilities:['Proxmox','ZFS storage','Storage operations'],
    lesson:'Data integrity and recovery planning belong in the architecture from the beginning.'
  },
  {
    id:'fuji',name:'Fuji',role:'Media and home automation',hardware:'Dell workstation',
    summary:'Hosts services including Jellyfin and a Home Assistant OS virtual machine, connecting personal applications with physical devices.',
    capabilities:['Virtual machines','Home Assistant','Containerized services'],
    lesson:'The interface people rely on should remain understandable even when the implementation spans multiple services.',
    link:'/projects/home-assistant/'
  },
  {
    id:'olympus',name:'Olympus',role:'GPU and local inference',hardware:'NVIDIA RTX 3080 Mobile / 64 GB RAM',
    summary:'Provides GPU-backed local inference with Ollama in an LXC container. Preserving acceleration across system changes was a central part of the Proxmox upgrade.',
    capabilities:['NVIDIA / CUDA','Ollama in LXC','Host-container diagnostics'],
    lesson:'A visible GPU is not the same as a correctly accelerated workload: verify the behavior across every layer.',
    link:'/projects/ai-sysadmin/'
  }
];
export const architectureLayers = [
  {name:'Edge & access',elements:'VPS · Traefik · Pangolin',meaning:'Controlled entry points and remote service access'},
  {name:'Identity',elements:'Authentik · OIDC',meaning:'A reusable login layer for supported services'},
  {name:'Observability',elements:'Prometheus · Grafana · Uptime Kuma',meaning:'Separate service health signals from assumptions'},
  {name:'Recovery',elements:'Proxmox Backup Server · console-access plan',meaning:'Recovery options considered before consequential maintenance'}
] as const;
