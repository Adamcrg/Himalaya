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

const IconnoticeFill: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M641.770667 222.101333V768.213333c0 43.626667-53.866667 64.789333-84.053334 33.024l-140.309333-149.418666-12.074667-0.021334V746.666667a64 64 0 0 1-64 64h-64a64 64 0 0 1-64-64v-94.890667H182.058667a64 64 0 0 1-64-64v-192.362667a64 64 0 0 1 60.224-63.893333l4.608-0.106667 236.672 3.114667 138.176-145.450667c30.165333-31.786667 84.053333-10.602667 84.053333 33.024z m127.68 12.309334c92.544 47.082667 158.229333 139.392 167.957333 247.829333v56.021333c-9.450667 105.472-71.850667 195.690667-160.426667 243.882667L747.456 725.333333A245.269333 245.269333 0 0 0 874.666667 510.250667a245.333333 245.333333 0 0 0-134.698667-219.029334l29.482667-56.810666z m-53.909334 103.893333a191.466667 191.466667 0 0 1 94.442667 165.44 191.466667 191.466667 0 0 1-92.416 164.202667l-29.653333-56.96a127.488 127.488 0 0 0 58.069333-107.242667 127.488 127.488 0 0 0-60.010667-108.501333l29.568-56.917334z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconnoticeFill.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(IconnoticeFill) : IconnoticeFill;
