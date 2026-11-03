import type { Article } from '@/types/content';
import { images } from '@/data/site';

export const articles: Article[] = [
{
  slug: 'a-day-of-shared-meals',
  title: 'A Day of Shared Meals With Children in Thika',
  category: 'Community Stories',
  date: '2026-09-12',
  author: 'Communications Team',
  excerpt: 'Warm food, laughter and time together — a look at one of our community meal days with young children.',
  content: [
  'Some of our most meaningful days are the simplest ones. On this community meal day, our team and volunteers set up tables, served warm food and simply spent time with the children and their caregivers.',
  'Moments like these remind us why we exist: to improve the quality of life of local vulnerable communities, one practical step at a time.',
  'This article is a sample prepared for layout purposes. The organization will replace it with an approved story, including verified details and consent for any images used.'],

  photo: images.feeding,
  featured: true
},
{
  slug: 'food-and-essentials-delivered',
  title: 'Food and Essentials Delivered to Families in Need',
  category: 'Project Updates',
  date: '2026-08-20',
  author: 'Programmes Team',
  excerpt: 'Volunteers gathered food staples and household items and delivered them directly to families.',
  content: [
  'Thanks to the generosity of well-wishers, our volunteers gathered bags of food staples and household essentials and delivered them to families in need.',
  'This article is a sample prepared for layout purposes and will be replaced with an approved update.'],

  photo: images.foodDonation
},
{
  slug: 'meet-our-volunteers',
  title: 'Meet the Volunteers Behind Our Kamande Office',
  category: 'Volunteer Stories',
  date: '2026-07-30',
  author: 'Volunteer Desk',
  excerpt: 'The people in the bright vests — who they are and why they give their time.',
  content: [
  'Our volunteers are neighbours, students and professionals who give their time to serve the community.',
  'This article is a sample prepared for layout purposes and will be replaced with approved volunteer stories.'],

  photo: images.volunteersOffice
},
{
  slug: 'nest-of-love-visit',
  title: 'An Evening at the Nest of Love Children’s Centre',
  category: 'Community Stories',
  date: '2026-06-15',
  author: 'Communications Team',
  excerpt: 'Our team spent an evening with the children and caregivers at the Nest of Love Children’s Centre.',
  content: [
  'Our team visited the Nest of Love Children’s Centre to share time, encouragement and support with the children.',
  'This article is a sample prepared for layout purposes and will be replaced with an approved story.'],

  photo: images.kidsCentre
},
{
  slug: 'planning-community-fun-day',
  title: 'Planning Our Next Community Fun Day',
  category: 'Charity Events',
  date: '2026-05-28',
  author: 'Events Team',
  excerpt: 'We are preparing a day of togetherness for families — and we would love your help.',
  content: [
  'Community events bring families together and help us listen to what our neighbours need most.',
  'This article is a sample prepared for layout purposes and will be replaced with approved event news.'],

  photo: images.blogEvent
},
{
  slug: 'why-education-support-matters',
  title: 'Why Education Support Matters for Vulnerable Families',
  category: 'Education and Empowerment',
  date: '2026-05-02',
  author: 'Programmes Team',
  excerpt: 'Small barriers like uniforms and books keep children out of class. Here is how we hope to help.',
  content: [
  'For many families, the cost of uniforms, books and supplies stands between a child and the classroom.',
  'This article is a sample prepared for layout purposes and will be replaced with approved content.'],

  photo: images.heroEducation
},
{
  slug: 'welcome-to-our-new-website',
  title: 'Welcome to Our New Website',
  category: 'Announcements',
  date: '2026-10-01',
  author: 'Communications Team',
  excerpt: 'A new home online to share our work, our stories and the many ways you can get involved.',
  content: [
  'We are excited to share our new website — a place to learn about our mission, follow our projects and find ways to support vulnerable communities.',
  'This article is a sample prepared for layout purposes and will be replaced with an approved announcement.'],

  photo: images.teamOffice
}];


export const articleCategories = [
'All',
'Community Stories',
'Project Updates',
'Charity Events',
'Volunteer Stories',
'Education and Empowerment',
'Announcements'];