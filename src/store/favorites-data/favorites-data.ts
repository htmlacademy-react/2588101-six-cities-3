import {createSlice} from '@reduxjs/toolkit';
import {RequestStatus, NameSpace} from '../../const';
import {postFavorite, fetchFavorites} from '../api-actions';
import {FavoriteData} from '../../types/state';

const initialState: FavoriteData = {
  items: [],
  status: RequestStatus.Idle
};

const favoritesData = createSlice({
  name: NameSpace.Favorite,
  initialState,
  reducers: {
    clearFavorites: (state) => {
      state.items = [];
      state.status = RequestStatus.Idle;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFavorites.pending, (state) => {
        state.status = RequestStatus.Loading;
      })
      .addCase(fetchFavorites.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = RequestStatus.Success;
      })
      .addCase(fetchFavorites.rejected, (state) => {
        state.status = RequestStatus.Failed;
      })
      .addCase(postFavorite.pending, (state) => {
        state.status = RequestStatus.Loading;
      })
      .addCase(postFavorite.fulfilled, (state, action) => {
        if (action.payload.isFavorite) {
          state.items.push(action.payload);
        } else {
          state.items = state.items.filter((offer) => offer.id !== action.payload.id);
        }
      })
      .addCase(postFavorite.rejected, (state) => {
        state.status = RequestStatus.Failed;
      });
  }
});

const favoritesActions = {...favoritesData.actions, fetchFavorites, postFavorite};

export {favoritesActions, favoritesData};
