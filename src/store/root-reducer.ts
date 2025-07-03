import {combineReducers} from '@reduxjs/toolkit';
import {NameSpace} from '../const';
import {appData} from './app-data/app-data';
import {appProcess} from './app-process/app-process';
import {userProcess} from './user-process/user-process';
import {reviewsData} from './reviews-data/reviews-data';
import {fullOfferData} from './full-offer-data/full-offer-data';
import {favoritesData} from './favorites-data/favorites-data';

export const rootReducer = combineReducers({
  [NameSpace.Data]: appData.reducer,
  [NameSpace.App]: appProcess.reducer,
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.Review]: reviewsData.reducer,
  [NameSpace.Offer]: fullOfferData.reducer,
  [NameSpace.Favorite]: favoritesData.reducer,
});
