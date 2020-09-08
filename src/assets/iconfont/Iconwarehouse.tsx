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

const Iconwarehouse: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M535.253333 180.693333l288.490667 183.914667A64 64 0 0 1 853.333333 418.581333v392.746667a64 64 0 0 1-64 64H213.333333a64 64 0 0 1-64-64v-398.293333a64 64 0 0 1 30.272-54.4l287.530667-178.346667a64 64 0 0 1 68.138667 0.426667zM500.885333 234.666667L213.333333 413.013333v398.336h576V418.56L500.864 234.666667zM682.666667 640v64H320v-64h362.666667z m0-106.666667v64H320v-64h362.666667z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconwarehouse.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(Iconwarehouse) : Iconwarehouse;
