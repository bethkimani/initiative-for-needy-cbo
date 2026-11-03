import { ChangeEvent, FormEvent, useState } from 'react';

export type FormStatusValue = 'idle' | 'submitting' | 'invalid' | 'not-connected';
export type FormErrors<T> = Partial<Record<keyof T, string>>;

/**
 * Validates a form and reports honestly that no submission service is connected yet.
 * Replace the timeout with a real API call once a backend / email service is available.
 */
export function useFormSubmission<T extends object>(initial: T, validate: (values: T) => FormErrors<T>) {
  const [values, setValues] = useState<T>(initial);
  const [errors, setErrors] = useState<FormErrors<T>>({});
  const [status, setStatus] = useState<FormStatusValue>('idle');
  const [honeypot, setHoneypot] = useState('');

  const setField = <K extends keyof T,>(key: K, value: T[K]) => {
    setValues((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => {
      if (!prev[key]) return prev;
      const next = { ...prev };
      delete next[key];
      return next;
    });
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (honeypot) return; // spam bot filled the hidden field
    const nextErrors = validate(values);
    setErrors(nextErrors);
    const keys = Object.keys(nextErrors);
    if (keys.length > 0) {
      setStatus('invalid');
      document.getElementById(keys[0])?.focus();
      return;
    }
    setStatus('submitting');
    window.setTimeout(() => setStatus('not-connected'), 700);
  };

  return {
    values,
    errors,
    status,
    setField,
    handleSubmit,
    resetStatus: () => setStatus('idle'),
    honeypotProps: {
      value: honeypot,
      onChange: (e: ChangeEvent<HTMLInputElement>) => setHoneypot(e.target.value)
    }
  };
}