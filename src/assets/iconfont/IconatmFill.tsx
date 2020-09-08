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

const IconatmFill: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M227.264 149.333333c3.392 0.042667 5.994667 0.426667 9.088 1.322667l3.968 0.938667c23.893333 6.186667 70.186667 26.645333 97.792 45.653333a363.754667 363.754667 0 0 1 173.653333-44.458667c200.106667 0 362.901333 161.92 362.901334 360.96C874.666667 712.746667 711.872 874.666667 511.786667 874.666667 308.544 874.666667 149.333333 712.256 149.333333 504.938667c0-15.146667 7.530667-82.026667 14.186667-100.778667 1.813333-8.661333 12.565333-51.413333 53.717333-103.509333 1.493333-20.202667 3.626667-71.786667-14.208-108.672a38.037333 38.037333 0 0 1-2.709333-12.885334l-0.298667-2.666666a25.344 25.344 0 0 1 4.821334-15.744 27.306667 27.306667 0 0 1 17.92-11.114667 13.162667 13.162667 0 0 1 2.410666-0.170667zM501.333333 384a32 32 0 0 0-32 32v64a32 32 0 0 0 64 0v-64a32 32 0 0 0-32-32z m170.666667 0a32 32 0 0 0-32 32v64a32 32 0 0 0 64 0v-64a32 32 0 0 0-32-32zM263.765333 170.88c0.085333 0.789333 0.149333 1.557333 0.192 2.346667l0.192 1.429333-0.213333-3.413333-0.170667-0.362667z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconatmFill.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(IconatmFill) : IconatmFill;