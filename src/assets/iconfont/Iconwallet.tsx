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

const Iconwallet: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M824.832 742.54336a61.44 61.44 0 0 1-61.44 61.44H245.76a61.44 61.44 0 0 1-61.44-61.44V307.2a102.4 102.4 0 0 1 102.4-102.4h352.70656a61.44 61.44 0 0 1 61.44 61.44l-0.02048 41.86112h62.54592a61.44 61.44 0 0 1 61.44 61.44v373.00224z m-61.44-373.00224H245.76v373.00224h517.632l-0.02048-103.85408H535.57248v-165.2736l227.79904-0.02048v-103.8336z m0 165.29408H596.992v42.41408h166.37952v-42.3936zM639.42656 266.24H286.72a40.96 40.96 0 0 0-40.96 40.96l-0.02048 0.90112h393.66656V266.24z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconwallet.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(Iconwallet) : Iconwallet;
