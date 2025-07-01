// Configuration du site
export const SITE_CONFIG = {
  name: 'Cyprien Rimbaud',
  description: 'Développeur web full-stack',
  url: 'https://cyprienrimbaud.fr',
  ogImage: '/og-image.jpg',
  links: {
    github: 'https://github.com/cyprienrimbaud',
    linkedin: 'https://linkedin.com/in/cyprienrimbaud',
    twitter: 'https://twitter.com/cyprienrimbaud'
  }
} as const;

// Technologies utilisées
export const TECHNOLOGIES = {
  frontend: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  backend: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB'],
  tools: ['Git', 'Docker', 'AWS', 'Vercel']
} as const;

// Navigation
export const NAV_ITEMS = [
  { title: 'Accueil', href: '/' },
  { title: 'Projets', href: '/projets' },
  { title: 'Blog', href: '/blog' },
  { title: 'Contact', href: '/contact' }
] as const; 