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

const IcontoolFill: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M874.666667 533.333333v256a64 64 0 0 1-64 64H213.333333a64 64 0 0 1-64-64V533.333333h256v128h213.333334v-128h256z m-320 0v64h-85.333334v-64h85.333334z m85.333333-384a64 64 0 0 1 64 64v170.666667h42.666667v-85.333333h64a64 64 0 0 1 64 64v106.666666H149.333333v-106.666666a64 64 0 0 1 64-64h64v85.333333h42.666667v-170.666667a64 64 0 0 1 64-64h256z m0 64H384v85.333334h256v-85.333334z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IcontoolFill.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(IcontoolFill) : IcontoolFill;
