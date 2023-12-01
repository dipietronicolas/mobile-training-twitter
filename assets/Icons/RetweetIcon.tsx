import React from 'react';
import { Svg, Path } from 'react-native-svg';

interface IRetweetIcon {
  size: number;
  selected?: boolean;
  color?: string;
}

const RetweetIcon = ({
  size,
  selected = false,
  color = '#000',
}: IRetweetIcon) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 12 13"
      fill="none" >
      <Path
        d="M2.66668 3.16667H9.33335V4.36C9.33335 4.66 9.69335 4.80667 9.90001 4.59334L11.76 2.73333C11.8933 2.6 11.8933 2.39333 11.76 2.26L9.90001 0.400001C9.69335 0.193334 9.33335 0.340001 9.33335 0.640001V1.83333H2.00001C1.63335 1.83333 1.33335 2.13333 1.33335 2.5V5.16667C1.33335 5.53333 1.63335 5.83333 2.00001 5.83333C2.36668 5.83333 2.66668 5.53333 2.66668 5.16667V3.16667ZM9.33335 9.83333H2.66668V8.64C2.66668 8.34 2.30668 8.19333 2.10001 8.40667L0.240015 10.2667C0.106681 10.4 0.106681 10.6067 0.240015 10.74L2.10001 12.6C2.30668 12.8067 2.66668 12.66 2.66668 12.36V11.1667H10C10.3667 11.1667 10.6667 10.8667 10.6667 10.5V7.83333C10.6667 7.46667 10.3667 7.16667 10 7.16667C9.63335 7.16667 9.33335 7.46667 9.33335 7.83333V9.83333Z"
        fill={color}
      />
    </Svg>
  )
}

export default RetweetIcon