'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle2Icon, LoaderCircleIcon } from 'lucide-react';
import { useFormSubmission } from '@/hooks/useFormSubmission';
import { images } from '@/data/site';
import { causes } from '@/data/causes';
import { buttonClasses, containerClass, inputClass } from '@/utils/styles';
import { isBlank, isEmail, isPhone } from '@/utils/validation';
import { Field } from '@/components/ui/Field';
import { FormStatus } from '@/components/ui/FormStatus';
import { Honeypot } from '@/components/ui/Honeypot';
import { ChoiceChips } from '@/components/ui/ChoiceChips';

const skills = [
  'Teaching',
  'Healthcare',
  'Cooking & catering',
  'Driving & logistics',
  'Photography & media',
  'Finance',
  'Counselling',
  'IT & web',
  'Event planning',
];
const availability = ['Weekdays', 'Weekends', 'Evenings', 'One-off events'];
const areas = [
  'Community outreach',
  'Events',
  'Office & administration',
  'Fundraising',
  'Professional / pro-bono',
];

export function VolunteerClient() {
  const form = useFormSubmission(
    {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      town: '',
      skills: [] as string[],
      interests: [] as string[],
      availability: [] as string[],
      area: areas[0],
      motivation: '',
      consent: false,
    },
    (v) => {
      const e: Partial<Record<keyof typeof v, string>> = {};
      if (isBlank(v.firstName)) e.firstName = 'Required.';
      if (isBlank(v.lastName)) e.lastName = 'Required.';
      if (!isEmail(v.email)) e.email = 'Enter a valid email address.';
      if (!isPhone(v.phone)) e.phone = 'Enter a valid phone number.';
      if (v.availability.length === 0) e.availability = 'Choose at least one option.';
      if (!v.consent) e.consent = 'Please agree to the privacy notice to continue.';
      return e;
    },
    { formType: 'volunteer' }
  );
  const { values, errors, setField } = form;

  return (
    <section className="bg-soft py-16 md:py-24">
      <div className={`${containerClass} grid gap-12 lg:grid-cols-[1fr_2fr]`}>
        <aside>
          <h2 className="text-2xl font-bold text-navy">What to expect</h2>
          <ol className="mt-6 space-y-5">
            {[
              'Contact us by phone or email',
              'Tell us about your interests and availability',
              'Discuss how your skills could support our programmes',
            ].map((s, i) => (
              <li key={s} className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand text-sm font-bold text-white">
                  {i + 1}
                </span>
                <span className="pt-1 text-navy/80">{s}</span>
              </li>
            ))}
          </ol>
          <div className="relative mt-10 hidden aspect-[3/4] w-full overflow-hidden rounded-3xl bg-neutral-100 lg:block">
            <Image
              src={images.feeding.src}
              alt={images.feeding.alt}
              fill
              sizes="(max-width: 1200px) 33vw, 360px"
              className="object-cover"
            />
          </div>
        </aside>

        {form.status === 'success' ? (
          <div className="relative h-fit rounded-3xl bg-white p-8 text-center shadow-soft ring-1 ring-emerald-200 md:p-12">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
              <CheckCircle2Icon className="h-9 w-9" aria-hidden="true" />
            </div>
            <h2 className="mt-6 font-display text-2xl font-bold text-navy sm:text-3xl">
              Application Received!
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-base leading-relaxed text-navy/75">
              Thank you for offering your time and skills to support vulnerable communities in Kiambu County. Our volunteer coordinator will review your profile and reach out shortly.
            </p>

            <div className="mt-8">
              <button
                type="button"
                onClick={form.resetForm}
                className={buttonClasses('outline', 'md')}
              >
                Submit Another Application
              </button>
            </div>
          </div>
        ) : (
          <form
            onSubmit={form.handleSubmit}
            noValidate
            className="relative space-y-8 rounded-3xl bg-white p-6 shadow-soft ring-1 ring-line md:p-10"
          >
            <Honeypot {...form.honeypotProps} />
            <fieldset className="grid gap-5 sm:grid-cols-2">
              <legend className="mb-4 font-display text-lg font-bold text-navy">Personal details</legend>
              <Field id="firstName" label="First name" error={errors.firstName} required>
                <input
                  id="firstName"
                  autoComplete="given-name"
                  value={values.firstName}
                  onChange={(e) => setField('firstName', e.target.value)}
                  aria-invalid={Boolean(errors.firstName)}
                  className={inputClass}
                />
              </Field>
              <Field id="lastName" label="Last name" error={errors.lastName} required>
                <input
                  id="lastName"
                  autoComplete="family-name"
                  value={values.lastName}
                  onChange={(e) => setField('lastName', e.target.value)}
                  aria-invalid={Boolean(errors.lastName)}
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
              <Field id="phone" label="Phone" error={errors.phone} required>
                <input
                  id="phone"
                  type="tel"
                  autoComplete="tel"
                  value={values.phone}
                  onChange={(e) => setField('phone', e.target.value)}
                  aria-invalid={Boolean(errors.phone)}
                  className={inputClass}
                  placeholder="+254 7XX XXX XXX"
                />
              </Field>
              <Field id="town" label="Town / area" className="sm:col-span-2">
                <input
                  id="town"
                  value={values.town}
                  onChange={(e) => setField('town', e.target.value)}
                  className={inputClass}
                  placeholder="e.g. Thika"
                />
              </Field>
            </fieldset>

            <div className="space-y-6 border-t border-line pt-8">
              <ChoiceChips
                id="skills"
                label="Skills you can offer"
                options={skills}
                selected={values.skills}
                onChange={(v) => setField('skills', v)}
              />
              <ChoiceChips
                id="interests"
                label="Causes you care about"
                options={causes.map((c) => c.title)}
                selected={values.interests}
                onChange={(v) => setField('interests', v)}
              />
              <ChoiceChips
                id="availability"
                label="Availability *"
                options={availability}
                selected={values.availability}
                onChange={(v) => setField('availability', v)}
                error={errors.availability}
              />
              <Field id="area" label="Preferred volunteering area">
                <select
                  id="area"
                  value={values.area}
                  onChange={(e) => setField('area', e.target.value)}
                  className={inputClass}
                >
                  {areas.map((a) => (
                    <option key={a}>{a}</option>
                  ))}
                </select>
              </Field>
              <Field id="motivation" label="Why would you like to volunteer? (optional)">
                <textarea
                  id="motivation"
                  rows={4}
                  value={values.motivation}
                  onChange={(e) => setField('motivation', e.target.value)}
                  className={inputClass}
                />
              </Field>
            </div>

            <div className="border-t border-line pt-6">
              <label className="flex items-start gap-3 text-sm text-navy/80">
                <input
                  id="consent"
                  type="checkbox"
                  checked={values.consent}
                  onChange={(e) => setField('consent', e.target.checked)}
                  aria-invalid={Boolean(errors.consent)}
                  className="mt-0.5 h-4 w-4 rounded border-line text-brand focus:ring-brand"
                />
                <span>
                  I agree that my details may be used to contact me about volunteering, as described in the{' '}
                  <Link href="/privacy" className="font-semibold text-brand hover:underline">
                    Privacy Policy
                  </Link>
                  .
                </span>
              </label>
              {errors.consent && <p className="mt-1.5 text-xs font-medium text-charity">{errors.consent}</p>}
            </div>

            <button
              type="submit"
              disabled={form.status === 'submitting'}
              className={buttonClasses('red', 'lg', 'w-full sm:w-auto')}
            >
              {form.status === 'submitting' ? (
                <>
                  <LoaderCircleIcon className="h-4 w-4 animate-spin" aria-hidden="true" />
                  Submitting Application...
                </>
              ) : (
                'Register as a Volunteer'
              )}
            </button>
            <FormStatus status={form.status} onReset={form.resetStatus} />
          </form>
        )}
      </div>
    </section>
  );
}
