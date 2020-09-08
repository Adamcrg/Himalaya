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

const IconfolderFill: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M460.650667 192a64 64 0 0 1 62.485333 50.133333l3.093333 13.866667H789.333333a64 64 0 0 1 64 64v448a64 64 0 0 1-64 64H234.666667a64 64 0 0 1-64-64V256a64 64 0 0 1 64-64h225.984zM746.666667 640H277.333333v64h469.333334v-64z m42.666666-320H540.437333l9.493334 42.666667H789.333333v-42.666667z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconfolderFill.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(IconfolderFill) : IconfolderFill;
