import { images } from '@/data/site';

export const slides = [
  {
    headline: 'Empowering Vulnerable Children, Youth & Families in Kenya',
    text: 'Initiative for the Needy is a registered Community-Based Charity Organization (CBO) delivering education, nutrition, youth vocational training, and social support in Kiambu County.',
    primary: { label: 'Discover Our Mission', to: '/about' },
    secondary: { label: 'Donate to Our Causes', to: '/donate' },
    photo: images.heroCommunity
  },
  {
    headline: 'Little Lights: Nutrition & Care for Vulnerable Children',
    text: 'Providing home-based care, daily nutritious meals, education support, and psychosocial mentorship for orphans and children in informal settlements.',
    primary: { label: 'Become a Volunteer', to: '/volunteer' },
    secondary: { label: 'Sponsor a Child', to: '/donate' },
    photo: images.heroVolunteers
  },
  {
    headline: 'Youth Vocational Training & Practical Skills Sponsorship',
    text: 'Together with KISSE College, we equip young people from vulnerable families with certified vocational skills, starter toolkits, and sustainable employment.',
    primary: { label: 'Explore Our Projects', to: '/projects' },
    secondary: { label: 'Partner With Us', to: '/partnerships' },
    photo: images.heroEducation
  },
  {
    headline: 'Community Care: Dignity for Older Persons & Widows',
    text: 'Restoring dignity across Thika, Juja, and Ruiru through monthly food baskets, healthcare outreaches, and welfare support for older people and persons with disabilities.',
    primary: { label: 'Support Older Persons', to: '/donate' },
    secondary: { label: 'Contact Our Team', to: '/contact' },
    photo: images.teamOffice
  }
];
