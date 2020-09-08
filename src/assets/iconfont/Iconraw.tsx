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

const Iconraw: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M414.976 170.666667l-0.021333 113.536h132.138666v68.138666H503.04v158.336l128.490667 265.429334c16.298667 33.664 3.029333 74.581333-29.610667 91.392a64.426667 64.426667 0 0 1-29.504 7.168H191.445333c-36.48 0-66.048-30.506667-66.048-68.138667 0-10.56 2.368-20.970667 6.954667-30.421333l128.448-265.429334v-158.336h-44.032v-68.117333l132.138667-0.021333V170.666667h66.069333zM768 284.224v134.016c80.917333 37.12 137.344 120.746667 137.344 217.984 0 113.557333-76.970667 208.576-180.053333 232.576l-31.018667-63.509333c81.706667-10.261333 145.002667-82.048 145.002667-169.066667 0-67.968-38.933333-128.576-98.133334-155.733333l-39.189333-17.984v-110.165334h-61.674667v111.637334l-37.482666 18.56a165.845333 165.845333 0 0 0-48.277334 36.16l-30.954666-63.445334 1.557333-1.386666a230.826667 230.826667 0 0 1 49.088-32.768v-136.874667H768z m-419.093333 68.117333h-22.016l-0.021334 174.4-135.424 279.786667h380.970667l-135.445333-279.786667v-174.4h-22.016v327.04h-66.048v-327.04z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconraw.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(Iconraw) : Iconraw;
