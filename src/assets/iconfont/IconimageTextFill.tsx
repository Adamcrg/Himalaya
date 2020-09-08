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

const IconimageTextFill: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M789.333333 170.666667a64 64 0 0 1 64 64v554.666666a64 64 0 0 1-64 64H234.666667a64 64 0 0 1-64-64V234.666667a64 64 0 0 1 64-64h554.666666z m-42.666666 448H277.333333v64h469.333334v-64zM469.333333 320h-128a64 64 0 0 0-64 64v106.666667a64 64 0 0 0 64 64h128a64 64 0 0 0 64-64v-106.666667a64 64 0 0 0-64-64z m277.333334 170.666667h-170.666667v64h170.666667v-64z m-277.333334-106.666667v106.666667h-128v-106.666667h128z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconimageTextFill.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(IconimageTextFill) : IconimageTextFill;
