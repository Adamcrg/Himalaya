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

const Iconscenes: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M788.352 171.861333l38.656 144.256-421.866667 110.528L832 426.666667v362.666666a64 64 0 0 1-64 64H234.666667a64 64 0 0 1-64-64V426.666667h0.085333l-21.781333-83.968a64 64 0 0 1 45.376-77.909334l515.626666-138.176a64 64 0 0 1 78.378667 45.248zM768 629.333333H234.666667L234.666667 789.333333h533.333333v-160zM381.525333 490.666667L234.666667 490.666667v74.666666h120.554666l-2.24-0.896L381.525333 490.666667zM768 490.666667h-125.845333l-28.928 74.666666H768L768 490.666667z m-194.474667 0h-123.370666l-28.928 74.666666h125.994666l-2.24-0.896L573.525333 490.666667z m153.002667-302.229334l-515.626667 138.154667 20.629334 79.424 516.992-135.488-21.973334-82.090667z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconscenes.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(Iconscenes) : Iconscenes;
