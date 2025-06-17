export const URL_MARKER_DEFAULT = '/img/pin.svg';
export const URL_MARKER_CURRENT = '/img/pin-active.svg';

export const SORT_OPTIONS = [
  'Popular',
  'Price: low to high',
  'Price: high to low',
  'Top rated first',
] satisfies Record<SortOption, string>;

export const enum SortOption {
  Popular,
  PriceLowToHigh,
  PriceHighToLow,
  TopRatedFirst,
}

export enum AppRoute {
Main = '/',
Favorites = '/favorites',
Login = '/login',
Offer = '/offer/:id'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}
