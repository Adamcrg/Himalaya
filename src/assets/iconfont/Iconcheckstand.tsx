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

const Iconcheckstand: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M746.666667 149.333333a64 64 0 0 1 64 64v67.648c24.874667 8.789333 42.666667 32.490667 42.666666 60.352v448a64 64 0 0 1-64 64H234.666667a64 64 0 0 1-64-64V341.333333a64 64 0 0 1 64-64h298.666666v-64a64 64 0 0 1 64-64h149.333334z m42.666666 576H234.666667v64h554.666666v-64z m0-384H234.666667v320h554.666666V341.333333z m-277.333333 42.666667v149.333333H277.333333v-149.333333h234.666667z m-64 64h-106.666667v21.333333h106.666667v-21.333333z m192-64v64h-64v-64h64z m106.666667 0v64h-64v-64h64z m0-170.666667h-149.333334v64h149.333334v-64z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconcheckstand.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(Iconcheckstand) : Iconcheckstand;
