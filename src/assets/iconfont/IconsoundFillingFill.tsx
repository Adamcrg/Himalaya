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

const IconsoundFillingFill: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M599.104 243.434667V789.546667c0 43.626667-53.866667 64.789333-84.053333 33.024l-140.309334-128.085334H203.392a64 64 0 0 1-64-64V416.981333a64 64 0 0 1 60.224-63.893333l4.309333-0.106667 172.970667 2.88 138.176-145.450666c30.165333-31.786667 84.053333-10.602667 84.053333 33.024z m127.68 12.309333c92.544 47.082667 158.229333 139.392 167.957333 247.829333v56.021334c-9.450667 105.472-71.850667 195.690667-160.426666 243.882666L704.789333 746.666667A245.269333 245.269333 0 0 0 832 531.584a245.333333 245.333333 0 0 0-134.698667-219.029333l29.482667-56.810667z m-53.909333 103.893333a191.466667 191.466667 0 0 1 94.442666 165.44 191.466667 191.466667 0 0 1-92.416 164.202667l-29.653333-56.96a127.488 127.488 0 0 0 58.069333-107.242667 127.488 127.488 0 0 0-60.010666-108.501333l29.568-56.917333z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconsoundFillingFill.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(IconsoundFillingFill) : IconsoundFillingFill;
