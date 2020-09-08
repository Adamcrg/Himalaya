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

const Iconshuangshen: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M814.122667 273.877333a64 64 0 0 1 64 64V789.12a64 64 0 0 1-64 64H341.12a64 64 0 0 1-64-64V273.877333z m0 64H341.12V789.12h473.002667V337.877333zM672 170.666667v64H234.666667v490.666666H170.666667V266.666667A96 96 0 0 1 266.666667 170.666667h405.333333z m-122.88 234.88a133.12 133.12 0 0 1 121.386667 187.904l77.44 77.44-45.269334 45.269333-72.149333-72.149333A133.12 133.12 0 1 1 549.12 405.546667z m0 64a69.12 69.12 0 1 0 0 138.24 69.12 69.12 0 0 0 0-138.24z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconshuangshen.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(Iconshuangshen) : Iconshuangshen;
