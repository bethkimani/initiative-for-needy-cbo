'use client';

import React from 'react';
import Image from 'next/image';
import { PortableText, PortableTextComponents } from '@portabletext/react';
import { urlForImage } from '@/sanity/image';

function parseInlineMarkdown(text: string): React.ReactNode {
  // Regex to match **bold**, *italic*, and [label](url)
  const regex = /(\*\*[^*]+\*\*|\*[^*]+\*|\[[^\]]+\]\([^)]+\))/g;
  const parts = text.split(regex);

  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={index} className="font-semibold text-navy">
          {part.slice(2, -2)}
        </strong>
      );
    }
    if (part.startsWith('*') && part.endsWith('*')) {
      return (
        <em key={index} className="italic text-navy/90">
          {part.slice(1, -1)}
        </em>
      );
    }
    const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (linkMatch) {
      const [, label, href] = linkMatch;
      const isExternal = href.startsWith('http://') || href.startsWith('https://');
      return (
        <a
          key={index}
          href={href}
          target={isExternal ? '_blank' : undefined}
          rel={isExternal ? 'noopener noreferrer' : undefined}
          className="font-medium text-charity underline decoration-charity/40 underline-offset-4 transition-colors hover:decoration-charity"
        >
          {label}
        </a>
      );
    }
    return part;
  });
}

function renderMarkdownEnhancedBlock(rawText: string, defaultChildren: React.ReactNode) {
  const lines = rawText.split('\n');
  const hasMarkdownMarkers = lines.some((l) =>
    /^(##|###|[-*]\s|\d+\.\s|>\s|---)/.test(l.trim()) || l.includes('**')
  );

  if (!hasMarkdownMarkers) {
    return (
      <p className="mb-6 text-lg leading-relaxed text-navy/80">
        {defaultChildren}
      </p>
    );
  }

  const elements: React.ReactNode[] = [];
  let currentList: { type: 'bullet' | 'number'; items: string[] } | null = null;

  const flushList = (keyPrefix: number) => {
    if (currentList && currentList.items.length > 0) {
      if (currentList.type === 'bullet') {
        elements.push(
          <ul key={`ul-${keyPrefix}`} className="mb-6 ml-6 list-disc space-y-2 text-lg text-navy/80">
            {currentList.items.map((item, idx) => (
              <li key={idx} className="leading-relaxed">
                {parseInlineMarkdown(item)}
              </li>
            ))}
          </ul>
        );
      } else {
        elements.push(
          <ol key={`ol-${keyPrefix}`} className="mb-6 ml-6 list-decimal space-y-2 text-lg text-navy/80">
            {currentList.items.map((item, idx) => (
              <li key={idx} className="leading-relaxed">
                {parseInlineMarkdown(item)}
              </li>
            ))}
          </ol>
        );
      }
      currentList = null;
    }
  };

  lines.forEach((rawLine, index) => {
    const line = rawLine.trim();

    if (line === '---') {
      flushList(index);
      elements.push(<hr key={`hr-${index}`} className="my-10 border-t border-line" />);
    } else if (line.startsWith('## ')) {
      flushList(index);
      const heading = line.replace(/^##\s+/, '');
      const id = heading.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      elements.push(
        <h2
          key={`h2-${index}`}
          id={id || undefined}
          className="mt-12 mb-4 scroll-mt-28 text-2xl font-bold tracking-tight text-navy md:text-3xl"
        >
          {parseInlineMarkdown(heading)}
        </h2>
      );
    } else if (line.startsWith('### ')) {
      flushList(index);
      const heading = line.replace(/^###\s+/, '');
      const id = heading.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      elements.push(
        <h3
          key={`h3-${index}`}
          id={id || undefined}
          className="mt-8 mb-3 scroll-mt-28 text-xl font-bold text-navy md:text-2xl"
        >
          {parseInlineMarkdown(heading)}
        </h3>
      );
    } else if (line.startsWith('> ')) {
      flushList(index);
      const quote = line.replace(/^>\s+/, '');
      elements.push(
        <blockquote
          key={`quote-${index}`}
          className="my-8 border-l-4 border-charity bg-soft px-6 py-4 italic text-navy rounded-r-2xl text-lg leading-relaxed"
        >
          {parseInlineMarkdown(quote)}
        </blockquote>
      );
    } else if (line.startsWith('- ') || line.startsWith('* ')) {
      const item = line.replace(/^[-*]\s+/, '');
      if (!currentList || currentList.type !== 'bullet') {
        flushList(index);
        currentList = { type: 'bullet', items: [item] };
      } else {
        currentList.items.push(item);
      }
    } else if (/^\d+\.\s+/.test(line)) {
      const item = line.replace(/^\d+\.\s+/, '');
      if (!currentList || currentList.type !== 'number') {
        flushList(index);
        currentList = { type: 'number', items: [item] };
      } else {
        currentList.items.push(item);
      }
    } else if (line.length > 0) {
      flushList(index);
      elements.push(
        <p key={`p-${index}`} className="mb-6 text-lg leading-relaxed text-navy/80">
          {parseInlineMarkdown(line)}
        </p>
      );
    }
  });

  flushList(lines.length);

  return <>{elements}</>;
}

const components: PortableTextComponents = {
  block: {
    h2: ({ children }) => {
      const text = typeof children === 'string' ? children : '';
      const id = text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');
      return (
        <h2
          id={id || undefined}
          className="mt-12 mb-4 scroll-mt-28 text-2xl font-bold tracking-tight text-navy md:text-3xl"
        >
          {children}
        </h2>
      );
    },
    h3: ({ children }) => {
      const text = typeof children === 'string' ? children : '';
      const id = text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');
      return (
        <h3
          id={id || undefined}
          className="mt-8 mb-3 scroll-mt-28 text-xl font-bold text-navy md:text-2xl"
        >
          {children}
        </h3>
      );
    },
    normal: ({ value, children }) => {
      const rawText = (value?.children || [])
        .map((c) => ('text' in c && typeof c.text === 'string' ? c.text : ''))
        .join('');
      return renderMarkdownEnhancedBlock(rawText, children);
    },
    blockquote: ({ children }) => (
      <blockquote className="my-8 border-l-4 border-charity bg-soft px-6 py-4 italic text-navy rounded-r-2xl">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="mb-6 ml-6 list-disc space-y-2 text-lg text-navy/80">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="mb-6 ml-6 list-decimal space-y-2 text-lg text-navy/80">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="leading-relaxed">{children}</li>,
    number: ({ children }) => <li className="leading-relaxed">{children}</li>,
  },
  types: {
    image: ({ value }) => {
      const url = urlForImage(value);
      if (!url) return null;
      return (
        <figure className="my-10">
          <Image
            src={url}
            alt={value.alt || 'Initiative for the Needy story photo'}
            width={1200}
            height={700}
            sizes="(max-width: 1024px) 100vw, 800px"
            className="w-full rounded-3xl object-cover shadow-sm"
          />
          {value.caption && (
            <figcaption className="mt-2 text-center text-sm text-navy/60">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-semibold text-navy">{children}</strong>
    ),
    em: ({ children }) => <em className="italic">{children}</em>,
    code: ({ children }) => (
      <code className="rounded bg-soft px-1.5 py-0.5 text-sm font-mono text-navy">
        {children}
      </code>
    ),
    link: ({ value, children }) => {
      const href = value?.href || '';
      const isExternal = href.startsWith('http://') || href.startsWith('https://');
      return (
        <a
          href={href}
          target={isExternal ? '_blank' : undefined}
          rel={isExternal ? 'noopener noreferrer' : undefined}
          className="font-medium text-charity underline decoration-charity/40 underline-offset-4 transition-colors hover:decoration-charity hover:text-charity-dark"
        >
          {children}
        </a>
      );
    },
  },
};

export function PortableTextRenderer({
  value,
}: {
  value: React.ComponentProps<typeof PortableText>['value'];
}) {
  if (!value) return null;
  return (
    <div className="prose prose-lg max-w-none">
      <PortableText value={value} components={components} />
    </div>
  );
}
