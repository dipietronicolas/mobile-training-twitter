import React from 'react';
import { ActivityIndicator } from 'react-native';

interface ISpinner {
  size?: 'large' | 'small';
  color?: string;
}

const Spinner = ({
  size = 'small',
  color = '#fff',
}: ISpinner) => {
  return (
    <ActivityIndicator
      size={size}
      color={color}
    />
  )
}

export default Spinner