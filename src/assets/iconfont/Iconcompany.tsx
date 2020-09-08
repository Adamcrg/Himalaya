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

const Iconcompany: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M619.712 198.186667v603.264h44.544v-0.853334h102.762667V446.08l-102.762667-36.181333v-67.818667l144.576 50.88c12.778667 8.298667 20.864 22.037333 22.037333 37.077333l0.149334 3.797334-0.021334 367.594666h48.917334v64h-666.453334v-64h48.64l0.021334-489.493333c0-16.810667 8.661333-32.426667 22.912-41.365333l260.053333-113.770667c32.490667-20.288 74.624 3.050667 74.624 41.344z m-64 23.850666l-229.589333 100.437334v478.101333H555.733333V533.461333l-0.426666 0.192v-29.610666l0.426666 1.002666V381.866667l-0.426666 0.192v-29.525334l0.426666 0.981334v-131.477334z m-43.392 260.138667v69.226667l-142.762667 58.965333v-69.248l142.762667-58.944z m0-151.36v69.525333l-142.762667 60.757334v-69.546667l142.762667-60.736z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconcompany.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(Iconcompany) : Iconcompany;
