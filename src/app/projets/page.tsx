import { Metadata } from 'next';
import { Header, Footer } from "@/components/layout";
import { ProjectCard } from "@/components/features";

export const metadata: Metadata = {
  title: 'Projets | Cyprien Rimbaud',
  description: 'Découvrez mes projets de développement web et applications'
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">
            Mes Projets
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Exemple de carte de projet */}
            <ProjectCard 
              project={{
                id: '1',
                title: 'Projet E-commerce',
                description: 'Une plateforme e-commerce moderne avec Next.js et Stripe',
                image: '/project-ecommerce.jpg',
                technologies: ['Next.js', 'TypeScript', 'Stripe', 'Tailwind CSS'],
                githubUrl: 'https://github.com/example/ecommerce',
                liveUrl: 'https://ecommerce-demo.com',
                featured: true,
                createdAt: new Date('2024-01-15')
              }}
            />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 