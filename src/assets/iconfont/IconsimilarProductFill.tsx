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

const IconsimilarProductFill: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M908.074667 618.666667a42.666667 42.666667 0 0 1 33.045333 69.674666l-67.2 82.197334V908.8l-63.274667-16.981333v-145.045334L863.082667 682.666667H712.96L768 746.453333v133.909334l-63.765333-17.130667V770.56l-70.165334-81.322667A42.666667 42.666667 0 0 1 666.368 618.666667h241.706667zM192 365.205333l300.373333 123.946667-1.578666 374.997333a64.064 64.064 0 0 1-2.389334-1.024l-258.389333-114.730666A64 64 0 0 1 192 689.898667V365.226667z m644.736 14.698667V576h-166.357333a85.333333 85.333333 0 0 0-60.096 24.746667l-3.328 3.498666a85.333333 85.333333 0 0 0 2.944 117.290667l3.392 3.221333L661.333333 768v41.386667l-106.496 47.296 1.514667-364.842667 280.384-111.936zM540.352 160.853333l258.346667 114.730667a64 64 0 0 1 34.261333 36.8l-306.730667 121.472-324.394666-133.866667c6.613333-10.538667 16.32-19.136 28.181333-24.405333l258.389333-114.730667a64 64 0 0 1 51.946667 0z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconsimilarProductFill.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(IconsimilarProductFill) : IconsimilarProductFill;