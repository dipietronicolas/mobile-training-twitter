import React from 'react';
import { Svg, Path } from 'react-native-svg';

interface IHomeIcon {
  size: number;
  selected?: boolean;
  color?: string;
}

const HomeIcon = ({
  size,
  selected = false,
  color = '#000',
}: IHomeIcon) => {
  
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
    >
      {selected
        ? (
          <Path
            d="M10.0001 17.4167V12.8333H14.0001V17.4167C14.0001 17.9208 14.4501 18.3333 15.0001 18.3333H18.0001C18.5501 18.3333 19.0001 17.9208 19.0001 17.4167V11H20.7001C21.1601 11 21.3801 10.4775 21.0301 10.2025L12.6701 3.3C12.2901 2.98834 11.7101 2.98834 11.3301 3.3L2.9701 10.2025C2.6301 10.4775 2.8401 11 3.3001 11H5.0001V17.4167C5.0001 17.9208 5.4501 18.3333 6.0001 18.3333H9.0001C9.5501 18.3333 10.0001 17.9208 10.0001 17.4167Z"
            fill={color}
          />
        ) : (
          <Path
            d="M12 6.69L17 11.19V19H15V13H9V19H7V11.19L12 6.69ZM12 4L2 13H5V21H11V15H13V21H19V13H22L12 4Z"
            fill={color}
          />
        )}
    </Svg>
  )
}

export default HomeIcon