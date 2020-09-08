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

const Iconmessagecenter: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 149.333333c200.298667 0 362.666667 162.368 362.666667 362.666667s-162.368 362.666667-362.666667 362.666667S149.333333 712.298667 149.333333 512 311.701333 149.333333 512 149.333333z m0 64c-164.949333 0-298.666667 133.717333-298.666667 298.666667s133.717333 298.666667 298.666667 298.666667 298.666667-133.717333 298.666667-298.666667-133.717333-298.666667-298.666667-298.666667z m64 471.189334a64 64 0 0 1-127.893333 3.754666L448 684.522667h128zM512 277.333333c75.178667 0 138.624 49.386667 138.624 114.154667v159.104l45.610667 59.349333c17.792 20.181333 3.050667 51.392-24.277334 51.392H352.042667c-27.306667 0-42.069333-31.210667-24.277334-51.413333l45.610667-59.306667V391.466667C373.376 326.72 436.821333 277.333333 512 277.333333z m0 64c-43.669333 0-74.624 25.045333-74.624 50.154667v180.864l-19.2 24.981333h187.648l-19.2-24.981333v-180.864C586.624 366.378667 555.690667 341.333333 512 341.333333z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconmessagecenter.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(Iconmessagecenter) : Iconmessagecenter;
