
export interface Service {
  id: string;
  title: string;
  description: string;
  price: string;
  category: string;
  imageUrl: string;
}

export interface Package {
  id: string;
  title: string;
  services: string[];
  price: string;
  duration: string;
  isPopular?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  rating: number;
}

export interface SplashEffect {
  id: number;
  x: number;
  y: number;
}
