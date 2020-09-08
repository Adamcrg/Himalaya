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

const Iconconnections: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M568.896 149.333333a64 64 0 0 1 64 64v113.770667a64 64 0 0 1-64 64H544v48.597333h140.501333a96 96 0 0 1 95.893334 91.477334l0.106666 4.522666-0.021333 79.402667H810.666667a64 64 0 0 1 64 64v113.792a64 64 0 0 1-64 64h-113.770667a64 64 0 0 1-64-64v-113.792a64 64 0 0 1 64-64h19.584l0.021333-79.125333-0.149333-3.349334a32 32 0 0 0-31.850667-28.928l-348.864 0.021334c-17.664 0.746667-31.36 15.68-30.592 34.688l-0.021333 76.693333h22.08a64 64 0 0 1 64 64v113.792a64 64 0 0 1-64 64H213.333333a64 64 0 0 1-64-64v-113.792a64 64 0 0 1 64-64h27.690667l0.042667-75.349333a96 96 0 0 1 87.36-99.669334l4.501333-0.298666a96 96 0 0 1 4.053333-0.085334H480v-48.597333h-24.896a64 64 0 0 1-64-64V213.333333a64 64 0 0 1 64-64h113.792zM327.104 679.104H213.333333v113.792h113.770667v-113.792z m483.562667 0h-113.770667v113.792H810.666667v-113.792zM568.896 213.333333h-113.792v113.770667h113.792V213.333333z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconconnections.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(Iconconnections) : Iconconnections;