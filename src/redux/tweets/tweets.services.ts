import axios from "axios";

const BASE_URL = 'http://localhost:3000';

export const getAllTweets = async (
  page: number,
  thunkAPI: any
) => {
  try {
    const results = await axios(`${BASE_URL}/tweets?page=${page}`);
    return {
      data: results.data,
    }
  } catch (error) {
    return {
      error: 'error message set on tweets.services.ts',
    }
  }
}

export const getForYouTweets = async (
  page: number,
  thunkAPI: any
) => {
  try {
    const results = await axios(`${BASE_URL}/forYouTweets?page=${page}`);
    return {
      data: results.data,
    }
  } catch (error) {
    return thunkAPI.rejectWithValue({
      data: [],
    })
  }
}


export const postReTweet = async (
  tweetId: string,
  thunkAPI: any
) => {
  try {
    await axios.post(`${BASE_URL}/retweet`, { tweetId });
    return {
      data: true,
    }
  } catch (error) {
    return thunkAPI.rejectWithValue({
      data: false,
    })
  }
}

