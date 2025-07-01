import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {fetchFullOffer, fetchNearbyOffers, fetchFavorites} from '../api-actions';
import {NameSpace, RequestStatus} from '../../const';
import {FullOfferData} from '../../types/state';
import {Offer} from '../../types/offer';

const initialState: FullOfferData = {
  info: null,
  nearby: [],
  status: RequestStatus.Idle,
  activeOfferId: null,
};

const fullOfferData = createSlice({
  name: NameSpace.Offer,
  initialState,
  reducers: {
    clearFullOffer: (state) => {
      state.info = null;
      state.nearby = [];
      state.status = RequestStatus.Idle;
    },
    setActiveOfferId(state, action: PayloadAction<Offer['id'] | undefined>) {
      state.activeOfferId = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchFullOffer.pending, (state) => {
        state.status = RequestStatus.Loading;
      })
      .addCase(fetchFullOffer.fulfilled, (state, action) => {
        state.info = action.payload;
        state.status = RequestStatus.Success;
      })
      .addCase(fetchFullOffer.rejected, (state) => {
        state.status = RequestStatus.Failed;
      })
      .addCase(fetchNearbyOffers.fulfilled, (state, action) => {
        state.nearby = action.payload;
      })
      .addCase(fetchFavorites.fulfilled, (state, action) => {
        const changedOffer = action.payload;

        if (state.info?.id === changedOffer.id) {
          state.info.isFavorite = changedOffer.isFavorite;
        }
      });
  },
});

const fullOfferActions = {...fullOfferData.actions, fetchNearbyOffers, fetchFullOffer};

export {fullOfferActions, fullOfferData};
