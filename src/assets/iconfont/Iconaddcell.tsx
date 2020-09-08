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

const Iconaddcell: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M682.666667 448a192 192 0 1 1 0 384 192 192 0 0 1 0-384z m-209.066667 85.312c-10.154667 19.861333-17.578667 41.386667-21.738667 64L298.666667 597.333333v128h165.333333a234.496 234.496 0 0 0 37.653333 64H298.666667a64 64 0 0 1-64-64v-128a64 64 0 0 1 64-64l174.933333-0.021333zM682.666667 512a128 128 0 1 0 0 256 128 128 0 0 0 0-256z m28.778666 56.554667L711.424 618.666667h50.133333v64h-50.133333v50.112h-64V682.666667H597.333333v-64h50.090667v-50.112h64zM725.333333 192a64 64 0 0 1 64 64v128c0 15.253333-5.333333 29.248-14.229333 40.256A233.749333 233.749333 0 0 0 682.666667 405.333333c-50.24 0-96.789333 15.786667-134.954667 42.666667H213.333333a64 64 0 0 1-64-64v-128a64 64 0 0 1 64-64h512z m0 64H213.333333v128h512v-128z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconaddcell.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(Iconaddcell) : Iconaddcell;
