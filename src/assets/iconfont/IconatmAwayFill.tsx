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

const IconatmAwayFill: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M225.173333 149.397333L227.264 149.333333c2.261333 0.042667 4.181333 0.213333 6.101333 0.597334l2.986667 0.725333 3.968 0.938667c23.893333 6.186667 70.186667 26.645333 97.792 45.653333a363.754667 363.754667 0 0 1 173.653333-44.458667c200.106667 0 362.901333 161.92 362.901334 360.96C874.666667 712.746667 711.872 874.666667 511.786667 874.666667c-37.994667 0-74.453333-5.674667-108.586667-16.256A212.693333 212.693333 0 0 0 469.333333 704c0-117.824-95.509333-213.333333-213.333333-213.333333-38.762667 0-75.093333 10.346667-106.453333 28.416-0.128-4.693333-0.213333-9.386667-0.213334-14.144 0-15.146667 7.530667-82.026667 14.186667-100.778667 1.813333-8.661333 12.565333-51.413333 53.717333-103.509333 1.493333-20.202667 3.626667-71.786667-14.208-108.672a33.984 33.984 0 0 1-2.453333-9.813334l-0.256-3.072-0.298667-2.666666a25.344 25.344 0 0 1 4.821334-15.744 27.306667 27.306667 0 0 1 19.370666-11.264l0.96-0.021334 2.090667-0.064zM256 533.333333a170.666667 170.666667 0 1 1 0 341.333334 170.666667 170.666667 0 0 1 0-341.333334z m0 64a106.666667 106.666667 0 1 0 0 213.333334 106.666667 106.666667 0 0 0 0-213.333334z m32 24.384v56.384h49.28v64H256a32 32 0 0 1-32-32v-88.384h64zM501.333333 384a32 32 0 0 0-32 32v64a32 32 0 0 0 64 0v-64a32 32 0 0 0-32-32z m170.666667 0a32 32 0 0 0-32 32v64a32 32 0 0 0 64 0v-64a32 32 0 0 0-32-32zM263.765333 170.88c0.085333 0.789333 0.149333 1.557333 0.192 2.346667l0.192 1.429333-0.213333-3.413333-0.170667-0.362667z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconatmAwayFill.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(IconatmAwayFill) : IconatmAwayFill;
