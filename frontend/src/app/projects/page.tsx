'use client';

import React, { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { SearchIcon } from 'lucide-react';
import { projects } from '@/data/projects';
import { images } from '@/data/site';
import { containerClass, inputClass } from '@/utils/styles';
import { PageHero } from '@/components/ui/PageHero';
import { ProjectCard } from '@/components/cards/ProjectCard';
import { FinalCTA } from '@/components/home/FinalCTA';

const categories = ['All', 'Education', 'Community Support', 'Outreach', 'Development'];
const statuses = ['All', 'Current', 'Completed', 'Upcoming'];

export default function Projects() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');
  const [status, setStatus] = useState('All');

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return projects.filter(
      (p) =>
      (category === 'All' || p.category === category) && (
      status === 'All' || p.status === status) && (
      !q || `${p.title} ${p.summary} ${p.location}`.toLowerCase().includes(q))
    );
  }, [query, category, status]);

  return (
    <>
      <PageHero
        crumb="Projects"
        title="Our Projects"
        intro="Explore our completed programmes, ongoing activities and future plans for vulnerable communities across Kiambu County."
        photo={images.foodDonation} />
      
      <section className="py-16 md:py-24">
        <div className={containerClass}>
          <div className="mb-10 grid gap-4 rounded-3xl bg-soft p-5 md:grid-cols-[1fr_auto] md:items-center md:p-6">
            <div className="relative">
              <SearchIcon className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-navy/40" aria-hidden="true" />
              <label htmlFor="project-search" className="sr-only">
                Search projects
              </label>
              <input
                id="project-search"
                type="search"
                placeholder="Search projects or locations"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className={`${inputClass} pl-11`} />
              
            </div>
            <div className="flex flex-wrap gap-3">
              <label className="sr-only" htmlFor="project-status">
                Status
              </label>
              <select id="project-status" value={status} onChange={(e) => setStatus(e.target.value)} className={`${inputClass} w-auto`}>
                {statuses.map((s) =>
                <option key={s} value={s}>
                    {s === 'All' ? 'All statuses' : s}
                  </option>
                )}
              </select>
            </div>
            <div role="group" aria-label="Filter by category" className="flex flex-wrap gap-2 md:col-span-2">
              {categories.map((c) =>
              <button
                key={c}
                type="button"
                aria-pressed={category === c}
                onClick={() => setCategory(c)}
                className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-150 ${
                category === c ? 'bg-navy text-white' : 'bg-white text-navy/70 hover:text-navy'}`
                }>
                
                  {c}
                </button>
              )}
            </div>
          </div>
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
            <p className="text-sm text-navy/60" aria-live="polite">
              Showing {results.length} of {projects.length} projects
            </p>
            <p className="text-sm text-navy/60">Completed work and future plans are identified in each project description.</p>
          </div>
          {results.length === 0 ?
          <div className="rounded-3xl border border-dashed border-line py-20 text-center">
              <p className="font-display text-xl font-bold text-navy">No projects match your filters</p>
              <button
              type="button"
              onClick={() => {
                setQuery('');
                setCategory('All');
                setStatus('All');
              }}
              className="mt-4 text-sm font-semibold text-brand hover:underline">
              
                Clear all filters
              </button>
            </div> :

          <motion.div layout className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <AnimatePresence mode="popLayout">
                {results.map((p) =>
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
          }
        </div>
      </section>
      <FinalCTA />
    </>);

}