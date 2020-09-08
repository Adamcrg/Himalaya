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

const IconsearchcartFill: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M695.466667 576a119.466667 119.466667 0 0 1 102.933333 180.16l71.146667 71.146667-42.24 42.24-71.146667-71.146667A119.466667 119.466667 0 1 1 695.466667 576z m-364.8 170.666667a53.333333 53.333333 0 1 1 0 106.666666 53.333333 53.333333 0 0 1 0-106.666666z m364.8-106.666667a55.466667 55.466667 0 1 0 0 110.933333 55.466667 55.466667 0 0 0 0-110.933333zM149.504 138.666667a96 96 0 0 1 92.906667 71.786666l1.024 4.394667L256.64 277.333333 796.096 277.333333a64 64 0 0 1 62.677333 76.949334L811.669333 582.4A162.133333 162.133333 0 0 0 533.546667 704h-201.322667a64 64 0 0 1-62.677333-51.050667l-60.586667-293.418666-0.405333 0.085333-27.733334-131.562667a32 32 0 0 0-28.309333-25.237333l-2.986667-0.149333H94.741333v-64h54.741334zM682.666667 448H384v64h298.666667v-64z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconsearchcartFill.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(IconsearchcartFill) : IconsearchcartFill;
