import React from 'react';
import Image from 'next/image';
import { HeartIcon } from 'lucide-react';
import { images } from '@/data/site';
import { containerClass } from '@/utils/styles';
import { ButtonLink } from '@/components/ui/ButtonLink';
import { Reveal } from '@/components/ui/Reveal';

export function FinalCTA() {
  return (
    <section className="relative isolate overflow-hidden bg-navy py-24 md:py-32">
      <Image
        src={images.ctaBg.src}
        alt={images.ctaBg.alt || 'Community members supported by Initiative for the Needy'}
        fill
        sizes="100vw"
        className="absolute inset-0 -z-10 object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-navy/75" aria-hidden="true" />
      <Reveal className={`${containerClass} text-center`}>
        <h2 className="mx-auto max-w-3xl text-4xl font-extrabold leading-tight text-white md:text-5xl">
          Help Build a Community That Leaves Nobody Behind.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg text-white/80">
          Join us in empowering vulnerable people across Kiambu County through education, health, advocacy and social support.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <ButtonLink to="/donate" variant="red" size="lg">
            <HeartIcon className="h-4 w-4" aria-hidden="true" />
            Donate Now
          </ButtonLink>
          <ButtonLink to="/volunteer" variant="light" size="lg">
            Become a Volunteer
          </ButtonLink>
          <ButtonLink to="/partnerships" variant="outlineLight" size="lg">
            Partner With Us
          </ButtonLink>
        </div>
      </Reveal>
    </section>);

}