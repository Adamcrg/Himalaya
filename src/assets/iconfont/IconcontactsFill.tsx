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

const IconcontactsFill: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M746.666667 170.666667a64 64 0 0 1 64 64v554.666666a64 64 0 0 1-64 64H320a64 64 0 0 1-64-64v-42.666666h-42.666667v-64h149.333334v-42.666667h-106.666667V384h106.666667v-42.666667h-149.333334v-64h42.666667v-42.666666a64 64 0 0 1 64-64h426.666667z m-56.597334 106.666666h-64v469.333334h64V277.333333z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconcontactsFill.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(IconcontactsFill) : IconcontactsFill;
