import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRightIcon } from 'lucide-react';
import type { Article } from '@/types/content';
import { formatDate } from '@/utils/format';

type ArticleCardProps = {
  article: Article;
};

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <article className="group relative flex h-full flex-col">
      <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-neutral-100">
        <Image
          src={article.photo.src}
          alt={article.photo.alt || article.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 ease-out group-hover:scale-105"
        />
        
        <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-semibold text-brand">
          {article.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col pt-5">
        <p className="text-xs text-navy/55">
          <time dateTime={article.date}>{formatDate(article.date)}</time>
        </p>
        <h3 className="mt-2 text-lg font-bold leading-snug text-navy transition-colors duration-150 group-hover:text-brand">
          <Link href={`/blog/${article.slug}`} className="after:absolute after:inset-0">
            {article.title}
          </Link>
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-navy/70">{article.excerpt}</p>
        <span className="mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-semibold text-brand">
          Read More
          <ArrowRightIcon className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-1" aria-hidden="true" />
        </span>
      </div>
    </article>);

}