import { images } from '@/data/site';

export const slides = [
{
  headline: 'Together, We Can Change Lives.',
  text: 'Building stronger communities and creating hope for vulnerable people through meaningful, sustainable development initiatives.',
  primary: { label: 'Discover Our Mission', to: '/about' },
  secondary: { label: 'Support Our Cause', to: '/donate' },
  photo: images.heroCommunity
},
{
  headline: 'Hope Begins With a Helping Hand.',
  text: 'Join us in bringing opportunity, dignity, and practical support to people and families who need it most.',
  primary: { label: 'Become a Volunteer', to: '/volunteer' },
  secondary: { label: 'Donate Today', to: '/donate' },
  photo: images.heroVolunteers
},
{
  headline: 'Stronger Communities. Brighter Futures.',
  text: 'Your partnership can help create lasting change through community-led initiatives across Kenya.',
  primary: { label: 'Explore Our Projects', to: '/projects' },
  secondary: { label: 'Partner With Us', to: '/partnerships' },
  photo: images.heroEducation
},
{
  headline: 'Every Contribution Makes a Difference.',
  text: 'Together, we can turn compassion into action and build a better future for vulnerable communities.',
  primary: { label: 'Make a Difference', to: '/donate' },
  secondary: { label: 'Contact Our Team', to: '/contact' },
  photo: images.teamOffice
}];