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

const IconrankinglistFill: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 320c153.173333 0 277.333333 124.16 277.333333 277.333333s-124.16 277.333333-277.333333 277.333334-277.333333-124.16-277.333333-277.333334 124.16-277.333333 277.333333-277.333333z m0 128a149.333333 149.333333 0 1 0 0 298.666667 149.333333 149.333333 0 0 0 0-298.666667z m0 64a85.333333 85.333333 0 1 1 0 170.666667 85.333333 85.333333 0 0 1 0-170.666667z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M736 160a64 64 0 0 1 63.893333 60.245333l0.106667 3.754667v109.248l-50.069333 50.090667a321.066667 321.066667 0 0 0-99.242667-74.453334L650.666667 192h-64v94.08A320.853333 320.853333 0 0 0 512 277.333333a320.853333 320.853333 0 0 0-74.666667 8.746667V192h-64v116.864a321.066667 321.066667 0 0 0-99.264 74.453333L224 333.269333V224a64 64 0 0 1 60.245333-63.893333L288 160h448z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

IconrankinglistFill.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(IconrankinglistFill) : IconrankinglistFill;
