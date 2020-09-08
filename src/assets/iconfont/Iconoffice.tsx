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

const Iconoffice: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M788.992 164.842667l63.445333 103.829333a64 64 0 0 1-18.069333 85.930667l-3.84 2.474666-0.362667 0.170667 33.472 86.037333a64 64 0 0 1-48.597333 86.229334l-335.786667 58.922666v44.586667H812.16a64 64 0 0 1 60.096 41.941333l21.76 59.285334a64 64 0 0 1-60.074667 86.058666H288.149333a64 64 0 0 1-63.893333-60.245333l-0.106667-4.266667 0.448-59.264c0.042667-5.866667 0.874667-11.541333 2.410667-16.938666L152.533333 550.570667a64 64 0 0 1 22.144-86.677334L701.12 143.530667a64 64 0 0 1 87.872 21.312z m23.146667 532.181333H288.597333l-0.448 59.285333H833.92l-21.76-59.285333z m-396.693334-64v-33.386667l-7.232 1.258667-55.658666 32.128h62.890666zM734.378667 198.186667L207.957333 518.570667l53.717334 93.034666 536.170666-309.546666-63.466666-103.850667z m42.688 199.061333l-192.277334 107.669333 219.2-38.442666-26.922666-69.226667z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconoffice.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(Iconoffice) : Iconoffice;
