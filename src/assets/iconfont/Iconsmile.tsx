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

const Iconsmile: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 149.333333c200.298667 0 362.666667 162.368 362.666667 362.666667s-162.368 362.666667-362.666667 362.666667S149.333333 712.298667 149.333333 512 311.701333 149.333333 512 149.333333z m0 64c-164.949333 0-298.666667 133.717333-298.666667 298.666667s133.717333 298.666667 298.666667 298.666667 298.666667-133.717333 298.666667-298.666667-133.717333-298.666667-298.666667-298.666667z m161.877333 330.517334l60.245334 21.632c-81.066667 225.578667-385.088 225.578667-445.077334-2.688l61.909334-16.256c43.477333 165.504 262.506667 165.504 322.922666-2.688zM426.666667 362.666667a42.666667 42.666667 0 0 1 42.666666 42.666666v64a42.666667 42.666667 0 1 1-85.333333 0v-64a42.666667 42.666667 0 0 1 42.666667-42.666666z m170.666666 0a42.666667 42.666667 0 0 1 42.666667 42.666666v64a42.666667 42.666667 0 1 1-85.333333 0v-64a42.666667 42.666667 0 0 1 42.666666-42.666666z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconsmile.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(Iconsmile) : Iconsmile;