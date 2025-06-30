import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state';
import {Offer, FullOffer, FavoritesData} from '../types/offer';
import {Review, PostReview} from '../types/review';
import {redirectToRoute} from './action';
import {APIRoute, AppRoute} from '../const';
import {saveToken, dropToken} from '../services/token';
import {AuthData} from '../types/auth-data';
import {UserData} from '../types/user-data';

export const fetchAllOffers = createAsyncThunk<Offer[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'fetchAllOffers',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<Offer[]>(APIRoute.Offers);
    return data;
  },
);

export const fetchFullOffer = createAsyncThunk<FullOffer, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'fetchFullOffer',
  async (offerId, {extra: api}) => {
    const {data} = await api.get<FullOffer>(`${APIRoute.Offers}/${offerId}`);
    return data;
  },
);

export const fetchNearbyOffers = createAsyncThunk<Offer[], string,{
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'fetchNearbyOffers',
  async (offerId, {extra: api}) => {
    const {data} = await api.get<Offer[]>(`${APIRoute.Offers}/${offerId}/nearby`);
    return data;
  },
);

export const fetchFavorites = createAsyncThunk<Offer, FavoritesData,{
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'fetchFavorites',
  async ({id, isFavorite}, {extra: api}) => {
    const number = Number(isFavorite);
    const {data} = await api.post<FullOffer>(`${APIRoute.Favorites}/${id}/${number}`, {number});
    return data;
  },
);

export const fetchReviews = createAsyncThunk<Review[], FullOffer['id'], {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'fetchReviews',
  async (offerId, {extra: api}) => {
    const {data} = await api.get<Review[]>(`${APIRoute.Reviews}/${offerId}`);
    return data;
  },
);

export const postReviews = createAsyncThunk<Review, PostReview, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'postReviews',
  async ({body, offerId}, {extra: api}) => {
    const {data} = await api.post<Review>(`${APIRoute.Reviews}/${offerId}`, body);
    return data;
  },
);

export const checkAuth = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'checkAuth',
  async (_arg, {extra: api}) => {
    await api.get(APIRoute.Login);
  },
);

export const login = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data: {token}} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(token);
    dispatch(redirectToRoute(AppRoute.Main));
  },
);

export const logout = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'logout',
  async (_arg, {extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
  },
);
