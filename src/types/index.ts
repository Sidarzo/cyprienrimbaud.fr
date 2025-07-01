// Types pour les projets
export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  createdAt: Date;
}

// Types pour les articles/blog
export interface Post {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  slug: string;
  publishedAt: Date;
  tags: string[];
  author: string;
}

// Types pour les composants
export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
} 