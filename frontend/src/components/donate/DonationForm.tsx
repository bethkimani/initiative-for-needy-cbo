'use client';

import React, { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { HeartIcon, LoaderCircleIcon, LockIcon } from 'lucide-react';
import { causes } from '@/data/causes';
import { useFormSubmission } from '@/hooks/useFormSubmission';
import { formatKES } from '@/utils/format';
import { buttonClasses, inputClass } from '@/utils/styles';
import { isBlank, isEmail, isPhone } from '@/utils/validation';
import { Field } from '@/components/ui/Field';
import { FormStatus } from '@/components/ui/FormStatus';
import { Honeypot } from '@/components/ui/Honeypot';

const presets = [500, 1000, 2500, 5000, 10000];

export function DonationForm() {
  const params = useSearchParams();
  const initialCause = causes.some((c) => c.slug === params.get('cause')) ? params.get('cause') as string : 'where-needed';
  const [frequency, setFrequency] = useState<'once' | 'monthly'>('once');
  const [preset, setPreset] = useState<number | null>(1000);

  const form = useFormSubmission(
    { amount: '', cause: initialCause, fullName: '', email: '', phone: '', anonymous: false },
    (v) => {
      const errors: Partial<Record<keyof typeof v, string>> = {};
      const custom = Number(v.amount);
      if (preset === null && (!v.amount || Number.isNaN(custom) || custom < 50)) errors.amount = 'Enter an amount of at least KES 50.';
      if (!v.anonymous && isBlank(v.fullName)) errors.fullName = 'Please enter your name, or choose to give anonymously.';
      if (!isEmail(v.email)) errors.email = 'Enter a valid email so we can send your receipt.';
      if (v.phone && !isPhone(v.phone)) errors.phone = 'Enter a valid phone number.';
      return errors;
    }
  );
  const { values, errors, setField } = form;
  const amount = preset ?? (Number(values.amount) || 0);
  const causeLabel = causes.find((c) => c.slug === values.cause)?.title ?? 'Where it’s needed most';

  return (
    <form onSubmit={form.handleSubmit} noValidate className="relative grid gap-8 lg:grid-cols-[1.5fr_1fr]">
      <Honeypot {...form.honeypotProps} />
      <div className="space-y-8 rounded-3xl bg-white p-6 shadow-soft ring-1 ring-line md:p-10">
        <fieldset>
          <legend className="font-display text-lg font-bold text-navy">1. How often?</legend>
          <div className="mt-4 inline-flex rounded-full bg-soft p-1">
            {(['once', 'monthly'] as const).map((f) =>
            <button
              key={f}
              type="button"
              aria-pressed={frequency === f}
              onClick={() => setFrequency(f)}
              className={`whitespace-nowrap rounded-full px-5 py-2 text-sm font-semibold transition-colors duration-150 ${
              frequency === f ? 'bg-brand text-white' : 'text-navy/70 hover:text-navy'}`
              }>
              
                {f === 'once' ? 'One-time' : 'Monthly'}
              </button>
            )}
          </div>
          {frequency === 'monthly' &&
          <p className="mt-2 text-xs text-navy/60">Recurring gifts depend on the payment provider chosen by the organization.</p>
          }
        </fieldset>

        <fieldset>
          <legend className="font-display text-lg font-bold text-navy">2. Choose an amount (KES)</legend>
          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {presets.map((p) =>
            <button
              key={p}
              type="button"
              aria-pressed={preset === p}
              onClick={() => setPreset(p)}
              className={`h-14 rounded-2xl border text-base font-bold transition-colors duration-150 ${
              preset === p ? 'border-charity bg-charity text-white' : 'border-line text-navy hover:border-charity/50'}`
              }>
              
                {formatKES(p)}
              </button>
            )}
            <button
              type="button"
              aria-pressed={preset === null}
              onClick={() => {
                setPreset(null);
                window.setTimeout(() => document.getElementById('amount')?.focus(), 0);
              }}
              className={`h-14 rounded-2xl border text-base font-bold transition-colors duration-150 ${
              preset === null ? 'border-charity bg-charity text-white' : 'border-line text-navy hover:border-charity/50'}`
              }>
              
              Other
            </button>
          </div>
          {preset === null &&
          <Field id="amount" label="Custom amount (KES)" error={errors.amount} className="mt-4">
              <input
              id="amount"
              type="number"
              inputMode="numeric"
              min={50}
              value={values.amount}
              onChange={(e) => setField('amount', e.target.value)}
              aria-invalid={Boolean(errors.amount)}
              className={inputClass}
              placeholder="e.g. 1500" />
            
            </Field>
          }
        </fieldset>

        <fieldset className="space-y-5">
          <legend className="font-display text-lg font-bold text-navy">3. Your details</legend>
          <Field id="cause" label="Designate my gift to">
            <select id="cause" value={values.cause} onChange={(e) => setField('cause', e.target.value)} className={inputClass}>
              <option value="where-needed">Where it’s needed most</option>
              {causes.map((c) =>
              <option key={c.slug} value={c.slug}>
                  {c.title}
                </option>
              )}
            </select>
          </Field>
          <div className="grid gap-5 sm:grid-cols-2">
            <Field id="fullName" label="Full name" error={errors.fullName} required={!values.anonymous}>
              <input
                id="fullName"
                autoComplete="name"
                value={values.fullName}
                onChange={(e) => setField('fullName', e.target.value)}
                aria-invalid={Boolean(errors.fullName)}
                className={inputClass} />
              
            </Field>
            <Field id="email" label="Email (for your receipt)" error={errors.email} required>
              <input
                id="email"
                type="email"
                autoComplete="email"
                value={values.email}
                onChange={(e) => setField('email', e.target.value)}
                aria-invalid={Boolean(errors.email)}
                className={inputClass} />
              
            </Field>
          </div>
          <Field id="phone" label="Phone (optional)" error={errors.phone}>
            <input
              id="phone"
              type="tel"
              autoComplete="tel"
              value={values.phone}
              onChange={(e) => setField('phone', e.target.value)}
              aria-invalid={Boolean(errors.phone)}
              className={inputClass}
              placeholder="+254 7XX XXX XXX" />
            
          </Field>
          <label className="flex items-start gap-3 text-sm text-navy/80">
            <input
              type="checkbox"
              checked={values.anonymous}
              onChange={(e) => setField('anonymous', e.target.checked)}
              className="mt-0.5 h-4 w-4 rounded border-line text-brand focus:ring-brand" />
            
            Keep my gift anonymous in any public acknowledgements
          </label>
        </fieldset>
      </div>

      <aside className="h-fit space-y-5 lg:sticky lg:top-28">
        <div className="rounded-3xl bg-navy p-8 text-white">
          <p className="text-sm text-white/60">Your {frequency === 'monthly' ? 'monthly' : 'one-time'} gift</p>
          <p className="mt-1 font-display text-4xl font-extrabold">{amount > 0 ? formatKES(amount) : '—'}</p>
          <p className="mt-3 text-sm text-white/70">to {causeLabel}</p>
          <button
            type="submit"
            disabled={form.status === 'submitting'}
            className={buttonClasses('red', 'lg', 'mt-8 w-full')}>
            
            {form.status === 'submitting' ?
            <LoaderCircleIcon className="h-4 w-4 animate-spin" aria-hidden="true" /> :

            <HeartIcon className="h-4 w-4" aria-hidden="true" />
            }
            Continue to secure payment
          </button>
          <p className="mt-4 flex items-center gap-2 text-xs text-white/55">
            <LockIcon className="h-3.5 w-3.5" aria-hidden="true" />
            Card details are never stored on this website.
          </p>
        </div>
        <FormStatus
          status={form.status}
          onReset={form.resetStatus}
          notConnectedMessage="The website’s online checkout is not connected yet. You can still donate using the M-Pesa Pay Bill details above; no online payment has been taken." />
        
      </aside>
    </form>);

}