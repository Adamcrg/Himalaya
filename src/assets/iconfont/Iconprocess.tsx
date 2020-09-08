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

const Iconprocess: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M789.333333 532.138667a64 64 0 0 1 64 64v194.389333a64 64 0 0 1-64 64h-194.368a64 64 0 0 1-64-64v-194.389333a64 64 0 0 1 64-64H789.333333z m0 64h-194.368v194.389333H789.333333v-194.389333z m-436.16-64.021334v137.514667L490.666667 669.610667v64h-137.472a64 64 0 0 1-64-64l-0.021334-137.472 64-0.021334zM426.666667 169.472a64 64 0 0 1 64 64v194.389333a64 64 0 0 1-64 64h-194.368a64 64 0 0 1-64-64v-194.389333a64 64 0 0 1 64-64H426.666667z m241.770666 120.896a64 64 0 0 1 64 64v137.472l-64-0.021333v-137.450667h-137.493333v-64h137.493333zM426.666667 233.472h-194.368v194.389333H426.666667v-194.389333z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconprocess.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(Iconprocess) : Iconprocess;
