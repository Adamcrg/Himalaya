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

const Iconleftalignment: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M810.666667 768v64H213.333333v-64h597.333334z m-341.333334-192v64H213.333333v-64h256z m170.666667-192v64H213.333333v-64h426.666667z m170.666667-192v64H213.333333V192h597.333334z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconleftalignment.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(Iconleftalignment) : Iconleftalignment;
