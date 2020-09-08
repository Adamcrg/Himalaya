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

const IconmessagecenterFill: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 149.333333c200.298667 0 362.666667 162.368 362.666667 362.666667s-162.368 362.666667-362.666667 362.666667S149.333333 712.298667 149.333333 512 311.701333 149.333333 512 149.333333z m64 535.189334h-128l0.106667 3.754666A64 64 0 0 0 576 684.522667zM512 277.333333c-75.178667 0-138.624 49.386667-138.624 114.154667v159.104l-45.610667 59.349333C309.973333 630.122667 324.693333 661.333333 352.042667 661.333333h319.914666c27.306667 0 42.069333-31.210667 24.277334-51.413333l-45.610667-59.306667V391.466667C650.624 326.72 587.178667 277.333333 512 277.333333z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconmessagecenterFill.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(IconmessagecenterFill) : IconmessagecenterFill;
