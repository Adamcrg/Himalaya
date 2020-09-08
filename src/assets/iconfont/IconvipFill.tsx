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

const IconvipFill: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M552.96 200.128a64 64 0 0 1 8.213333 8.213333L682.666667 354.133333l134.016-98.965333a64 64 0 0 1 100.117333 66.986667L789.333333 832H234.666667L107.2 322.176a64 64 0 0 1 100.117333-67.008L341.333333 354.133333l121.493334-145.792a64 64 0 0 1 90.154666-8.213333zM661.333333 649.962667H362.666667v68.266666h298.666666v-68.266666z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconvipFill.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(IconvipFill) : IconvipFill;
