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

const IconRightbutton: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 149.333333c200.298667 0 362.666667 162.368 362.666667 362.666667s-162.368 362.666667-362.666667 362.666667S149.333333 712.298667 149.333333 512 311.701333 149.333333 512 149.333333z m0 64c-164.949333 0-298.666667 133.717333-298.666667 298.666667s133.717333 298.666667 298.666667 298.666667 298.666667-133.717333 298.666667-298.666667-133.717333-298.666667-298.666667-298.666667z m-42.666667 104.085334L663.914667 512 469.333333 706.581333 424.085333 661.333333l149.333334-149.333333-149.333334-149.333333L469.333333 317.418667z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconRightbutton.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(IconRightbutton) : IconRightbutton;