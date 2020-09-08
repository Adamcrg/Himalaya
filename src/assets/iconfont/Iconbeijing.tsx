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

const Iconbeijing: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M853.333333 251.2v90.496L341.653333 853.333333h-90.517333L853.333333 251.2z m0 243.2v90.496L584.853333 853.333333h-90.517333L853.333333 494.4z m0 243.2v90.496L828.053333 853.333333h-90.496L853.333333 737.6zM781.141333 170.666667L170.666667 781.162667v-90.496L690.666667 170.666667h90.496z m-243.2 0L170.666667 537.962667v-90.496L447.445333 170.666667h90.517334z m-243.2 0L170.666667 294.762667V204.266667L204.266667 170.666667h90.496z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconbeijing.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(Iconbeijing) : Iconbeijing;
