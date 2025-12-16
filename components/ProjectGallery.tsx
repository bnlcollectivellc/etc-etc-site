import { projects } from '@/data/projects';
import ProjectCard from './ProjectCard';

export default function ProjectGallery() {
  return (
    <section className="w-full px-6 py-8 md:px-12 lg:px-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 animate-fade-in-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
