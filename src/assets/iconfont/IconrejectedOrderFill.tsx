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

const IconrejectedOrderFill: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M810.666667 640a64 64 0 0 1 64 64v128a64 64 0 0 1-64 64h-149.333334a64 64 0 0 1-64-64v-128a64 64 0 0 1 64-64h149.333334zM341.333333 192v85.333333a64 64 0 0 0 60.245334 63.893334L405.333333 341.333333h213.333334a64 64 0 0 0 63.893333-60.245333L682.666667 277.333333V192h42.666666a64 64 0 0 1 64 64l-0.021333 341.333333H618.666667a64 64 0 0 0-63.893334 60.245334L554.666667 661.333333v192H298.666667a64 64 0 0 1-64-64V256a64 64 0 0 1 64-64h42.666666z m469.333334 512h-149.333334v128h149.333334v-128z m-21.333334 32v64h-105.898666v-64H789.333333zM554.666667 533.333333h-192v64h192v-64z m106.666666-128H362.666667v64h298.666666v-64zM576 128a64 64 0 0 1 64 64v42.666667a64 64 0 0 1-64 64h-128a64 64 0 0 1-64-64V192a64 64 0 0 1 64-64h128z m0 64h-128v42.666667h128V192z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconrejectedOrderFill.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(IconrejectedOrderFill) : IconrejectedOrderFill;
