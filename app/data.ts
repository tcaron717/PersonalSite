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
      '• Lead 7 direct reports and 15 offshore developers supporting 10+ business-critical applications generating more than $100M in annual revenue.',
      '• Developed three engineers into technical leads or architects through targeted coaching and expanded ownership, increasing team autonomy and strengthening succession coverage.',
      '• Led the consolidation of three legacy .NET and Adobe ColdFusion systems into a unified .NET and Vue.js platform using a hybrid microservices architecture, eliminating duplicated capabilities and reducing operating cost by 45%',
      '• Architected and delivered a federated API platform using .NET and Azure API Management, standardizing secure third-party access and reducing new partner-integration delivery from 8 weeks to 2 weeks.',
      '• Standardized Azure Pipelines, code-review gates, and release practices across distributed teams, reducing production defects by 25% and improving deployment frequency',
      '• Introduced structured AI-assisted development workflows that improved coding and debugging productivity by an estimated 30–40%, based on developer feedback, pilot comparisons, and observed completion times.'
    ]
  },
  {
    company: 'Taylor Corporation',
    title: 'Lead Software Developer',
    start: '2022',
    end: '2024',
    link: '',
    id: 'work2',
    content: [
      '• Designed .NET enterprise services processing 15 million transactions per day across six business units.',
      '• Migrated 9 WCF and SOAP services to RESTful .NET APIs, establishing reusable integration patterns that became the foundation for the organization’s broader microservice adoption.',
      '• Improved reliability of a revenue-critical direct-mail platform by resolving systemic production issues and reducing recurring defects by 20%.',
      '• Built reusable .NET services and shared components that reduced duplicated logic and standardized development across multiple applications and development teams.'
    ]
  },
  {
    company: 'Edison Retail Solutions',
    title: 'Software Developer II',
    start: '2018',
    end: '2019',
    link: 'h',
    id: 'work4',
    content: [
      '• Built a C#/.NET inventory-forecasting application integrated with the company’s ERP system, replacing manual planning and reducing forecast preparation time from days to minutes.',
      '• Owned ERP integration and inventory-tracking functionality for a C#/.NET forecasting platform delivered by a three-developer team.',
      '• Coordinated engineering delivery for cross-functional initiatives valued at more than $2M, resolving dependencies and maintaining milestone commitments.'
    ]
  },
  {
    company: 'Retail Printing Group',
    title: 'Software Developer I',
    start: '2016',
    end: '2018',
    link: 'h',
    id: 'work5',
    content: [
      '• Independently delivered a C#/.NET and SQL quoting platform from requirements through production, automating a 12-step manual process and reducing quote turnaround time by 25%.',
      '• Integrated the quoting platform with existing ERP systems and automated previously manual workflows, improving quote-processing speed and employee productivity.'
    ]
  },
  {
    company: 'International Kids Campus',
    title: 'English Administrator',
    start: '2019',
    end: '2021',
    link: 'h',
    id: 'work6',
    content: [
      '• Completed a planned career intermission in Seoul, developing cross-cultural communication and operational leadership experience.'
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
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/todd-caron-632516128',
  },
  {
    label: 'Apple Books',
    link: 'http://books.apple.com/us/book/id6761745467',
  },
]

export const EMAIL = 'toddcaron2@gmail.com'
