import {createSlice} from '@reduxjs/toolkit';
import {NameSpace, RequestStatus} from '../../const';
import {ReviewsData} from '../../types/state';
import {fetchReviewsAction, postReviewsAction} from '../api-actions';

const initialState: ReviewsData = {
  reviews: [],
  status: RequestStatus.Idle,
};

export const reviewsData = createSlice({
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
      .addCase(fetchReviewsAction.pending, (state) => {
        state.status = RequestStatus.Loading;
      })
      .addCase(fetchReviewsAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
        state.status = RequestStatus.Success;
      })
      .addCase(fetchReviewsAction.rejected, (state) => {
        state.status = RequestStatus.Failed;
      })
      .addCase(postReviewsAction.pending, (state) => {
        state.status = RequestStatus.Loading;
      })
      .addCase(postReviewsAction.fulfilled, (state, action) => {
        state.reviews.push(action.payload);
      })
      .addCase(postReviewsAction.rejected, (state) => {
        state.status = RequestStatus.Failed;
      });
  },
});

export const {clearReviews} = reviewsData.actions;
