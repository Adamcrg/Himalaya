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

const IconstoreFill: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M704 580.053333a138.197333 138.197333 0 0 0 106.666667 38.208V810.666667a64 64 0 0 1-64 64l-170.666667-0.021334V682.666667h-106.666667v191.978666L298.666667 874.666667a64 64 0 0 1-64-64l-0.021334-195.712a139.050667 139.050667 0 0 0 117.354667-25.642667 138.069333 138.069333 0 0 0 85.333333 29.354667 138.069333 138.069333 0 0 0 85.333334-29.354667 138.069333 138.069333 0 0 0 85.333333 29.354667c37.269333 0 71.104-14.72 96-38.613334zM725.653333 192a64 64 0 0 1 54.976 31.253333l101.76 170.837334-0.277333-0.021334a110.72 110.72 0 0 1-182.08 122.965334 120.298667 120.298667 0 0 1-87.765333 37.824 120.469333 120.469333 0 0 1-90.581334-40.896 120.469333 120.469333 0 0 1-90.56 40.896 120.426667 120.426667 0 0 1-87.765333-37.824 110.72 110.72 0 0 1-175.786667-133.76l85.568-157.781334A64 64 0 0 1 309.397333 192h416.256z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconstoreFill.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(IconstoreFill) : IconstoreFill;
