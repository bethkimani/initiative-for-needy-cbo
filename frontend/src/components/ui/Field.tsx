import React, { ReactNode } from 'react';

type FieldProps = {
  id: string;
  label: string;
  error?: string;
  hint?: string;
  required?: boolean;
  className?: string;
  children: ReactNode;
};

export function Field({ id, label, error, hint, required, className = '', children }: FieldProps) {
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-navy">
        {label}
        {required &&
        <span className="text-charity" aria-hidden="true">
            {' '}
            *
          </span>
        }
      </label>
      {children}
      {hint && !error && <p className="mt-1.5 text-xs text-navy/60">{hint}</p>}
      {error &&
      <p id={`${id}-error`} className="mt-1.5 text-xs font-medium text-charity">
          {error}
        </p>
      }
    </div>);

}