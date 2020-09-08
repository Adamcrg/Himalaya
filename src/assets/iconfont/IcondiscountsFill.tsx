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

const IcondiscountsFill: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M793.429333 296.213333V789.333333a64 64 0 0 1-64 64h-426.666666a64 64 0 0 1-64-64V298.965333l277.290666 108.224 277.376-110.976z m-219.946666 150.485334l-57.386667 57.386666-57.365333-57.386666-45.248 45.269333 49.365333 49.365333h-66.752v64h88V629.333333h-88v64h88v56h64V693.333333h88v-64h-88v-24h88v-64h-66.773333l49.408-49.365333-45.248-45.269333zM729.429333 170.666667a64 64 0 0 1 64 64v15.530666l-277.269333 110.592-277.397333-107.690666V234.666667a64 64 0 0 1 64-64h426.666666z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IcondiscountsFill.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(IcondiscountsFill) : IcondiscountsFill;
