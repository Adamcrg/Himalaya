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

const IconcecurityProtectionFill: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 149.333333c153.173333 0 277.333333 124.16 277.333333 277.333334 0 112.32-66.773333 209.066667-162.794666 252.650666L648.533333 789.333333H725.333333v64H298.666667v-64h76.8l22.016-109.994666C301.461333 635.733333 234.666667 539.008 234.666667 426.666667c0-153.173333 124.16-277.333333 277.333333-277.333334z m0 128a149.333333 149.333333 0 1 0 0 298.666667 149.333333 149.333333 0 0 0 0-298.666667z m0 64a85.333333 85.333333 0 1 1 0 170.666667 85.333333 85.333333 0 0 1 0-170.666667z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconcecurityProtectionFill.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(IconcecurityProtectionFill) : IconcecurityProtectionFill;
