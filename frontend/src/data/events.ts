import type { EventItem } from '@/types/content';
import { images } from '@/data/site';

export const events: EventItem[] = [
{
  slug: 'community-meal-day-november',
  title: 'Community Meal Day',
  type: 'Community outreach',
  date: '2026-11-14',
  time: '10:00 AM – 2:00 PM',
  location: 'Kamande, Thika (venue to be confirmed)',
  summary: 'Help serve warm meals and spend time with children and families in the community.',
  status: 'upcoming',
  photo: images.feeding
},
{
  slug: 'volunteer-orientation',
  title: 'Volunteer Orientation Session',
  type: 'Volunteer activity',
  date: '2026-11-28',
  time: '9:00 AM – 12:00 PM',
  location: 'Charity Organisation Office, Kamande Stage',
  summary: 'An introduction for new volunteers: our mission, safeguarding and how to get started.',
  status: 'upcoming',
  photo: images.volunteersOffice
},
{
  slug: 'festive-family-support-drive',
  title: 'Festive Season Family Support Drive',
  type: 'Fundraising',
  date: '2026-12-19',
  time: 'All day',
  location: 'Thika Town',
  summary: 'Collecting food and essentials so vulnerable families can share in the festive season.',
  status: 'upcoming',
  photo: images.foodDonation
},
{
  slug: 'food-distribution-august',
  title: 'Food & Essentials Distribution',
  type: 'Community outreach',
  date: '2026-08-16',
  time: 'Morning',
  location: 'Kamande, Thika',
  summary: 'Volunteers delivered food and household items to families in need.',
  status: 'past',
  photo: images.foodDonation
},
{
  slug: 'nest-of-love-evening',
  title: 'Evening at Nest of Love Children’s Centre',
  type: 'Community outreach',
  date: '2026-06-13',
  time: 'Evening',
  location: 'Thika area',
  summary: 'Our team spent the evening with the children and caregivers at the centre.',
  status: 'past',
  photo: images.kidsCentre
}];