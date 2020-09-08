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

const Iconwallet1: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M639.42656 204.8a61.44 61.44 0 0 1 61.44 61.44l-0.02048 41.86112h62.54592a61.44 61.44 0 0 1 61.44 61.44l-0.02048 103.85408H535.57248v165.29408h289.23904v103.85408a61.44 61.44 0 0 1-61.44 61.44H245.76a61.44 61.44 0 0 1-61.44-61.44V307.2a102.4 102.4 0 0 1 102.4-102.4h352.70656z m182.86592 330.0352v42.41408h-225.28v-42.3936h225.28zM639.3856 266.24H286.72a40.96 40.96 0 0 0-40.96 40.96l-0.02048 0.90112h393.66656V266.24z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconwallet1.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(Iconwallet1) : Iconwallet1;
