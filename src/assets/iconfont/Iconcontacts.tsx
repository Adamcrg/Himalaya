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

const Iconcontacts: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M746.666667 170.666667a64 64 0 0 1 64 64v554.666666a64 64 0 0 1-64 64H320a64 64 0 0 1-64-64v-42.666666h-42.666667v-64h149.333334v64h-42.666667v42.666666h426.666667V234.666667H320v42.666666h42.666667v64h-149.333334v-64h42.666667v-42.666666a64 64 0 0 1 64-64h426.666667z m-56.597334 106.666666v469.333334h-64V277.333333h64zM320 384v256h-64V384h64z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconcontacts.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(Iconcontacts) : Iconcontacts;
