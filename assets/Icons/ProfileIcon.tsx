import React from 'react';
import { Svg, Path } from 'react-native-svg';


interface IProfileIcon {
  size: number;
  selected?: boolean;
  color?: string;
}

const ProfileIcon = ({
  size,
  selected = false,
  color = '#000',
}: IProfileIcon) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      {selected
        ? (
          <>
            <Path
              opacity="0.3"
              d="M12 10C13.1046 10 14 9.10457 14 8C14 6.89543 13.1046 6 12 6C10.8954 6 10 6.89543 10 8C10 9.10457 10.8954 10 12 10Z"
              fill={color}
            />
            <Path
              opacity="0.3"
              d="M12 15C9.3 15 6.2 16.29 6 17.01V18H18V17C17.8 16.29 14.7 15 12 15Z"
              fill={color}
            />
            <Path
              d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 13C9.33 13 4 14.34 4 17V20H20V17C20 14.34 14.67 13 12 13Z"
              fill={color}
            />
          </>
        ) : (
          <Path
            d="M12 5.9C13.16 5.9 14.1 6.84 14.1 8C14.1 9.16 13.16 10.1 12 10.1C10.84 10.1 9.9 9.16 9.9 8C9.9 6.84 10.84 5.9 12 5.9ZM12 14.9C14.97 14.9 18.1 16.36 18.1 17V18.1H5.9V17C5.9 16.36 9.03 14.9 12 14.9ZM12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4ZM12 13C9.33 13 4 14.34 4 17V20H20V17C20 14.34 14.67 13 12 13Z"
            fill={color}
          />
        )}
    </Svg>

  )
}

export default ProfileIcon