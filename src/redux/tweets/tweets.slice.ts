import { createSlice } from '@reduxjs/toolkit';
import { LOADING_STATE } from '../../utils/constants';
import { LoadingState, Tweet } from '../../utils/types';
import {
  getAllTweetsAsync,
  getForYouTweetsAsync,
  postReTweetAsync,
} from './tweets.actions';

export interface TweetsState {
  allTweets: {
    currentPage: number;
    totalPages: number;
    tweets: Tweet[];
  }
  forYouTweets: {
    currentPage: number;
    totalPages: number;
    tweets: Tweet[];
  };
  allTweetsLoading: LoadingState;
  forYouTweetsLoading: LoadingState;
  reTweetLoading: LoadingState;
}

const initialState: TweetsState = {
  allTweets: {
    currentPage: 1,
    totalPages: 1,
    tweets: [],
  },
  forYouTweets: {
    currentPage: 1,
    totalPages: 1,
    tweets: [],
  },
  allTweetsLoading: LOADING_STATE.NONE,
  forYouTweetsLoading: LOADING_STATE.NONE,
  reTweetLoading: LOADING_STATE.NONE,
}

export const tweetsSlice = createSlice({
  name: 'tweets',
  initialState,
  reducers: {
    resetState: (state) => {
      state.allTweets = {
        currentPage: 1,
        totalPages: 1,
        tweets: [],
      };
      state.forYouTweets = {
        currentPage: 1,
        totalPages: 1,
        tweets: [],
      };
      state.allTweetsLoading = LOADING_STATE.NONE;
      state.forYouTweetsLoading = LOADING_STATE.NONE;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(tweetsActions.getAllTweetsAsync.pending, (state) => {
        state.allTweetsLoading = LOADING_STATE.LOADING;
      })
      .addCase(tweetsActions.getAllTweetsAsync.fulfilled, (state, action) => {
        state.allTweets = {
          ...action.payload.data,
          tweets: [
            ...state.allTweets.tweets,
            ...action.payload.data.tweets
          ]
        };
        state.allTweetsLoading = LOADING_STATE.SUCCESS;
      })
      .addCase(tweetsActions.getAllTweetsAsync.rejected, (state) => {
        state.allTweetsLoading = LOADING_STATE.ERROR;
      })
      .addCase(tweetsActions.getForYouTweetsAsync.pending, (state) => {
        state.forYouTweetsLoading = LOADING_STATE.LOADING;
      })
      .addCase(tweetsActions.getForYouTweetsAsync.fulfilled, (state, action) => {
        state.forYouTweets = {
          ...action.payload.data,
          tweets: [
            ...state.forYouTweets.tweets,
            ...action.payload.data.tweets
          ]
        };
        state.forYouTweetsLoading = LOADING_STATE.SUCCESS;
      })
      .addCase(tweetsActions.getForYouTweetsAsync.rejected, (state) => {
        state.forYouTweetsLoading = LOADING_STATE.ERROR;
      })
      .addCase(tweetsActions.postReTweetAsync.pending, (state) => {
        state.reTweetLoading = LOADING_STATE.LOADING;
      })
      .addCase(tweetsActions.postReTweetAsync.fulfilled, (state) => {
        state.reTweetLoading = LOADING_STATE.SUCCESS;
      })
      .addCase(tweetsActions.postReTweetAsync.rejected, (state) => {
        state.reTweetLoading = LOADING_STATE.ERROR;
      })
  }
})

export const { actions } = tweetsSlice;

export const tweetsActions = {
  getAllTweetsAsync,
  getForYouTweetsAsync,
  postReTweetAsync,
  ...actions,
}

export default tweetsSlice.reducer;