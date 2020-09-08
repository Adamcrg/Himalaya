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

const Iconrankinglist: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 320c153.173333 0 277.333333 124.16 277.333333 277.333333s-124.16 277.333333-277.333333 277.333334-277.333333-124.16-277.333333-277.333334 124.16-277.333333 277.333333-277.333333z m0 64c-117.824 0-213.333333 95.509333-213.333333 213.333333s95.509333 213.333333 213.333333 213.333334 213.333333-95.509333 213.333333-213.333334-95.509333-213.333333-213.333333-213.333333z m0 64a149.333333 149.333333 0 1 1 0 298.666667 149.333333 149.333333 0 0 1 0-298.666667z m0 64a85.333333 85.333333 0 1 0 0 170.666667 85.333333 85.333333 0 0 0 0-170.666667zM736 160a64 64 0 0 1 64 64v109.248l-52.053333 52.053333-45.226667-45.269333 33.28-33.28V224h-85.333333V277.333333h-64v-53.333333h-149.333334V277.333333h-64v-53.333333h-85.333333v82.752l33.28 33.28-45.226667 45.269333-52.053333-52.053333V224a64 64 0 0 1 64-64z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconrankinglist.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(Iconrankinglist) : Iconrankinglist;
