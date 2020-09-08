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

const IconcalculatorFill: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M565.333333 661.333333H298.666667v64h266.666666v-64z m160 0h-106.666666v64h106.666666v-64z m-320-128h-106.666666v64h106.666666v-64z m160 0h-106.666666v64h106.666666v-64z m160 0h-106.666666v64h106.666666v-64zM170.666667 234.666667a64 64 0 0 1 64-64h554.666666a64 64 0 0 1 64 64v554.666666a64 64 0 0 1-64 64H234.666667a64 64 0 0 1-64-64V426.666667h682.666666v-64H170.666667v-128z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconcalculatorFill.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(IconcalculatorFill) : IconcalculatorFill;
