import {
  HandCoinsIcon,
  HandHeartIcon,
  HandshakeIcon,
  HeartHandshakeIcon,
  MapPinIcon,
  MegaphoneIcon,
  ShieldCheckIcon,
  SproutIcon,
  TargetIcon,
  UsersIcon,
  WalletIcon } from
'lucide-react';
import { site } from '@/data/site';

export const purposeTabs = [
{
  id: 'mission',
  label: 'Mission',
  title: 'Our Mission',
  body: site.mission,
  draft: false
},
{
  id: 'vision',
  label: 'Vision',
  title: 'Our Vision',
  body: site.vision,
  draft: false
},
{
  id: 'values',
  label: 'Core Values',
  title: 'Our Core Values',
  body: 'Integrity · Honesty · Caring · Accountability · Compassion · Equity · Respect for human dignity',
  draft: false
}];

export const organizationObjectives = [
  'Promote and protect the rights and welfare of vulnerable populations.',
  'Provide food, shelter, clothing and health-care support to people in need.',
  'Empower vulnerable groups through skills training, education and income-generating activities.',
  'Conduct advocacy and awareness campaigns on issues affecting vulnerable people.',
  'Collaborate with government agencies, community-based organizations and other stakeholders to deliver services effectively.',
  'Mobilize resources for the benefit of target communities.',
  'Respond to emergencies and disasters affecting vulnerable groups.'
];

export const impactStats = [
{ value: 77, label: 'Young people trained', detail: 'Completed short vocational courses', icon: UsersIcon },
{ value: 100, label: 'Older people reached', detail: 'Mobilized for the 2024 Older Persons Day', icon: HandHeartIcon },
{ value: 6, label: 'Priority groups', detail: 'Children, people living with HIV/AIDS, widows, youth and older people', icon: TargetIcon },
{ value: 3, label: 'Pilot communities', detail: 'Thika, Juja and Ruiru', icon: MapPinIcon }];

export const approachItems = [
{ title: 'Integrity', text: 'We act with integrity in serving vulnerable people and working with our partners.', icon: ShieldCheckIcon },
{ title: 'Honesty', text: 'We value honest communication and relationships built on trust.', icon: HandshakeIcon },
{ title: 'Caring', text: 'We respond to community needs with practical care and support.', icon: HeartHandshakeIcon },
{ title: 'Accountability', text: 'We are responsible to the communities we serve and the people who support our work.', icon: WalletIcon },
{ title: 'Compassion', text: 'We meet people facing hardship with empathy and understanding.', icon: HandHeartIcon },
{ title: 'Equity and dignity', text: 'We promote equal opportunity and respect for every person’s human dignity.', icon: UsersIcon }];


export const involvementOptions = [
{ title: 'Donate', text: 'Contribute to approved charitable programmes that reach vulnerable families.', cta: 'Donate Now', to: '/donate', icon: HandHeartIcon },
{ title: 'Volunteer', text: 'Offer your time, skills and support to outreach and community activities.', cta: 'Become a Volunteer', to: '/volunteer', icon: UsersIcon },
{ title: 'Partner With Us', text: 'Collaborate as a business, institution or community organization.', cta: 'Explore Partnerships', to: '/partnerships', icon: HandshakeIcon },
{ title: 'Fundraise With Us', text: 'Rally your friends, church, school or workplace behind an approved cause.', cta: 'Start Fundraising', to: '/contact?topic=Fundraising', icon: MegaphoneIcon }];


export const fundUses = [
{ title: 'Community support', text: 'Food, clothing, shelter and other practical assistance for people in need.', icon: HandCoinsIcon },
{ title: 'Education and empowerment', text: 'Skills training, education, counselling and livelihood support for vulnerable groups.', icon: SproutIcon },
{ title: 'Health and social support', text: 'Counselling, psychosocial support, health awareness and community outreach.', icon: ShieldCheckIcon }];