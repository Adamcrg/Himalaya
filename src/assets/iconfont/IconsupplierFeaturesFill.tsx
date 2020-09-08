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

const IconsupplierFeaturesFill: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M822.741333 618.666667a42.666667 42.666667 0 0 1 33.045334 69.674666l-67.2 82.197334V908.8l-63.274667-16.981333v-145.045334L777.749333 682.666667H627.626667L682.666667 746.453333v133.909334l-63.765334-17.130667V770.56l-70.165333-81.322667A42.666667 42.666667 0 0 1 581.034667 618.666667h241.706666z m-604.181333 150.357333l146.602667-171.050667a275.690667 275.690667 0 0 0 86.272 35.413334L576 778.666667V874.666667H267.157333a64 64 0 0 1-48.597333-105.642667l146.602667-171.050667zM512 149.333333c117.824 0 213.333333 95.509333 213.333333 213.333334s-95.509333 213.333333-213.333333 213.333333-213.333333-95.509333-213.333333-213.333333S394.176 149.333333 512 149.333333z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconsupplierFeaturesFill.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(IconsupplierFeaturesFill) : IconsupplierFeaturesFill;
