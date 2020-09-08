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

const Icontongguan: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M746.666667 149.333333a64 64 0 0 1 64 64v597.333334a64 64 0 0 1-64 64H277.333333a64 64 0 0 1-64-64V213.333333a64 64 0 0 1 64-64h469.333334z m0 64H277.333333v597.333334h469.333334V213.333333z m-201.728 170.666667l107.349333 126.293333a33.024 33.024 0 0 1-25.173333 54.421334H373.333333v-64h186.816l-63.978666-75.264L544.938667 384z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Icontongguan.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(Icontongguan) : Icontongguan;
