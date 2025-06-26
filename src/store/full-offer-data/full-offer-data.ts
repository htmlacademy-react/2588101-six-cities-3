import {createSlice} from '@reduxjs/toolkit';
import {fetchFullOfferAction, fetchNearbyOffersAction, fetchFavoritesAction} from '../api-actions';
import {NameSpace, RequestStatus} from '../../const';
import {FullOfferData} from '../../types/state';

const initialState: FullOfferData = {
  info: null,
  nearby: [],
  status: RequestStatus.Idle,
};

export const fullOfferData = createSlice({
  name: NameSpace.Offer,
  initialState,
  reducers: {
    clearFullOffer: (state) => {
      state.info = null;
      state.nearby = [];
      state.status = RequestStatus.Idle;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchFullOfferAction.fulfilled, (state, action) => {
        state.info = action.payload;
        state.status = RequestStatus.Success;
      })
      .addCase(fetchFullOfferAction.rejected, (state) => {
        state.status = RequestStatus.Failed;
      })
      .addCase(fetchFullOfferAction.pending, (state) => {
        state.status = RequestStatus.Loading;
      })
      .addCase(fetchNearbyOffersAction.fulfilled, (state, action) => {
        state.nearby = action.payload;
      })
      .addCase(fetchFavoritesAction.fulfilled, (state, action) => {
        const changedOffer = action.payload;

        if (state.info?.id === changedOffer.id) {
          state.info.isFavorite = changedOffer.isFavorite;
        }
      });
  },
});

export const {clearFullOffer} = fullOfferData.actions;
