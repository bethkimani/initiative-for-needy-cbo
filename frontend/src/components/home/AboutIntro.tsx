import React from 'react';
import Link from 'next/link';
import { ArrowRightIcon } from 'lucide-react';
import { images } from '@/data/site';
import { containerClass } from '@/utils/styles';
import { ButtonLink } from '@/components/ui/ButtonLink';
import { Reveal } from '@/components/ui/Reveal';
import { PurposeTabs } from '@/components/home/PurposeTabs';

export function AboutIntro() {
  return (
    <section className="py-20 md:py-28">
      <div className={`${containerClass} grid items-center gap-14 lg:grid-cols-2 lg:gap-20`}>
        <Reveal className="relative">
          <div className="overflow-hidden rounded-3xl">
            <img
              src={images.volunteersOffice.src}
              alt={images.volunteersOffice.alt}
              loading="lazy"
              className="aspect-[4/3] w-full object-cover" />
            
          </div>
          <div className="absolute -bottom-10 -right-2 hidden w-44 overflow-hidden rounded-2xl border-[6px] border-white shadow-lift sm:block md:w-52">
            <img src={images.foodDonation.src} alt={images.foodDonation.alt} loading="lazy" className="aspect-[3/4] w-full object-cover" />
          </div>
          <div className="absolute -left-3 top-6 rounded-2xl bg-white px-5 py-4 shadow-lift">
            <p className="font-display text-sm font-bold text-navy">Kiganjo-Main Road</p>
            <p className="text-xs text-navy/60">Kwa Kamande Stage, Thika</p>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="text-3xl font-bold leading-tight text-navy md:text-4xl">
            Dignity, Equality and Opportunity for All.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-navy/70">
            We empower vulnerable individuals and groups through advocacy, education, health, economic empowerment and
            social support. Our volunteer-led organization works across Kiambu County, with pilot communities in Thika,
            Juja and Ruiru.
          </p>
          <div className="mt-8">
            <PurposeTabs />
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-5">
            <ButtonLink to="/about" variant="blue" size="lg">
              Learn About Us
            </ButtonLink>
            <Link href="/team" className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:underline">
              Meet the people behind it
              <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>);

}