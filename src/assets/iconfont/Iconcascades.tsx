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

const Iconcascades: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M832 341.333333v554.666667H405.333333v-64h362.666667V341.333333h64z m-106.666667-106.666666v554.666666H298.666667v-64h362.666666V234.666667h64z m-106.666666-106.666667v554.666667H192V128h426.666667z m-64 64H256v426.666667h298.666667V192z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconcascades.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(Iconcascades) : Iconcascades;
