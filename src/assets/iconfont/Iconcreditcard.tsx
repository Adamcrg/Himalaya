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

const Iconcreditcard: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M789.333333 234.666667a64 64 0 0 1 64 64v426.666666a64 64 0 0 1-64 64H234.666667a64 64 0 0 1-64-64V298.666667a64 64 0 0 1 64-64h554.666666z m0 64H234.666667v426.666666h554.666666V298.666667zM384 618.666667v64h-106.666667v-64h106.666667z m362.666667-213.333334v64H277.333333v-64h469.333334z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconcreditcard.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(Iconcreditcard) : Iconcreditcard;
