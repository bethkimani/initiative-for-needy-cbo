import {
  AccessibilityIcon,
  BriefcaseIcon,
  GraduationCapIcon,
  HouseIcon,
  SproutIcon,
  StethoscopeIcon,
  UtensilsCrossedIcon } from
'lucide-react';
import { images } from '@/data/site';

export const causes = [
{
  slug: 'food-and-essential-supplies',
  title: 'Food & Essential Supplies',
  summary: 'Getting food, household basics and essentials to families facing hardship around Thika.',
  description: [
  'Food insecurity is one of the most immediate challenges faced by vulnerable households. Through community collections and donor support, we gather food and essential supplies and deliver them directly to families who need them.',
  'Contributions to this cause help us source staple foods, cooking essentials and hygiene items, and cover the logistics of getting them safely to households.'],

  photo: images.foodDonation,
  goal: 'Funding goal to be confirmed',
  progress: null,
  icon: UtensilsCrossedIcon
},
{
  slug: 'vulnerable-families',
  title: 'Support for Vulnerable Families',
  summary: 'Standing alongside children, caregivers and households going through difficult seasons.',
  description: [
  'Some families carry more than their share — illness, loss of income or caring for many children. We walk alongside them with practical help, encouragement and connections to further support.',
  'This cause supports family visits, children’s centre outreach and urgent household needs identified by our volunteers.'],

  photo: images.kidsCentre,
  goal: 'Funding goal to be confirmed',
  progress: null,
  icon: HouseIcon
},
{
  slug: 'education-and-school-support',
  title: 'Education & School Support',
  summary: 'Helping children stay in school with learning materials, uniforms and encouragement.',
  description: [
  'Education opens doors. Many children from vulnerable homes miss school because of small but real barriers such as uniforms, books or fees.',
  'This proposed cause would help remove those barriers so children can learn with dignity and confidence.'],

  photo: images.heroEducation,
  goal: 'Funding goal to be confirmed',
  progress: null,
  icon: GraduationCapIcon
},
{
  slug: 'community-health',
  title: 'Community Health & Wellbeing',
  summary: 'Promoting health awareness and access to basic care for families and the elderly.',
  description: [
  'Good health underpins everything else. This proposed cause focuses on health awareness, screening days and linking community members to local health services.'],

  photo: images.causeHealth,
  goal: 'Funding goal to be confirmed',
  progress: null,
  icon: StethoscopeIcon
},
{
  slug: 'youth-empowerment',
  title: 'Youth Empowerment & Skills',
  summary: 'Equipping young people with practical skills, mentorship and a path to earning.',
  description: [
  'Young people are the future of every community. This proposed cause supports skills training, mentorship and opportunities that help youth build livelihoods.'],

  photo: images.causeYouth,
  goal: 'Funding goal to be confirmed',
  progress: null,
  icon: BriefcaseIcon
},
{
  slug: 'elderly-and-disability-support',
  title: 'Elderly & Disability Support',
  summary: 'Companionship, care and practical help for older people and people living with disability.',
  description: [
  'Older people and people living with disability are often the first to be left behind. This proposed cause supports home visits, mobility aids and essential care.'],

  photo: images.causeElderly,
  goal: 'Funding goal to be confirmed',
  progress: null,
  icon: AccessibilityIcon
},
{
  slug: 'community-development',
  title: 'Community Development',
  summary: 'Community-led initiatives that strengthen local livelihoods and shared resources.',
  description: [
  'Lasting change is built by communities themselves. This proposed cause supports locally identified development initiatives, from shared resources to small livelihood projects.'],

  photo: images.causeDevelopment,
  goal: 'Funding goal to be confirmed',
  progress: null,
  icon: SproutIcon
}];