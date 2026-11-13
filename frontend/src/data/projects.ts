import type { Project } from '@/types/content';
import { images } from '@/data/site';

export const projects: Project[] = [
  {
    slug: 'vocational-training-for-youth',
    title: 'Vocational Training for Young People',
    category: 'Education',
    location: 'Kiambu County',
    summary: '77 young people from vulnerable families completed practical short courses with KISSE College.',
    description: [
      'In partnership with Kenya Institute of Software Engineering (KISSE) College, the organization supported 77 young people from vulnerable families to undertake short vocational courses.',
      'Courses included plumbing, cake baking, pastry, hairdressing and beauty therapy. The learners completed and graduated on 11 February 2025.'
    ],
    status: 'Completed',
    period: '11 February 2025',
    beneficiaries: '77 young people',
    photo: images.causeYouth
  },
  {
    slug: 'older-persons-day',
    title: 'International Day of Older Persons',
    category: 'Community Support',
    location: 'Kiganjo, Athena and Kiang’ombe',
    summary: '100 older people gathered for a day of appreciation, food, gifts and community discussion.',
    description: [
      'On 1 October 2024, the organization brought together 100 older people from Kiganjo, Athena and Kiang’ombe to mark the International Day of Older Persons.',
      'The organization prepared a meal and gave gifts, while also listening to issues affecting older people and discussing how the community can respond.'
    ],
    status: 'Completed',
    period: '1 October 2024',
    beneficiaries: '100 older people',
    photo: images.causeElderly
  },
  {
    slug: 'children-home-outreach',
    title: 'Children’s Home Outreach',
    category: 'Outreach',
    location: 'Kiambu County',
    summary: 'Visits and practical support for children’s homes, including food, clothes and firewood.',
    description: [
      'The organization has visited and supported The Ark Children’s Home, Salem Rescue Children Home, Shades Children Foundation, Ottofman Children Center and Nest of Love Children Centre.',
      'Support has included food, clothes and firewood. Reported visits span 2019 to July 2025.'
    ],
    status: 'Completed',
    period: '2019–2025',
    beneficiaries: '5 children’s homes',
    photo: images.kidsCentre
  },
  {
    slug: 'kiandutu-community-support',
    title: 'Kiandutu Community Support',
    category: 'Community Support',
    location: 'Kiandutu Slums, Thika',
    summary: 'Food support for older people in the community.',
    description: [
      'The organization visited older people in Kiandutu Slums in December 2020 and provided food.',
      'In May 2023, food supplies were provided to 100 older people from Kiandutu Slums.'
    ],
    status: 'Completed',
    period: 'December 2020 and May 2023',
    beneficiaries: '100 older people reached in May 2023',
    photo: images.foodDonation
  },
  {
    slug: 'guidance-and-counselling',
    title: 'Guidance and Counselling',
    category: 'Community Support',
    location: 'Makongeni Vocational Training Centre, Thika',
    summary: 'Free guidance and counselling for vocational students, including support for those affected by drug use.',
    description: [
      'The organization started a guidance and counselling programme at Makongeni Vocational Training Centre.',
      'The programme provides support to students, including people affected by drug use.'
    ],
    status: 'Current',
    period: 'Ongoing programme',
    beneficiaries: null,
    photo: images.volunteersOffice
  },
  {
    slug: 'little-lights-programme',
    title: 'Little Lights Programme',
    category: 'Outreach',
    location: 'Kiambu County',
    summary: 'Home-based care, meals, mentorship, education, life skills, games and fun for orphans and vulnerable children.',
    description: [
      'Little Lights supports orphans and other vulnerable children through home-based care.',
      'Children receive nutritious meals, take part in mentorship sessions, education and life-skills activities, and have opportunities for fun and games.'
    ],
    status: 'Current',
    period: 'Ongoing programme',
    beneficiaries: null,
    photo: images.feeding
  },
  {
    slug: 'kiganjo-office',
    title: 'Kiganjo Community Office',
    category: 'Development',
    location: 'Kiganjo Corner 3, Thika',
    summary: 'The organization opened its first physical office near the bypass.',
    description: [
      'The first physical office opened in December 2023 at Kiganjo Corner 3 near the bypass.',
      'The office is located on Kiganjo-Main Road at Kwa Kamande Stage, next to Gamoyoni Driving School.'
    ],
    status: 'Completed',
    period: 'December 2023',
    beneficiaries: null,
    photo: images.teamOffice
  },
  {
    slug: 'community-resource-centre',
    title: 'Community Resource Centre',
    category: 'Development',
    location: 'Kiambu County',
    summary: 'A planned resource centre to support the organization’s community programmes.',
    description: [
      'The organization’s future plans include constructing a community resource centre.',
      'The project is planned and is subject to resources and development partnerships.'
    ],
    status: 'Upcoming',
    period: 'Future plan',
    beneficiaries: null,
    photo: images.causeDevelopment
  },
  {
    slug: 'community-school',
    title: 'Community School',
    category: 'Education',
    location: 'Kiambu County',
    summary: 'A planned community school to benefit people in need.',
    description: [
      'The organization plans to establish a community school serving people in need.',
      'This is a future plan; implementation depends on resources and partnerships.'
    ],
    status: 'Upcoming',
    period: 'Future plan',
    beneficiaries: null,
    photo: images.heroEducation
  },
  {
    slug: 'community-health-centre',
    title: 'Community Health Centre',
    category: 'Community Support',
    location: 'Kiambu County',
    summary: 'A planned health centre to benefit the wider community.',
    description: [
      'The organization plans to establish a community health centre.',
      'This is a future plan; implementation depends on resources and partnerships.'
    ],
    status: 'Upcoming',
    period: 'Future plan',
    beneficiaries: null,
    photo: images.causeHealth
  },
  {
    slug: 'community-income-projects',
    title: 'Community Income-Generating Projects',
    category: 'Development',
    location: 'Kiambu County',
    summary: 'Planned income-generating activities to strengthen community livelihoods and support the organization.',
    description: [
      'The organization plans to establish income-generating projects that can support its work financially and contribute to community development.',
      'These plans will be developed as resources and partnerships become available.'
    ],
    status: 'Upcoming',
    period: 'Future plan',
    beneficiaries: null,
    photo: images.causeYouth
  }
];
