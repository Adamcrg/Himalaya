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

const IconcartFullFill: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M330.666667 768a53.333333 53.333333 0 1 1 0 106.666667 53.333333 53.333333 0 0 1 0-106.666667z m384 0a53.333333 53.333333 0 1 1 0 106.666667 53.333333 53.333333 0 0 1 0-106.666667zM149.504 160a96 96 0 0 1 92.906667 71.786667l1.024 4.394666L256.64 298.666667 796.096 298.666667a64 64 0 0 1 62.677333 76.949333l-61.653333 298.666667A64 64 0 0 1 734.442667 725.333333H332.224a64 64 0 0 1-62.677333-51.050666l-60.586667-293.418667-0.405333 0.085333-27.733334-131.562666a32 32 0 0 0-28.309333-25.237334l-2.986667-0.149333H94.741333v-64h54.741334zM682.666667 469.333333H384v64h298.666667v-64z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconcartFullFill.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(IconcartFullFill) : IconcartFullFill;
