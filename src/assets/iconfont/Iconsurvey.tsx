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

const Iconsurvey: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M830.784 489.301333l45.098667 45.397334-322.282667 320-14.656-14.762667 14.741333 14.890667h-45.013333v-45.376l-0.149333-0.149334 322.261333-320zM746.666667 170.666667a64 64 0 0 1 64 64v192l-64 64V234.666667H277.333333v554.666666h170.666667l-64 64h-106.666667a64 64 0 0 1-64-64V234.666667a64 64 0 0 1 64-64h469.333334z m-198.058667 448v64h-67.434667l-0.021333-64h67.456z m-3.968-316.330667c43.562667 8.768 95.36 50.304 95.36 110.741333 0 60.437333-49.365333 83.328-67.050667 94.634667-16.426667 10.517333-23.317333 22.506667-24.234666 35.306667l-0.106667 2.965333V576h-67.456v-54.592c0-21.248 6.848-36.117333 25.941333-49.28l3.989334-2.624 37.888-25.216c24.170667-16.277333 23.829333-48.917333 8.874666-63.36a67.925333 67.925333 0 0 0-59.434666-15.232c-42.154667 8.277333-46.933333 38.08-47.189334 66.922667v16.085333H384c0-56.064 6.421333-81.472 36.352-113.578667 33.493333-35.882667 80.704-41.621333 124.288-32.789333z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconsurvey.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(Iconsurvey) : Iconsurvey;
