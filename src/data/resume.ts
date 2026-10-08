/** Public résumé content. Dates without independent confirmation stay intentionally broad. */
export interface Experience {
  title: string;
  organization: string;
  period: string;
  context: string;
  bullets: string[];
}
export const experience: Experience[] = [
  {
    title: 'Digital Product Manager',
    organization: 'McNeil & Company',
    period: 'Selected for product management in 2020 · Present',
    context: 'Company-wide digital product planning and modernization across insurance operations.',
    bullets: [
      'Coordinate a recurring planning cadence spanning approximately 50 stakeholders and 12 meetings every three weeks; clarify priorities, dependencies, business intent, and follow-through.',
      'Shape the backlog and requirements in partnership with business leaders, analysts, developers, vendors, and IT leadership; contribute to refinement, testing, and release decisions.',
      'Helped design and evolve a regulatory notice process handling approximately 12,000 notices annually, integrating database rules, deadlines, workflows, APIs, and review and delivery steps.',
      'Helped advance a shared role-based portal strategy for external audiences, including simpler sign-in for infrequent users.',
      'Proposed and lead an internal AI user group; collaborate on governance and practical use cases, including AI-assisted claims summaries.',
      'Work on API-driven underwriting data enrichment, rules-based forms, and repeatable business processes.'
    ]
  },
  {
    title: 'Business Analyst — IT',
    organization: 'McNeil & Company',
    period: 'Prior to product management · Dates to be confirmed',
    context: 'Bridged insurance business systems and technical delivery.',
    bullets: [
      'Investigated Concept One and related insurance workflows through SQL Server queries, database logic, reporting, and process analysis.',
      'Developed and optimized complex SQL logic and workflows; improved a key notice-identification process from approximately 20 minutes to about one minute.',
      'Tested and troubleshot vendor API integrations, collaborating with developers and operational stakeholders.'
    ]
  },
  {
    title: 'Underwriting Rater / Underwriting Assistant',
    organization: 'McNeil & Company',
    period: 'Earlier career · Dates to be confirmed',
    context: 'Hands-on pricing, endorsements, underwriting data, and proposal support.',
    bullets: [
      'Supported policy pricing and changes across insurance products and lines of business.',
      'Built an Excel/VBA pricing calculator for modification-factor and rating scenarios, accurate to within cents; this practical tooling helped open a path into IT.'
    ]
  },
  {
    title: 'Policy Analyst',
    organization: 'McNeil & Company',
    period: 'Earlier career · Dates to be confirmed',
    context: 'Foundation in policy operations, forms, coverage accuracy, and quality control.',
    bullets: [
      'Worked with policy issuance, coverage details, forms, and underwriting information.',
      'Developed first-hand familiarity with the manual processes and accuracy requirements later addressed through technology.'
    ]
  }
];
export const skills = [
  { heading: 'Product & delivery', items: 'Cross-functional planning, backlog prioritization, stakeholder facilitation, requirements refinement, process design, UAT, Jira' },
  { heading: 'Data & integration', items: 'Microsoft SQL Server, complex queries and procedures, API testing, Postman, data analysis, workflow automation' },
  { heading: 'Development foundations', items: 'Advanced Excel/VBA, classes and add-ins, reusable internal tools, Git, TypeScript/web fundamentals, programming concepts' },
  { heading: 'Applied AI', items: 'Copilot workflows, internal AI enablement, governance partnership, agent operations, local language models' },
  { heading: 'Personal infrastructure', items: 'Linux, Proxmox, containers, networking, Cloudflare, Authentik, observability, backups, GPU passthrough' }
];
export const highlights = [
  { metric: '~12,000', description: 'Annual notices supported by a modernized regulatory workflow', source: 'SRC-035' },
  { metric: '~20 → ~1 min', description: 'Runtime reduction for one notice-identification database process', source: 'SRC-009' },
  { metric: '~50', description: 'Stakeholders engaged through company-wide product planning', source: 'SRC-013' }
];
