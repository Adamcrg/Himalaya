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

const Iconipad: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M746.666667 149.333333a64 64 0 0 1 64 64v597.333334a64 64 0 0 1-64 64H277.333333a64 64 0 0 1-64-64V213.333333a64 64 0 0 1 64-64h469.333334z m0 64H277.333333v597.333334h469.333334V213.333333zM512 682.666667a42.666667 42.666667 0 1 1 0 85.333333 42.666667 42.666667 0 0 1 0-85.333333z m192-426.666667v405.333333H320V256h384z m-64 64H384v277.333333h256V320z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconipad.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(Iconipad) : Iconipad;
