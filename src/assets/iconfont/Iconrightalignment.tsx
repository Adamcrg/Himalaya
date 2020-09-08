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

const Iconrightalignment: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M810.666667 768v64H213.333333v-64h597.333334z m0-192v64H554.666667v-64h256z m0-192v64H384v-64h426.666667z m0-192v64H213.333333V192h597.333334z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconrightalignment.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(Iconrightalignment) : Iconrightalignment;
