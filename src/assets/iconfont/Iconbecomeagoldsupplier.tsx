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

const Iconbecomeagoldsupplier: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M652.8 608.448a52.48 52.48 0 0 1 80.128 0l27.306667 32.384 27.52-20.074667a52.48 52.48 0 0 1 70.570666 8.021334l2.346667 2.88c9.344 12.522667 12.565333 28.586667 8.746667 43.733333l-52.309334 206.741333H568.597333l-52.288-206.72a52.010667 52.010667 0 0 1 38.101334-63.210666 52.522667 52.522667 0 0 1 43.541333 8.533333l27.52 20.096z m-341.461333-10.453333c18.666667 11.669333 38.826667 21.184 60.16 28.181333L213.333333 810.666667h265.557334l17.024 64H213.333333a64 64 0 0 1-48.597333-105.642667l146.602667-171.050667z m381.504 52.266666l-57.941334 68.757334-59.072-43.114667 37.589334 148.629333H772.266667l37.589333-148.629333-59.029333 43.114667-57.962667-68.757334zM458.176 149.333333c117.824 0 213.333333 95.509333 213.333333 213.333334s-95.509333 213.333333-213.333333 213.333333-213.333333-95.509333-213.333333-213.333333 95.509333-213.333333 213.333333-213.333334z m0 64a149.333333 149.333333 0 1 0 0 298.666667 149.333333 149.333333 0 0 0 0-298.666667z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconbecomeagoldsupplier.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(Iconbecomeagoldsupplier) : Iconbecomeagoldsupplier;
