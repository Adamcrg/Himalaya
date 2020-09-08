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

const IconserviceFill: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M673.194667 413.973333h78.72c-14.890667-116.053333-116.629333-205.824-239.914667-205.824-123.306667 0-225.024 89.792-239.914667 205.824h78.72v264.661334H234.666667a85.333333 85.333333 0 0 1-85.333334-85.333334v-93.994666a85.376 85.376 0 0 1 60.693334-81.706667l0.917333-0.256C224.490667 267.157333 354.090667 149.333333 512 149.333333c157.888 0 287.509333 117.802667 301.056 268.010667l0.917333 0.256A85.376 85.376 0 0 1 874.666667 499.306667v93.994666a85.333333 85.333333 0 0 1-85.333334 85.333334l-55.722666-0.021334v40.384a106.709333 106.709333 0 0 1-74.368 101.696A78.506667 78.506667 0 0 1 584.704 874.666667h-115.178667a78.421333 78.421333 0 0 1 0-156.821334h115.178667c27.050667 0 50.901333 13.696 64.981333 34.517334a63.744 63.744 0 0 0 23.381334-45.76l0.128-3.754667v-288.853333z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconserviceFill.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(IconserviceFill) : IconserviceFill;
