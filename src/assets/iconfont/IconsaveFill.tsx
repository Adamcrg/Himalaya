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

const IconsaveFill: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M320 170.666667v213.333333h384V191.381333l149.333333 153.322667V789.333333a64 64 0 0 1-64 64h-85.333333V533.333333H320v320h-85.333333a64 64 0 0 1-64-64V234.666667a64 64 0 0 1 64-64h85.333333z m320 448v234.666666H384V618.666667h256z m-42.666667 42.666666h-170.666666v64h170.666666v-64z m42.666667-490.666666v149.333333H384V170.666667h256z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconsaveFill.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(IconsaveFill) : IconsaveFill;
