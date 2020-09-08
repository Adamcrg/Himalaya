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

const Iconauto1: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M689.536 192c26.816 0 50.794667 16.64 60.202667 41.706667l78.08 207.978666 67.754666-39.125333 27.562667 47.786667-50.709333 29.269333a64.213333 64.213333 0 0 1 27.157333 52.522667v202.368a64.298667 64.298667 0 0 1-64.298667 64.298666h-27.648V874.666667h-55.146666v-75.861334H255.957333V874.666667H200.853333v-75.861334H173.184a64.298667 64.298667 0 0 1-64.32-64.298666v-202.368a64.213333 64.213333 0 0 1 27.2-52.522667L85.333333 450.346667l27.584-47.786667 67.733334 39.104 78.08-207.957333A64.298667 64.298667 0 0 1 318.933333 192h370.602667z m145.728 342.954667H173.184v199.552h662.101333v-199.552z m-556.288 50.090666a41.386667 41.386667 0 1 1 0 82.752 41.386667 41.386667 0 0 1 0-82.752z m455.125333 0a41.386667 41.386667 0 1 1 0 82.752 41.386667 41.386667 0 0 1 0-82.752z m-44.565333-328.746666H318.933333l-79.402666 211.52h529.386666l-79.36-211.52z m-79.573333 46.037333v62.058667h-206.869334v-62.08h206.869334z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconauto1.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(Iconauto1) : Iconauto1;
