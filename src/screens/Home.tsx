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
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  counterContainer: {
    height: '40%',
    width: '100%',
  }
})