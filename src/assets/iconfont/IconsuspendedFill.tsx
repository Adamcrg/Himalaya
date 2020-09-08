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

const IconsuspendedFill: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 128c200.298667 0 362.666667 162.368 362.666667 362.666667s-162.368 362.666667-362.666667 362.666666S149.333333 690.965333 149.333333 490.666667 311.701333 128 512 128z m-42.666667 234.666667h-64v277.333333h64V362.666667z m138.666667 0h-64v277.333333h64V362.666667z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconsuspendedFill.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(IconsuspendedFill) : IconsuspendedFill;
