import {createSlice} from '@reduxjs/toolkit';
import {NameSpace, RequestStatus} from '../../const';
import {AppData} from '../../types/state';
import {fetchAllOffers, postFavorite, logout} from '../api-actions';

const initialState: AppData = {
  offers: [],
  status: RequestStatus.Idle
};

const appData = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchAllOffers.pending, (state) => {
        state.status = RequestStatus.Loading;
      })
      .addCase(fetchAllOffers.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.status = RequestStatus.Success;
      })
      .addCase(fetchAllOffers.rejected, (state) => {
        state.status = RequestStatus.Failed;
      })
      .addCase(postFavorite.fulfilled, (state, action) => {
        const changedOffer = action.payload;

        for (const offer of state.offers) {
          if (offer.id === changedOffer.id) {
            offer.isFavorite = changedOffer.isFavorite;

            return;
          }
        }
      })
      .addCase(logout.fulfilled, () => initialState);
  }
});

const allOffersActions = {...appData.actions, fetchAllOffers};

export {allOffersActions, appData};
