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

const Iconbags: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M745.130667 330.666667h1.493333a67.989333 67.989333 0 0 1 67.498667 59.562666l50.986666 408A67.989333 67.989333 0 0 1 797.653333 874.666667H226.368a68.010667 68.010667 0 0 1-67.477333-76.437334l50.986666-408a67.989333 67.989333 0 0 1 67.477334-59.562666H330.666667v67.989333h-51.797334l-10.88 108.8 246.250667 69.824 241.792-69.610667-10.901333-109.013333h-51.818667L693.333333 330.666667h51.797334zM255.36 574.528l-29.013333 232.128h571.306666l-29.013333-231.872-235.584 67.84a68.010667 68.010667 0 0 1-37.376 0.085333L255.36 574.506667z m324.629333-130.538667V512h-136v-68.010667h136zM512 149.333333a136 136 0 0 1 136 136v114.496h-272v-114.496A136 136 0 0 1 512 149.333333z m0 68.010667a68.010667 68.010667 0 0 0-68.010667 67.989333V330.666667h136v-45.333334A68.010667 68.010667 0 0 0 512 217.322667z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconbags.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(Iconbags) : Iconbags;
