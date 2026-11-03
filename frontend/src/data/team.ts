import type { TeamMember } from '@/types/content';
import { images } from '@/data/site';

export const team: TeamMember[] = [
  {
    name: 'Charles Kyalo Ngina',
    role: 'CEO & Community Development Professional',
    initials: 'CKN',
    photo: images.ceo,
    bio: 'Charles leads Initiative for the Needy and its programmes, working with partners to bring practical support and dignity to vulnerable people in Thika and Kiambu County.',
    focus: 'Leadership & partnerships'
  },
  {
    name: 'Roseline Awino',
    role: 'Program Coordinator',
    initials: 'RA',
    photo: {
      src: '/Roseline.jpeg',
      alt: 'Roseline Awino',
      real: true
    },
    bio: "Roseline coordinates the organization's community programmes and the team delivering them.",
    focus: 'Programmes'
  },
  {
    name: 'Lukas Mwangi',
    role: 'Accountant',
    initials: 'LM',
    photo: {
      src: '/lukas.jpeg',
      alt: 'Lukas Mwangi',
      real: true
    },
    bio: "Lukas manages the organization's accounts and supports transparent use of resources.",
    focus: 'Finance & accountability'
  },
  {
    name: 'John Kamande',
    role: 'Volunteer',
    initials: 'JK',
    photo: {
      src: '/john.jpeg',
      alt: 'John Kamande',
      real: true
    },
    bio: "John supports the organization's activities in the community as a volunteer.",
    focus: 'Community volunteering'
  }
];
