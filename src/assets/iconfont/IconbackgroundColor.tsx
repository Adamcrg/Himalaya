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

const IconbackgroundColor: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M789.333333 170.666667a64 64 0 0 1 64 64v554.666666a64 64 0 0 1-64 64H234.666667a64 64 0 0 1-64-64V234.666667a64 64 0 0 1 64-64h554.666666z m-234.730666 96h-63.872L336.256 704H298.666667v64h128v-64h-22.528l45.205333-128h146.624l45.205333 128H618.666667v64h128v-64h-37.589334l-154.474666-437.333333zM522.666667 368.426667L573.376 512h-101.418667l50.709334-143.573333z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconbackgroundColor.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(IconbackgroundColor) : IconbackgroundColor;
