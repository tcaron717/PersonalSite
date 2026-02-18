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
  {
    name: 'Motion Primitives Pro',
    description:
      'Advanced components and templates to craft beautiful websites.',
    link: 'https://pro.motion-primitives.com/',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/newProfileItem/d898be8a-7037-4c71-af0c-8997239b050d.mp4?_a=DATAdtAAZAA0',
    id: 'project1',
  },
  {
    name: 'Motion Primitives',
    description: 'UI kit to make beautiful, animated interfaces.',
    link: 'https://motion-primitives.com/',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0',
    id: 'project2',
  },
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
    content: []
  },
  {
    company: '',
    title: 'Front-end Developer',
    start: '2017',
    end: 'Present',
    link: 'h',
    id: 'work3',
    content: []
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Exploring the Intersection of Design, AI, and Design Engineering',
    description: 'How AI is changing the way we design',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-1',
  },
  {
    title: 'Why I left my job to start my own company',
    description:
      'A deep dive into my decision to leave my job and start my own company',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-2',
  },
  {
    title: 'What I learned from my first year of freelancing',
    description:
      'A look back at my first year of freelancing and what I learned',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-3',
  },
  {
    title: 'How to Export Metadata from MDX for Next.js SEO',
    description: 'A guide on exporting metadata from MDX files to leverage Next.js SEO features.',
    link: '/blog/example-mdx-metadata',
    uid: 'blog-4',
  },
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
