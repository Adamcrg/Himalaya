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

const IcontaskManagementFill: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 243.712c164.949333 0 298.666667 133.717333 298.666667 298.666667s-133.717333 298.666667-298.666667 298.666666-298.666667-133.717333-298.666667-298.666666 133.717333-298.666667 298.666667-298.666667z m27.477333 123.157333h-64v203.626667c0 28.522667 34.474667 42.794667 54.613334 22.634667l124.458666-124.437334-45.248-45.269333-69.824 69.824v-126.378667zM620.586667 139.306667v67.882666H394.346667V139.306667H620.586667z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IcontaskManagementFill.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(IcontaskManagementFill) : IcontaskManagementFill;
