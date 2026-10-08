/**
 * Public career summary.
 *
 * LinkedIn export supplied October 2026 supplies employment chronology,
 * education, prior roles and LinkedIn-listed credentials. The earlier
 * interview evidence bank supplies responsibilities and reported outcomes.
 * See docs/content-evidence.md for the distinction.
 */
export const linkedinUrl = 'https://www.linkedin.com/in/ajgallag/';

export interface Experience {
  title: string;
  organization: string;
  period: string;
  context: string;
  bullets: string[];
}
export interface CareerEntry {
  title: string;
  organization: string;
  period: string;
  description: string;
}
export interface EducationEntry {
  institution: string;
  degree: string;
  period: string;
}

export const experience: Experience[] = [
  {
    title: 'Digital Product Manager',
    organization: 'McNeil & Company',
    period: 'March 2020 – Present',
    context: 'Company-wide digital product planning and insurance workflow modernization.',
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
    title: 'Business Analyst',
    organization: 'McNeil & Company',
    period: 'August 2019 – March 2020',
    context: 'Insurance business systems and process improvement, including collaboration with the parent-company business process management team.',
    bullets: [
      'Partnered on an underwriting process overhaul with the Business Process Management team at Arch Capital Group.',
      'Investigated ConceptOne insurance workflows through Microsoft SQL Server, Infomaker (Sybase), reporting, database logic, and process analysis.',
      'Developed and optimized complex SQL logic and workflows; a key notice-identification process later improved from approximately 20 minutes to about one minute.',
      'Tested and troubleshot vendor API integrations in collaboration with developers and business stakeholders.'
    ]
  },
  {
    title: 'Commercial Lines Underwriting Assistant',
    organization: 'McNeil & Company',
    period: 'February 2017 – August 2019',
    context: 'Hands-on rating, policy endorsements, exposure data and proposal support.',
    bullets: [
      'Supported pricing and policy changes across commercial insurance lines, developing familiarity with underwriting rules and operational needs.',
      'Built an Excel/VBA pricing calculator for modification-factor and rating scenarios, accurate to within cents; the practical tooling helped establish a pathway into IT.'
    ]
  },
  {
    title: 'Policy Analyst',
    organization: 'McNeil & Company',
    period: 'April 2016 – February 2017',
    context: 'Policy operations, issuance, forms, coverage accuracy and quality control.',
    bullets: [
      'Worked with policy issuance, coverage details, forms and underwriting information.',
      'Developed first-hand familiarity with the manual workflows and accuracy requirements later addressed through technology.'
    ]
  }
];

export const earlierTechnicalExperience: CareerEntry[] = [
  {
    title: 'Easy Tech Certified Technician',
    organization: 'Staples',
    period: 'January 2013 – April 2016',
    description: 'Diagnosed and repaired computers, explained technical problems to customers, and matched services to actual needs.'
  },
  {
    title: 'Helpdesk Technician',
    organization: 'SUNY Potsdam',
    period: 'March 2012 – December 2012',
    description: 'Troubleshot faculty and student issues, supported classroom incidents and tracked requests in a ticketing system.'
  },
  {
    title: 'Bench Technician',
    organization: 'Plan First Technologies, Inc.',
    period: 'March 2010 – August 2011',
    description: 'Maintained and repaired business-client computers and assisted with onsite server and system implementations.'
  }
];

export const additionalExperience: CareerEntry[] = [
  {
    title: 'Marketing Assistant',
    organization: "Biel's Document Management",
    period: 'January 2016 – July 2016',
    description: 'Content marketing, communication review, and collaboration with sales.'
  },
  {
    title: 'Marketing Intern',
    organization: "Biel's Document Management",
    period: 'September 2015 – December 2015',
    description: 'B2B lead research and digital marketing content.'
  },
  {
    title: 'Crew Member',
    organization: "The Wendy's Company",
    period: 'March 2010 – August 2012',
    description: 'High-volume customer operations, equipment upkeep, and balancing demand and waste.'
  }
];

export const education: EducationEntry[] = [
  {
    institution: 'University at Buffalo',
    degree: "Bachelor's Degree, Business Administration",
    period: '2014 – 2015 (years listed on LinkedIn)'
  },
  {
    institution: 'Tompkins Cortland Community College',
    degree: 'Associate of Science (A.S.), General Studies',
    period: '2013 – 2014 (years listed on LinkedIn)'
  }
];

/** Descriptions copied or normalized from LinkedIn. Issuer/date are not established. */
export const listedCertification = 'A+';
export const professionalLearning: string[] = [
  'Building in Microsoft Copilot Studio',
  'Build Your Generative AI Productivity Skills with Microsoft and LinkedIn',
  'Microsoft Loop: AI-Enhanced Project Management and Note-Taking',
  'Blazor Hybrid Development with .NET'
];

export const languages = [
  'English (native or bilingual)',
  'Spanish (elementary)'
];

export const skills = [
  { heading: 'Product & delivery', items: 'Cross-functional product planning, backlog prioritization, stakeholder facilitation, requirements refinement, process design, UAT, Jira' },
  { heading: 'Data & integration', items: 'Microsoft SQL Server, complex queries and procedures, ConceptOne, Infomaker (Sybase), API testing, Postman, data analysis, workflow automation' },
  { heading: 'Development foundations', items: 'Advanced Excel/VBA, classes and add-ins, reusable internal tools, Git, TypeScript/web fundamentals, programming concepts' },
  { heading: 'Applied AI', items: 'Copilot workflows, AI enablement, governance partnership, agent operations, local language models' },
  { heading: 'Personal infrastructure', items: 'Linux, Proxmox, containers, networking, Cloudflare, Authentik, observability, backups, GPU passthrough' }
];
export const highlights = [
  { metric: '~12,000', description: 'Annual notices supported by a modernized regulatory workflow', source: 'SRC-035' },
  { metric: '~20 → ~1 min', description: 'Runtime reduction for one notice-identification database process', source: 'SRC-009' },
  { metric: '~50', description: 'Stakeholders engaged through company-wide product planning', source: 'SRC-013' }
];
