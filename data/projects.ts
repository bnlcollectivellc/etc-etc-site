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
  {
    id: 'sillwriting',
    name: 'sillwriting',
    description: 'A minimalist writing tool.',
    category: 'Productivity',
    type: 'web',
    image: '/images/projects/sillwriting.png',
    link: 'https://sill-writing.vercel.app',
    status: 'live'
  },
  {
    id: 'placeholder-1',
    name: 'Project Two',
    description: 'Coming soon.',
    category: '',
    type: 'mobile',
    image: '/images/projects/placeholder.svg',
    link: '#',
    status: 'coming-soon'
  },
  {
    id: 'placeholder-2',
    name: 'Project Three',
    description: 'Coming soon.',
    category: '',
    type: 'web',
    image: '/images/projects/placeholder.svg',
    link: '#',
    status: 'coming-soon'
  },
  {
    id: 'placeholder-3',
    name: 'Project Four',
    description: 'Coming soon.',
    category: '',
    type: 'mobile',
    image: '/images/projects/placeholder.svg',
    link: '#',
    status: 'coming-soon'
  },
];
