import {createSlice} from '@reduxjs/toolkit';
import {NameSpace, RequestStatus} from '../../const';
import {ReviewsData} from '../../types/state';
import {fetchReviews, postReviews} from '../api-actions';

const initialState: ReviewsData = {
  reviews: [],
  status: RequestStatus.Idle,
};

const reviewsData = createSlice({
  name: NameSpace.Review,
  initialState,
  reducers: {
    clearReviews: (state) => {
      state.reviews = [];
      state.status = RequestStatus.Idle;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchReviews.pending, (state) => {
        state.status = RequestStatus.Loading;
      })
      .addCase(fetchReviews.fulfilled, (state, action) => {
        state.reviews = action.payload;
        state.status = RequestStatus.Success;
      })
      .addCase(fetchReviews.rejected, (state) => {
        state.status = RequestStatus.Failed;
      })
      .addCase(postReviews.pending, (state) => {
        state.status = RequestStatus.Loading;
      })
      .addCase(postReviews.fulfilled, (state, action) => {
        state.reviews.push(action.payload);
      })
      .addCase(postReviews.rejected, (state) => {
        state.status = RequestStatus.Failed;
      });
  },
});

const reviewsActions = {...reviewsData.actions, fetchReviews, postReviews};

export {reviewsActions, reviewsData};
