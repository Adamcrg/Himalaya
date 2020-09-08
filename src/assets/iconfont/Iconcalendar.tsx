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

const Iconcalendar: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M234.666667 213.333333h57.706666v63.978667L234.666667 277.333333v106.666667h554.666666v-106.666667h-55.232v-64H789.333333a64 64 0 0 1 64 64v512a64 64 0 0 1-64 64H234.666667a64 64 0 0 1-64-64V277.333333a64 64 0 0 1 64-64z m554.666666 234.666667H234.666667v341.333333h554.666666V448z m-384 192v64h-106.666666v-64h106.666666z m160 0v64h-106.666666v-64h106.666666z m160 0v64h-106.666666v-64h106.666666z m-320-128v64h-106.666666v-64h106.666666z m160 0v64h-106.666666v-64h106.666666z m160 0v64h-106.666666v-64h106.666666zM697.728 170.666667v106.666666h-64.021333V170.666667h64z m-104.170667 42.666666v64l-160.618666-0.021333V213.333333h160.618666z m-197.013333-42.666666v106.666666h-64V170.666667h64z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconcalendar.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(Iconcalendar) : Iconcalendar;