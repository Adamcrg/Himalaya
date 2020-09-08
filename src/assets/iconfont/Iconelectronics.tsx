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

const Iconelectronics: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M416 128v85.333333h64V128h64v85.333333h64V128h64v85.333333H746.666667a64 64 0 0 1 64 64v74.666667h85.333333v64h-85.333333v64h85.333333v64h-85.333333v64h85.333333v64h-85.333333v5.482667a64 64 0 0 1-18.752 45.269333L722.773333 791.893333a64 64 0 0 1-45.269333 18.752H672v85.333334h-64v-85.333334h-64v85.333334h-64v-85.333334h-64v85.333334h-64v-85.333334H277.333333a64 64 0 0 1-64-64v-74.666666H128v-64h85.333333v-64H128v-64h85.333333v-64H128v-64h85.333333v-5.482667a64 64 0 0 1 18.752-45.269333l69.162667-69.162667A64 64 0 0 1 346.517333 213.333333h5.482667V128h64zM746.666667 277.333333H346.517333L277.333333 346.517333V746.666667h400.149334L746.666667 677.482667V277.333333z m-64 64v341.333334H341.333333V341.333333h341.333334z m-64 64H405.333333v213.333334h213.333334V405.333333z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconelectronics.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(Iconelectronics) : Iconelectronics;