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

const Iconkitchen: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M725.333333 234.666667a128 128 0 0 1 128 128v42.666666h64v64h-64v298.666667a128 128 0 0 1-128 128H298.666667a128 128 0 0 1-128-128V469.333333H106.666667v-64h64v-42.666666a128 128 0 0 1 128-128v64a64 64 0 0 0-64 64v42.666666h554.666666v-42.666666a64 64 0 0 0-64-64v-64zM234.666667 469.333333v298.666667a64 64 0 0 0 64 64h426.666666a64 64 0 0 0 64-64V469.333333h-85.333333v192a64 64 0 0 1-64 64H384a64 64 0 0 1-64-64v-192h-85.333333z m405.333333 0H384v192h256v-192z m-64 64v64h-128v-64h128zM554.666667 106.666667a128 128 0 0 1 127.914666 123.2L682.666667 234.666667v64H341.333333v-64a128 128 0 0 1 128-128h85.333334z m0 64h-85.333334a64 64 0 0 0-64 64h213.333334a64 64 0 0 0-64-64z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconkitchen.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(Iconkitchen) : Iconkitchen;
