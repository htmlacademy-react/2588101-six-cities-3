import {createSlice} from '@reduxjs/toolkit';
import {fetchFullOfferAction} from '../api-actions';
import {NameSpace, RequestStatus} from '../../const';
import {FullOfferData} from '../../types/state';

const initialState: FullOfferData = {
  info: null,
  status: RequestStatus.Idle,
};

export const fullOfferData = createSlice({
  name: NameSpace.Offer,
  initialState,
  reducers: {
    clearFullOffer: (state) => {
      state.info = null;
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
      });
  },
});

export const {clearFullOffer} = fullOfferData.actions;
