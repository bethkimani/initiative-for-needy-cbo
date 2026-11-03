'use client';

import React, { useState, useSyncExternalStore } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ArrowLeftIcon, CheckIcon, LinkIcon } from 'lucide-react';
import { articles } from '@/data/articles';
import { formatDate } from '@/utils/format';
import { containerClass } from '@/utils/styles';
import { DraftNote } from '@/components/ui/DraftNote';
import { ButtonLink } from '@/components/ui/ButtonLink';
import { ArticleCard } from '@/components/cards/ArticleCard';
import NotFound from '@/app/not-found';

function subscribeToLocationChange(onChange: () => void) {
  window.addEventListener('popstate', onChange);
  window.addEventListener('hashchange', onChange);
  return () => {
    window.removeEventListener('popstate', onChange);
    window.removeEventListener('hashchange', onChange);
  };
}

function getLocationSnapshot() {
  return window.location.href;
}

export default function BlogPost() {
  const { id } = useParams<{ id: string }>();
  const article = articles.find((a) => a.slug === id);
  const [copied, setCopied] = useState(false);
  const url = useSyncExternalStore(subscribeToLocationChange, getLocationSnapshot, () => '');
  if (!article) return <NotFound />;

  const share = [
  { label: 'WhatsApp', href: `https://wa.me/?text=${encodeURIComponent(`${article.title} ${url}`)}` },
  { label: 'Facebook', href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}` },
  { label: 'X', href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(article.title)}` },
  { label: 'LinkedIn', href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}` }];

  const related = articles.filter((a) => a.slug !== article.slug).slice(0, 3);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <>
      <article>
        <header className={`${containerClass} max-w-4xl pt-14 md:pt-20`}>
          <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:underline">
            <ArrowLeftIcon className="h-4 w-4" aria-hidden="true" /> All stories
          </Link>
          <p className="mt-8 text-sm font-semibold text-charity">{article.category}</p>
          <h1 className="mt-3 text-4xl font-extrabold leading-tight text-navy md:text-5xl">{article.title}</h1>
          <p className="mt-5 text-sm text-navy/60">
            By {article.author} · <time dateTime={article.date}>{formatDate(article.date)}</time>
          </p>
          <DraftNote className="mt-6">Draft sample article — to be replaced with approved content.</DraftNote>
        </header>
        <div className={`${containerClass} mt-10 max-w-5xl`}>
          <img src={article.photo.src} alt={article.photo.alt} className="aspect-[16/9] w-full rounded-3xl object-cover" />
        </div>
        <div className={`${containerClass} max-w-3xl py-14`}>
          <div className="space-y-6 text-lg leading-relaxed text-navy/80">
            {article.content.map((p) =>
            <p key={p}>{p}</p>
            )}
          </div>
          <div className="mt-12 flex flex-wrap items-center gap-3 border-t border-line pt-8">
            <span className="mr-2 text-sm font-semibold text-navy">Share</span>
            {share.map((s) =>
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-soft px-4 py-2 text-sm font-medium text-navy transition-colors duration-150 hover:bg-brand-light hover:text-brand">
              
                {s.label}
              </a>
            )}
            <button
              type="button"
              onClick={copy}
              className="inline-flex items-center gap-1.5 rounded-full bg-soft px-4 py-2 text-sm font-medium text-navy transition-colors duration-150 hover:bg-brand-light hover:text-brand">
              
              {copied ? <CheckIcon className="h-4 w-4" aria-hidden="true" /> : <LinkIcon className="h-4 w-4" aria-hidden="true" />}
              {copied ? 'Copied' : 'Copy link'}
            </button>
          </div>
          <div className="mt-12 rounded-3xl bg-brand p-8 text-white md:p-10">
            <h2 className="text-2xl font-bold">Moved by this story?</h2>
            <p className="mt-2 text-white/80">Help us write the next one — give or give your time.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <ButtonLink to="/donate" variant="red" size="lg">
                Donate Now
              </ButtonLink>
              <ButtonLink to="/volunteer" variant="light" size="lg">
                Volunteer
              </ButtonLink>
            </div>
          </div>
        </div>
      </article>
      <section className="bg-soft py-20">
        <div className={containerClass}>
          <h2 className="mb-10 text-2xl font-bold text-navy">More stories</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {related.map((a) =>
            <ArticleCard key={a.slug} article={a} />
            )}
          </div>
        </div>
      </section>
    </>);

}