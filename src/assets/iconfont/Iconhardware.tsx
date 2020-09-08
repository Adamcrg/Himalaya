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

const Iconhardware: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M722.858667 234.666667a64 64 0 0 1 56.533333 33.984L874.666667 448v256a64 64 0 0 1-64 64H213.333333a64 64 0 0 1-64-64V448l95.274667-179.349333A64 64 0 0 1 301.141333 234.666667h421.717334zM810.666667 501.333333H213.333333V704h597.333334v-202.666667zM618.666667 576v64H384v-64h234.666667z m128 0v64h-64v-64h64z m-23.808-277.333333H301.141333l-73.685333 138.666666h569.066667L722.858667 298.666667z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconhardware.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(Iconhardware) : Iconhardware;
