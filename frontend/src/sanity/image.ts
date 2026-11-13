import { createImageUrlBuilder } from '@sanity/image-url';
import { projectId, dataset, isSanityConfigured } from './env';

const builder = isSanityConfigured
  ? createImageUrlBuilder({ projectId, dataset })
  : null;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function urlForImage(source: any): string {
  if (!source) return '';
  if (typeof source === 'string') return source;
  if (!builder) return '';

  try {
    return builder.image(source).auto('format').fit('max').url();
  } catch (err) {
    console.error('Error generating Sanity image URL:', err);
    return '';
  }
}
