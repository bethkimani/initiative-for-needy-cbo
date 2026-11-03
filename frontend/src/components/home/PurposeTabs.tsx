'use client';

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { purposeTabs } from '@/data/values';
import { DraftNote } from '@/components/ui/DraftNote';

export function PurposeTabs() {
  const [active, setActive] = useState(purposeTabs[0].id);
  const tab = purposeTabs.find((t) => t.id === active) ?? purposeTabs[0];

  return (
    <div>
      <div role="tablist" aria-label="Mission, vision and values" className="inline-flex rounded-full bg-soft p-1">
        {purposeTabs.map((t) =>
        <button
          key={t.id}
          role="tab"
          id={`tab-${t.id}`}
          aria-selected={t.id === active}
          aria-controls={`panel-${t.id}`}
          onClick={() => setActive(t.id)}
          className={`relative whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-150 ${
          t.id === active ? 'text-white' : 'text-navy/70 hover:text-navy'}`
          }>
          
            {t.id === active &&
          <motion.span
            layoutId="purpose-pill"
            className="absolute inset-0 rounded-full bg-brand"
            transition={{ type: 'spring', stiffness: 500, damping: 40 }} />

          }
            <span className="relative">{t.label}</span>
          </button>
        )}
      </div>
      <div className="relative mt-6 min-h-[150px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={tab.id}
            id={`panel-${tab.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${tab.id}`}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className="border-l-4 border-charity pl-5">
            
            <h3 className="text-lg font-bold text-navy">{tab.title}</h3>
            <p className="mt-2 text-lg leading-relaxed text-navy/80">{tab.body}</p>
            {tab.draft &&
            <DraftNote className="mt-4">
                {tab.id === 'vision' ?
              'Transcribed from our office signage — please confirm exact wording.' :
              'Proposed values — awaiting approval by the organization.'}
              </DraftNote>
            }
          </motion.div>
        </AnimatePresence>
      </div>
    </div>);

}