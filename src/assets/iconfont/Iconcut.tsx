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

const Iconcut: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M309.056 190.933333l212.992 298.090667 0.213333-0.277333 39.210667 54.848-0.213333 0.298666 69.013333 96.64a125.162667 125.162667 0 1 1-31.552 65.92l-77.162667-108.032-80.298666 110.357334c0.490667 3.84 0.810667 7.744 0.96 11.690666l0.085333 4.693334a125.162667 125.162667 0 1 1-31.594667-83.157334l71.637334-98.453333-225.365334-315.413333 52.074667-37.205334z m413.44 473.066667a61.162667 61.162667 0 1 0 0 122.304 61.162667 61.162667 0 0 0 0-122.304z m-405.333333 0a61.162667 61.162667 0 1 0 0 122.304 61.162667 61.162667 0 0 0 0-122.304zM739.328 190.698667l51.733333 37.674666-203.093333 278.890667-39.232-54.869333L739.328 190.72z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconcut.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(Iconcut) : Iconcut;