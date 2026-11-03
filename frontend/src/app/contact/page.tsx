'use client';

import React from 'react';
import { useSearchParams } from 'next/navigation';
import { ClockIcon, HandshakeIcon, LoaderCircleIcon, MailIcon, MapPinIcon, PhoneIcon } from 'lucide-react';
import { useFormSubmission } from '@/hooks/useFormSubmission';
import { images, site } from '@/data/site';
import { buttonClasses, containerClass, inputClass } from '@/utils/styles';
import { isBlank, isEmail, isPhone } from '@/utils/validation';
import { PageHero } from '@/components/ui/PageHero';
import { Field } from '@/components/ui/Field';
import { FormStatus } from '@/components/ui/FormStatus';
import { Honeypot } from '@/components/ui/Honeypot';
import { ButtonLink } from '@/components/ui/ButtonLink';

const topics = ['General enquiry', 'Volunteering', 'Partnership', 'Fundraising', 'Event registration', 'Consultation', 'Media'];

export default function Contact() {
  const params = useSearchParams();
  const topicParam = params.get('topic');
  const eventParam = params.get('event');

  const form = useFormSubmission(
    {
      name: '',
      email: '',
      phone: '',
      topic: topicParam && topics.includes(topicParam) ? topicParam : 'General enquiry',
      message: eventParam ? `I would like to register for: ${eventParam}` : ''
    },
    (v) => {
      const e: Partial<Record<keyof typeof v, string>> = {};
      if (isBlank(v.name)) e.name = 'Please enter your name.';
      if (!isEmail(v.email)) e.email = 'Enter a valid email address.';
      if (v.phone && !isPhone(v.phone)) e.phone = 'Enter a valid phone number.';
      if (v.message.trim().length < 10) e.message = 'Please write a short message (at least 10 characters).';
      return e;
    }
  );
  const { values, errors, setField } = form;

  const info = [
  { icon: MapPinIcon, label: 'Visit us', value: site.location },
  { icon: PhoneIcon, label: 'Call us', value: site.phone, href: `tel:${site.phone}` },
  { icon: MailIcon, label: 'Email', value: site.email ?? 'Official email to be confirmed' },
  { icon: ClockIcon, label: 'Office hours', value: 'Monday – Friday · hours to be confirmed' }];


  return (
    <>
      <PageHero
        crumb="Contact"
        title="Let’s talk."
        intro="Questions, partnership ideas or ready to volunteer? We would love to hear from you."
        photo={images.volunteersOffice} />
      
      <section className="py-16 md:py-24">
        <div className={`${containerClass} grid gap-12 lg:grid-cols-[1fr_1.4fr]`}>
          <div>
            <ul className="space-y-6">
              {info.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.label} className="flex gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-light text-brand">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-sm text-navy/55">{item.label}</p>
                      {item.href ?
                      <a href={item.href} className="font-semibold text-navy hover:text-brand">
                          {item.value}
                        </a> :

                      <p className="font-semibold text-navy">{item.value}</p>
                      }
                    </div>
                  </li>);

              })}
            </ul>

            <div className="mt-10 rounded-3xl bg-navy p-7 text-white">
              <HandshakeIcon className="h-7 w-7 text-gold" aria-hidden="true" />
              <h2 className="mt-4 text-xl font-bold">Partnership or volunteering?</h2>
              <p className="mt-2 text-sm text-white/70">Use our dedicated forms for a faster response.</p>
              <div className="mt-5 flex flex-wrap gap-3">
                <ButtonLink to="/partnerships" variant="light" size="sm">
                  Partnership inquiry
                </ButtonLink>
                <ButtonLink to="/volunteer" variant="outlineLight" size="sm">
                  Volunteer sign-up
                </ButtonLink>
              </div>
            </div>

            <div className="mt-10 flex aspect-[16/10] flex-col items-center justify-center rounded-3xl border border-dashed border-line bg-soft p-6 text-center">
              <MapPinIcon className="h-8 w-8 text-charity" aria-hidden="true" />
              <p className="mt-3 font-semibold text-navy">Map coming soon</p>
              <p className="mt-1 max-w-xs text-sm text-navy/60">
                An interactive map will be embedded once our precise office location is confirmed.
              </p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Kamande+Stage+Thika+Kenya"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 text-sm font-semibold text-brand hover:underline">
                
                Search Kamande Stage on Google Maps
              </a>
            </div>
          </div>

          <form onSubmit={form.handleSubmit} noValidate className="relative h-fit space-y-5 rounded-3xl bg-white p-6 shadow-soft ring-1 ring-line md:p-10">
            <Honeypot {...form.honeypotProps} />
            <h2 className="text-2xl font-bold text-navy">Send us a message</h2>
            <div className="grid gap-5 sm:grid-cols-2">
              <Field id="name" label="Full name" error={errors.name} required>
                <input id="name" autoComplete="name" value={values.name} onChange={(e) => setField('name', e.target.value)} aria-invalid={Boolean(errors.name)} className={inputClass} />
              </Field>
              <Field id="email" label="Email" error={errors.email} required>
                <input id="email" type="email" autoComplete="email" value={values.email} onChange={(e) => setField('email', e.target.value)} aria-invalid={Boolean(errors.email)} className={inputClass} />
              </Field>
              <Field id="phone" label="Phone (optional)" error={errors.phone}>
                <input id="phone" type="tel" autoComplete="tel" value={values.phone} onChange={(e) => setField('phone', e.target.value)} aria-invalid={Boolean(errors.phone)} className={inputClass} />
              </Field>
              <Field id="topic" label="Topic">
                <select id="topic" value={values.topic} onChange={(e) => setField('topic', e.target.value)} className={inputClass}>
                  {topics.map((t) =>
                  <option key={t}>{t}</option>
                  )}
                </select>
              </Field>
            </div>
            <Field id="message" label="Message" error={errors.message} required>
              <textarea id="message" rows={6} value={values.message} onChange={(e) => setField('message', e.target.value)} aria-invalid={Boolean(errors.message)} className={inputClass} />
            </Field>
            <p className="text-xs text-navy/55">
              We use your details only to respond to your message. See our <a href="/privacy" className="text-brand hover:underline">Privacy Policy</a>.
            </p>
            <button type="submit" disabled={form.status === 'submitting'} className={buttonClasses('blue', 'lg', 'w-full sm:w-auto')}>
              {form.status === 'submitting' && <LoaderCircleIcon className="h-4 w-4 animate-spin" aria-hidden="true" />}
              Send Message
            </button>
            <FormStatus status={form.status} onReset={form.resetStatus} />
          </form>
        </div>
      </section>
    </>);

}