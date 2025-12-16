'use client';

import Image from 'next/image';
import { Project } from '@/data/projects';
import MobileFrame from './MobileFrame';
import WebFrame from './WebFrame';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const isComingSoon = project.status === 'coming-soon';
  const isMobile = project.type === 'mobile';

  const CardContent = (
    <div className="relative group cursor-pointer">
      {/* Frame with screenshot */}
      {isMobile ? (
        <MobileFrame>
          <div className="relative w-full h-full">
            {isComingSoon ? (
              <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                <span className="text-gray-400 text-sm">Preview</span>
              </div>
            ) : (
              <Image
                src={project.image}
                alt={project.name}
                fill
                className="object-cover"
              />
            )}
          </div>
        </MobileFrame>
      ) : (
        <WebFrame>
          <div className="relative w-full h-full">
            {isComingSoon ? (
              <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                <span className="text-gray-400 text-sm">Preview</span>
              </div>
            ) : (
              <Image
                src={project.image}
                alt={project.name}
                fill
                className="object-cover"
              />
            )}
          </div>
        </WebFrame>
      )}

      {/* Hover overlay - frosted glass with blur */}
      <div className="absolute inset-0 bg-white/80 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out flex flex-col items-center justify-center text-center p-4 rounded-xl">
        <h3 className="text-2xl font-normal tracking-tight text-black">
          {project.name}
        </h3>
        <p className="text-lg text-black/70 mt-1">
          {isComingSoon ? 'Coming Soon' : project.description}
        </p>
        {!isComingSoon && project.category && (
          <span className="text-xs text-black/50 mt-2 lowercase">
            {project.category}
          </span>
        )}
      </div>
    </div>
  );

  if (isComingSoon) {
    return <div className="block">{CardContent}</div>;
  }

  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="block"
    >
      {CardContent}
    </a>
  );
}
