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

const Icontongxunlu: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M778.176 810.666667v64h-160v-64h160z m-445.504-212.693334c18.666667 11.690667 38.826667 21.205333 60.16 28.202667L234.666667 810.666667h287.509333v64H234.666667a64 64 0 0 1-48.597334-105.642667l146.602667-171.050667zM842.176 704v64h-224v-64h224z m0-106.666667v64h-224v-64h224z m-362.666667-448c117.824 0 213.333333 95.509333 213.333334 213.333334s-95.509333 213.333333-213.333334 213.333333-213.333333-95.509333-213.333333-213.333333 95.509333-213.333333 213.333333-213.333334z m0 64a149.333333 149.333333 0 1 0 0 298.666667 149.333333 149.333333 0 0 0 0-298.666667z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Icontongxunlu.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(Icontongxunlu) : Icontongxunlu;
