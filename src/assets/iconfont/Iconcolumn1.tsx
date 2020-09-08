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

const Iconcolumn1: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M234.666667 853.333333a64 64 0 0 1-64-64V234.666667a64 64 0 0 1 64-64h554.666666a64 64 0 0 1 64 64v554.666666a64 64 0 0 1-64 64H234.666667z m96-618.666666H234.666667v554.666666h96V234.666667z m149.333333 0h-85.333333v554.666666h85.333333V234.666667z m149.333333 0h-85.333333v554.666666h85.333333V234.666667z m160 0h-96v554.666666H789.333333V234.666667z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconcolumn1.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(Iconcolumn1) : Iconcolumn1;
