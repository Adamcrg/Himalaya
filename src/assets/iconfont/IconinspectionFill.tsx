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

const IconinspectionFill: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M853.333333 405.333333l-0.021333 297.536-0.064-4.010666A149.333333 149.333333 0 1 0 703.850667 853.333333H234.666667a64 64 0 0 1-64-64V405.333333h682.666666z m-153.6 192a102.4 102.4 0 0 1 88.490667 153.962667l61.44 61.44-36.202667 36.202667-61.269333-61.248A102.4 102.4 0 1 1 699.733333 597.333333z m0 64a38.4 38.4 0 1 0 0 76.8 38.4 38.4 0 0 0 0-76.8zM469.333333 448h-170.666666v64h170.666666v-64zM733.482667 170.666667a64 64 0 0 1 57.237333 35.370666l55.850667 111.68A64 64 0 0 1 853.141333 341.333333H171.477333a64 64 0 0 1 5.546667-17.621333l56.490667-116.906667A64 64 0 0 1 291.136 170.666667h442.346667z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconinspectionFill.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(IconinspectionFill) : IconinspectionFill;
