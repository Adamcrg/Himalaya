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

const IconimageText: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M789.333333 170.666667a64 64 0 0 1 64 64v554.666666a64 64 0 0 1-64 64H234.666667a64 64 0 0 1-64-64V234.666667a64 64 0 0 1 64-64h554.666666z m0 64H234.666667v554.666666h554.666666V234.666667z m-42.666666 384v64H277.333333v-64h469.333334zM469.333333 320a64 64 0 0 1 64 64v106.666667a64 64 0 0 1-64 64h-128a64 64 0 0 1-64-64v-106.666667a64 64 0 0 1 64-64h128z m277.333334 170.666667v64h-170.666667v-64h170.666667z m-277.333334-106.666667h-128v106.666667h128v-106.666667z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconimageText.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(IconimageText) : IconimageText;
