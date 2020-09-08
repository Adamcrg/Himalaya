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

const IconaddCart: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M330.666667 768a53.333333 53.333333 0 1 1 0 106.666667 53.333333 53.333333 0 0 1 0-106.666667z m384 0a53.333333 53.333333 0 1 1 0 106.666667 53.333333 53.333333 0 0 1 0-106.666667zM149.504 160a96 96 0 0 1 93.930667 76.181333L256.64 298.666667h0.213333l42.88 205.333333L332.224 661.333333h402.218667l61.653333-298.666666H313.813333l-13.376-64h495.68a64 64 0 0 1 62.677334 76.949333l-61.653334 298.666667A64 64 0 0 1 734.442667 725.333333H332.224a64 64 0 0 1-62.677333-51.050666l-60.586667-293.418667-0.405333 0.085333-27.733334-131.562666a32 32 0 0 0-31.317333-25.386667H94.762667v-64zM565.333333 405.333333v74.666667H640v64h-74.666667V618.666667h-64v-74.666667H426.666667v-64h74.666666V405.333333h64z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconaddCart.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(IconaddCart) : IconaddCart;
