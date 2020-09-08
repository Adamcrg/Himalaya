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

const Iconjiehui: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M746.666667 448a64 64 0 0 1 64 64v298.666667a64 64 0 0 1-64 64H277.333333a64 64 0 0 1-64-64V512a64 64 0 0 1 64-64h469.333334z m0 64H277.333333v298.666667h202.666667v-32h-88v-64H480v-24h-88v-64h66.752l-49.386667-49.365334 45.269334-45.269333L512 589.44l57.386667-57.386667 45.226666 45.269334-49.386666 49.365333h66.773333v64H544V714.666667h88v64H544V810.666667H746.666667V512zM623.850667 130.133333l126.933333 126.933334a64 64 0 0 1 0 90.517333L692.992 405.333333h-90.517333l103.04-102.997333-126.933334-126.933333L364.8 389.162667l16.149333 16.170666h-78.08c-5.546667-21.226667 0-44.757333 16.661334-61.418666L533.333333 130.154667a64 64 0 0 1 90.517334 0zM533.333333 298.666667a42.666667 42.666667 0 1 1 0 85.333333 42.666667 42.666667 0 0 1 0-85.333333z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconjiehui.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(Iconjiehui) : Iconjiehui;
