import React, { ReactNode } from 'react';
import { InfoIcon } from 'lucide-react';

type DraftNoteProps = {
  children: ReactNode;
  className?: string;
};

export function DraftNote({ children, className = '' }: DraftNoteProps) {
  return (
    <p
      className={`inline-flex items-start gap-2 rounded-lg bg-gold-light px-3 py-2 text-xs leading-relaxed text-navy/80 ${className}`}>
      
      <InfoIcon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#9A6A00]" aria-hidden="true" />
      <span>{children}</span>
    </p>);

}