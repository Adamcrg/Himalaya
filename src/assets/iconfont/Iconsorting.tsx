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

const Iconsorting: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M438.634667 192v644.202667l-0.810667 5.781333c-1.152 7.210667-2.304 8.704-8.64 17.002667l-7.168 3.925333c-15.914667 8.490667-18.282667 7.168-38.4-3.925333L149.333333 624.533333l45.269334-45.226666 180.032 180.138666V192h64z m216.96 10.005333l231.04 231.146667-45.269334 45.248L661.333333 298.261333V865.706667h-64V226.133333a34.133333 34.133333 0 0 1 58.282667-24.128z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconsorting.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(Iconsorting) : Iconsorting;
