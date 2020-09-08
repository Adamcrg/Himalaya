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

const IconaddAccount: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M175.893333 769.024l146.602667-171.050667c18.666667 11.669333 38.826667 21.184 60.117333 28.202667L224.490667 810.666667H554.666667v64H224.490667a64 64 0 0 1-48.597334-105.642667l146.602667-171.050667zM746.666667 640v85.333333h85.333333v64h-85.333333v85.333334h-64v-85.333334h-85.333334v-64h85.333334v-85.333333h64zM469.333333 149.333333c117.824 0 213.333333 95.509333 213.333334 213.333334s-95.509333 213.333333-213.333334 213.333333-213.333333-95.509333-213.333333-213.333333S351.509333 149.333333 469.333333 149.333333z m0 64a149.333333 149.333333 0 1 0 0 298.666667 149.333333 149.333333 0 0 0 0-298.666667z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconaddAccount.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(IconaddAccount) : IconaddAccount;
