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

const Icontool: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M277.333333 298.666667v64h-64v106.666666h597.333334v-106.666666h-64v-64h64a64 64 0 0 1 64 64v426.666666a64 64 0 0 1-64 64H213.333333a64 64 0 0 1-64-64V362.666667a64 64 0 0 1 64-64h64z m533.333334 234.666666h-192v128H405.333333v-128h-192v256h597.333334V533.333333z m-256 0h-85.333334v64h85.333334v-64z m85.333333-384a64 64 0 0 1 64 64v149.333334H320v-149.333334a64 64 0 0 1 64-64h256z m0 64H384v85.333334h256v-85.333334z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Icontool.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(Icontool) : Icontool;
