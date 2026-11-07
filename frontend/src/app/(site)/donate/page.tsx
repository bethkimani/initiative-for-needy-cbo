import React from 'react';
import type { Metadata } from 'next';
import { CheckCircle2Icon, HeartIcon, PhoneIcon, ShieldCheckIcon } from 'lucide-react';
import { images, site } from '@/data/site';
import { fundUses } from '@/data/values';
import { containerClass } from '@/utils/styles';
import { PageHero } from '@/components/ui/PageHero';
import { DonationForm } from '@/components/donate/DonationForm';
import { Reveal } from '@/components/ui/Reveal';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.initiativefortheneedy.com';

export const metadata: Metadata = {
  title: 'Donate | Support Vulnerable Children, Youth & Families in Kenya',
  description:
    'Donate to Initiative for the Needy, a registered Community-Based Charity Organization (CBO Reg. No. CBO/THK/W/022/2022/1151) in Kiambu, Kenya. Support orphans, vocational education scholarships, and food relief via M-Pesa or bank transfer.',
  keywords: [
    'Donate to Charity Kenya',
    'Charity Donations M-Pesa',
    'Sponsor a Child Kenya',
    'Vocational Training Scholarships Charity',
    'Support Orphans Kiambu',
    'Food Relief Donation Kenya',
    'Initiative for the Needy Donation',
    'CBO Kenya Charity Donation',
    'Transparent Charity Donations Kenya',
  ],
  alternates: {
    canonical: `${siteUrl}/donate`,
  },
  openGraph: {
    title: 'Donate | Support Vulnerable Children, Youth & Families in Kenya',
    description:
      'Support orphans, vocational youth scholarships, food relief, and elderly care in Kiambu County, Kenya.',
    url: `${siteUrl}/donate`,
    type: 'website',
    images: [
      {
        url: `${siteUrl}/995f53cd-348f-4199-84ed-6a59f6fffa93.jpg`,
        width: 1200,
        height: 630,
        alt: 'Donate to Initiative for the Needy Charity Organization',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Donate | Initiative for the Needy Charity Organization',
    description:
      'Make a life-changing donation to support vulnerable communities in Kiambu County, Kenya.',
    images: [`${siteUrl}/995f53cd-348f-4199-84ed-6a59f6fffa93.jpg`],
  },
};

const steps = [
  {
    title: 'Choose your cause or project',
    text: 'Select where you would like your gift directed—whether child care, youth vocational scholarships, elderly food relief, or emergency community assistance.',
  },
  {
    title: 'Arrange direct contribution',
    text: 'Direct contributions can be arranged easily via mobile money (M-Pesa) or direct bank wire transfer to our registered organization account.',
  },
  {
    title: 'Direct donor receipt & updates',
    text: 'Every contribution is acknowledged with an official receipt and direct progress updates on the beneficiaries you have supported.',
  },
];

export default function Donate() {
  const donateJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${siteUrl}/donate/#webpage`,
        url: `${siteUrl}/donate`,
        name: 'Donate | Initiative for the Needy Charity Organization',
        description:
          'Support education for orphans, vocational youth scholarships, food relief, and elderly care in Kenya.',
        isPartOf: {
          '@id': `${siteUrl}/#website`,
        },
        about: {
          '@id': `${siteUrl}/#organization`,
        },
        breadcrumb: {
          '@id': `${siteUrl}/donate/#breadcrumb`,
        },
        potentialAction: {
          '@type': 'DonateAction',
          name: 'Donate to Initiative for the Needy',
          description:
            'Support education for orphans, vocational youth scholarships, food relief, and elderly care in Kenya.',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: `${siteUrl}/donate`,
            actionPlatform: [
              'http://schema.org/DesktopWebPlatform',
              'http://schema.org/MobileWebPlatform',
            ],
          },
          recipient: {
            '@id': `${siteUrl}/#organization`,
          },
        },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${siteUrl}/donate/#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: siteUrl,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Donate',
            item: `${siteUrl}/donate`,
          },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': `${siteUrl}/donate/#faq`,
        mainEntity: [
          {
            '@type': 'Question',
            name: 'How can I donate via M-Pesa or bank transfer?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'You can contribute directly by contacting our official office numbers (+254 721 286 516 or +254 721 452 773) or email (initiativeneedycbo@gmail.com). Our team will provide the verified M-Pesa Paybill / Till number or bank details registered under Initiative for the Needy CBO.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can international donors contribute?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes! International donors and diaspora partners can send contributions via wire transfer directly to our registered organization bank account in Kenya or through international remittance services.',
            },
          },
          {
            '@type': 'Question',
            name: 'How do I know my donation reaches the beneficiaries?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Initiative for the Needy is an officially registered CBO under the Kenyan Ministry of Labour and Social Protection (Reg. No. CBO/THK/W/022/2022/1151). We maintain detailed receipts, community rosters, and photo/video progress reports shared with our donors.',
            },
          },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify(donateJsonLd)}
      </script>

      <PageHero
        crumb="Donate"
        title="Your gift turns compassion into action."
        intro="Every shilling, dollar, or euro directly empowers orphans, youth vocational trainees, widows, and vulnerable older persons across Kiambu County."
        photo={images.ceoFeeding}
      />

      {/* Direct Giving Assurance Banner */}
      <section className="border-b border-line bg-white py-6">
        <div className={containerClass}>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="flex items-center gap-3">
              <ShieldCheckIcon className="h-6 w-6 shrink-0 text-brand" aria-hidden="true" />
              <div>
                <p className="text-sm font-bold text-navy">Registered CBO</p>
                <p className="text-xs text-navy/60">Reg. No. CBO/THK/W/022/2022/1151</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2Icon className="h-6 w-6 shrink-0 text-charity" aria-hidden="true" />
              <div>
                <p className="text-sm font-bold text-navy">Direct Grassroots Impact</p>
                <p className="text-xs text-navy/60">100% of designated gifts go to causes</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <PhoneIcon className="h-6 w-6 shrink-0 text-gold" aria-hidden="true" />
              <div>
                <p className="text-sm font-bold text-navy">Direct Inquiries &amp; Receipts</p>
                <p className="text-xs text-navy/60">{site.phone} · Thika, Kenya</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-soft py-16 md:py-24">
        <div className={containerClass}>
          <DonationForm />
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className={`${containerClass} grid gap-16 lg:grid-cols-2`}>
          <Reveal>
            <h2 className="text-3xl font-bold text-navy">How Giving Works</h2>
            <ol className="mt-8 space-y-6">
              {steps.map((s, i) => (
                <li key={s.title} className="flex gap-5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand font-display font-bold text-white">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-bold text-navy">{s.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-navy/70">{s.text}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-10 rounded-2xl border border-line bg-soft/70 p-6">
              <h3 className="font-display text-base font-bold text-navy flex items-center gap-2">
                <HeartIcon className="h-5 w-5 text-charity" aria-hidden="true" />
                Direct Giving Assistance
              </h3>
              <p className="mt-2 text-sm text-navy/75 leading-relaxed">
                If you prefer to arrange an in-person donation, supplies delivery (food, clothes, scholastic books, or vocational tools), or an institutional wire transfer, please reach out to our team:
              </p>
              <div className="mt-4 flex flex-wrap gap-4 text-xs font-semibold">
                <span className="rounded-full bg-white px-3 py-1.5 text-navy ring-1 ring-line">
                  Phone: {site.phone}
                </span>
                <span className="rounded-full bg-white px-3 py-1.5 text-navy ring-1 ring-line">
                  Email: {site.email}
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <h2 className="text-3xl font-bold text-navy">Where Your Money Goes</h2>
            <ul className="mt-8 divide-y divide-line">
              {fundUses.map((f) => {
                const Icon = f.icon;
                return (
                  <li key={f.title} className="flex gap-4 py-5">
                    <Icon className="mt-0.5 h-6 w-6 shrink-0 text-charity" aria-hidden="true" />
                    <div>
                      <h3 className="font-bold text-navy">{f.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-navy/70">{f.text}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
            <p className="mt-4 text-xs text-navy/55">
              Contributions support community programmes in direct response to verified local needs. Contact the organization to request specific campaign allocation reports.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
