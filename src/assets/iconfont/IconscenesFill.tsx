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

const IconscenesFill: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M832 629.333333V789.333333a64 64 0 0 1-64 64H234.666667a64 64 0 0 1-64-64v-160h661.333333zM788.352 171.861333l38.656 144.256-419.285333 109.824h-0.64l-0.064 0.213334-1.877334 0.490666h1.664l-53.824 137.813334 2.24 0.853333H170.666667L170.666667 426.666667h0.085333l-21.781333-83.968a64 64 0 0 1 45.376-77.909334l515.626666-138.176a64 64 0 0 1 78.378667 45.248zM832 426.666667v138.666666H613.546667l55.68-138.666666H832z m-357.888-0.042667h126.144l-55.274667 137.813333 2.24 0.874667h-126.08l52.970667-138.666667zM726.528 188.437333l-515.626667 138.154667 20.629334 79.424 516.992-135.488-21.973334-82.090667z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconscenesFill.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(IconscenesFill) : IconscenesFill;
