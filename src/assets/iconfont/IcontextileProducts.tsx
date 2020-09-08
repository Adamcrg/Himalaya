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

const IcontextileProducts: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M729.706667 149.333333a142.72 142.72 0 0 1 142.72 142.72V691.626667a142.72 142.72 0 0 1-137.706667 142.634666l-5.013333 0.085334c-9.685333 0-19.136-0.96-28.288-2.794667L213.333333 834.346667a64 64 0 0 1-64-64V365.568a64 64 0 0 1 64-64l373.653334-2.176v-7.338667A142.72 142.72 0 0 1 729.706667 149.333333z m-142.72 216.192L213.333333 365.568V770.346667h397.333334a142.058667 142.058667 0 0 1-23.68-78.72V365.525333z m142.72 247.402667a78.72 78.72 0 0 0-20.266667 154.794667L710.4 768h4.266667v0.96l2.688 0.469333a78.72 78.72 0 1 0 12.373333-156.458666z m0-399.594667a78.72 78.72 0 0 0-78.72 78.72v280.533334a142.058667 142.058667 0 0 1 78.72-23.658667c29.098667 0 56.170667 8.725333 78.72 23.68V292.053333a78.72 78.72 0 0 0-78.72-78.72z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IcontextileProducts.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(IcontextileProducts) : IcontextileProducts;
