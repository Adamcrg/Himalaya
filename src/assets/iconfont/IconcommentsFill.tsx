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

const IconcommentsFill: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M810.666667 213.333333a64 64 0 0 1 64 64v426.666667a64 64 0 0 1-64 64H478.336l-146.645333 96.106667A21.333333 21.333333 0 0 1 298.666667 846.250667V768h-85.333334a64 64 0 0 1-64-64V277.333333a64 64 0 0 1 64-64h597.333334zM539.306667 490.666667H362.666667v64h176.64v-64zM661.333333 362.666667H362.666667v64h298.666666v-64z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconcommentsFill.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(IconcommentsFill) : IconcommentsFill;
