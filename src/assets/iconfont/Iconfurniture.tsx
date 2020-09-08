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

const Iconfurniture: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M810.666667 170.666667a64 64 0 0 1 64 64v490.666666a64 64 0 0 1-64 64h-64v64h-64v-64H362.666667v64h-64v-64h-64a64 64 0 0 1-64-64V234.666667a64 64 0 0 1 64-64h576z m-320 64H234.666667v490.666666h256V234.666667z m320 0H554.666667v490.666666h256V234.666667z m-362.666667 170.666666v134.250667h-64V405.333333h64z m213.333333 0v134.250667h-64V405.333333h64z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconfurniture.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(Iconfurniture) : Iconfurniture;
