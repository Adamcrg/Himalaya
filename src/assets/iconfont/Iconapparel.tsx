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

const Iconapparel: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M661.333333 149.333333v0.384a21.333333 21.333333 0 0 1 17.173334 4.096l2.005333 1.770667 64.490667 64.448A128.064 128.064 0 0 1 832 341.333333v448a64 64 0 0 1-64 64H256a64 64 0 0 1-64-64V341.333333a128.042667 128.042667 0 0 1 103.125333-125.589333l60.224-60.16c2.133333-2.154667 4.650667-3.754667 7.317334-4.8V149.333333h298.666666z m-405.333333 192v448h512V341.333333a63.786667 63.786667 0 0 0-5.610667-26.24l-142.208 142.186667a21.333333 21.333333 0 0 1-28.16 1.770667l-2.005333-1.770667-72.085333-72.085333-72.085334 72.085333a21.333333 21.333333 0 0 1-30.165333 0l-149.930667-149.930667A63.701333 63.701333 0 0 0 256 341.333333z m256 298.666667a42.666667 42.666667 0 1 1 0 85.333333 42.666667 42.666667 0 0 1 0-85.333333z m0-149.333333a42.666667 42.666667 0 1 1 0 85.333333 42.666667 42.666667 0 0 1 0-85.333333z m-141.568-259.669334l-45.248 45.269334 105.6 105.6 45.226667-45.269334-105.578667-105.6z m294.997333 0l-105.6 105.6 45.269334 45.248 104.277333-104.298666A64.853333 64.853333 0 0 0 704 277.333333h5.589333l1.109334-1.066666-45.269334-45.269334zM592.576 213.333333h-149.290667l74.645334 74.666667 74.645333-74.666667z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconapparel.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(Iconapparel) : Iconapparel;
