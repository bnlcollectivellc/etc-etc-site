import { projects } from '@/data/projects';
import ProjectCard from './ProjectCard';

export default function ProjectGallery() {
  const baseDelay = 1200; // Start after description
  const staggerDelay = 100; // 100ms between each card

  return (
    <section className="w-full px-6 py-8 md:px-12 lg:px-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="animate-fade-in-card"
            style={{ animationDelay: `${baseDelay + index * staggerDelay}ms` }}
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </section>
  );
}
