import type { Project } from '@/types/content';
import { images } from '@/data/site';

export const projects: Project[] = [
{
  slug: 'food-and-essentials-distribution',
  title: 'Food & Essentials Distribution',
  category: 'Community Support',
  location: 'Kamande, Thika',
  summary: 'Volunteers collected and delivered bags of food and household essentials to families in need.',
  description: [
  'Our volunteers gathered food staples, cooking oil and household items and delivered them directly to families identified by the community.',
  'Full project details, dates and verified results will be added by the organization.'],

  status: 'Completed',
  period: 'Date to be confirmed',
  beneficiaries: null,
  photo: images.foodDonation
},
{
  slug: 'childrens-community-meal',
  title: 'Children’s Community Meal',
  category: 'Outreach',
  location: 'Thika Town',
  summary: 'A shared meal day where our team and volunteers served warm food to young children.',
  description: [
  'Our CEO and volunteers spent the day serving meals to young children and spending time with them and their caregivers.',
  'Full project details, dates and verified results will be added by the organization.'],

  status: 'Completed',
  period: 'Date to be confirmed',
  beneficiaries: null,
  photo: images.feeding
},
{
  slug: 'nest-of-love-visit',
  title: 'Nest of Love Children’s Centre Visit',
  category: 'Outreach',
  location: 'Thika area',
  summary: 'An evening visit to share time, encouragement and support with children at the centre.',
  description: [
  'Our team visited the Nest of Love Children’s Centre to spend time with the children and their caregivers.',
  'Full project details, dates and verified results will be added by the organization.'],

  status: 'Completed',
  period: 'Date to be confirmed',
  beneficiaries: null,
  photo: images.kidsCentre
},
{
  slug: 'community-awareness-drive',
  title: 'Community Awareness Drive',
  category: 'Outreach',
  location: 'Kamande Stage, Thika',
  summary: 'Volunteers shared information about our mission and programmes with neighbours.',
  description: [
  'Starting from our Kamande office, volunteers met residents and shared information about our mission, vision and how to get involved.',
  'Full project details, dates and verified results will be added by the organization.'],

  status: 'Completed',
  period: 'Date to be confirmed',
  beneficiaries: null,
  photo: images.volunteersOffice
},
{
  slug: 'school-support-programme',
  title: 'School Support Programme',
  category: 'Education',
  location: 'To be confirmed',
  summary: 'Proposed programme to supply learning materials and uniforms to children at risk of dropping out.',
  description: [
  'This is a proposed project placeholder. Scope, location and timeline will be confirmed by the organization.'],

  status: 'Upcoming',
  period: 'Planning stage',
  beneficiaries: null,
  photo: images.heroEducation
},
{
  slug: 'clean-water-access',
  title: 'Clean Water Access',
  category: 'Development',
  location: 'To be confirmed',
  summary: 'Proposed community water point to reduce the distance families walk for clean water.',
  description: [
  'This is a proposed project placeholder. Scope, location and timeline will be confirmed by the organization.'],

  status: 'Upcoming',
  period: 'Planning stage',
  beneficiaries: null,
  photo: images.causeDevelopment
},
{
  slug: 'youth-skills-workshop',
  title: 'Youth Skills Workshop',
  category: 'Development',
  location: 'To be confirmed',
  summary: 'Proposed hands-on training in practical trades to help young people earn a living.',
  description: [
  'This is a proposed project placeholder. Scope, location and timeline will be confirmed by the organization.'],

  status: 'Upcoming',
  period: 'Planning stage',
  beneficiaries: null,
  photo: images.causeYouth
},
{
  slug: 'community-health-day',
  title: 'Community Health Day',
  category: 'Community Support',
  location: 'To be confirmed',
  summary: 'Proposed screening and health awareness day with local health partners.',
  description: [
  'This is a proposed project placeholder. Scope, location and timeline will be confirmed by the organization.'],

  status: 'Upcoming',
  period: 'Planning stage',
  beneficiaries: null,
  photo: images.causeHealth
}];