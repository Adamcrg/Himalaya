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

const Iconkehupandian: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M709.12 576a133.12 133.12 0 0 1 121.386667 187.882667l77.44 77.461333-45.269334 45.269333-72.128-72.170666A133.12 133.12 0 1 1 709.12 576z m-343.957333 21.973333c18.666667 11.690667 38.826667 21.205333 60.138666 28.202667L267.157333 810.666667H554.666667v64H267.157333a64 64 0 0 1-48.597333-105.642667l146.602667-171.050667zM709.12 640a69.12 69.12 0 1 0 0 138.24 69.12 69.12 0 0 0 0-138.24zM512 149.333333c117.824 0 213.333333 95.509333 213.333333 213.333334s-95.509333 213.333333-213.333333 213.333333-213.333333-95.509333-213.333333-213.333333S394.176 149.333333 512 149.333333z m0 64a149.333333 149.333333 0 1 0 0 298.666667 149.333333 149.333333 0 0 0 0-298.666667z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconkehupandian.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(Iconkehupandian) : Iconkehupandian;
