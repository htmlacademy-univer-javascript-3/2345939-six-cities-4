import { Reviews } from '../types/types';

const AVATAR_URL = 'https://i.pravatar.cc/128';

const reviews: Reviews = [
  {
    user: {
      name: 'John',
      avatarSrc: `${AVATAR_URL}?1`,
    },
    rating: 4,
    text: 'Great place! Highly recommended.',
    date: new Date('2023-02-15'),
    id: 1,
  },
  {
    user: {
      name: 'Jane',
      avatarSrc: `${AVATAR_URL}?2`,
    },
    rating: 5,
    text: 'Amazing experience! Will definitely come back.',
    date: new Date('2023-03-20'),
    id: 2,
  },
  {
    user: {
      name: 'Alice',
      avatarSrc: `${AVATAR_URL}?3`,
    },
    rating: 3.5,
    text: 'Decent place. Could be better.',
    date: new Date('2023-04-10'),
    id: 3,
  },
  {
    user: {
      name: 'Bob',
      avatarSrc: `${AVATAR_URL}?4`,
    },
    rating: 4.5,
    text: 'Fantastic location! Enjoyed every moment of my stay.',
    date: new Date('2023-05-05'),
    id: 4,
  },
  {
    user: {
      name: 'Emily',
      avatarSrc: `${AVATAR_URL}?5`,
    },
    rating: 4,
    text: 'Nice place, but a bit noisy during the night.',
    date: new Date('2023-06-20'),
    id: 5,
  },
  {
    user: {
      name: 'Michael',
      avatarSrc: `${AVATAR_URL}?6`,
    },
    rating: 3,
    text: 'Average experience. Expected more for the price.',
    date: new Date('2023-07-10'),
    id: 6,
  },
  {
    user: {
      name: 'Sarah',
      avatarSrc: `${AVATAR_URL}?7`,
    },
    rating: 4.5,
    text: 'Wonderful stay! Will definitely recommend to friends.',
    date: new Date('2023-08-15'),
    id: 7,
  },
  {
    user: {
      name: 'David',
      avatarSrc: `${AVATAR_URL}?8`,
    },
    rating: 5,
    text: 'Absolutely perfect! Couldn\'t ask for more.',
    date: new Date('2023-09-30'),
    id: 8,
  },
];

export default reviews;
