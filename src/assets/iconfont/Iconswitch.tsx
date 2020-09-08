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

const Iconswitch: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M405.333333 187.669333v68.266667c-100.224 41.770667-170.666667 140.693333-170.666666 256.064 0 153.173333 124.16 277.333333 277.333333 277.333333s277.333333-124.16 277.333333-277.333333c0-115.370667-70.442667-214.272-170.666666-256.064l0.021333-68.266667C754.944 232.469333 853.333333 360.746667 853.333333 512c0 188.522667-152.810667 341.333333-341.333333 341.333333S170.666667 700.522667 170.666667 512c0-151.253333 98.389333-279.552 234.666666-324.330667zM544 138.666667v384h-64v-384h64z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconswitch.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(Iconswitch) : Iconswitch;
