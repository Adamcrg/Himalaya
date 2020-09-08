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

const Iconresponsetime: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M353.813333 332.032l-45.248 45.248L146.752 215.466667l154.026667-154.048L346.069333 106.666667 268.16 184.533333l253.546667 0.042667c185.344 0 336.042667 148.437333 339.626666 332.949333l0.085334 6.762667c0 187.605333-152.106667 339.712-339.712 339.712-187.626667 0-339.733333-152.106667-339.733334-339.712h64c0 152.277333 123.456 275.712 275.733334 275.712 152.256 0 275.712-123.434667 275.712-275.712s-123.456-275.712-275.712-275.712l-251.370667-0.021333 83.477333 83.477333z m189.866667 5.418667v153.856h153.856v65.941333H477.738667V337.450667h65.92z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconresponsetime.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(Iconresponsetime) : Iconresponsetime;
