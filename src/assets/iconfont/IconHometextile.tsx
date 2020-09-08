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

const IconHometextile: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M288 896h-64v-64H192a64 64 0 0 1-64-64V490.666667a64 64 0 0 1 64-64h21.333333V170.666667a64 64 0 0 1 64-64h469.333334a64 64 0 0 1 64 64v256h21.333333a64 64 0 0 1 64 64v277.333333a64 64 0 0 1-64 64h-53.333333v64h-64v-64h-426.666667v64z m39.317333-405.333333H192v277.333333h640V490.666667h-135.317333v106.666666H327.253333v-64l0.042667-42.666666zM746.666667 170.666667H277.333333v256h49.984a64 64 0 0 1 64 64l-0.021333 42.666666h241.386667v-42.666666a64 64 0 0 1 64-64H746.666667V170.666667z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconHometextile.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(IconHometextile) : IconHometextile;
