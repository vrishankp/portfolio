import type { PhotographyItem } from '@/types';

export const photographs: PhotographyItem[] = [
  {
    id: 'photo1',
    title: 'Tower',
    description: 'The ATC tower at Lambert International Airport in St. Louis, Missouri.',
    imageUrl: '/images/photography/tower.jpg',
    dateTaken: '2023-08-23',
    isPortrait: false,
  },
  {
    id: 'photo2',
    title: 'Bench',
    description: 'A bench overlooking Lake Mendota in Madison, Wisconsin during autumn.',
    imageUrl: '/images/photography/bench.jpeg',
    dateTaken: '2024-4-23',
    isPortrait: false,
  },
  {
    id: 'photo3',
    title: 'Frame',
    description: 'The unseen underneath of an iconic bridge',
    imageUrl: '/images/photography/frame.jpg',
    dateTaken: '2025-03-11',
    isPortrait: true,
  },
];
