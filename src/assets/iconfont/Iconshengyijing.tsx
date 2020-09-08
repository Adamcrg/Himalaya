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

const Iconshengyijing: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M746.666667 170.666667a64 64 0 0 1 64 64v597.333333a64 64 0 0 1-64 64H277.333333a64 64 0 0 1-64-64V234.666667a64 64 0 0 1 64-64h469.333334z m0 618.666666H277.333333v42.666667h469.333334v-42.666667zM341.333333 234.666667h-64v490.666666h469.333334V234.666667h-192v256l-106.666667-47.061334L341.333333 490.666667V234.666667z m149.333334 0h-85.333334v157.802666l42.666667-18.816 42.666667 18.816V234.666667z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconshengyijing.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(Iconshengyijing) : Iconshengyijing;
