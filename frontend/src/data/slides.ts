import { images } from '@/data/site';

export const slides = [
{
  headline: 'Dignity, Equality and Opportunity for All.',
  text: 'We empower vulnerable people through advocacy, education, health, economic empowerment and social support.',
  primary: { label: 'Discover Our Mission', to: '/about' },
  secondary: { label: 'Support Our Cause', to: '/donate' },
  photo: images.heroCommunity
},
{
  headline: 'Supporting Vulnerable Children and Families.',
  text: 'Our Little Lights programme provides home-based care, nutritious meals, mentorship, education, life skills and play.',
  primary: { label: 'Become a Volunteer', to: '/volunteer' },
  secondary: { label: 'Donate Today', to: '/donate' },
  photo: images.heroVolunteers
},
{
  headline: 'Skills and Opportunity for Young People.',
  text: 'Together with KISSE College, we supported 77 young people from vulnerable families to complete vocational training.',
  primary: { label: 'Explore Our Projects', to: '/projects' },
  secondary: { label: 'Partner With Us', to: '/partnerships' },
  photo: images.heroEducation
},
{
  headline: 'A Community Where Nobody Is Left Behind.',
  text: 'We work with communities across Kiambu County to support children, persons with disabilities, widows, youth and older people.',
  primary: { label: 'Make a Difference', to: '/donate' },
  secondary: { label: 'Contact Our Team', to: '/contact' },
  photo: images.teamOffice
}];