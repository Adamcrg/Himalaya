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

const IconAddProducts: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M682.666667 490.666667a192 192 0 1 1 0 384 192 192 0 0 1 0-384z m50.816-320a64 64 0 0 1 57.237333 35.370666l55.850667 111.68A64 64 0 0 1 853.333333 346.346667v175.274666a235.456 235.456 0 0 0-64-48.021333L789.333333 384h-554.666666L234.666667 789.333333h238.933333a235.456 235.456 0 0 0 48 64H234.666667a64 64 0 0 1-64-64V351.552a64 64 0 0 1 6.378666-27.84l56.469334-116.906667A64 64 0 0 1 291.136 170.666667h442.346667zM682.666667 554.666667a128 128 0 1 0 0 256 128 128 0 0 0 0-256z m32 53.333333V661.333333H768v64h-53.333333v53.333334h-64V725.333333H597.333333v-64h53.333334v-53.333333h64zM469.333333 448v64h-170.666666v-64h170.666666z m264.149334-213.333333H291.136l-41.258667 85.333333h526.272l-42.666666-85.333333z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconAddProducts.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(IconAddProducts) : IconAddProducts;
