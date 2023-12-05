import React from 'react';
import {
  Image,
  StyleSheet,
  View,
  useWindowDimensions,
} from 'react-native';
import { TabView, TabBar, TabBarProps, SceneMap } from 'react-native-tab-view';
import TwitterLogo from '../../assets/Icons/TwitterLogo';
import TweetList from '../components/TweetList/TweetList';
import { TWEET_TYPES } from '../utils/constants';
import useAuth from '../hooks/useAuth';

const scenes = SceneMap({
  first: () => <TweetList tweetType={TWEET_TYPES.FOR_YOU_TWEETS} />,
  second: () => <TweetList tweetType={TWEET_TYPES.ALL_TWEETS} />,
})

const Home = () => {

  const {
    currentUserData
  } = useAuth();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'For you' },
    { key: 'second', title: 'Following' },
  ]);

  const layout = useWindowDimensions();

  const renderTabBar = (props: TabBarProps<typeof routes[0]>) => (
    <TabBar
      {...props}
      indicatorStyle={{
        backgroundColor: '#4A99E9',
      }}
      labelStyle={{
        color: '#000',
        textTransform: 'capitalize',
        fontWeight: '600',
      }}
      style={{ backgroundColor: '#fff' }}
    />
  )

  return (
    <View style={Styles.mainContainer}>
      <View style={Styles.header}>
        <Image
          source={{
            uri: currentUserData.imageUrl
          }}
          style={Styles.profilePic}
        />
        <TwitterLogo
          size={36}
        />
      </View>
      <TabView
        navigationState={{ index, routes }}
        renderScene={scenes}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        renderTabBar={renderTabBar}
      />
    </View>
  )
}

export default Home;

const Styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  header: {
    height: 70,
    width: '100%',
    backgroundColor: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profilePic: {
    position: 'absolute',
    top: 19,
    left: 16,
    height: 32,
    width: 32,
    borderRadius: 100
  }
})