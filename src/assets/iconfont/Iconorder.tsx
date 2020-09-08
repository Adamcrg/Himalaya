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

const Iconorder: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M298.667 192h42.666v63.979l-42.666 0.021v533.333h426.666V256h-42.666v-64h42.666a64 64 0 0 1 64 64v533.333a64 64 0 0 1-64 64H298.667a64 64 0 0 1-64-64V256a64 64 0 0 1 64-64z m256 341.333v64h-192v-64h192z m106.666-128v64H362.667v-64h298.666zM576 128a64 64 0 0 1 64 64v42.667a64 64 0 0 1-64 64H448a64 64 0 0 1-64-64V192a64 64 0 0 1 64-64h128z m0 64H448v42.667h128V192z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconorder.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(Iconorder) : Iconorder;
