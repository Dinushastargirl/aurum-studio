
import { Service, Package, Testimonial } from './types';

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Precision Hair Styling',
    description: 'Bespoke cuts and styling tailored to your unique profile and aesthetic.',
    price: 'From $120',
    category: 'Hair Styling',
    imageUrl: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '2',
    title: 'Master Hair Coloring',
    description: 'Artisanal color melting and signature balayage for multi-dimensional brilliance.',
    price: 'From $250',
    category: 'Hair Coloring',
    imageUrl: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '3',
    title: 'Advanced Skin Treatments',
    description: 'Dermatological grade facials and rejuvenation therapies for lasting glow.',
    price: 'From $180',
    category: 'Treatments',
    imageUrl: 'https://images.unsplash.com/photo-1570172619244-4218f5d2af1b?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '4',
    title: 'Signature Indulgence',
    description: 'Complete beauty care including luxury manicure and curated aesthetics.',
    price: 'From $95',
    category: 'Beauty Services',
    imageUrl: 'https://images.unsplash.com/photo-1610991148667-9514fd941421?auto=format&fit=crop&q=80&w=800'
  }
];

export const PACKAGES: Package[] = [
  {
    id: 'p1',
    title: 'The Royal AURUM',
    services: ['Master Coloring', 'Advanced Facial', 'Deluxe Styling', 'Luxury Manicure'],
    price: '$450',
    duration: '4 Hours',
    isPopular: true
  },
  {
    id: 'p2',
    title: 'Bridal Couture',
    services: ['Trial Styling', 'Oxygen Glow Treatment', 'Bridal Makeup', 'Nail Art'],
    price: '$620',
    duration: '5 Hours'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Alexandra Vance',
    text: 'AURUM has redefined my salon experience. The blue and gold sanctuary is as luxurious as the services themselves.',
    rating: 5
  },
  {
    id: 't2',
    name: 'Marcus Sterling',
    text: 'The most precision haircut I have ever received. The attention to detail is remarkable.',
    rating: 5
  },
  {
    id: 't3',
    name: 'Julianne Moore',
    text: 'A true escape. The skin treatments are transformative. I leave every visit feeling like gold.',
    rating: 5
  }
];

export const GALLERY_IMAGES = [
  'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1595476108010-b4d1f8c2b3d1?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1559599101-f09722fb4948?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&q=80&w=800',
];
