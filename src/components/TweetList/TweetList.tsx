import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList
} from 'react-native';
import TweetComponent from './TweetComponent';
import Spinner from '../common/Spinner/Spinner';
import useTweets from '../../hooks/useTweets';
import { TWEET_TYPES } from '../../utils/constants';

interface ITweetList {
  tweetType: TWEET_TYPES;
}

const TweetList = ({
  tweetType,
}: ITweetList) => {

  const {
    allTweets,
    allTweetsLoading,
    forYouTweets,
    forYouTweetsLoading,
    reTweetLoading,
    getAllTweets,
    getForYouTweets,
    reTweet,
  } = useTweets();

  const someProcessLoading = allTweetsLoading.loading || forYouTweetsLoading.loading;

  React.useEffect(() => {
    tweetType === TWEET_TYPES.ALL_TWEETS && getAllTweets();
    tweetType === TWEET_TYPES.FOR_YOU_TWEETS && getForYouTweets();
  }, []);

  const handleOnEndReach = (tweetType: TWEET_TYPES) => {
    if (tweetType === TWEET_TYPES.ALL_TWEETS) {
      const { currentPage, totalPages } = allTweets;
      (totalPages - currentPage > 0) && getAllTweets(currentPage + 1)
    } else {
      const { currentPage, totalPages } = forYouTweets;
      (totalPages - currentPage > 0) && getForYouTweets(currentPage + 1)
    }
  }

  return (
    <>
      <FlatList
        data={
          tweetType === TWEET_TYPES.ALL_TWEETS
            ? allTweets.tweets
            : forYouTweets.tweets
        }
        renderItem={({ item }) => (
          <TweetComponent
            tweet={item}
            onReTweet={reTweet}
            onReTweetLoading={reTweetLoading.loading}
          />
        )}
        keyExtractor={item => item.id.toString()}
        ListFooterComponent={() => someProcessLoading && (
          <View style={Styles.loaderContainer}>
            <Spinner color="#4A99E9" size='large' />
          </View>
        )}
        onEndReached={() => !someProcessLoading && handleOnEndReach(tweetType)}
        onEndReachedThreshold={0}
      />
      <TouchableOpacity style={Styles.actionButton}>
        <Text style={Styles.buttonLabel}>+</Text>
      </TouchableOpacity>
    </>
  )
}

export default TweetList;

const Styles = StyleSheet.create({
  mainView: {
    position: 'relative',
  },
  loaderContainer: {
    padding: 8,
  },
  actionButton: {
    position: 'absolute',
    bottom: 24,
    right: 16,
    height: 48,
    width: 48,
    paddingBottom: 5,
    backgroundColor: '#4A99E9',
    borderRadius: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonLabel: {
    color: '#fff',
    fontSize: 30,
    fontWeight: '700',
  }
})