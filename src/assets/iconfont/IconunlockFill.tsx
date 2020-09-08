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

const IconunlockFill: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M522.666667 106.666667a181.333333 181.333333 0 0 1 181.333333 181.333333v10.666667h-64v-10.666667a117.333333 117.333333 0 0 0-234.666667 0V341.333333h384a64 64 0 0 1 64 64v384a64 64 0 0 1-64 64H234.666667a64 64 0 0 1-64-64V405.333333a64 64 0 0 1 64-64h106.666666v-53.333333A181.333333 181.333333 0 0 1 522.666667 106.666667zM554.666667 512h-64v170.666667h64v-170.666667z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconunlockFill.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(IconunlockFill) : IconunlockFill;
