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

const IconetricalEquipm: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M426.666667 234.666667v42.666666h170.666666v-42.666666h64v42.666666h128a64 64 0 0 1 64 64v426.666667a64 64 0 0 1-64 64H234.666667a64 64 0 0 1-64-64V341.333333a64 64 0 0 1 64-64h128v-42.666666h64z m362.666666 106.666666H234.666667v426.666667h554.666666V341.333333z m-373.333333 106.666667v74.666667H490.666667v64h-74.666667V661.333333h-64v-74.666666H277.333333v-64h74.666667V448h64zM746.666667 522.666667v64H533.333333v-64h213.333334z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconetricalEquipm.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(IconetricalEquipm) : IconetricalEquipm;
