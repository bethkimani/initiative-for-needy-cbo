import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { CalendarDaysIcon, FolderIcon, MapPinIcon, ShieldCheckIcon, UsersIcon } from 'lucide-react';
import { projects } from '@/data/projects';
import { containerClass } from '@/utils/styles';
import { PageHero } from '@/components/ui/PageHero';
import { ButtonLink } from '@/components/ui/ButtonLink';
import { ProjectCard } from '@/components/cards/ProjectCard';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.initiativefortheneedy.com';

type ProjectPageProps = { params: Promise<{ id: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ id: p.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { id } = await params;
  const project = projects.find((item) => item.slug === id);

  if (!project) {
    return {
      title: 'Project Not Found | Initiative for the Needy',
      description: 'The requested community project could not be found.',
    };
  }

  const title = `${project.title} | Charity Projects in Kenya`;
  const description = `${project.summary} Implemented by Initiative for the Needy CBO in ${project.location}, Kenya.`;
  const canonical = `${siteUrl}/projects/${project.slug}`;
  const fullImageUrl = project.photo.src.startsWith('http')
    ? project.photo.src
    : `${siteUrl}${project.photo.src.startsWith('/') ? '' : '/'}${project.photo.src}`;

  return {
    title,
    description,
    keywords: [
      project.title,
      project.category,
      project.location,
      'Charity Projects Kenya',
      'Community Impact Kiambu',
      'Initiative for the Needy Project',
    ],
    alternates: {
      canonical,
    },
    openGraph: {
      title: `${project.title} | Initiative for the Needy Charity Organization`,
      description,
      type: 'website',
      url: canonical,
      images: [
        {
          url: fullImageUrl,
          alt: project.photo.alt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.title} | Initiative for the Needy`,
      description,
      images: [fullImageUrl],
    },
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
    { label: 'Beneficiaries', value: project.beneficiaries ?? 'Community members', icon: UsersIcon },
  ];

  const related = projects
    .filter((p) => p.slug !== project.slug && p.category === project.category)
    .slice(0, 3);

  const fullProjectUrl = `${siteUrl}/projects/${project.slug}`;
  const fullImageUrl = project.photo.src.startsWith('http')
    ? project.photo.src
    : `${siteUrl}${project.photo.src.startsWith('/') ? '' : '/'}${project.photo.src}`;

  const projectJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${fullProjectUrl}/#webpage`,
        url: fullProjectUrl,
        name: `${project.title} | Initiative for the Needy Charity Organization`,
        description: project.summary,
        image: fullImageUrl,
        isPartOf: {
          '@id': `${siteUrl}/#website`,
        },
        about: {
          '@id': `${siteUrl}/#organization`,
        },
        potentialAction: {
          '@type': 'DonateAction',
          name: `Support Projects Like ${project.title}`,
          description: `Help fund community initiatives and programmes by Initiative for the Needy in Kenya.`,
          target: {
            '@type': 'EntryPoint',
            urlTemplate: `${siteUrl}/donate`,
            actionPlatform: [
              'http://schema.org/DesktopWebPlatform',
              'http://schema.org/MobileWebPlatform',
            ],
          },
          recipient: {
            '@id': `${siteUrl}/#organization`,
          },
        },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${fullProjectUrl}/#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: siteUrl,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Our Projects',
            item: `${siteUrl}/projects`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: project.title,
            item: fullProjectUrl,
          },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify(projectJsonLd)}
      </script>
      <PageHero crumb="Projects" title={project.title} intro={project.summary} photo={project.photo}>
        <span className="rounded-full bg-gold px-4 py-1.5 text-sm font-semibold text-navy">
          {project.status}
        </span>
      </PageHero>
      <section className="py-20">
        <div className={`${containerClass} grid gap-12 lg:grid-cols-[1.6fr_1fr]`}>
          <div>
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-3xl bg-neutral-100 shadow-xs">
              <Image
                src={project.photo.src}
                alt={project.photo.alt || project.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 65vw"
                className="object-cover"
              />
            </div>
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

            {/* Direct Donor Assurance Badge */}
            <div className="mt-8 border-t border-line/80 pt-6">
              <div className="flex items-center gap-2 text-xs font-bold text-navy">
                <ShieldCheckIcon className="h-4 w-4 text-brand" aria-hidden="true" />
                Verified Non-Profit Initiative
              </div>
              <p className="mt-1 text-xs leading-relaxed text-navy/60">
                Registered Community-Based Organization (Certificate No. CBO/THK/W/022/2022/1151). All projects are community-verified.
              </p>
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
