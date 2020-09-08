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

const Iconsuggest: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M830.784 489.301333l45.098667 45.397334-322.282667 320-14.656-14.762667 14.741333 14.890667h-45.013333v-45.376l-0.149333-0.149334 322.261333-320zM746.666667 170.666667a64 64 0 0 1 64 64v192l-64 64V234.666667H277.333333v554.666666h170.666667l-64 64h-106.666667a64 64 0 0 1-64-64V234.666667a64 64 0 0 1 64-64h469.333334zM533.333333 426.666667v64h-170.666666v-64h170.666666z m128-128v64H362.666667v-64h298.666666z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconsuggest.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(Iconsuggest) : Iconsuggest;
