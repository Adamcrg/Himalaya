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

const Iconcameraswitching: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M810.666667 277.333333a64 64 0 0 1 64 64v405.333334a64 64 0 0 1-64 64H213.333333a64 64 0 0 1-64-64V341.333333a64 64 0 0 1 64-64h597.333334z m0 64H213.333333v405.333334h597.333334V341.333333z m-149.354667 102.4v88.576L661.333333 533.333333a149.333333 149.333333 0 0 1-272.64 84.266667l73.450667-14.997333A85.333333 85.333333 0 0 0 597.333333 533.333333v-0.021333L571.733333 533.333333l22.570667-22.592v-0.021333l67.008-66.986667zM512 384c51.2 0 96.384 25.770667 123.306667 65.066667l-73.429334 15.018666A85.333333 85.333333 0 0 0 426.666667 533.333333h25.578666l-71.402666 71.466667-18.176 18.133333V533.333333a149.333333 149.333333 0 0 1 149.333333-149.333333z m309.333333-202.666667v64h-256v-64h256z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconcameraswitching.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(Iconcameraswitching) : Iconcameraswitching;
