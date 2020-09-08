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

const Iconeletrical: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M362.666667 149.333333v149.333334h149.333333V149.333333h64v149.333334h64a64 64 0 0 1 64 64v42.666666a64 64 0 0 1-64 64v149.333334a64 64 0 0 1-64 64l-105.472 0.021333C479.872 756.010667 522.581333 789.333333 608 789.333333c63.744 0 89.066667-27.584 106.666667-95.850666 1.066667-4.138667 2.133333-8.448 3.264-13.333334l1.173333-5.056 5.738667-25.386666c8.512-36.650667 15.210667-55.338667 28.842666-72.362667 32.96-41.216 75.370667-63.445333 125.12-65.237333L885.333333 512v64c-32.746667 0-59.2 13.226667-81.685333 41.322667-5.674667 7.104-10.304 20.330667-16.682667 47.786666l-1.216 5.333334-5.504 24.384-2.410666 9.962666-1.173334 4.672-1.621333 6.037334C750.506667 805.098667 704.128 853.333333 608 853.333333c-120.042667 0-190.762667-59.306667-201.877333-170.666666H298.666667a64 64 0 0 1-64-64v-149.333334a64 64 0 0 1-64-64v-42.666666a64 64 0 0 1 64-64h64V149.333333h64z m213.333333 320H298.666667v149.333334h277.333333v-149.333334z m64-106.666666H234.666667v42.666666h405.333333v-42.666666z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconeletrical.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(Iconeletrical) : Iconeletrical;
