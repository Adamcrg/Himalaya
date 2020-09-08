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

const Iconcalculator: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M789.333333 170.666667a64 64 0 0 1 64 64v554.666666a64 64 0 0 1-64 64H234.666667a64 64 0 0 1-64-64V234.666667a64 64 0 0 1 64-64h554.666666z m0 277.333333H234.666667v341.333333h554.666666V448zM565.333333 661.333333v64H298.666667v-64h266.666666z m160 0v64h-106.666666v-64h106.666666z m-320-128v64h-106.666666v-64h106.666666z m160 0v64h-106.666666v-64h106.666666z m160 0v64h-106.666666v-64h106.666666z m64-298.666666H234.666667v149.333333h554.666666v-149.333333z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconcalculator.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(Iconcalculator) : Iconcalculator;
