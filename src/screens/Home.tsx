import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Counter from '../components/Counter/Counter';

interface IHome {
  message: string;
}

const Home = ({
  message
}: IHome) => {
  return (
    <View style={Styles.mainContainer}>
      <Text>{message}</Text>
      <View style={Styles.counterContainer}>
        <Counter />
      </View>
    </View>
  )
}

export default Home;

const Styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  counterContainer: {
    height: '40%',
    width: '100%',
  }
})