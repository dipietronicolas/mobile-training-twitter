
import React from 'react';
import { Svg, Path } from 'react-native-svg';

interface ICommentsIcon {
  size: number;
  selected?: boolean;
  color?: string;
}

const CommentsIcon = ({
  size,
  selected = false,
  color = '#000',
}: ICommentsIcon) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 16 17"
      fill="none"
    >
      <Path
        d="M13.2667 1.16663H2.06669C1.29669 1.16663 0.666687 1.82663 0.666687 2.63329V15.8333L3.46669 12.9H13.2667C14.0367 12.9 14.6667 12.24 14.6667 11.4333V2.63329C14.6667 1.82663 14.0367 1.16663 13.2667 1.16663ZM12.5667 11.4333H3.46669L2.06669 12.9V3.36663C2.06669 2.96329 2.38169 2.63329 2.76669 2.63329H12.5667C12.9517 2.63329 13.2667 2.96329 13.2667 3.36663V10.7C13.2667 11.1033 12.9517 11.4333 12.5667 11.4333Z"
        fill={color}
      />
    </Svg>

  )
}

export default CommentsIcon