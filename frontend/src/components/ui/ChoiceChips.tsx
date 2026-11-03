'use client';

import React from 'react';
import { CheckIcon } from 'lucide-react';

type ChoiceChipsProps = {
  id: string;
  label: string;
  options: string[];
  selected: string[];
  onChange: (next: string[]) => void;
  error?: string;
};

export function ChoiceChips({ id, label, options, selected, onChange, error }: ChoiceChipsProps) {
  const toggle = (opt: string) =>
  onChange(selected.includes(opt) ? selected.filter((s) => s !== opt) : [...selected, opt]);

  return (
    <fieldset>
      <legend className="mb-2 text-sm font-medium text-navy">{label}</legend>
      <div id={id} tabIndex={-1} className="flex flex-wrap gap-2 outline-none">
        {options.map((opt) => {
          const on = selected.includes(opt);
          return (
            <button
              key={opt}
              type="button"
              aria-pressed={on}
              onClick={() => toggle(opt)}
              className={`inline-flex min-h-11 items-center gap-1.5 whitespace-nowrap rounded-full border px-3.5 py-2 text-sm font-medium transition-colors duration-150 ${
              on ? 'border-brand bg-brand text-white' : 'border-line bg-white text-navy/75 hover:border-brand/50'}`
              }>
              
              {on && <CheckIcon className="h-3.5 w-3.5" aria-hidden="true" />}
              {opt}
            </button>);

        })}
      </div>
      {error && <p className="mt-1.5 text-xs font-medium text-charity">{error}</p>}
    </fieldset>);

}