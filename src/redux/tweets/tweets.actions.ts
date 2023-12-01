import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getAllTweets,
  getForYouTweets,
  postReTweet,
} from './tweets.services';

export const getForYouTweetsAsync = createAsyncThunk(
  'tweets/getForYouTweetsAsync',
  getForYouTweets
)

export const getAllTweetsAsync = createAsyncThunk(
  'users/getAllTweetsAsync',
  getAllTweets
)

export const postReTweetAsync = createAsyncThunk(
  'tweets/reTweetAsync',
  postReTweet
)



