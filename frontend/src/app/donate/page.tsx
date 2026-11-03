import React from 'react';
import type { Metadata } from 'next';
import { images } from '@/data/site';
import { fundUses } from '@/data/values';
import { containerClass } from '@/utils/styles';
import { PageHero } from '@/components/ui/PageHero';
import { DonationForm } from '@/components/donate/DonationForm';

export const metadata: Metadata = {
  title: 'Donate',
  description: 'Make a one-time or monthly donation in KES to Initiative for the Needy Charity Organization.',
};

const steps = [
{ title: 'Choose your gift', text: 'Pick an amount in KES and, if you like, a cause.' },
{ title: 'Share your details', text: 'So we can thank you and send a receipt.' },
{ title: 'Pay securely', text: 'Through a trusted provider — M-Pesa or card, once connected.' },
{ title: 'Receive your receipt', text: 'A confirmation and receipt arrive by email.' }];


export default function Donate() {
  return (
    <>
      <PageHero
        crumb="Donate"
        title="Your gift turns compassion into action."
        intro="Support vulnerable families around Thika with a one-time or monthly donation."
        photo={images.ceoFeeding} />
      
      <section className="bg-soft py-16 md:py-24">
        <div className={containerClass}>
          <DonationForm />
        </div>
      </section>
      <section className="py-20 md:py-24">
        <div className={`${containerClass} grid gap-16 lg:grid-cols-2`}>
          <div>
            <h2 className="text-3xl font-bold text-navy">How giving works</h2>
            <ol className="mt-8 space-y-6">
              {steps.map((s, i) =>
              <li key={s.title} className="flex gap-5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand font-display font-bold text-white">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-bold text-navy">{s.title}</h3>
                    <p className="mt-1 text-sm text-navy/70">{s.text}</p>
                  </div>
                </li>
              )}
            </ol>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-navy">Where your money goes</h2>
            <ul className="mt-8 divide-y divide-line">
              {fundUses.map((f) => {
                const Icon = f.icon;
                return (
                  <li key={f.title} className="flex gap-4 py-5">
                    <Icon className="mt-0.5 h-6 w-6 shrink-0 text-charity" aria-hidden="true" />
                    <div>
                      <h3 className="font-bold text-navy">{f.title}</h3>
                      <p className="mt-1 text-sm text-navy/70">{f.text}</p>
                    </div>
                  </li>);

              })}
            </ul>
            <p className="mt-4 text-xs text-navy/55">A detailed allocation and financial reporting policy will be published by the organization.</p>
          </div>
        </div>
      </section>
    </>);

}