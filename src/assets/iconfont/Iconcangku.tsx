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

const Iconcangku: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M514.56 170.666667l380.266667 380.266666c13.44 13.44 3.925333 36.416-15.082667 36.416h-110.528v200.064a64 64 0 0 1-64 64H323.904a64 64 0 0 1-64-64v-200.064H149.376c-19.008 0-28.522667-22.976-15.082667-36.416L514.56 170.666667z m0 90.496l-262.186667 262.186666h71.530667V787.413333L362.666667 787.392V469.333333h298.666666v318.058667l43.882667 0.021333V523.349333h71.530667l-262.186667-262.186666zM597.333333 746.666667h-170.666666v40.725333h170.666666V746.666667z m0-106.666667h-170.666666v42.666667h170.666666v-42.666667z m0-106.666667h-170.666666v42.666667h170.666666v-42.666667z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconcangku.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(Iconcangku) : Iconcangku;
