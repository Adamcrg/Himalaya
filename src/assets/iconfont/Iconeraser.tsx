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

const Iconeraser: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M647.850667 213.205333l3.370666 3.157334 221.290667 222.72a64 64 0 0 1 0 90.24L592.938667 810.624 789.333333 810.666667v64H297.216l-150.613333-151.594667a64 64 0 0 1 0-90.218667L560.426667 216.362667a64 64 0 0 1 87.424-3.157334z m-385.066667 393.493334L192 677.973333 323.84 810.666667h142.890667l-203.946667-203.946667z m343.04-345.237334L307.904 561.301333l221.994667 221.994667 297.216-299.093333-221.290667-222.72z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconeraser.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(Iconeraser) : Iconeraser;
