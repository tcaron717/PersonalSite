type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
  content: string[]
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
// put projects here
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Taylor Corporation',
    title: 'Software Engineering Manager',
    start: '2022',
    end: 'Present',
    link: '',
    id: 'work1',
    content: [
      '•Directed globally distributed full-stack teams across 10+ applications generating $100M+ annual revenue.',
      '• Spearheaded development of PCI-compliant e-commerce application stacks with integrated payment processing, ensuring secure transactions and adherence to industry standards.',
      '• Standardized Agile Scrum across teams; reduced workflow friction by 50% and decreased release bugs by 25% through CI/CD improvements and developer training.',
      '• Led greenfield development of a scalable Federation API platform to unify 3rd party integrations—minimizing redundant development efforts across business units.',
      '• Modernized legacy monolith applications into microservices within on-prem and Azure cloud environments, improving vendor/client onboarding speed and reliability.',
      '• Designed and led the full-stack consolidation of three legacy web applications into a single modern SPA, streamlining internal sales workflows and significantly improving end-user experience to support a more efficient go-to-market strategy'
    ]
  },
  {
    company: 'Taylor Corporation',
    title: 'Technical Scrum Master',
    start: '2022',
    end: '2024',
    link: '',
    id: 'work2',
    content: [
      '• Transitioned 3+ hybrid development teams to full Agile Scrum, establishing velocity metrics and backlog health.',
      '• Led enterprise-wide rollout of Azure DevOps including governance documentation, training, and process definition.',
      '• Drove delivery of new features on high-revenue applications ($30M+) by owning Scrum ceremonies, stakeholder alignment, and backlog refinement.'
    ]
  },
  {
    company: 'Edison Retail Solutions',
    title: 'IT Project Manager II',
    start: '2018',
    end: '2019',
    link: 'h',
    id: 'work4',
    content: [
      '• Managed $2M+ IT/manufacturing initiatives with cross-functional teams of 15+, leading full lifecycle delivery.',
      '• Developed semi-automated estimating system (ERS), reducing turnaround time by 20% and increasing profit margins by 15%.',
      '• Delivered cost estimation audit and process overhaul resulting in up to 5% additional profitability.'
    ]
  },
  {
    company: 'Retail Printing Group',
    title: 'IT Project Manager',
    start: '2016',
    end: '2018',
    link: 'h',
    id: 'work5',
    content: [
      '• Led cross-departmental IT and HR projects valued at $2M+, with teams of 20+ staff.',
      '• Designed and developed an inventory/fulfillment system into ERP—achieved 40% productivity boost.'
    ]
  },
  {
    company: 'International Kids Campus',
    title: 'Manager of Native English Curriculum',
    start: '2019',
    end: '2021',
    link: 'h',
    id: 'work6',
    content: [
      '• Built and delivered an original 52-week ESL curriculum, increasing student acquisition and retention by 10% and 15%, respectively.',
      '• Spearheaded cross-cultural curriculum design projects, collaborating with international teams of 10+ educators.',
      '• Led marketing collaboration for seasonal programs, growing enrollment by 20% within one year.'
    ]
  },
]

export const BLOG_POSTS: BlogPost[] = [
  //put blog posts here
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/tcaron717',
  },
  {
    label: 'Twitter',
    link: '',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/todd-caron-632516128',
  },
  {
    label: 'Instagram',
    link: '',
  },
]

export const EMAIL = 'toddcaron2@gmail.com'
