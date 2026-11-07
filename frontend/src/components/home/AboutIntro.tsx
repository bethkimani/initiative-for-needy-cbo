import React from 'react';
import Image from 'next/image';
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
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-neutral-100 shadow-soft">
            <Image
              src={images.volunteersOffice.src}
              alt={images.volunteersOffice.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-10 -right-2 hidden w-44 overflow-hidden rounded-2xl border-[6px] border-white shadow-lift sm:block md:w-52">
            <div className="relative aspect-[3/4] w-full bg-neutral-100">
              <Image
                src={images.foodDonation.src}
                alt={images.foodDonation.alt}
                fill
                sizes="208px"
                className="object-cover"
              />
            </div>
          </div>
          <div className="absolute left-2 top-4 rounded-2xl bg-white px-4 py-3 shadow-lift sm:-left-3 sm:top-6 sm:px-5 sm:py-4">
            <p className="font-display text-sm font-bold text-navy">Kiganjo-Main Road</p>
            <p className="text-xs text-navy/60">Kwa Kamande Stage, Thika</p>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <span className="text-sm font-bold uppercase tracking-wider text-charity">
            Community-Based Charity Organization · Kiambu, Kenya
          </span>
          <h2 className="mt-2 text-3xl font-bold leading-tight text-navy md:text-4xl">
            Empowering Vulnerable Lives with Dignity, Equality, and Opportunity.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-navy/70">
            Initiative for the Needy is a registered Community-Based Charity Organization (CBO) delivering life-changing
            interventions through advocacy, education, healthcare, economic empowerment, and social support. Our dedicated
            volunteer network works across Kiambu County, with active community hubs in Thika, Juja, and Ruiru.
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