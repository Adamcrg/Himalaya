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

const IconRfqLogoFill: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 149.333333c74.858667 0 144.405333 22.677333 202.176 61.525334L619.946667 303.573333A233.664 233.664 0 0 0 512 277.333333c-129.6 0-234.666667 105.066667-234.666667 234.666667s105.066667 234.666667 234.666667 234.666667 234.666667-105.066667 234.666667-234.666667c0-28.053333-4.906667-54.976-13.952-79.914667l96.874666-95.338666A361.024 361.024 0 0 1 874.666667 512c0 200.298667-162.368 362.666667-362.666667 362.666667S149.333333 712.298667 149.333333 512 311.701333 149.333333 512 149.333333z m0 192c20.736 0 40.597333 3.690667 58.986667 10.453334l-94.208 92.757333-3.733334 124.373333L597.333333 565.333333l82.986667-81.664A170.666667 170.666667 0 1 1 512 341.333333z m318.762667-171.989333l45.226666 45.312-312.469333 311.936 0.085333 0.085333-47.68 2.368 2.346667-47.68L830.741333 169.322667z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconRfqLogoFill.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(IconRfqLogoFill) : IconRfqLogoFill;
