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
{ title: 'Contact us', text: 'Call either of our phone numbers or email us to discuss supporting our work.' },
{ title: 'Choose an area to support', text: 'Tell us if you would like to support a particular programme or the organization’s wider work.' },
{ title: 'Arrange your contribution', text: 'Online donation processing is not connected yet, so please arrange contributions directly with the organization.' },
{ title: 'Discuss confirmation', text: 'Please ask us directly about confirmation or receipts when arranging your contribution.' }];


export default function Donate() {
  return (
    <>
      <PageHero
        crumb="Donate"
        title="Your gift turns compassion into action."
        intro="Contact Initiative for the Needy to discuss supporting vulnerable communities across Kiambu County."
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
            <p className="mt-4 text-xs text-navy/55">Contributions support community programmes in response to local needs. Contact the organization to discuss how support can be arranged.</p>
          </div>
        </div>
      </section>
    </>);

}