import React from 'react';
import Link from 'next/link';
import { ArrowRightIcon } from 'lucide-react';
import { getAllArticles } from '@/sanity/api';
import { formatDate } from '@/utils/format';
import { containerClass } from '@/utils/styles';
import { ButtonLink } from '@/components/ui/ButtonLink';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';

export async function NewsPreview() {
  const articles = await getAllArticles();
  const featured = articles.find((a) => a.featured) ?? articles[0];
  const others = articles.filter((a) => a.slug !== featured?.slug).slice(0, 3);

  if (!featured) return null;

  return (
    <section className="bg-soft py-20 md:py-28">
      <div className={containerClass}>
        <SectionHeading
          title="News and Community Updates"
          intro="Updates on our programmes, partnerships and community achievements."
          action={
            <ButtonLink to="/blog" variant="outline" size="lg">
              All Stories
            </ButtonLink>
          }
        />

        <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr]">
          <Reveal>
            <article className="group relative overflow-hidden rounded-3xl bg-white shadow-soft">
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={featured.photo.src}
                  alt={featured.photo.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                />
              </div>
              <div className="p-8">
                <p className="text-xs font-semibold text-charity">
                  {featured.category} · <time dateTime={featured.date}>{formatDate(featured.date)}</time>
                </p>
                <h3 className="mt-3 text-2xl font-bold leading-snug text-navy">
                  <Link href={`/blog/${featured.slug}`} className="after:absolute after:inset-0">
                    {featured.title}
                  </Link>
                </h3>
                <p className="mt-3 leading-relaxed text-navy/70">{featured.excerpt}</p>
              </div>
            </article>
          </Reveal>
          <ul className="flex flex-col gap-4">
            {others.map((a, i) => (
              <li key={a.slug}>
                <Reveal delay={i * 0.05}>
                  <Link
                    href={`/blog/${a.slug}`}
                    className="group flex min-w-0 gap-3 rounded-2xl bg-white p-3 transition-shadow duration-200 hover:shadow-soft sm:gap-5 sm:p-4"
                  >
                    <img
                      src={a.photo.src}
                      alt=""
                      loading="lazy"
                      className="h-20 w-20 shrink-0 rounded-xl object-cover sm:h-24 sm:w-28"
                    />
                    <div className="min-w-0">
                      <p className="text-xs font-semibold text-charity">{a.category}</p>
                      <h3 className="mt-1 font-bold leading-snug text-navy transition-colors duration-150 group-hover:text-brand">
                        {a.title}
                      </h3>
                      <span className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-brand">
                        Read More <ArrowRightIcon className="h-3.5 w-3.5" aria-hidden="true" />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
