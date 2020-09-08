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

const Iconascending: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M404.970667 180.117333c20.096-11.114667 22.464-12.416 38.4-3.946666l7.146666 3.925333c6.336 8.298667 7.488 9.813333 8.64 17.002667l0.810667 5.781333v644.202667h-64V279.68l-180.053333 180.117333L170.666667 414.549333zM682.666667 714.666667v64h-128v-64h128z m64-149.333334v64h-192v-64h192z m64-149.333333v64H554.666667v-64h256z m64-149.333333v64H554.666667v-64h320z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconascending.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(Iconascending) : Iconascending;