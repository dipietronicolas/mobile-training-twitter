import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import CommentsIcon from '../../../assets/Icons/CommentsIcon';
import RetweetIcon from '../../../assets/Icons/RetweetIcon';
import LikeIcon from '../../../assets/Icons/LikeIcon';
import Spinner from '../common/Spinner/Spinner';
import { Tweet } from '../../utils/types';

interface ITweetActions {
  tweet: Tweet;
  onReTweetLoading: boolean;
  onReTweet: (tweetId: string | number) => void;
}

const TweetActions = ({
  tweet,
  onReTweetLoading,
  onReTweet,
}: ITweetActions) => {
  return (
    <View style={Styles.mainContainer}>
      <TouchableOpacity>
        <CommentsIcon
          size={16}
          color={'#566370'}
        />
      </TouchableOpacity>
      <Text style={Styles.label}>{tweet.comments}</Text>
      <TouchableOpacity
        onPress={() => onReTweet(tweet.id)}
        disabled={onReTweetLoading}
      >
        {onReTweetLoading
          ? <Spinner color={'#4A99E9'} />
          : (
            <RetweetIcon
              size={16}
              color={'#566370'}
            />
          )}
      </TouchableOpacity>
      <Text style={Styles.label}>{tweet.reTweets}</Text>
      <TouchableOpacity>
        <LikeIcon
          size={16}
          color={'#566370'}
        />
      </TouchableOpacity>
      <Text style={Styles.label}>{tweet.likes}</Text>
    </View>
  )
}

export default TweetActions;

const Styles = StyleSheet.create({
  mainContainer: {
    display: 'flex',
    flexDirection: 'row',
    padding: 8,
    gap: 24,
  },
  label: {
    color: '#566370',
  }
})