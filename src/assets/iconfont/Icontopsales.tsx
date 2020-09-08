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

const Icontopsales: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M256 234.666667v544.021333h74.730667l-0.021334-0.021333H842.666667v64h-554.666667a96 96 0 0 1-95.893333-91.477334L192 746.666667V234.666667h64z m489.6-74.624l158.378667 158.4-45.248 45.248-80.064-80.064v0.341333c0 200.448-165.482667 362.965333-370.56 366.634667l-7.082667 0.064H320v-64h81.024c173.44 0 313.642667-135.765333 313.642667-302.72v-2.496L640 356.16l-45.248-45.269333 150.826667-150.826667z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Icontopsales.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(Icontopsales) : Icontopsales;
