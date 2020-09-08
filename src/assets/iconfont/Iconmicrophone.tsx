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

const Iconmicrophone: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M288 526.763c0 123.733 100.288 224 224 224 121.685 0 220.715-97.024 223.915-217.92l0.085-6.08h64c0 144.554-106.496 264.234-245.333 284.864v42.432l86.016 2.026-1.494 63.979-234.602-5.483 1.493-63.978 84.587 1.962v-38.57C343.744 803.243 227.413 682.26 224.064 533.376l-0.064-6.613h64z m224-377.43A170.667 170.667 0 0 1 682.667 320v213.333a170.667 170.667 0 1 1-341.334 0V320A170.667 170.667 0 0 1 512 149.333z m0 64a106.667 106.667 0 0 0-106.56 102.038l-0.107 4.629v213.333a106.667 106.667 0 0 0 213.227 4.63l0.107-4.63V320A106.667 106.667 0 0 0 512 213.333z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconmicrophone.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(Iconmicrophone) : Iconmicrophone;