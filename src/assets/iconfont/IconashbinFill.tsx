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

const IconashbinFill: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M416 394.645333l0.298667 318.506667h64l-0.298667-318.506667h53.013333L533.333333 713.152h64l-0.32-318.506667h135.424L704.426667 792.64a64 64 0 0 1-63.829334 59.498667H368.768a64 64 0 0 1-63.829333-59.52L276.885333 394.666667l139.114667-0.021334zM181.333333 288h640v64h-640v-64z m453.482667-106.666667v64h-256v-64h256z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconashbinFill.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(IconashbinFill) : IconashbinFill;
