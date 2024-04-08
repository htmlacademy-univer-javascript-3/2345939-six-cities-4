import { Offers } from '../types/types';
import reviews from './reviews';
import hosts from './hosts';

const PLACEHOLDER_URL = 'https://via.placeholder.com/260x200';

const offers: Offers = [
  {
    coordinates: {
      lng: 4.85309666406198,
      lat: 52.3909553943508,
    },
    city: {
      title: 'Amsterdam',
      lng: 4.85309666406198,
      lat: 52.3909553943508,
      zoom: 8
    },
    id: 1,
    cardImage: 'img/apartment-02.jpg',
    price: 120,
    name: 'Beautiful & luxurious studio at great location',
    type: 'Apartment',
    rating: 4.8,
    isPremium: true,
    isBookmarked: true,
    bedrooms: 1,
    maxGuests: 2,
    insideItems: ['Wi-Fi', 'Heating', 'Kitchen'],
    offerGallery: [`${PLACEHOLDER_URL}?text=Place+1+1`, `${PLACEHOLDER_URL}?text=Place+1+2`, `${PLACEHOLDER_URL}?text=Place+1+3`, `${PLACEHOLDER_URL}?text=Place+1+4`, `${PLACEHOLDER_URL}?text=Place+1+5`, `${PLACEHOLDER_URL}?text=Place+1+6`],
    host: hosts[0],
    reviews: reviews.slice(0, 3),
    nearPlaces: []
  },
  {
    coordinates: {
      lng: 4.85309666406198,
      lat: 52.3609553943508,
    },
    city: {
      title: 'Amsterdam',
      lng: 4.85309666406198,
      lat: 52.3609553943508,
      zoom: 8
    },
    id: 2,
    cardImage: 'img/apartment-03.jpg',
    price: 150,
    name: 'Modern & cozy apartment in city center',
    type: 'Apartment',
    rating: 4.5,
    isPremium: false,
    isBookmarked: false,
    bedrooms: 2,
    maxGuests: 4,
    insideItems: ['Wi-Fi', 'Heating', 'Kitchen', 'Washing machine'],
    offerGallery: [`${PLACEHOLDER_URL}?text=Place+2+1`, `${PLACEHOLDER_URL}?text=Place+2+2`, `${PLACEHOLDER_URL}?text=Place+2+3`, `${PLACEHOLDER_URL}?text=Place+2+4`, `${PLACEHOLDER_URL}?text=Place+2+5`, `${PLACEHOLDER_URL}?text=Place+2+6`],
    host: hosts[1],
    reviews: reviews.slice(3, 6),
    nearPlaces: []
  },
  {
    coordinates: {
      lng: 4.929309666406198,
      lat: 52.3909553943508,
    },
    city: {
      title: 'Amsterdam',
      lng: 4.929309666406198,
      lat: 52.3909553943508,
      zoom: 8
    },
    id: 3,
    cardImage: 'img/apartment-01.jpg',
    price: 100,
    name: 'Charming studio with garden view',
    type: 'Studio',
    rating: 4.9,
    isPremium: true,
    isBookmarked: false,
    bedrooms: 0,
    maxGuests: 2,
    insideItems: ['Wi-Fi', 'Heating', 'Coffee machine'],
    offerGallery: [`${PLACEHOLDER_URL}?text=Place+3+1`, `${PLACEHOLDER_URL}?text=Place+3+2`, `${PLACEHOLDER_URL}?text=Place+3+3`, `${PLACEHOLDER_URL}?text=Place+3+4`, `${PLACEHOLDER_URL}?text=Place+3+5`, `${PLACEHOLDER_URL}?text=Place+3+6`],
    host: hosts[2],
    reviews: reviews.slice(6, 8),
    nearPlaces: []
  },
  {
    coordinates: {
      lng: 4.939309666406198,
      lat: 52.3809553943508,
    },
    city: {
      title: 'Amsterdam',
      lng: 4.939309666406198,
      lat: 52.3809553943508,
      zoom: 8
    },
    id: 4,
    cardImage: 'img/apartment-01.jpg',
    price: 200,
    name: 'Spacious apartment with stunning city views',
    type: 'Apartment',
    rating: 4.7,
    isPremium: false,
    isBookmarked: true,
    bedrooms: 3,
    maxGuests: 6,
    insideItems: ['Wi-Fi', 'Heating', 'Kitchen', 'Balcony'],
    offerGallery: [`${PLACEHOLDER_URL}?text=Place+4+1`, `${PLACEHOLDER_URL}?text=Place+4+2`, `${PLACEHOLDER_URL}?text=Place+4+3`, `${PLACEHOLDER_URL}?text=Place+4+4`, `${PLACEHOLDER_URL}?text=Place+4+5`, `${PLACEHOLDER_URL}?text=Place+4+6`],
    host: hosts[3],
    reviews: reviews.slice(0, 4),
    nearPlaces: [],
  },
];

offers[0].nearPlaces = [offers[1], offers[2], offers[3]];
offers[1].nearPlaces = [offers[0], offers[2], offers[3]];
offers[2].nearPlaces = [offers[1], offers[0], offers[3]];
offers[3].nearPlaces = [offers[1], offers[2], offers[0]];

export default offers;
