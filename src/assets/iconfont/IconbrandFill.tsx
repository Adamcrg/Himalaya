/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { Svg, GProps, Path } from 'react-native-svg';
import { getIconColor } from './helper';

interface Props extends GProps, ViewProps {
  size?: number;
  color?: string | string[];
}

const IconbrandFill: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M544 146.474667l213.12 123.050666a64 64 0 0 1 32 55.424v246.101334a64 64 0 0 1-31.253333 54.997333l77.056 133.44-140.416 32.810667-91.648 102.4-79.466667-137.621334c-9.813333 1.770667-19.925333 1.237333-29.525333-1.6l-80.362667 139.221334-91.669333-102.4L181.418667 759.466667l79.189333-137.130667a64 64 0 0 1-25.728-51.306667V324.949333a64 64 0 0 1 32-55.424l213.12-123.050666a64 64 0 0 1 64 0zM315.797333 654.698667l-35.84 62.08 76.096 17.770666 46.186667 51.626667 35.306667-61.184-121.749334-70.293333z m386.624 3.328L580.693333 728.32l33.429334 57.856 46.186666-51.626667 76.074667-17.749333-33.92-58.773333zM512 320a128 128 0 1 0 0 256 128 128 0 0 0 0-256z m0 64a64 64 0 1 1 0 128 64 64 0 0 1 0-128z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconbrandFill.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(IconbrandFill) : IconbrandFill;