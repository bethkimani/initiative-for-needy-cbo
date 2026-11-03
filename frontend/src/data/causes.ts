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
  summary: 'Providing practical help to vulnerable families, children, street-connected children and older people.',
  description: [
  'The organization provides food and other essential support to vulnerable people in the community, including children, street-connected children, older people and families facing hardship.',
  'Past outreach has included food support in Kiandutu and visits to children’s homes.'],

  photo: images.foodDonation,
  goal: 'Support for vulnerable people and families',
  progress: null,
  icon: UtensilsCrossedIcon
},
{
  slug: 'vulnerable-families',
  title: 'Support for Vulnerable Families',
  summary: 'Supporting orphans, vulnerable children, widows, single young parents aged 27 and below, and families facing hardship.',
  description: [
  'The organization works to ensure vulnerable people are not left behind, including widows and single young parents aged 27 and below. Support has included food, clothing, help with rent, counselling and assistance to start small businesses.',
  'The Little Lights programme provides home-based care, nutritious meals, mentorship, education and life-skills activities, and play for orphans and other vulnerable children.'],

  photo: images.kidsCentre,
  goal: 'Support for children and families',
  progress: null,
  icon: HouseIcon
},
{
  slug: 'education-and-school-support',
  title: 'Education & School Support',
  summary: 'Expanding access to education, mentorship and life skills for children and young people.',
  description: [
  'The organization supports education through the Little Lights programme and education sponsorship for vulnerable young people.',
  'In partnership with the Kenya Institute of Software Engineering, 77 young people from vulnerable families completed short vocational courses in February 2025.'],

  photo: images.heroEducation,
  goal: 'Education and skills support',
  progress: null,
  icon: GraduationCapIcon
},
{
  slug: 'community-health',
  title: 'Community Health & Wellbeing',
  summary: 'Offering free counselling, psychosocial support and HIV/AIDS awareness in the community.',
  description: [
  'Regular activities include free counselling and psychosocial support, guidance and counselling for vocational students, and HIV/AIDS awareness and advocacy.',
  'The organization reports that its guidance and counselling programme at Makongeni Vocational Training Centre has helped some students move away from drug abuse.'],

  photo: images.causeHealth,
  goal: 'Counselling and community health awareness',
  progress: null,
  icon: StethoscopeIcon
},
{
  slug: 'youth-empowerment',
  title: 'Youth Empowerment & Skills',
  summary: 'Supporting youth with vocational skills, mentorship, counselling and economic empowerment.',
  description: [
  'The organization holds youth workshops and mentorship activities and supports young people through training and counselling.',
  'In 2025, 77 young people from vulnerable families completed short courses including plumbing, cake baking, pastry, hairdressing and beauty therapy through a partnership with KISSE College.'],

  photo: images.causeYouth,
  goal: 'Youth training and empowerment',
  progress: null,
  icon: BriefcaseIcon
},
{
  slug: 'elderly-and-disability-support',
  title: 'Elderly & Disability Support',
  summary: 'Providing food, visits and practical social support to older people and persons with disabilities.',
  description: [
  'The organization has visited and supported older people and persons with disabilities in Kiandutu Slums, including food support.',
  'It also brought together 100 older people from Kiganjo, Athena and Kiang’ombe to mark the International Day of Older Persons on 1 October 2024.'],

  photo: images.causeElderly,
  goal: 'Support for older people and persons with disabilities',
  progress: null,
  icon: AccessibilityIcon
},
{
  slug: 'community-development',
  title: 'Community Development',
  summary: 'Community-driven development, peace-building and environmental awareness.',
  description: [
  'The organization promotes community participation, peaceful coexistence among diverse communities and environmental protection through outreach and open-air community meetings.'],

  photo: images.causeDevelopment,
  goal: 'Community-led development',
  progress: null,
  icon: SproutIcon
}];