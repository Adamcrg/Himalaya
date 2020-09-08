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

const Iconzhuanyequanwei: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M716.906667 271.232l111.146666 66.688A96 96 0 0 1 874.666667 420.245333V768a96 96 0 0 1-96 96h-512A96 96 0 0 1 170.666667 768V420.245333a96 96 0 0 1 46.613333-82.346666l111.146667-66.666667 32.917333 54.869333-111.146667 66.688A32 32 0 0 0 234.666667 420.266667V768a32 32 0 0 0 32 32h512A32 32 0 0 0 810.666667 768V420.245333a32 32 0 0 0-15.530667-27.456l-111.146667-66.688 32.917334-54.869333zM522.666667 149.333333l128 76.8-54.506667 115.2h-1.856L629.333333 634.389333 522.666667 725.333333l-106.666667-90.944L451.008 341.333333h-1.493333L394.666667 226.133333l128-76.8z m15.381333 192h-30.784l-32.256 269.973334 47.658667 40.618666 47.658666-40.618666L538.026667 341.333333z m-15.381333-117.354666l-45.226667 27.136 12.48 26.218666h65.706667l12.373333-26.154666L522.666667 224z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconzhuanyequanwei.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(Iconzhuanyequanwei) : Iconzhuanyequanwei;
