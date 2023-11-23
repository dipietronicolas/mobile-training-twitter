import React from 'react';
import { StyleSheet, Text } from 'react-native';

interface ICustomTitle {
  label: string,
}

const CustomTitle = ({
  label,
}: ICustomTitle) => {

  return (
    <Text style={Styles.text}>
      {label}
    </Text>
  )
}

export default CustomTitle;

const Styles = StyleSheet.create({
  text: {
    fontFamily: 'Inter',
    fontSize: 20,
    fontWeight: '500',
    lineHeight: 22,
  }
})