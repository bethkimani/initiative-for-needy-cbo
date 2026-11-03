import React from 'react';
import { HeartIcon } from 'lucide-react';
import { images } from '@/data/site';
import { containerClass } from '@/utils/styles';
import { ButtonLink } from '@/components/ui/ButtonLink';
import { PhotoTag } from '@/components/ui/PhotoTag';
import { Reveal } from '@/components/ui/Reveal';

export function FinalCTA() {
  return (
    <section className="relative isolate overflow-hidden bg-navy py-24 md:py-32">
      <img src={images.ctaBg.src} alt="" loading="lazy" className="absolute inset-0 -z-10 h-full w-full object-cover" />
      <div className="absolute inset-0 -z-10 bg-navy/75" aria-hidden="true" />
      <Reveal className={`${containerClass} text-center`}>
        <h2 className="mx-auto max-w-3xl text-4xl font-extrabold leading-tight text-white md:text-5xl">
          Be Part of Something That Changes Lives.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg text-white/80">
          Your time, support, and partnership can help build stronger communities and brighter futures.
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
      <PhotoTag photo={images.ctaBg} className="absolute bottom-4 right-4" />
    </section>);

}