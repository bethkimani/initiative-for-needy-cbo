import {
  CoinsIcon,
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

export const purposeTabs = [
{
  id: 'mission',
  label: 'Mission',
  title: 'Our Mission',
  body: 'To improve the quality of life of local vulnerable communities through substantial local development initiatives.',
  draft: false
},
{
  id: 'vision',
  label: 'Vision',
  title: 'Our Vision',
  body: 'To fully empower the community in order to improve the livelihood of the families and residents of our villages.',
  draft: true
},
{
  id: 'values',
  label: 'Core Values',
  title: 'Our Core Values',
  body: 'Compassion · Integrity · Accountability · Inclusion · Community ownership',
  draft: true
}];


export const impactStats = [
{ value: 40, label: 'Counties', detail: 'Reach across Kenya', icon: MapPinIcon },
{ value: 400, label: 'Volunteers', detail: 'People giving their time', icon: UsersIcon },
{ value: 10000, label: 'Our Goal', detail: 'Our target to reach', icon: TargetIcon },
{ value: 5000, label: 'Raised', detail: 'Raised so far', icon: CoinsIcon }];


export const approachItems = [
{ title: 'Community participation', text: 'Communities help identify needs and shape the solutions that affect them.', icon: UsersIcon },
{ title: 'Dignity and inclusion', text: 'Every person we serve is treated with respect, whatever their circumstances.', icon: HeartHandshakeIcon },
{ title: 'Responsible resource use', text: 'Every shilling and donated item is directed carefully to where it is needed.', icon: WalletIcon },
{ title: 'Sustainable development', text: 'We favour initiatives that keep making a difference long after we leave.', icon: SproutIcon },
{ title: 'Collaboration', text: 'We work hand in hand with volunteers, partners and local leaders.', icon: HandshakeIcon },
{ title: 'Accountability and transparency', text: 'We report openly on what we do and how resources are used.', icon: ShieldCheckIcon }];


export const involvementOptions = [
{ title: 'Donate', text: 'Contribute to approved charitable programmes that reach vulnerable families.', cta: 'Donate Now', to: '/donate', icon: HandHeartIcon },
{ title: 'Volunteer', text: 'Offer your time, skills and support to outreach and community activities.', cta: 'Become a Volunteer', to: '/volunteer', icon: UsersIcon },
{ title: 'Partner With Us', text: 'Collaborate as a business, institution or community organization.', cta: 'Explore Partnerships', to: '/partnerships', icon: HandshakeIcon },
{ title: 'Fundraise With Us', text: 'Rally your friends, church, school or workplace behind an approved cause.', cta: 'Start Fundraising', to: '/contact?topic=Fundraising', icon: MegaphoneIcon }];


export const fundUses = [
{ title: 'Direct programme support', text: 'Food, supplies and practical help delivered to families and individuals.', icon: HandCoinsIcon },
{ title: 'Community outreach', text: 'Transport and logistics that get help to people where they live.', icon: MapPinIcon },
{ title: 'Accountability', text: 'Record keeping and reporting so supporters can see how gifts are used.', icon: ShieldCheckIcon }];