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

const Iconclick: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M531.136 420.309333l3.541333 1.28 328.96 128.597334a64 64 0 0 1-10.261333 122.261333l-3.712 0.661333-114.496 16.917334-11.776 109.354666a64 64 0 0 1-119.637333 24.149334l-1.770667-3.477334-148.373333-311.338666a64 64 0 0 1 77.525333-88.405334z m-19.754667 60.885334l148.373334 311.338666 17.088-158.592 163.477333-24.149333-328.96-128.597333zM448 213.333333c117.354667 0 212.586667 94.762667 213.333333 211.946667l-66.496-26.005333a149.333333 149.333333 0 1 0-156.565333 176.426666l30.186667 63.338667c-6.741333 0.64-13.546667 0.96-20.458667 0.96-117.824 0-213.333333-95.509333-213.333333-213.333333s95.509333-213.333333 213.333333-213.333334z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconclick.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(Iconclick) : Iconclick;
