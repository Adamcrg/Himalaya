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

const IconNewuserzoneFill: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M507.498667 138.752l5.312-0.085333a170.624 170.624 0 0 1 170.538666 165.312l0.085334 5.312V384H725.333333v-106.666667h25.898667a64 64 0 0 1 63.829333 59.264l33.173334 448A64 64 0 0 1 784.426667 853.333333H239.573333a64 64 0 0 1-63.808-68.736l33.173334-448A64 64 0 0 1 272.768 277.333333h25.877333L298.666667 384h43.52v-74.709333a170.624 170.624 0 0 1 165.312-170.538667l5.312-0.085333zM630.165333 512c-42.816 120.512-196.266667 120.512-226.88 2.666667L341.333333 530.752c46.976 180.842667 285.824 180.842667 349.12 2.666667L630.144 512zM512.789333 202.666667a106.666667 106.666667 0 0 0-101.76 74.666666h203.52a106.666667 106.666667 0 0 0-101.76-74.666666z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconNewuserzoneFill.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(IconNewuserzoneFill) : IconNewuserzoneFill;
