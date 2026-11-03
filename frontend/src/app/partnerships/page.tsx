'use client';

import React from 'react';
import { Building2Icon, ChurchIcon, LoaderCircleIcon, PackageIcon, UsersIcon } from 'lucide-react';
import { useFormSubmission } from '@/hooks/useFormSubmission';
import { images } from '@/data/site';
import { buttonClasses, containerClass, inputClass } from '@/utils/styles';
import { isBlank, isEmail, isPhone } from '@/utils/validation';
import { PageHero } from '@/components/ui/PageHero';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Field } from '@/components/ui/Field';
import { FormStatus } from '@/components/ui/FormStatus';
import { Honeypot } from '@/components/ui/Honeypot';

const opportunities = [
{ title: 'Corporate sponsorship', text: 'Sponsor a cause, event or programme and engage your staff in meaningful CSR.', icon: Building2Icon },
{ title: 'Institutional partnerships', text: 'Schools, churches, foundations and government bodies working with us on shared goals.', icon: ChurchIcon },
{ title: 'Community collaborations', text: 'Local groups, chamas and organizations joining forces for greater reach.', icon: UsersIcon },
{ title: 'In-kind support', text: 'Food, supplies, transport, venues or professional services that stretch every shilling.', icon: PackageIcon }];


const types = opportunities.map((o) => o.title);

export default function Partnerships() {
  const form = useFormSubmission(
    { organization: '', contactName: '', email: '', phone: '', partnershipType: types[0], message: '' },
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
    <>
      <PageHero
        crumb="Partnerships"
        title="Partner with us for lasting change."
        intro="Businesses, institutions and community groups can multiply what is possible for vulnerable families in Thika."
        photo={images.teamOffice} />
      
      <section className="py-20 md:py-28">
        <div className={containerClass}>
          <SectionHeading title="Ways to partner" intro="Every partnership is shaped together, around what you can offer and what the community needs." />
          <div className="grid gap-x-10 gap-y-12 md:grid-cols-2">
            {opportunities.map((o, i) => {
              const Icon = o.icon;
              return (
                <Reveal key={o.title} delay={i % 2 * 0.05} className="flex gap-5">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand text-white">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-xl font-bold text-navy">{o.title}</h3>
                    <p className="mt-2 leading-relaxed text-navy/70">{o.text}</p>
                  </div>
                </Reveal>);

            })}
          </div>
        </div>
      </section>

      <section className="bg-soft py-16 md:py-24" id="inquiry">
        <div className={`${containerClass} grid gap-12 lg:grid-cols-[1fr_1.5fr]`}>
          <div>
            <h2 className="text-3xl font-bold text-navy">Start a conversation</h2>
            <p className="mt-3 leading-relaxed text-navy/70">
              Share a few details and our leadership team will reach out to explore how we can work together.
            </p>
            <img src={images.foodDonation.src} alt={images.foodDonation.alt} loading="lazy" className="mt-8 hidden aspect-[4/5] w-full rounded-3xl object-cover lg:block" />
          </div>
          <form onSubmit={form.handleSubmit} noValidate className="relative h-fit space-y-5 rounded-3xl bg-white p-6 shadow-soft ring-1 ring-line md:p-10">
            <Honeypot {...form.honeypotProps} />
            <div className="grid gap-5 sm:grid-cols-2">
              <Field id="organization" label="Organization" error={errors.organization} required>
                <input id="organization" autoComplete="organization" value={values.organization} onChange={(e) => setField('organization', e.target.value)} aria-invalid={Boolean(errors.organization)} className={inputClass} />
              </Field>
              <Field id="contactName" label="Contact person" error={errors.contactName} required>
                <input id="contactName" autoComplete="name" value={values.contactName} onChange={(e) => setField('contactName', e.target.value)} aria-invalid={Boolean(errors.contactName)} className={inputClass} />
              </Field>
              <Field id="email" label="Email" error={errors.email} required>
                <input id="email" type="email" autoComplete="email" value={values.email} onChange={(e) => setField('email', e.target.value)} aria-invalid={Boolean(errors.email)} className={inputClass} />
              </Field>
              <Field id="phone" label="Phone (optional)" error={errors.phone}>
                <input id="phone" type="tel" autoComplete="tel" value={values.phone} onChange={(e) => setField('phone', e.target.value)} aria-invalid={Boolean(errors.phone)} className={inputClass} />
              </Field>
            </div>
            <Field id="partnershipType" label="Partnership type">
              <select id="partnershipType" value={values.partnershipType} onChange={(e) => setField('partnershipType', e.target.value)} className={inputClass}>
                {types.map((t) =>
                <option key={t}>{t}</option>
                )}
              </select>
            </Field>
            <Field id="message" label="What do you have in mind?" error={errors.message} required>
              <textarea id="message" rows={5} value={values.message} onChange={(e) => setField('message', e.target.value)} aria-invalid={Boolean(errors.message)} className={inputClass} />
            </Field>
            <button type="submit" disabled={form.status === 'submitting'} className={buttonClasses('blue', 'lg', 'w-full sm:w-auto')}>
              {form.status === 'submitting' && <LoaderCircleIcon className="h-4 w-4 animate-spin" aria-hidden="true" />}
              Send Partnership Inquiry
            </button>
            <FormStatus status={form.status} onReset={form.resetStatus} />
          </form>
        </div>
      </section>
    </>);

}