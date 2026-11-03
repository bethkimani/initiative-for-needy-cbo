'use client';

import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CircleAlertIcon, InfoIcon } from 'lucide-react';
import type { FormStatusValue } from '@/hooks/useFormSubmission';
import { site } from '@/data/site';

type FormStatusProps = {
  status: FormStatusValue;
  onReset: () => void;
  notConnectedMessage?: string;
};

export function FormStatus({ status, onReset, notConnectedMessage }: FormStatusProps) {
  return (
    <div aria-live="polite">
      <AnimatePresence mode="wait">
        {status === 'invalid' &&
        <motion.div
          key="invalid"
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="flex items-start gap-3 rounded-xl bg-charity-light p-4 text-sm text-charity-dark">
          
            <CircleAlertIcon className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
            <p>Please review the highlighted fields and try again.</p>
          </motion.div>
        }
        {status === 'not-connected' &&
        <motion.div
          key="nc"
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="rounded-xl border border-brand/20 bg-brand-light p-4 text-sm text-navy">
          
            <div className="flex items-start gap-3">
              <InfoIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
              <div>
                <p className="font-semibold">Your details look good — but nothing has been sent yet.</p>
                <p className="mt-1 text-navy/75">
                  {notConnectedMessage ??
                'Online submissions will be switched on once our secure form service is connected.'}{' '}
                  In the meantime, please call us on{' '}
                  <a href={`tel:${site.phone}`} className="font-semibold text-brand underline-offset-2 hover:underline">
                    {site.phone}
                  </a>
                  .
                </p>
                <button
                type="button"
                onClick={onReset}
                className="mt-3 text-sm font-semibold text-brand underline-offset-2 hover:underline">
                
                  Edit my details
                </button>
              </div>
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </div>);

}