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

const Iconshangchuan: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 149.333333c200.298667 0 362.666667 162.368 362.666667 362.666667s-162.368 362.666667-362.666667 362.666667S149.333333 712.298667 149.333333 512 311.701333 149.333333 512 149.333333z m0 64c-164.949333 0-298.666667 133.717333-298.666667 298.666667s133.717333 298.666667 298.666667 298.666667 298.666667-133.717333 298.666667-298.666667-133.717333-298.666667-298.666667-298.666667z m-1.813333 109.568l195.029333 195.029334-45.248 45.248-118.186667-118.186667-0.021333 262.101333h-64V445.845333l-117.354667 117.333334-45.248-45.248 195.029334-195.029334z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconshangchuan.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(Iconshangchuan) : Iconshangchuan;
