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

const Iconontimeshipment: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 232.405333c72.021333 0 138.069333 25.493333 189.653333 67.925334l-45.525333 45.546666A233.664 233.664 0 0 0 512 296.384c-129.6 0-234.666667 105.088-234.666667 234.666667 0 129.621333 105.066667 234.666667 234.666667 234.666666s234.666667-105.045333 234.666667-234.666666c0-12.906667-1.045333-25.6-3.050667-37.973334l52.949333-52.949333c9.173333 28.672 14.101333 59.242667 14.101334 90.944 0 164.949333-133.717333 298.666667-298.666667 298.666667s-298.666667-133.717333-298.666667-298.666667 133.717333-298.666667 298.666667-298.666667zM771.328 300.8l45.056 45.461333-273.066667 270.677334-125.973333-125.973334 45.269333-45.248 80.896 80.896 227.84-225.813333zM620.608 128v67.882667H394.346667V128H620.586667z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconontimeshipment.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(Iconontimeshipment) : Iconontimeshipment;
