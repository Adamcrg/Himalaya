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

const Iconjiaobiao: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M746.666667 149.333333a64 64 0 0 1 64 64v661.333334l-298.666667-133.333334L213.333333 874.666667V213.333333a64 64 0 0 1 64-64h469.333334z m0 64H277.333333v562.666667l234.666667-104.746667 234.666667 104.746667V213.333333z m-106.666667 256v64H384v-64h256z m0-149.333333v64H384v-64h256z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconjiaobiao.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(Iconjiaobiao) : Iconjiaobiao;
