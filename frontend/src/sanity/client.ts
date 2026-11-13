import { createClient } from 'next-sanity';
import { projectId, dataset, apiVersion, isSanityConfigured } from './env';

/**
 * Sanity Client for querying published articles and updates.
 * useCdn: false ensures fresh articles show immediately upon publishing.
 */
export const client = isSanityConfigured
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: process.env.NODE_ENV === 'production',
    })
  : null;
