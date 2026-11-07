import { ChangeEvent, FormEvent, useState } from 'react';

export type FormStatusValue =
  | 'idle'
  | 'submitting'
  | 'invalid'
  | 'not-connected'
  | 'error'
  | 'success';

export type FormErrors<T> = Partial<Record<keyof T, string>>;

export interface FormSubmissionOptions {
  formType?: 'contact' | 'volunteer' | 'partnership' | 'newsletter';
  endpoint?: string;
  onSuccess?: () => void;
}

export function useFormSubmission<T extends object>(
  initial: T,
  validate: (values: T) => FormErrors<T>,
  options?: FormSubmissionOptions
) {
  const [values, setValues] = useState<T>(initial);
  const [errors, setErrors] = useState<FormErrors<T>>({});
  const [status, setStatus] = useState<FormStatusValue>('idle');
  const [honeypot, setHoneypot] = useState('');

  const setField = <K extends keyof T>(key: K, value: T[K]) => {
    setValues((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => {
      if (!prev[key]) return prev;
      const next = { ...prev };
      delete next[key];
      return next;
    });
    if (status !== 'idle' && status !== 'submitting') {
      setStatus('idle');
    }
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    // Check honeypot against automated spam bots
    if (honeypot && honeypot.trim().length > 0) {
      console.warn('[useFormSubmission] Honeypot trap triggered, aborting submission.');
      return;
    }

    const nextErrors = validate(values);
    setErrors(nextErrors);
    const keys = Object.keys(nextErrors);
    if (keys.length > 0) {
      setStatus('invalid');
      const firstField = document.getElementById(keys[0]);
      if (firstField) {
        firstField.focus();
        firstField.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    setStatus('submitting');

    try {
      const response = await fetch(options?.endpoint || '/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          formType: options?.formType || 'contact',
          ...values,
        }),
      });

      const result = await response.json().catch(() => null);

      if (response.ok && result?.success) {
        setStatus('success');
        setValues(initial);
        setErrors({});
        options?.onSuccess?.();
      } else if (response.status === 503 || result?.unconfigured) {
        setStatus('not-connected');
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error('[useFormSubmission] Network error sending form:', err);
      setStatus('error');
    }
  };

  return {
    values,
    errors,
    status,
    setField,
    handleSubmit,
    resetStatus: () => setStatus('idle'),
    resetForm: () => {
      setValues(initial);
      setErrors({});
      setStatus('idle');
    },
    honeypotProps: {
      value: honeypot,
      onChange: (e: ChangeEvent<HTMLInputElement>) => setHoneypot(e.target.value),
    },
  };
}
