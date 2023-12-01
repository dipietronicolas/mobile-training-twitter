import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import CommentsIcon from '../../../assets/Icons/CommentsIcon';
import RetweetIcon from '../../../assets/Icons/RetweetIcon';
import LikeIcon from '../../../assets/Icons/LikeIcon';
import Spinner from '../common/Spinner/Spinner';

interface ITweetActions {
  tweetId: string;
  onReTweetLoading: boolean;
  onReTweet: (tweetId: string) => void;
}

const TweetActions = ({
  tweetId,
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
      <Text style={Styles.label}>0</Text>
      <TouchableOpacity
        onPress={() => onReTweet(tweetId)}
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
      <Text style={Styles.label}>0</Text>
      <TouchableOpacity>
        <LikeIcon
          size={16}
          color={'#566370'}
        />
      </TouchableOpacity>
      <Text style={Styles.label}>0</Text>
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