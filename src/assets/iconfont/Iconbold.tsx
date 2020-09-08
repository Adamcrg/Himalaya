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

const Iconbold: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M618.666667 160v1.173333c89.706667 9.92 160 81.557333 160 169.493334 0 55.04-27.52 103.68-70.101334 134.826666 67.264 36.672 112.768 105.685333 112.768 185.173334 0 111.338667-89.258667 202.154667-202.645333 212.373333L618.666667 864H234.666667v-64h64v-576h-64v-64h384z m-256 341.333333v298.666667h234.666666c86.976 0 157.141333-64.618667 159.914667-144.426667l0.085333-4.906666c0-82.048-71.253333-149.333333-160-149.333334H362.666667z m234.666666-277.333333H362.666667v213.333333h234.666666l4.864-0.085333c63.018667-2.346667 112.469333-49.685333 112.469334-106.581333 0-58.368-52.032-106.666667-117.333334-106.666667z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconbold.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(Iconbold) : Iconbold;
