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

const IcontagSubscript: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M821.333333 247.914667L247.914667 821.333333H821.333333V247.914667z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IcontagSubscript.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(IcontagSubscript) : IcontagSubscript;
