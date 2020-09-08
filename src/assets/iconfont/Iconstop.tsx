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

const Iconstop: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 149.333333c200.298667 0 362.666667 162.368 362.666667 362.666667s-162.368 362.666667-362.666667 362.666667S149.333333 712.298667 149.333333 512 311.701333 149.333333 512 149.333333z m0 64c-164.949333 0-298.666667 133.717333-298.666667 298.666667s133.717333 298.666667 298.666667 298.666667 298.666667-133.717333 298.666667-298.666667-133.717333-298.666667-298.666667-298.666667z m64 170.666667a64 64 0 0 1 64 64v128a64 64 0 0 1-64 64h-128a64 64 0 0 1-64-64v-128a64 64 0 0 1 64-64h128z m0 64h-128v128h128v-128z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconstop.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(Iconstop) : Iconstop;
