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

const Iconzhanghucaozuo: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M774.549333 618.666667a64 64 0 0 1 55.445334 32l37.696 65.322666a64 64 0 0 1 0 64l-37.696 65.322667a64 64 0 0 1-55.445334 32h-75.413333a64 64 0 0 1-55.445333-32l-37.696-65.322667a64 64 0 0 1 0-64l37.696-65.322666a64 64 0 0 1 55.445333-32h75.413333z m-385.152-37.077334c18.944 11.52 39.488 20.629333 61.226667 26.944L277.333333 810.666667h272.490667l0.725333 1.322666L586.730667 874.666667H277.333333a64 64 0 0 1-48.597333-105.642667l160.661333-187.434667zM774.549333 682.666667h-75.413333l-37.717333 65.322666 37.717333 65.322667h75.413333l37.717334-65.322667L774.549333 682.666667z m-39.04 32.554666a32 32 0 1 1 0 64 32 32 0 0 1 0-64zM522.176 149.333333c117.824 0 213.333333 95.509333 213.333333 213.333334s-95.509333 213.333333-213.333333 213.333333-213.333333-95.509333-213.333333-213.333333 95.509333-213.333333 213.333333-213.333334z m0 64a149.333333 149.333333 0 1 0 0 298.666667 149.333333 149.333333 0 0 0 0-298.666667z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconzhanghucaozuo.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(Iconzhanghucaozuo) : Iconzhanghucaozuo;