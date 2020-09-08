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

const Iconinspection: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M733.482667 170.666667a64 64 0 0 1 57.237333 35.370666l55.850667 111.68A64 64 0 0 1 853.333333 346.346667V554.666667h-64v-170.666667H234.666667v405.333333h320v64H234.666667a64 64 0 0 1-64-64V351.552a64 64 0 0 1 6.378666-27.84l56.469334-116.906667A64 64 0 0 1 291.136 170.666667h442.346667zM699.733333 597.333333a102.4 102.4 0 0 1 88.490667 153.962667l61.44 61.44-36.202667 36.202667-61.269333-61.248A102.4 102.4 0 1 1 699.733333 597.333333z m0 64a38.4 38.4 0 1 0 0 76.8 38.4 38.4 0 0 0 0-76.8zM469.333333 448v64h-170.666666v-64h170.666666z m-178.197333-213.333333l-41.237333 85.333333h526.272l-42.688-85.333333H291.136z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconinspection.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(Iconinspection) : Iconinspection;