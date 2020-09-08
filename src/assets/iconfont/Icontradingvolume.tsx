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

const Icontradingvolume: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M245.333333 245.333333V768H810.666667v64H277.333333a96 96 0 0 1-96-96v-490.666667h64z m581.141334-42.666666V426.666667h-64v-111.082667l-194.688 199.701333-61.653334-63.872-141.781333 146.816-46.037333-44.458666 187.797333-194.517334 61.909333 64.128 152.746667-156.714666h-102.464v-64h208.170667z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Icontradingvolume.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(Icontradingvolume) : Icontradingvolume;
