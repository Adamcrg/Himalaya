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

const IconstopFill: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 149.333333c200.298667 0 362.666667 162.368 362.666667 362.666667s-162.368 362.666667-362.666667 362.666667S149.333333 712.298667 149.333333 512 311.701333 149.333333 512 149.333333z m53.333333 256h-106.666666a53.333333 53.333333 0 0 0-53.333334 53.333334v106.666666a53.333333 53.333333 0 0 0 53.333334 53.333334h106.666666a53.333333 53.333333 0 0 0 53.333334-53.333334v-106.666666a53.333333 53.333333 0 0 0-53.333334-53.333334z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconstopFill.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(IconstopFill) : IconstopFill;
