import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CalendarDaysIcon, FolderIcon, MapPinIcon, UsersIcon } from 'lucide-react';
import { projects } from '@/data/projects';
import { containerClass } from '@/utils/styles';
import { PageHero } from '@/components/ui/PageHero';
import { ButtonLink } from '@/components/ui/ButtonLink';
import { ProjectCard } from '@/components/cards/ProjectCard';

type ProjectPageProps = { params: Promise<{ id: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ id: p.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { id } = await params;
  const project = projects.find((item) => item.slug === id);
  return {
    title: project?.title ?? 'Project not found',
    description: project?.summary ?? 'Explore projects supported by Initiative for the Needy.',
  };
}

async function ProjectDetailContent({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = projects.find((item) => item.slug === id);
  if (!project) notFound();

  const meta = [
    { label: 'Location', value: project.location, icon: MapPinIcon },
    { label: 'Period', value: project.period, icon: CalendarDaysIcon },
    { label: 'Category', value: project.category, icon: FolderIcon },
    { label: 'Beneficiaries', value: project.beneficiaries ?? 'Not specified', icon: UsersIcon },
  ];

  const related = projects
    .filter((p) => p.slug !== project.slug && p.category === project.category)
    .slice(0, 3);

  return (
    <>
      <PageHero crumb="Projects" title={project.title} intro={project.summary} photo={project.photo}>
        <span className="rounded-full bg-gold px-4 py-1.5 text-sm font-semibold text-navy">
          {project.status}
        </span>
      </PageHero>
      <section className="py-20">
        <div className={`${containerClass} grid gap-12 lg:grid-cols-[1.6fr_1fr]`}>
          <div>
            <img
              src={project.photo.src}
              alt={project.photo.alt}
              className="aspect-[16/10] w-full rounded-3xl object-cover"
            />
            <h2 className="mt-10 text-2xl font-bold text-navy">About this project</h2>
            <div className="mt-4 space-y-4 text-lg leading-relaxed text-navy/75">
              {project.description.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
          <aside className="h-fit rounded-3xl bg-soft p-8 lg:sticky lg:top-28">
            <dl className="space-y-5">
              {meta.map((m) => {
                const Icon = m.icon;
                return (
                  <div key={m.label} className="flex gap-3">
                    <Icon className="mt-0.5 h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
                    <div>
                      <dt className="text-xs text-navy/55">{m.label}</dt>
                      <dd className="font-semibold text-navy">{m.value}</dd>
                    </div>
                  </div>
                );
              })}
            </dl>
            <div className="mt-8 grid gap-3">
              <ButtonLink to="/donate" variant="red" size="lg">
                Support Projects Like This
              </ButtonLink>
              <ButtonLink to="/volunteer" variant="outline" size="lg">
                Volunteer
              </ButtonLink>
            </div>
          </aside>
        </div>
      </section>
      {related.length > 0 && (
        <section className="bg-soft py-20">
          <div className={containerClass}>
            <h2 className="mb-10 text-2xl font-bold text-navy">Related projects</h2>
            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {related.map((p) => (
                <ProjectCard key={p.slug} project={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default function ProjectDetail({ params }: ProjectPageProps) {
  return (
    <Suspense
      fallback={
        <div className={`${containerClass} py-24 text-center text-navy/60`}>
          Loading project details...
        </div>
      }
    >
      <ProjectDetailContent params={params} />
    </Suspense>
  );
}
