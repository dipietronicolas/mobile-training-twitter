import React from 'react'
import { Image, StyleSheet, View, Text } from 'react-native';
import { Tweet } from '../../utils/types';
import TweetActions from './TweetActions';

interface ITweet {
  tweet: Tweet;
  onReTweetLoading: boolean;
  onReTweet: (tweetId: string) => void;
}

const TweetComponent = ({
  tweet,
  onReTweetLoading,
  onReTweet,
}: ITweet) => {

  const [areTweetActionsLoading, setAreTweetActionsLoading] = React.useState(false);

  const handleOnReTweet = (tweetId: string) => {
    setAreTweetActionsLoading(true);
    onReTweet(tweetId);
  }

  React.useEffect(() => {
    !onReTweetLoading && setAreTweetActionsLoading(false);
  }, [onReTweetLoading]);

  return (
    <View style={Styles.mainContainer}>
      <View style={Styles.imgContainer}>
        <Image
          source={{
            uri: tweet.user?.imageUrl
          }}
          style={Styles.userProfileImg}
        />
      </View>
      <View style={Styles.dataContainer}>
        <View style={Styles.headerContainer}>
          <Text style={Styles.name}>{tweet.user.name}</Text>
          <Text style={Styles.username}>@{tweet.user.username}</Text>
          <Text style={Styles.username}>·</Text>
          <Text style={Styles.username}>{tweet.timestamp}</Text>
        </View>
        <View style={Styles.tweetContainer}>
          <Text style={Styles.tweet}>{tweet.text}</Text>
        </View>
        {tweet?.imageUrl && (
          <Image
            source={{
              uri: tweet?.imageUrl
            }}
            style={Styles.tweetImg}
          />
        )}
        <View style={Styles.tweetActionsContainer}>
          <TweetActions
            tweetId={tweet.id.toString()}
            onReTweetLoading={onReTweetLoading && areTweetActionsLoading}
            onReTweet={handleOnReTweet}
          />
        </View>
      </View>
    </View>
  )
}

export default TweetComponent;

const Styles = StyleSheet.create({
  mainContainer: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F3F4',
    paddingBottom: 8,
  },
  imgContainer: {
    width: '15%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    paddingLeft: 8,
  },
  userProfileImg: {
    height: 36,
    width: 36,
    borderRadius: 100,
  },
  dataContainer: {
    display: 'flex',
    width: '85%',
    height: '100%',
    paddingLeft: 8,
    gap: 8,
  },
  tweet: {
    fontSize: 15,
    fontWeight: '400',
  },
  tweetImg: {
    height: 200,
    width: 280,
    borderRadius: 10,
  },
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    paddingLeft: 0,
    gap: 8,
  },
  name: {
    fontWeight: '600',
    fontSize: 15,
  },
  username: {
    color: '#566370',
    fontWeight: '400',
    fontSize: 15,
  },
  tweetContainer: {
    padding: 8,
    paddingRight: 24,
    paddingLeft: 0,
  },
  tweetActionsContainer: {
    display: 'flex',
    alignItems: 'flex-start',
    width: '100%',
  }
})