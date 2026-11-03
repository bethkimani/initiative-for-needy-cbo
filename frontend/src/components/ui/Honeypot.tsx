'use client';

import React, { ChangeEvent } from 'react';

type HoneypotProps = {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

/** Hidden field that only bots fill in — basic spam protection. */
export function Honeypot({ value, onChange }: HoneypotProps) {
  return (
    <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
      <label>
        Leave this field empty
        <input type="text" name="website" tabIndex={-1} autoComplete="off" value={value} onChange={onChange} />
      </label>
    </div>);

}