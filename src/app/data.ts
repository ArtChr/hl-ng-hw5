import { IHotel } from './interfaces/hotel.interface';

export const hotels: IHotel[] = [
  {
    id: 0,
    title: 'Universal Cabana',
    address: 'Orlando',
    description: 'Best one!',
    phone: '+3242353434',
    picture: 'assets/images/1.jpg',
    photos: [
      'assets/images/r1.jpg',
      'assets/images/res.jpg'
    ],
    weather: {
      temperature: 12,
      wind: 11,
      icon: 'sun'
    },
    profile: {
      followers: 112,
      following: 11,
      photo: 'assets/images/b1.jpg'
    },
    stars: 3
  },
  {
    id: 1,
    title: 'Four Seasons Resort',
    address: 'Florida',
    description: 'Good price',
    phone: '+3123456789',
    picture: 'assets/images/res.jpg',
    photos: [
      'assets/images/r1.jpg'
    ],
    weather: {
      temperature: 20,
      wind: 17,
      icon: 'sun'
    },
    profile: {
      followers: 574,
      following: 164,
      photo: 'assets/images/r1.jpg'
    },
    stars: 3
  },
  {
    id: 2,
    title: 'The Langham',
    address: 'Detroit',
    description: 'Good price',
    phone: '+380123456789',
    picture: 'assets/images/res.jpg',
    photos: [
      'assets/images/res.jpg',
      'assets/images/r1.jpg'
    ],
    weather: {
      temperature: 7,
      wind: 5,
      icon: 'sun'
    },
    profile: {
      followers: 1,
      following: 8,
      photo: 'assets/images/1.jpg'
    },
    stars: 2
  },
  {
    id: 3,
    title: 'Universal',
    address: 'New York! New York!',
    description: 'Luxury',
    phone: '+3242353434',
    picture: 'assets/images/1.jpg',
    photos: [
      'assets/images/res.jpg',
      'assets/images/res.jpg'
    ],
    weather: {
      temperature: 22,
      wind: 18,
      icon: 'sun'
    },
    profile: {
      followers: 16288,
      following: 20,
      photo: 'assets/images/b1.jpg'
    },
    stars: 5
  },
  {
    id: 4,
    title: 'Spa Resort',
    address: 'New York!',
    description: 'Luxury',
    phone: '+3242353434',
    picture: 'assets/images/1.jpg',
    photos: [
      'assets/images/res.jpg'
    ],
    weather: {
      temperature: 27,
      wind: 16,
      icon: 'sun'
    },
    profile: {
      followers: 818,
      following: 41,
      photo: 'assets/images/b1.jpg'
    },
    stars: 5
  }
];

export const stars: string[] = [
  'All',
  '**',
  '***',
  '****',
  '*****'
]