import type { LucideIcon } from 'lucide-react';

export type Photo = {
  src: string;
  alt: string;
  /** true = genuine photo supplied by the organization; false = illustrative placeholder */
  real: boolean;
};

export type CtaLink = {label: string;to: string;};

export type Slide = {
  headline: string;
  text: string;
  primary: CtaLink;
  secondary: CtaLink;
  photo: Photo;
};

export type Cause = {
  slug: string;
  title: string;
  summary: string;
  description: string[];
  photo: Photo;
  goal: string;
  /** verified progress 0-100, or null when not yet verified */
  progress: number | null;
  icon: LucideIcon;
};

export type ProjectCategory = 'Education' | 'Community Support' | 'Outreach' | 'Development';
export type ProjectStatus = 'Current' | 'Completed' | 'Upcoming';

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  location: string;
  summary: string;
  description: string[];
  status: ProjectStatus;
  period: string;
  beneficiaries: string | null;
  photo: Photo;
};

export type Article = {
  slug: string;
  title: string;
  category: string;
  date: string;
  author: string;
  excerpt: string;
  content: string[];
  photo: Photo;
  featured?: boolean;
};

export type EventItem = {
  slug: string;
  title: string;
  type: string;
  date: string;
  time: string;
  location: string;
  summary: string;
  status: 'upcoming' | 'past';
  photo: Photo;
};

export type TeamMember = {
  name: string;
  role: string;
  initials: string;
  photo: Photo | null;
  bio: string;
  focus: string;
};

export type GalleryItem = {
  photo: Photo;
  category: string;
  caption: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  project: string;
};

export type Highlight = {
  title: string;
  text: string;
  icon: LucideIcon;
};