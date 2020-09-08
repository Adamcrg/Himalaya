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

const Icongoumaipianhao: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M745.514667 614.058667l9.984 9.813333 3.072 2.944 8.533333-8.256c1.685333-1.642667 3.2-3.136 4.522667-4.501333a91.498667 91.498667 0 0 1 130.56 0 94.378667 94.378667 0 0 1 1.024 131.221333l-144.64 140.053333-144.64-140.032a94.4 94.4 0 0 1 1.024-131.242666 91.498667 91.498667 0 0 1 130.56 0zM342.570667 757.333333a53.333333 53.333333 0 1 1 0 106.666667 53.333333 53.333333 0 0 1 0-106.666667z m317.930666-98.304a30.442667 30.442667 0 0 0-2.410666 39.573334l1.770666 2.069333 98.709334 95.573333 98.56-95.466666 1.92-2.176a30.485333 30.485333 0 0 0-0.277334-37.184l-2.133333-2.389334a27.498667 27.498667 0 0 0-39.466667 0l-7.957333 7.893334-6.442667 6.186666-44.202666 42.176-50.624-48.362666-7.978667-7.893334a27.498667 27.498667 0 0 0-39.466667 0zM161.429333 149.333333a96 96 0 0 1 92.885334 71.786667l1.045333 4.394667 13.162667 62.464h0.213333l42.88 205.333333 32.512 157.354667h179.776v64h-179.776a64 64 0 0 1-62.677333-51.050667l-60.586667-293.418667-0.384 0.085334-27.733333-131.562667a32 32 0 0 0-28.330667-25.237333L161.429333 213.333333H106.666667V149.333333h54.762666z m533.141334 309.333334v64h-298.666667v-64h298.666667z m-382.250667-170.666667h495.701333a64 64 0 0 1 62.677334 76.949333L838.122667 522.666667h-65.344l35.242666-170.666667H325.696l-13.376-64z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Icongoumaipianhao.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(Icongoumaipianhao) : Icongoumaipianhao;
