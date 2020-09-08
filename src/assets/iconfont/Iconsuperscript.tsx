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

const Iconsuperscript: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M725.333333 160V277.333333h-64v-53.333333h-181.333333V789.333333H554.666667v64H341.333333v-64h74.666667V224h-192V277.333333h-64V160H725.333333z m106.666667 160a42.666667 42.666667 0 0 1 42.666667 42.666667v213.333333a42.666667 42.666667 0 0 1-42.666667 42.666667H618.666667a42.666667 42.666667 0 0 1-42.666667-42.666667V362.666667a42.666667 42.666667 0 0 1 42.666667-42.666667h213.333333z m-21.333333 64h-170.666667v170.666667h170.666667v-170.666667z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconsuperscript.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(Iconsuperscript) : Iconsuperscript;
