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
      '• Led distributed teams supporting 10+ applications generating $100M+ annually',
      '• Introduced AI-assisted development practices (Copilot, Claude), improving developer productivity by ~20–30% incoding and debugging workflows and reducing iteration time',
      '• Remained hands-on, building full-stack features and APIs using .NET and React with AI-assisted tools',
      '• Architected and delivered a federated API platform for third-party integrations',
      '• Mentored developers, architects, and Scrum Masters on AI-assisted development practices',
      '• Modernized legacy systems into microservices in Azure environments'
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
      '• Led Agile transformation and established delivery metrics',
      '• Implemented Azure DevOps across teams',
      '• Improved delivery predictability for high-revenue applications'
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
      '• Managed $2M+ initiatives with cross-functional teams',
      '• Developed systems improving turnaround time and profitability',
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
      '• Led ERP and system development projects',
      '• Built systems improving operational productivity'
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
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/todd-caron-632516128',
  },
  {
    label: 'Apple Books',
    link: 'http://books.apple.com/us/book/id6761745467',
  },
]

export const EMAIL = 'toddcaron2@gmail.com'
