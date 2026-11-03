import type { TeamMember } from '@/types/content';
import { images } from '@/data/site';

export const team: TeamMember[] = [
{
  name: 'Charles Thika',
  role: 'Founder & CEO',
  initials: 'CT',
  photo: images.ceo,
  bio: 'Charles founded Initiative for the Needy to bring practical support and dignity to vulnerable people around Thika. He leads the organization’s programmes and partnerships.',
  focus: 'Leadership & partnerships'
},
{
  name: 'Catherine Muthoni',
  role: 'Chief Executive',
  initials: 'CM',
  photo: null,
  bio: 'Catherine oversees day-to-day operations and coordinates the team delivering community programmes. Full biography to be provided.',
  focus: 'Operations'
},
{
  name: 'Thomas Mwangi',
  role: 'Chief Advisor',
  initials: 'TM',
  photo: null,
  bio: 'Thomas advises the leadership on strategy and governance. Full biography to be provided.',
  focus: 'Strategy & governance'
},
{
  name: 'James Njoroge',
  role: 'Advisor',
  initials: 'JN',
  photo: null,
  bio: 'James supports the organization with guidance on community engagement. Full biography to be provided.',
  focus: 'Community engagement'
}];