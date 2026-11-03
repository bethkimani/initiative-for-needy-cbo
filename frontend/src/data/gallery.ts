import type { GalleryItem } from '@/types/content';
import { images } from '@/data/site';

export const galleryItems: GalleryItem[] = [
{ photo: images.feeding, category: 'Outreach', caption: 'Serving meals to young children' },
{ photo: images.teamOffice, category: 'Our Team', caption: 'The team at our Kamande office' },
{ photo: images.foodDonation, category: 'Community Support', caption: 'Food and essentials ready for delivery' },
{ photo: images.kidsCentre, category: 'Outreach', caption: 'Evening at the Nest of Love Children’s Centre' },
{ photo: images.volunteersOffice, category: 'Our Team', caption: 'Volunteers preparing for an awareness drive' },
{ photo: images.ceoFeeding, category: 'Outreach', caption: 'Checking in with children during a meal day' },
{ photo: images.ceo, category: 'Our Team', caption: 'Charles Thika, Founder & CEO' },
{ photo: images.heroCommunity, category: 'Illustrative', caption: 'Illustrative: community outreach' },
{ photo: images.heroEducation, category: 'Illustrative', caption: 'Illustrative: education support' },
{ photo: images.causeHealth, category: 'Illustrative', caption: 'Illustrative: community health' },
{ photo: images.causeYouth, category: 'Illustrative', caption: 'Illustrative: youth skills' },
{ photo: images.blogEvent, category: 'Illustrative', caption: 'Illustrative: community event' }];


export const galleryCategories = ['All', 'Outreach', 'Community Support', 'Our Team', 'Illustrative'];