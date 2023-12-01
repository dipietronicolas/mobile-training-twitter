import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../redux/store';
import { tweetsActions } from '../redux/tweets/tweets.slice';

const useTweets = () => {

  const dispatch = useDispatch<AppDispatch>();
  const allTweets = useSelector((state: RootState) => state.tweets.allTweets)
  const forYouTweets = useSelector((state: RootState) => state.tweets.forYouTweets)
  const allTweetsLoading = useSelector((state: RootState) => state.tweets.allTweetsLoading)
  const forYouTweetsLoading = useSelector((state: RootState) => state.tweets.forYouTweetsLoading)
  const reTweetLoading = useSelector((state: RootState) => state.tweets.reTweetLoading)

  const getAllTweets = (page = 1) => dispatch(tweetsActions.getAllTweetsAsync(page))
  const getForYouTweets = (page = 1) => dispatch(tweetsActions.getForYouTweetsAsync(page));
  const reTweet = (tweetId: string) => dispatch(tweetsActions.postReTweetAsync(tweetId));

  return {
    allTweets,
    forYouTweets,
    allTweetsLoading,
    forYouTweetsLoading,
    reTweetLoading,
    getAllTweets,
    getForYouTweets,
    reTweet,
  }
}

export default useTweets;