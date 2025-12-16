export interface Project {
  id: string;
  name: string;
  description: string;
  category: string;
  type: 'mobile' | 'web';
  image: string;
  link: string;
  status: 'live' | 'coming-soon';
}

export const projects: Project[] = [
  // 1. Website (live)
  {
    id: 'sillwriting',
    name: 'sillwriting',
    description: '10 minutes of honesty.',
    category: 'Productivity',
    type: 'web',
    image: '/images/projects/sillwriting.png',
    link: 'https://sill-writing.vercel.app',
    status: 'live'
  },
  // 2. Website (placeholder)
  {
    id: 'placeholder-web-1',
    name: 'Project Two',
    description: 'Coming soon.',
    category: '',
    type: 'web',
    image: '/images/projects/placeholder.svg',
    link: '#',
    status: 'coming-soon'
  },
  // 3. Mobile (placeholder)
  {
    id: 'placeholder-mobile-1',
    name: 'Project Three',
    description: 'Coming soon.',
    category: '',
    type: 'mobile',
    image: '/images/projects/placeholder.svg',
    link: '#',
    status: 'coming-soon'
  },
  // 4. Website (placeholder)
  {
    id: 'placeholder-web-2',
    name: 'Project Four',
    description: 'Coming soon.',
    category: '',
    type: 'web',
    image: '/images/projects/placeholder.svg',
    link: '#',
    status: 'coming-soon'
  },
  // 5. Mobile (placeholder)
  {
    id: 'placeholder-mobile-2',
    name: 'Project Five',
    description: 'Coming soon.',
    category: '',
    type: 'mobile',
    image: '/images/projects/placeholder.svg',
    link: '#',
    status: 'coming-soon'
  },
  // 6. Website (placeholder)
  {
    id: 'placeholder-web-3',
    name: 'Project Six',
    description: 'Coming soon.',
    category: '',
    type: 'web',
    image: '/images/projects/placeholder.svg',
    link: '#',
    status: 'coming-soon'
  },
  // 7. Website (placeholder)
  {
    id: 'placeholder-web-4',
    name: 'Project Seven',
    description: 'Coming soon.',
    category: '',
    type: 'web',
    image: '/images/projects/placeholder.svg',
    link: '#',
    status: 'coming-soon'
  },
  // 8. Website (placeholder)
  {
    id: 'placeholder-web-5',
    name: 'Project Eight',
    description: 'Coming soon.',
    category: '',
    type: 'web',
    image: '/images/projects/placeholder.svg',
    link: '#',
    status: 'coming-soon'
  },
];
