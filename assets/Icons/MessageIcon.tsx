import React from 'react';
import { Svg, Path } from 'react-native-svg';

interface IMessageIcon {
  size: number;
  selected?: boolean;
  color?: string;
}

const MessageIcon = ({
  size,
  selected,
  color = '#000',
}: IMessageIcon) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      {selected
        ? (
          <Path 
            d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM19.6 8.25L12.53 12.67C12.21 12.87 11.79 12.87 11.47 12.67L4.4 8.25C4.15 8.09 4 7.82 4 7.53C4 6.86 4.73 6.46 5.3 6.81L12 11L18.7 6.81C19.27 6.46 20 6.86 20 7.53C20 7.82 19.85 8.09 19.6 8.25Z"
            fill={color}
          />
        ) : (
          <Path
            d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM19 18H5C4.45 18 4 17.55 4 17V8L10.94 12.34C11.59 12.75 12.41 12.75 13.06 12.34L20 8V17C20 17.55 19.55 18 19 18ZM12 11L4 6H20L12 11Z"
            fill={color}
          />
        )}
    </Svg>

  )
}

export default MessageIcon