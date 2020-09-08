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

const IconofficeSupplies: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M789.333333 620.309333a64 64 0 0 1 64 64v192l-128-48-128 48v-192a64 64 0 0 1 64-64h128z m-570.773333 148.693334l146.602667-171.029334c18.666667 11.669333 38.826667 21.184 60.117333 28.202667L267.157333 810.666667H554.666667v64H267.157333a64 64 0 0 1-48.597333-105.642667l146.602667-171.050667zM789.333333 684.330667h-128v99.626666l64-23.978666 64 24v-99.648zM512 149.333333c117.824 0 213.333333 95.509333 213.333333 213.333334s-95.509333 213.333333-213.333333 213.333333-213.333333-95.509333-213.333333-213.333333S394.176 149.333333 512 149.333333z m0 64a149.333333 149.333333 0 1 0 0 298.666667 149.333333 149.333333 0 0 0 0-298.666667z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconofficeSupplies.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(IconofficeSupplies) : IconofficeSupplies;
