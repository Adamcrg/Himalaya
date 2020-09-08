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

const Iconinfantmom: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M435.626667 429.184l-27.2 27.157333 49.813333 49.813334-40.725333 40.725333-49.813334-49.813333-27.157333 27.157333 49.813333 49.813333-40.725333 40.725334-49.792-49.792-63.36 63.36 167.466667 167.466666 199.104-199.168 45.269333 45.248-199.125333 199.168a64 64 0 0 1-90.517334 0l-167.445333-167.466666a64 64 0 0 1 0-90.496l199.125333-199.146667 45.269334 45.248zM840.64 191.637333a80 80 0 0 1 0 113.130667l-33.92 33.92 11.306667 11.328a86.4 86.4 0 0 1 0 122.197333l-15.850667 15.829334a64.746667 64.746667 0 0 1-4.992 4.501333 63.936 63.936 0 0 1-4.053333 86.016l-31.68 31.68a64 64 0 0 1-86.016 4.074667l-0.170667 0.213333-3.882667-3.84a65.28 65.28 0 0 1-0.426666-0.448L422.016 361.344l-0.426667-0.469333-3.84-3.84 0.192-0.192a64 64 0 0 1 4.074667-86.016l31.68-31.68a64 64 0 0 1 86.037333-4.053334c1.365333-1.706667 2.858667-3.413333 4.48-4.992l15.829334-15.850666a86.4 86.4 0 0 1 122.197333 0l11.306667 11.306666 33.941333-33.92a80 80 0 0 1 113.130667 0z m-92.757333 341.674667L498.965333 284.373333l-31.68 31.68 248.917334 248.896L747.882667 533.333333z m47.509333-296.426667a16 16 0 0 0-22.613333 0l-24.896 24.874667-54.784 53.824-56.106667-56.064a22.4 22.4 0 0 0-31.68 0l-15.829333 15.829333 167.445333 167.445334 15.829333-15.850667a22.4 22.4 0 0 0 1.642667-29.866667l-1.642667-1.792-56.341333-56.405333 64.768-65.152 14.208-14.208a16 16 0 0 0 0-22.634667z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconinfantmom.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(Iconinfantmom) : Iconinfantmom;
