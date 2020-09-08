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

const IconnightmodeFill: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M490.666667 170.666667c14.549333 0 28.885333 0.981333 42.922666 2.858666a194.282667 194.282667 0 1 0 274.218667 274.24c1.877333 14.016 2.858667 28.352 2.858667 42.901334 0 176.725333-143.274667 320-320 320-176.725333 0-320-143.274667-320-320 0-176.725333 143.274667-320 320-320z m224.277333 0v72.853333h72.874667v60.010667l-72.874667-0.021334v72.874667h-59.989333l-0.021334-72.874667h-72.832v-59.989333H654.933333V170.666667h60.010667z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconnightmodeFill.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(IconnightmodeFill) : IconnightmodeFill;
