import { ProjectCard } from "@/components/features";

export default function ProjectsSection() {
  const projects = [
    {
      id: '1',
      title: 'E-commerce Platform',
      description: 'Une plateforme e-commerce moderne avec Next.js, Stripe et Tailwind CSS',
      image: '/project-ecommerce.jpg',
      technologies: ['Next.js', 'TypeScript', 'Stripe', 'Tailwind CSS'],
      githubUrl: 'https://github.com/example/ecommerce',
      liveUrl: 'https://ecommerce-demo.com',
      featured: true,
      createdAt: new Date('2024-01-15')
    },
    {
      id: '2',
      title: 'Task Management App',
      description: 'Application de gestion de tâches avec authentification et base de données',
      image: '/project-tasks.jpg',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      githubUrl: 'https://github.com/example/task-app',
      liveUrl: 'https://task-app-demo.com',
      featured: true,
      createdAt: new Date('2024-02-20')
    },
    {
      id: '3',
      title: 'Portfolio Website',
      description: 'Site portfolio responsive avec animations et design moderne',
      image: '/project-portfolio.jpg',
      technologies: ['Next.js', 'Framer Motion', 'Tailwind CSS'],
      githubUrl: 'https://github.com/example/portfolio',
      liveUrl: 'https://portfolio-demo.com',
      featured: false,
      createdAt: new Date('2024-03-10')
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Mes Projets
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a 
              href="/projets" 
              className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Voir tous mes projets
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 