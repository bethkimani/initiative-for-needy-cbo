'use client';

import React, { useMemo, useState } from 'react';
import Link from 'next/link';
import { SearchIcon } from 'lucide-react';
import { articleCategories, articles } from '@/data/articles';
import { images } from '@/data/site';
import { formatDate } from '@/utils/format';
import { buttonClasses, containerClass, inputClass } from '@/utils/styles';
import { PageHero } from '@/components/ui/PageHero';
import { ArticleCard } from '@/components/cards/ArticleCard';

const PAGE_SIZE = 3;

export default function Blog() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');
  const [visible, setVisible] = useState(PAGE_SIZE);

  const featured = articles.find((a) => a.featured) ?? articles[0];
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return articles.
    filter((a) => a.slug !== featured.slug).
    filter((a) => category === 'All' || a.category === category).
    filter((a) => !q || `${a.title} ${a.excerpt}`.toLowerCase().includes(q)).
    sort((a, b) => b.date.localeCompare(a.date));
  }, [query, category, featured.slug]);

  return (
    <>
      <PageHero
        crumb="News & Blog"
        title="News and Community Updates"
        intro="Updates on our programmes, partnerships and community achievements."
        photo={images.kidsCentre} />
      
      <section className="py-16 md:py-24">
        <div className={containerClass}>
          <article className="group relative grid overflow-hidden rounded-3xl bg-soft lg:grid-cols-2">
            <img src={featured.photo.src} alt={featured.photo.alt} className="aspect-[16/10] h-full w-full object-cover lg:aspect-auto" />
            <div className="flex flex-col justify-center p-8 md:p-12">
              <p className="text-xs font-semibold text-charity">Featured · {featured.category}</p>
              <h2 className="mt-3 text-3xl font-bold leading-tight text-navy">
                <Link href={`/blog/${featured.slug}`} className="after:absolute after:inset-0">
                  {featured.title}
                </Link>
              </h2>
              <p className="mt-4 leading-relaxed text-navy/70">{featured.excerpt}</p>
              <p className="mt-6 text-sm text-navy/55">
                {featured.author} · <time dateTime={featured.date}>{formatDate(featured.date)}</time>
              </p>
            </div>
          </article>

          <div className="mt-14 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div role="group" aria-label="Filter by category" className="flex flex-wrap gap-2">
              {articleCategories.map((c) =>
              <button
                key={c}
                type="button"
                aria-pressed={category === c}
                onClick={() => {
                  setCategory(c);
                  setVisible(PAGE_SIZE);
                }}
                className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-150 ${
                category === c ? 'bg-navy text-white' : 'bg-soft text-navy/70 hover:text-navy'}`
                }>
                
                  {c}
                </button>
              )}
            </div>
            <div className="relative lg:w-72">
              <SearchIcon className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-navy/40" aria-hidden="true" />
              <label htmlFor="blog-search" className="sr-only">
                Search articles
              </label>
              <input
                id="blog-search"
                type="search"
                placeholder="Search articles"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className={`${inputClass} pl-11`} />
              
            </div>
          </div>

          {filtered.length === 0 ?
          <p className="mt-16 rounded-3xl border border-dashed border-line py-16 text-center text-navy/60">
              No articles found. Try another category or search term.
            </p> :

          <div className="mt-10 grid gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
              {filtered.slice(0, visible).map((a) =>
            <ArticleCard key={a.slug} article={a} />
            )}
            </div>
          }

          {visible < filtered.length &&
          <div className="mt-14 text-center">
              <button type="button" onClick={() => setVisible((v) => v + PAGE_SIZE)} className={buttonClasses('outline', 'lg')}>
                Load more stories
              </button>
            </div>
          }
        </div>
      </section>
    </>);

}