'use client';

import React from 'react';
import Image from 'next/image';
import { LoaderCircleIcon } from 'lucide-react';
import { useFormSubmission } from '@/hooks/useFormSubmission';
import { images } from '@/data/site';
import { buttonClasses, containerClass, inputClass } from '@/utils/styles';
import { isBlank, isEmail, isPhone } from '@/utils/validation';
import { Field } from '@/components/ui/Field';
import { FormStatus } from '@/components/ui/FormStatus';
import { Honeypot } from '@/components/ui/Honeypot';

const types = [
  'Corporate sponsorship',
  'Institutional partnerships',
  'Community collaborations',
  'In-kind support',
];

export function PartnershipsClient() {
  const form = useFormSubmission(
    {
      organization: '',
      contactName: '',
      email: '',
      phone: '',
      partnershipType: types[0],
      message: '',
    },
    (v) => {
      const e: Partial<Record<keyof typeof v, string>> = {};
      if (isBlank(v.organization)) e.organization = 'Please enter your organization.';
      if (isBlank(v.contactName)) e.contactName = 'Please enter a contact name.';
      if (!isEmail(v.email)) e.email = 'Enter a valid email address.';
      if (v.phone && !isPhone(v.phone)) e.phone = 'Enter a valid phone number.';
      if (v.message.trim().length < 10) e.message = 'Tell us briefly what you have in mind.';
      return e;
    }
  );
  const { values, errors, setField } = form;

  return (
    <section className="bg-soft py-16 md:py-24" id="inquiry">
      <div className={`${containerClass} grid gap-12 lg:grid-cols-[1fr_1.5fr]`}>
        <div>
          <h2 className="text-3xl font-bold text-navy">Start a conversation</h2>
          <p className="mt-3 leading-relaxed text-navy/70">
            Share what your organization can offer or what support you would like to explore. Online submissions are not connected yet; please contact us by phone or email directly.
          </p>
          <div className="relative mt-8 hidden aspect-[4/5] w-full overflow-hidden rounded-3xl bg-neutral-100 lg:block">
            <Image
              src={images.foodDonation.src}
              alt={images.foodDonation.alt}
              fill
              sizes="(max-width: 1200px) 40vw, 400px"
              className="object-cover"
            />
          </div>
        </div>
        <form
          onSubmit={form.handleSubmit}
          noValidate
          className="relative h-fit space-y-5 rounded-3xl bg-white p-6 shadow-soft ring-1 ring-line md:p-10"
        >
          <Honeypot {...form.honeypotProps} />
          <div className="grid gap-5 sm:grid-cols-2">
            <Field id="organization" label="Organization" error={errors.organization} required>
              <input
                id="organization"
                autoComplete="organization"
                value={values.organization}
                onChange={(e) => setField('organization', e.target.value)}
                aria-invalid={Boolean(errors.organization)}
                className={inputClass}
              />
            </Field>
            <Field id="contactName" label="Contact person" error={errors.contactName} required>
              <input
                id="contactName"
                autoComplete="name"
                value={values.contactName}
                onChange={(e) => setField('contactName', e.target.value)}
                aria-invalid={Boolean(errors.contactName)}
                className={inputClass}
              />
            </Field>
            <Field id="email" label="Email" error={errors.email} required>
              <input
                id="email"
                type="email"
                autoComplete="email"
                value={values.email}
                onChange={(e) => setField('email', e.target.value)}
                aria-invalid={Boolean(errors.email)}
                className={inputClass}
              />
            </Field>
            <Field id="phone" label="Phone (optional)" error={errors.phone}>
              <input
                id="phone"
                type="tel"
                autoComplete="tel"
                value={values.phone}
                onChange={(e) => setField('phone', e.target.value)}
                aria-invalid={Boolean(errors.phone)}
                className={inputClass}
              />
            </Field>
          </div>
          <Field id="partnershipType" label="Partnership type">
            <select
              id="partnershipType"
              value={values.partnershipType}
              onChange={(e) => setField('partnershipType', e.target.value)}
              className={inputClass}
            >
              {types.map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>
          </Field>
          <Field id="message" label="What do you have in mind?" error={errors.message} required>
            <textarea
              id="message"
              rows={5}
              value={values.message}
              onChange={(e) => setField('message', e.target.value)}
              aria-invalid={Boolean(errors.message)}
              className={inputClass}
            />
          </Field>
          <button
            type="submit"
            disabled={form.status === 'submitting'}
            className={buttonClasses('blue', 'lg', 'w-full sm:w-auto')}
          >
            {form.status === 'submitting' && (
              <LoaderCircleIcon className="h-4 w-4 animate-spin" aria-hidden="true" />
            )}
            Send Partnership Inquiry
          </button>
          <FormStatus status={form.status} onReset={form.resetStatus} />
        </form>
      </div>
    </section>
  );
}
