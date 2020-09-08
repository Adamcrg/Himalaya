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

const IconcouponsFill: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M148.010667 605.290667c50.069333 0 90.666667-40.874667 90.666666-91.285334 0-49.962667-39.893333-90.538667-89.344-91.264V277.333333a64 64 0 0 1 64-64h597.333334a64 64 0 0 1 64 64l-0.021334 145.450667-3.050666 0.064c-48.021333 2.304-86.272 42.24-86.272 91.157333 0 49.962667 39.872 90.56 89.322666 91.285334V746.666667a64 64 0 0 1-64 64H213.333333a64 64 0 0 1-64-64v-141.397334l-1.322666 0.021334zM384 597.333333v85.333334h68.010667v-85.333334H384z m0-128v85.333334h68.010667v-85.333334H384z m0-128v85.333334h68.010667v-85.333334H384z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconcouponsFill.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(IconcouponsFill) : IconcouponsFill;
