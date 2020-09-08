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

const IcontaskManagement: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 243.712c164.949333 0 298.666667 133.717333 298.666667 298.666667s-133.717333 298.666667-298.666667 298.666666-298.666667-133.717333-298.666667-298.666666 133.717333-298.666667 298.666667-298.666667z m0 64c-129.6 0-234.666667 105.066667-234.666667 234.666667s105.066667 234.666667 234.666667 234.666666 234.666667-105.066667 234.666667-234.666666-105.066667-234.666667-234.666667-234.666667z m27.477333 59.157333v126.378667l69.824-69.824 45.226667 45.269333-124.416 124.437334c-20.16 20.16-54.634667 5.888-54.634667-22.613334v-203.648h64zM620.586667 139.306667v67.882666H394.346667V139.306667H620.586667z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IcontaskManagement.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(IcontaskManagement) : IcontaskManagement;
