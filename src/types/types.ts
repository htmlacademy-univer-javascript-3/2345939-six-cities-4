export type Review = {
  user: {
    name: string;
    avatarSrc: string;
  };
  rating: number;
  text: string;
  date: Date;
  id: number;
}

export type Host = {
  name: string;
  avatarSrc: string;
  status: string;
  description: string[];
}

export type Offer = {
  coordinates: {
    lat: number;
    lng: number;
  };
  city: City;
  id: number;
  cardImage: string;
  price: number;
  name: string;
  type: string;
  rating: number;
  isPremium?: boolean;
  isBookmarked?: boolean;
  bedrooms: number;
  maxGuests: number;
  insideItems: string[];
  offerGallery: string[];
  host: Host;
  reviews: Reviews;
  nearPlaces: Offers;
}

export const enum CardType {
  Favorite = 'Favorite',
  Near = 'Near',
  City = 'City'
}

export type City = {
  title: string;
  lat: number;
  lng: number;
  zoom: number;
};

export type Offers = Offer[]
export type Reviews = Review[];
