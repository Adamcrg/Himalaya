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

const IcononlineTrackingFill: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M789.333333 170.666667a64 64 0 0 1 64 64v197.248A193.493333 193.493333 0 0 0 725.333333 384c-105.770667 0-192 83.797333-192 187.797333l0.106667 5.930667c2.069333 53.824 27.584 110.570667 72.533333 168.917333L234.666667 746.666667a64 64 0 0 1-64-64V234.666667a64 64 0 0 1 64-64h554.666666zM469.333333 448h-192v64h192v-64z m170.666667-128H277.333333v64h362.666667v-64z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M725.333333 426.666667c82.474667 0 149.333333 64.981333 149.333334 145.130666l-0.106667 5.12c-1.834667 47.957333-29.12 101.888-73.898667 156.586667a630.357333 630.357333 0 0 1-52.650666 56.576l-9.024 8.448-8.234667 7.36c-2.410667 2.133333-4.266667 3.690667-5.418667 4.650667l-5.418666-4.650667-8.234667-7.36a630.357333 630.357333 0 0 1-61.674667-65.024c-44.8-54.698667-72.064-108.629333-73.898666-156.586667l-0.106667-5.12C576 491.648 642.858667 426.666667 725.333333 426.666667z m8.896 285.909333c5.845333-6.464 11.52-13.013333 16.917334-19.626667 36.714667-44.842667 56.533333-84.693333 59.2-114.496l0.277333-4.010666 0.042667-2.645334C810.666667 527.424 772.864 490.666667 725.333333 490.666667c-46.037333 0-82.965333 34.474667-85.226666 76.992l-0.106667 4.138666 0.042667 2.645334c1.173333 30.186667 21.077333 71.616 59.477333 118.506666 5.418667 6.613333 11.072 13.162667 16.917333 19.626667l8.896 9.642667 8.896-9.642667z"
        fill={getIconColor(color, 1, '#333333')}
      />
      <Path
        d="M725.333333 576m-42.666666 0a42.666667 42.666667 0 1 0 85.333333 0 42.666667 42.666667 0 1 0-85.333333 0Z"
        fill={getIconColor(color, 2, '#333333')}
      />
    </Svg>
  );
};

IcononlineTrackingFill.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(IcononlineTrackingFill) : IcononlineTrackingFill;