import type { Article } from '@/types/content';
import { images } from '@/data/site';

export const articles: Article[] = [
  {
    slug: '77-youth-graduate-vocational-training',
    title: '77 Young People Graduate from Vocational Training',
    category: 'Education and Empowerment',
    date: '2025-02-11',
    author: 'Initiative for the Needy',
    excerpt: 'Young people from vulnerable families completed short courses delivered in partnership with KISSE College.',
    content: [
      'Initiative for the Needy, in partnership with Kenya Institute of Software Engineering (KISSE) College, supported 77 young people from vulnerable families to take short vocational courses.',
      'Training included plumbing, cake baking, pastry, hairdressing and beauty therapy, among other courses. The participants completed and graduated on 11 February 2025.',
      'Youth empowerment through education, practical skills and income-generating activities is part of the organization’s mission.'
    ],
    photo: images.causeYouth,
    featured: true
  },
  {
    slug: 'older-persons-day-2024',
    title: 'Celebrating Older People in Our Community',
    category: 'Community Support',
    date: '2024-10-01',
    author: 'Initiative for the Needy',
    excerpt: '100 older people from Kiganjo, Athena and Kiang’ombe came together for the International Day of Older Persons.',
    content: [
      'On 1 October 2024, Initiative for the Needy marked the International Day of Older Persons by bringing together 100 older people from Kiganjo, Athena and Kiang’ombe.',
      'The organization prepared food and gave gifts to recognize the contribution older people have made over the years.',
      'The gathering also created an opportunity to identify issues affecting older people in the community and discuss how they can be addressed.'
    ],
    photo: images.causeElderly
  },
  {
    slug: 'food-support-for-kiandutu-older-people',
    title: 'Food Support for Older People in Kiandutu',
    category: 'Community Support',
    date: '2023-05',
    author: 'Initiative for the Needy',
    excerpt: 'The organization provided food supplies to 100 older people from Kiandutu Slums.',
    content: [
      'In May 2023, Initiative for the Needy provided food supplies to 100 older people from Kiandutu Slums.',
      'This work builds on an earlier visit to older people in Kiandutu in December 2020, when food was also provided.',
      'Supporting older people is part of the organization’s work to promote dignity, equality and access to basic needs.'
    ],
    photo: images.foodDonation
  },
  {
    slug: 'first-physical-office-kiganjo',
    title: 'Opening Our First Physical Office in Kiganjo',
    category: 'Organization Updates',
    date: '2023-12',
    author: 'Initiative for the Needy',
    excerpt: 'The organization opened its first physical office at Kiganjo Corner 3 near the bypass.',
    content: [
      'Initiative for the Needy opened its first physical office in December 2023 at Kiganjo Corner 3 near the bypass in Thika.',
      'The office is on Kiganjo-Main Road at Kwa Kamande Stage, next to Gamoyoni Driving School.',
      'The organization was initiated in January 2020 and registered on 16 September 2022 under the Ministry of Labour and Social Protection, State Department.'
    ],
    photo: images.teamOffice
  },
  {
    slug: 'supporting-childrens-homes',
    title: 'Supporting Children’s Homes Across Kiambu County',
    category: 'Children and Families',
    date: '2025-07',
    author: 'Initiative for the Needy',
    excerpt: 'Visits to children’s homes have included food, clothing, firewood and other practical support.',
    content: [
      'Initiative for the Needy has visited and supported The Ark Children’s Home, Salem Rescue Children Home, Shades Children Foundation, Ottofman Children Center and Nest of Love Children Centre.',
      'Support has included food, clothes, firewood and other needed items. Reported visits span from 2019 to July 2025.',
      'The organization’s Little Lights programme also supports orphans and vulnerable children through home-based care, meals, mentorship, education and life-skills activities.'
    ],
    photo: images.kidsCentre
  }
];

export const articleCategories = [
  'All',
  'Education and Empowerment',
  'Community Support',
  'Organization Updates',
  'Children and Families'
];
