'use client';

import React, { useState, useSyncExternalStore } from 'react';
import { CheckIcon, LinkIcon } from 'lucide-react';

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

export function ShareButtons({ title }: { title: string }) {
  const [copied, setCopied] = useState(false);
  const url = useSyncExternalStore(subscribeToLocationChange, getLocationSnapshot, () => '');

  const share = [
    { label: 'WhatsApp', href: `https://wa.me/?text=${encodeURIComponent(`${title} ${url}`)}` },
    { label: 'Facebook', href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}` },
    { label: 'X', href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}` },
    { label: 'LinkedIn', href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}` },
  ];

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
    <div className="flex flex-wrap items-center gap-3">
      <span className="mr-2 text-sm font-semibold text-navy">Share</span>
      {share.map((s) => (
        <a
          key={s.label}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-soft px-4 py-2 text-sm font-medium text-navy transition-colors duration-150 hover:bg-brand-light hover:text-brand"
        >
          {s.label}
        </a>
      ))}
      <button
        type="button"
        onClick={copy}
        className="inline-flex items-center gap-1.5 rounded-full bg-soft px-4 py-2 text-sm font-medium text-navy transition-colors duration-150 hover:bg-brand-light hover:text-brand"
      >
        {copied ? <CheckIcon className="h-4 w-4" aria-hidden="true" /> : <LinkIcon className="h-4 w-4" aria-hidden="true" />}
        {copied ? 'Copied' : 'Copy link'}
      </button>
    </div>
  );
}
