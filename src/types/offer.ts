export type City = {
  name: string;
  location: Location;
}

export type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
}

export type Offer = {
  id: string;
  title: string;
  type: string;
  price: number;
  previewImage: string;
  city: City;
  location: Location;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  };

export type Host = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
}

export type FullOffer = Offer & {
  description: string;
  bedrooms: number;
  goods: string[];
  host: Host;
  images: string[];
  maxAdults: number;
};

export type FavoritesData = {
  id: FullOffer['id'];
  isFavorite: boolean;
};

export type Offers = Offer[];
