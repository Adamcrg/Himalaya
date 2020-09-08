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

const IconcompanyFill: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M619.712 198.186667v603.264h44.544V342.101333l144.576 50.88c12.778667 8.298667 20.864 22.037333 22.037333 37.077334l0.149334 3.797333-0.021334 367.594667h48.917334v64h-666.453334v-64h48.64l0.021334-489.493334c0-16.810667 8.661333-32.426667 22.912-41.365333l260.053333-113.770667c32.490667-20.288 74.624 3.050667 74.624 41.344z m-107.413333 284.010666l-142.72 58.944v69.226667l142.72-58.944v-69.226667z m0-151.36l-142.72 60.714667v69.546667l142.72-60.757334v-69.504z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconcompanyFill.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(IconcompanyFill) : IconcompanyFill;