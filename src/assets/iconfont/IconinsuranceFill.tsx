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

const IconinsuranceFill: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M542.72 163.84v62.8736c164.4544 15.29856 293.66272 152.12544 296.89856 319.7952L839.68 552.96H542.72v194.56a102.4 102.4 0 0 1-204.6976 4.44416L337.92 747.52v-20.48h61.44v20.48a40.96 40.96 0 0 0 81.8176 3.072l0.1024-3.072V552.96H184.32c0-170.61888 130.39616-310.784 296.96-326.2464V163.84h61.44z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconinsuranceFill.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(IconinsuranceFill) : IconinsuranceFill;
