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

const IconcalendarFill: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M853.333333 448v341.333333a64 64 0 0 1-64 64H234.666667a64 64 0 0 1-64-64V448h682.666666z m-448 192h-106.666666v64h106.666666v-64z m160 0h-106.666666v64h106.666666v-64z m160 0h-106.666666v64h106.666666v-64z m-320-128h-106.666666v64h106.666666v-64z m160 0h-106.666666v64h106.666666v-64z m160 0h-106.666666v64h106.666666v-64zM234.666667 213.333333h64v106.666667h138.666666v-106.666667H597.333333v106.666667h138.666667v-106.666667H789.333333a64 64 0 0 1 64 64v106.666667H170.666667v-106.666667a64 64 0 0 1 64-64z m463.061333-42.666666v106.666666h-64V170.666667h64zM396.544 170.666667v106.666666h-64V170.666667h64z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconcalendarFill.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(IconcalendarFill) : IconcalendarFill;
