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

const Iconcoupons: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M148.010667 605.290667c50.069333 0 90.666667-40.874667 90.666666-91.285334 0-49.962667-39.893333-90.538667-89.344-91.264V277.333333a64 64 0 0 1 64-64h597.333334a64 64 0 0 1 64 64l-0.021334 145.450667-3.050666 0.064c-48.021333 2.304-86.272 42.24-86.272 91.157333 0 49.962667 39.872 90.56 89.322666 91.285334V746.666667a64 64 0 0 1-64 64H213.333333a64 64 0 0 1-64-64v-141.397334l-1.322666 0.021334zM213.333333 654.784V746.666667h597.333334v-91.861334a155.370667 155.370667 0 0 1-89.344-140.8A154.837333 154.837333 0 0 1 810.666667 373.568V277.333333H213.333333v95.893334a155.370667 155.370667 0 0 1 89.322667 140.8 155.370667 155.370667 0 0 1-84.266667 138.282666l-5.056 2.496zM384 597.333333h68.010667v85.333334H384v-85.333334z m0-128h68.010667v85.333334H384v-85.333334z m0-128h68.010667v85.333334H384v-85.333334z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconcoupons.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(Iconcoupons) : Iconcoupons;