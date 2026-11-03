import React from 'react';
import Link from 'next/link';
import { ArrowRightIcon, CalendarDaysIcon, MapPinIcon } from 'lucide-react';
import type { Project, ProjectStatus } from '@/types/content';

const statusStyles: Record<ProjectStatus, string> = {
  Completed: 'bg-brand text-white',
  Current: 'bg-charity text-white',
  Upcoming: 'bg-gold text-navy'
};

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-soft ring-1 ring-line transition-[box-shadow,transform] duration-200 ease-out hover:-translate-y-1 hover:shadow-lift">
      <div className="relative aspect-[16/11] overflow-hidden">
        <img
          src={project.photo.src}
          alt={project.photo.alt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-105" />
        
        <span className={`absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-semibold ${statusStyles[project.status]}`}>
          {project.status}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs font-semibold text-charity">{project.category}</p>
        <h3 className="mt-2 text-lg font-bold leading-snug text-navy">{project.title}</h3>
        <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-navy/60">
          <span className="flex items-center gap-1">
            <MapPinIcon className="h-3.5 w-3.5" aria-hidden="true" />
            {project.location}
          </span>
          <span className="flex items-center gap-1">
            <CalendarDaysIcon className="h-3.5 w-3.5" aria-hidden="true" />
            {project.period}
          </span>
        </div>
        <p className="mb-5 mt-3 text-sm leading-relaxed text-navy/70">{project.summary}</p>
        <div className="mt-auto flex items-center justify-between gap-3 border-t border-line pt-4">
          <span className="text-xs text-navy/55">
            {project.beneficiaries ? `Reached: ${project.beneficiaries}` : 'Results pending verification'}
          </span>
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-brand"
            aria-label={`View project: ${project.title}`}>
            
            View Project
            <ArrowRightIcon className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>);

}