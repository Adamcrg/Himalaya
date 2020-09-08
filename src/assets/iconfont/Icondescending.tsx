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

const Icondescending: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M427.968 192v644.202667l-0.810667 5.781333c-1.152 7.210667-2.304 8.704-8.64 17.002667l-7.168 3.925333c-15.914667 8.490667-18.282667 7.168-38.4-3.925333L138.666667 624.533333l45.269333-45.226666 180.032 180.138666V192h64zM842.666667 714.666667v64h-320v-64h320z m-64-149.333334v64h-256v-64h256z m-64-149.333333v64h-192v-64h192z m-64-149.333333v64h-128v-64h128z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Icondescending.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(Icondescending) : Icondescending;
