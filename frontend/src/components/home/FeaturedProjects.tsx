'use client';

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { projects } from '@/data/projects';
import { containerClass } from '@/utils/styles';
import { ProjectCard } from '@/components/cards/ProjectCard';
import { ButtonLink } from '@/components/ui/ButtonLink';
import { SectionHeading } from '@/components/ui/SectionHeading';

const filters = ['All', 'Education', 'Community Support', 'Outreach', 'Development'];

export function FeaturedProjects() {
  const [filter, setFilter] = useState('All');
  const visible = projects.filter((p) => filter === 'All' || p.category === filter).slice(0, 3);

  return (
    <section className="py-20 md:py-28">
      <div className={containerClass}>
        <SectionHeading
          title="Our Programmes and Community Work"
          intro="Explore our community activities, completed programmes and future plans across Kiambu County."
          action={
          <ButtonLink to="/projects" variant="outline" size="lg">
              All Projects
            </ButtonLink>
          } />
        
        <div role="group" aria-label="Filter projects" className="mb-8 flex flex-wrap gap-2">
          {filters.map((f) =>
          <button
            key={f}
            type="button"
            aria-pressed={filter === f}
            onClick={() => setFilter(f)}
            className={`min-h-11 whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-150 ${
            filter === f ? 'bg-navy text-white' : 'bg-soft text-navy/70 hover:text-navy'}`
            }>
            
              {f}
            </button>
          )}
        </div>
        <motion.div layout className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visible.map((p) =>
            <motion.div
              key={p.slug}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}>
              
                <ProjectCard project={p} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>);

}