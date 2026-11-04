import React from 'react';
import type { Metadata } from 'next';
import { HeroCarousel } from '@/components/home/HeroCarousel';
import { AboutIntro } from '@/components/home/AboutIntro';
import { ImpactStats } from '@/components/home/ImpactStats';
import { FeaturedCauses } from '@/components/home/FeaturedCauses';
import { FeaturedProjects } from '@/components/home/FeaturedProjects';
import { Approach } from '@/components/home/Approach';
import { InvolvementCards } from '@/components/home/InvolvementCards';
import { TestimonialCarousel } from '@/components/home/TestimonialCarousel';
import { TeamPreview } from '@/components/home/TeamPreview';
import { NewsPreview } from '@/components/home/NewsPreview';
import { FinalCTA } from '@/components/home/FinalCTA';

export const metadata: Metadata = {
  description: 'Initiative for the Needy Community Based Organization (CBO) — improving the quality of life of vulnerable communities in Thika, Kenya.',
};

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <AboutIntro />
      <ImpactStats />
      <FeaturedCauses />
      <FeaturedProjects />
      <Approach />
      <InvolvementCards />
      <TestimonialCarousel />
      <TeamPreview />
      <NewsPreview />
      <FinalCTA />
    </>);

}