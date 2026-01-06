import { CVData, BookItem, SkillCategory, SocialLink } from '@/types';

export const CV_DATA: CVData = {
  name: 'Youri MARTIN',
  title: 'Full Stack Developer',
  contact: {
    email: 'youri.dev.martin@gmail.com',
    location: 'Rennes, France'
  },
  summary: 'Passionate developer with expertise in modern web technologies and clean code practices.',
  experience: [
    {
      company: 'Tech Company',
      position: 'Senior Developer',
      period: '2023 - Present',
      description: 'Leading development of modern web applications',
      achievements: [
        'Implemented scalable architecture',
        'Improved performance by 40%',
        'Mentored junior developers'
      ]
    },
    {
      company: 'Previous Company',
      position: 'Developer',
      period: '2020 - 2023',
      description: 'Full-stack development with React and Node.js'
    }
  ],
  education: [
    {
      institution: 'University',
      degree: 'Master in Computer Science',
      period: '2018 - 2020',
      details: 'Specialized in software engineering'
    }
  ],
  skills: ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Python', 'SQL']
};

export const LIBRARY_DATA: BookItem[] = [
  {
    id: '1',
    title: 'Clean Code',
    author: 'Robert C. Martin',
    type: 'book',
    year: 2008,
    description: 'A Handbook of Agile Software Craftsmanship',
    tags: ['programming', 'best-practices']
  },
  {
    id: '2',
    title: 'The Pragmatic Programmer',
    author: 'Andrew Hunt & David Thomas',
    type: 'book',
    year: 1999,
    description: 'Your Journey To Mastery',
    tags: ['programming', 'career']
  },
  {
    id: '3',
    title: 'Design Patterns in TypeScript',
    author: 'Various Authors',
    type: 'article',
    year: 2024,
    description: 'Modern design patterns for TypeScript development',
    tags: ['typescript', 'patterns']
  }
];

export const SKILLS_DATA: SkillCategory[] = [
  {
    category: 'Frontend',
    skills: [
      { name: 'React', level: 'expert', description: 'Component-based UI development' },
      { name: 'Next.js', level: 'expert', description: 'Server-side rendering and static sites' },
      { name: 'TypeScript', level: 'advanced', description: 'Type-safe JavaScript' },
      { name: 'CSS/Sass', level: 'advanced', description: 'Styling and responsive design' }
    ]
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', level: 'advanced', description: 'Server-side JavaScript' },
      { name: 'Python', level: 'intermediate', description: 'Scripting and backend' },
      { name: 'PostgreSQL', level: 'intermediate', description: 'Relational databases' }
    ]
  },
  {
    category: 'Tools & Practices',
    skills: [
      { name: 'Git', level: 'expert', description: 'Version control' },
      { name: 'Docker', level: 'intermediate', description: 'Containerization' },
      { name: 'CI/CD', level: 'intermediate', description: 'Continuous integration' },
      { name: 'Clean Architecture', level: 'advanced', description: 'Code organization' }
    ]
  }
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: 'github',
    url: 'https://github.com/yourusername',
    username: 'yourusername'
  },
  {
    platform: 'linkedin',
    url: 'https://linkedin.com/in/yourprofile',
    username: 'yourprofile'
  }
];
