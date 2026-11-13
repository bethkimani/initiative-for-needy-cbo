'use client';

import React, { ChangeEvent } from 'react';

type HoneypotProps = {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

/**
 * Hidden field that only automated spam bots fill in.
 * Uses attributes that prevent browser autofill from touching it.
 */
export function Honeypot({ value, onChange }: HoneypotProps) {
  return (
    <div
      aria-hidden="true"
      style={{
        display: 'none',
        opacity: 0,
        position: 'absolute',
        top: 0,
        left: '-5000px',
        height: 0,
        width: 0,
        zIndex: -1,
        pointerEvents: 'none',
      }}
    >
      <label htmlFor="_anti_spam_trap">Do not fill this field</label>
      <input
        id="_anti_spam_trap"
        type="text"
        name="_anti_spam_trap"
        tabIndex={-1}
        autoComplete="new-password"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
