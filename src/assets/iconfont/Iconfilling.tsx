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

const Iconfilling: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M598.101333 195.498667l217.429334 217.450666a64 64 0 0 1 0 90.496L470.101333 848.896a64 64 0 0 1-90.517333 0L162.133333 631.445333a64 64 0 0 1 0-90.496l231.082667-231.104a332.416 332.416 0 0 0-164.608-43.306666l0.064-64c75.093333 0.085333 148.202667 20.906667 211.2 60.693333l67.690667-67.733333a64 64 0 0 1 90.517333 0z m-9.6 444.458666H261.162667l163.669333 163.669334 163.669333-163.669334zM810.666667 570.346667c56.896 52.544 85.333333 94.762667 85.333333 126.677333 0 47.872-38.186667 86.656-85.333333 86.656s-85.333333-38.784-85.333334-86.656c0-31.914667 28.437333-74.133333 85.333334-126.677333z m0 92.202666l-4.010667 5.077334c-2.56 3.306667-4.842667 6.485333-6.912 9.557333a89.045333 89.045333 0 0 0-9.322667 16.896l-1.066666 2.986667 0.106666 2.453333c1.173333 11.52 10.410667 20.16 21.205334 20.16s20.032-8.64 21.205333-20.16l0.106667-2.453333-1.066667-2.986667a89.045333 89.045333 0 0 0-9.322667-16.896 187.669333 187.669333 0 0 0-6.912-9.557333L810.666667 662.549333zM552.832 240.768L217.642667 575.957333h434.858666l117.76-117.76-217.429333-217.429333z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconfilling.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(Iconfilling) : Iconfilling;
