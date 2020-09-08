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

const Icontradealert: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M746.666667 149.333333a64 64 0 0 1 64 64v181.333334a64 64 0 0 1 64 64v49.664l-64 58.496v-87.573334l-239.104 197.376a95.978667 95.978667 0 0 1-117.632 3.050667l-3.84-2.986667-236.757334-192V800h372.330667l62.805333 64H213.333333a64 64 0 0 1-64-64v-341.333333a64 64 0 0 1 64-64V213.333333a64 64 0 0 1 64-64h469.333334z m126.869333 467.861334l44.928 45.610666-174.08 171.456-105.536-104.106666 44.970667-45.568 60.586666 59.818666 129.130667-127.210666zM746.666667 213.333333H277.333333v240.853334l213.184 172.906666a32 32 0 0 0 37.845334 1.984l2.56-1.92L746.666667 449.109333V213.333333z m-149.333334 192v64H362.666667v-64h234.666666z m64-128v64H362.666667v-64h298.666666z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Icontradealert.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(Icontradealert) : Icontradealert;
