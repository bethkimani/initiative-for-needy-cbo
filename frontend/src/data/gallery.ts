import type { GalleryItem } from '@/types/content';
import { images } from '@/data/site';

export const galleryItems: GalleryItem[] = [
{ photo: images.feeding, category: 'Outreach', caption: 'Serving meals to young children' },
{ photo: images.teamOffice, category: 'Our Team', caption: 'The team at our Kamande office' },
{ photo: images.foodDonation, category: 'Community Support', caption: 'Food and essentials ready for delivery' },
{ photo: images.kidsCentre, category: 'Outreach', caption: 'Visit to a children’s centre' },
{ photo: images.volunteersOffice, category: 'Our Team', caption: 'Volunteers outside the organization’s office' },
{ photo: images.ceoFeeding, category: 'Outreach', caption: 'Children enjoying a meal during community outreach' },
{ photo: images.ceo, category: 'Outreach', caption: 'Community outreach and support' },
{ photo: images.heroCommunity, category: 'Illustrative', caption: 'Illustrative: community outreach' },
{ photo: images.heroEducation, category: 'Illustrative', caption: 'Illustrative: education support' },
{ photo: images.causeHealth, category: 'Illustrative', caption: 'Illustrative: community health' },
{ photo: images.causeYouth, category: 'Illustrative', caption: 'Illustrative: youth skills' },
{ photo: images.blogEvent, category: 'Illustrative', caption: 'Illustrative: community event' }];


export const galleryCategories = ['All', 'Outreach', 'Community Support', 'Our Team', 'Illustrative'];