'use client';

import React, { useState } from 'react';
import { ChevronDownIcon, HelpCircleIcon } from 'lucide-react';
import { homeFAQs } from '@/data/faqs';
import { containerClass } from '@/utils/styles';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ButtonLink } from '@/components/ui/ButtonLink';

export function HomeFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-soft py-20 md:py-28" aria-label="Frequently Asked Questions">
      <div className={containerClass}>
        <SectionHeading
          title="Frequently Asked Questions"
          intro="Everything you need to know about our legal registration, charitable programmes, donor impact, and how your gifts transform lives in Kenya."
          align="left"
          action={
            <ButtonLink to="/donate" variant="red" size="lg">
              Support Our Work
            </ButtonLink>
          }
        />

        <div className="mx-auto max-w-4xl space-y-4">
          {homeFAQs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <Reveal key={faq.question} delay={index * 0.04}>
                <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-xs transition-shadow duration-200 hover:shadow-soft">
                  <button
                    type="button"
                    onClick={() => toggle(index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 p-6 text-left transition-colors hover:bg-neutral-50/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
                  >
                    <span className="flex items-start gap-3">
                      <HelpCircleIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
                      <span className="font-display text-base font-bold text-navy sm:text-lg">
                        {faq.question}
                      </span>
                    </span>
                    <ChevronDownIcon
                      className={`h-5 w-5 shrink-0 text-navy/60 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-brand' : ''
                      }`}
                      aria-hidden="true"
                    />
                  </button>

                  {isOpen && (
                    <div className="border-t border-line/60 bg-neutral-50/40 px-6 pb-6 pt-4">
                      <p className="text-base leading-relaxed text-navy/75 pl-8">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
