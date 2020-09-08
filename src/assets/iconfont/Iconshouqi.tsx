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

const Iconshouqi: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M853.333333 714.666667v64H170.666667v-64h682.666666zM320 405.333333v213.333334l-149.333333-106.666667 149.333333-106.666667z m533.333333 85.333334v64H405.333333v-64h448z m0-234.666667v64H170.666667v-64h682.666666z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconshouqi.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(Iconshouqi) : Iconshouqi;
