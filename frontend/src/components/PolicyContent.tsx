import React from 'react';
import Link from 'next/link';
import { site } from '@/data/site';
import { containerClass } from '@/utils/styles';
import { DraftNote } from '@/components/ui/DraftNote';

type PolicyKind = 'privacy' | 'terms' | 'cookies';

const content: Record<PolicyKind, {title: string;sections: {heading: string;body: string;}[];}> = {
  privacy: {
    title: 'Privacy Policy',
    sections: [
    { heading: 'Who we are', body: `${site.name}, ${site.location}. Contact details for data protection queries will be confirmed.` },
    { heading: 'Information we collect', body: 'Details you choose to share through our contact, volunteer, partnership, newsletter and donation forms.' },
    { heading: 'How we use it', body: 'To respond to you, coordinate volunteering, process donations and share updates you have asked for.' },
    { heading: 'Your rights', body: 'Placeholder — to be completed in line with the Kenya Data Protection Act, 2019, and reviewed by a qualified adviser.' },
    { heading: 'Photographs and consent', body: 'Images of children and vulnerable people are published only with appropriate permission.' }]

  },
  terms: {
    title: 'Terms of Use',
    sections: [
    { heading: 'Using this website', body: 'Placeholder terms describing acceptable use of this website, to be reviewed and approved by the organization.' },
    { heading: 'Content', body: 'Content on this site is provided for information about our work. Some content is illustrative until replaced with verified material.' },
    { heading: 'Donations', body: 'Donation terms will be published once a payment provider is connected.' }]

  },
  cookies: {
    title: 'Cookie Policy',
    sections: [
    { heading: 'What cookies are', body: 'Small text files stored on your device that help websites work and measure usage.' },
    { heading: 'How we use them', body: 'Placeholder — this site will only use essential and privacy-conscious analytics cookies once approved.' },
    { heading: 'Managing cookies', body: 'You can control cookies through your browser settings.' }]

  }
};

type PolicyProps = {kind: PolicyKind;};

export function PolicyContent({ kind }: PolicyProps) {
  const doc = content[kind];
  return (
    <section className="py-16 md:py-24">
      <div className={`${containerClass} max-w-3xl`}>
        <h1 className="text-4xl font-extrabold text-navy md:text-5xl">{doc.title}</h1>
        <DraftNote className="mt-6">Placeholder for review and approval — not yet a legal statement.</DraftNote>
        <div className="mt-12 space-y-10">
          {doc.sections.map((s) =>
          <section key={s.heading}>
              <h2 className="text-xl font-bold text-navy">{s.heading}</h2>
              <p className="mt-3 leading-relaxed text-navy/75">{s.body}</p>
            </section>
          )}
        </div>
        <p className="mt-14 border-t border-line pt-6 text-sm text-navy/60">
          Questions? <Link href="/contact" className="font-semibold text-brand hover:underline">Contact us</Link>.
        </p>
      </div>
    </section>);

}