import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
      <div className="aspect-video bg-muted rounded-md mb-4 flex items-center justify-center">
        {project.image ? (
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover rounded-md"
          />
        ) : (
          <div className="text-muted-foreground">Image du projet</div>
        )}
      </div>
      
      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
      <p className="text-muted-foreground mb-4">{project.description}</p>
      
      <div className="flex gap-2 mb-4 flex-wrap">
        {project.technologies.map((tech) => (
          <span 
            key={tech}
            className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded"
          >
            {tech}
          </span>
        ))}
      </div>
      
      <div className="flex gap-2">
        
      </div>
    </div>
  );
} 