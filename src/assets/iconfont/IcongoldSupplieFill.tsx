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

const IcongoldSupplieFill: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M874.666667 512c0 189.504-145.365333 345.066667-330.666667 361.28V682.666667h-64v190.613333C294.72 857.066667 149.333333 701.525333 149.333333 512c0-189.525333 145.365333-345.088 330.666667-361.28V341.333333h64V150.72C729.301333 166.933333 874.666667 322.496 874.666667 512z m-238.229334 21.333333H387.562667L362.666667 618.666667h298.666666l-24.896-85.333334zM661.333333 405.333333H362.666667l24.896 85.333334h248.874666L661.333333 405.333333z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IcongoldSupplieFill.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(IcongoldSupplieFill) : IcongoldSupplieFill;
