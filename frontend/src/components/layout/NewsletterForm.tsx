'use client';

import React from 'react';
import { LoaderCircleIcon } from 'lucide-react';
import { useFormSubmission } from '@/hooks/useFormSubmission';
import { isEmail } from '@/utils/validation';
import { buttonClasses } from '@/utils/styles';
import { FormStatus } from '@/components/ui/FormStatus';
import { Honeypot } from '@/components/ui/Honeypot';

export function NewsletterForm() {
  const form = useFormSubmission(
    { newsletterEmail: '' },
    (v) =>
      isEmail(v.newsletterEmail) ? {} : { newsletterEmail: 'Enter a valid email address.' },
    { formType: 'newsletter' }
  );

  return (
    <form onSubmit={form.handleSubmit} noValidate className="relative w-full max-w-md">
      <Honeypot {...form.honeypotProps} />
      <label htmlFor="newsletterEmail" className="sr-only">
        Email address
      </label>
      <div className="flex flex-col gap-2 sm:flex-row">
        <input
          id="newsletterEmail"
          type="email"
          autoComplete="email"
          placeholder="Your email address"
          value={form.values.newsletterEmail}
          onChange={(e) => form.setField('newsletterEmail', e.target.value)}
          aria-invalid={Boolean(form.errors.newsletterEmail)}
          className="h-12 flex-1 rounded-full border border-white/15 bg-white/10 px-5 text-sm text-white placeholder:text-white/50 focus:border-gold focus:outline-none"
        />

        <button type="submit" disabled={form.status === 'submitting'} className={buttonClasses('red', 'lg')}>
          {form.status === 'submitting' && <LoaderCircleIcon className="h-4 w-4 animate-spin" aria-hidden="true" />}
          Subscribe
        </button>
      </div>
      {form.errors.newsletterEmail && (
        <p className="mt-2 text-xs font-medium text-[#FF9EA2]">{form.errors.newsletterEmail}</p>
      )}
      {form.status === 'success' && (
        <p className="mt-2 text-xs font-semibold text-emerald-400">
          Thank you! You have been subscribed to community updates.
        </p>
      )}
      {(form.status === 'not-connected' || form.status === 'error') && (
        <div className="mt-3">
          <FormStatus
            status={form.status}
            onReset={form.resetStatus}
            notConnectedMessage="Newsletter sign-up opens once our mailing service is connected."
          />
        </div>
      )}
    </form>
  );
}