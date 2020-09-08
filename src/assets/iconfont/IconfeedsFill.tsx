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

const IconfeedsFill: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M810.666667 298.666667a64 64 0 0 1 64 64v426.666666a64 64 0 0 1-64 64l-81.130667 0.021334a127.274667 127.274667 0 0 0 16.981333-57.706667L746.666667 789.333333V298.666667h64z m-170.666667-128a64 64 0 0 1 64 64v554.666666a64 64 0 0 1-64 64H213.333333a64 64 0 0 1-64-64V234.666667a64 64 0 0 1 64-64h426.666667z m-192 320h-170.666667v64h170.666667v-64z m128-128H277.333333v64h298.666667v-64z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconfeedsFill.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(IconfeedsFill) : IconfeedsFill;
