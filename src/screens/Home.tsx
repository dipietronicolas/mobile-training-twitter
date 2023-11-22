import React from 'react';
import { Text, View } from 'react-native';

interface IHome {
  message: string;
}

const Home = ({ 
  message 
}: IHome) => {
  return (
    <View>
      <Text>{message}</Text>
    </View>
  )
}

export default Home