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

const IconcolorFill: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M883.84 211.498667v186.410666a96 96 0 0 1-96 96H534.826667v49.173334h7.637333a64 64 0 0 1 64 64V810.666667a64 64 0 0 1-64 64h-79.253333a64 64 0 0 1-64-64v-203.584a64 64 0 0 1 64-64h7.616v-113.173334H787.84a32 32 0 0 0 32-32V211.498667h64zM727.765333 149.333333a64 64 0 0 1 64 64v120.682667a64 64 0 0 1-64 64H213.333333a64 64 0 0 1-64-64V213.333333a64 64 0 0 1 64-64h514.432z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconcolorFill.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(IconcolorFill) : IconcolorFill;
