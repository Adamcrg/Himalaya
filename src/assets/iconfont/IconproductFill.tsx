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

const IconproductFill: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M853.333333 384v405.333333a64 64 0 0 1-64 64H234.666667a64 64 0 0 1-64-64V384h682.666666z m-384 64h-170.666666v64h170.666666v-64zM733.482667 170.666667a64 64 0 0 1 57.237333 35.370666l55.850667 111.68 1.024 2.282667H178.816l54.698667-113.173333A64 64 0 0 1 291.136 170.666667h442.346667z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconproductFill.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(IconproductFill) : IconproductFill;
