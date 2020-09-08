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

const IconItalic: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M729.173333 149.333333v64h-111.829333l-165.781333 618.666667h128.298666v64H277.333333v-64h107.968l165.76-618.666667H426.666667V149.333333h302.506666z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconItalic.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(IconItalic) : IconItalic;
