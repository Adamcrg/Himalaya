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

const IconxinxibarShouji: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 149.333333c200.298667 0 362.666667 162.368 362.666667 362.666667s-162.368 362.666667-362.666667 362.666667S149.333333 712.298667 149.333333 512 311.701333 149.333333 512 149.333333z m128 234.666667H384v397.909333A297.514667 297.514667 0 0 0 512 810.666667c45.802667 0 89.194667-10.304 128-28.736V384z m-128 320a42.666667 42.666667 0 1 1 0 85.333333 42.666667 42.666667 0 0 1 0-85.333333z m0-490.666667c-164.949333 0-298.666667 133.717333-298.666667 298.666667a298.026667 298.026667 0 0 0 106.645334 228.757333L320 360c0-22.101333 17.92-40 40-40h304c22.101333 0 40 17.92 40 40v380.8A298.026667 298.026667 0 0 0 810.666667 512c0-164.949333-133.717333-298.666667-298.666667-298.666667z m64 213.333334v64h-128v-64h128z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconxinxibarShouji.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(IconxinxibarShouji) : IconxinxibarShouji;