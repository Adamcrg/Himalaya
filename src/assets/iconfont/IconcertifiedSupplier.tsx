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

const IconcertifiedSupplier: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M830.869333 659.861333l44.928 45.610667-174.08 171.456-105.536-104.106667 44.970667-45.568 60.586667 59.818667 129.130666-127.210667z m-465.706666-61.866666c18.666667 11.669333 38.826667 21.184 60.138666 28.181333L267.157333 810.666667h266.730667l68.352 64H267.157333a64 64 0 0 1-48.597333-105.642667l146.602667-171.050667zM512 149.333333c117.824 0 213.333333 95.509333 213.333333 213.333334s-95.509333 213.333333-213.333333 213.333333-213.333333-95.509333-213.333333-213.333333S394.176 149.333333 512 149.333333z m0 64a149.333333 149.333333 0 1 0 0 298.666667 149.333333 149.333333 0 0 0 0-298.666667z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconcertifiedSupplier.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(IconcertifiedSupplier) : IconcertifiedSupplier;
