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

const IconrejectedOrder: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M810.666667 640a64 64 0 0 1 64 64v128a64 64 0 0 1-64 64h-149.333334a64 64 0 0 1-64-64v-128a64 64 0 0 1 64-64h149.333334zM298.666667 192h42.666666v63.978667L298.666667 256v533.333333h256v64H298.666667a64 64 0 0 1-64-64V256a64 64 0 0 1 64-64z m512 512h-149.333334v128h149.333334v-128z m-21.333334 32v64h-105.898666v-64H789.333333zM725.333333 192a64 64 0 0 1 64 64v341.333333h-64V256h-42.666666V192h42.666666z m-170.666666 341.333333v64h-192v-64h192z m106.666666-128v64H362.666667v-64h298.666666zM576 128a64 64 0 0 1 64 64v42.666667a64 64 0 0 1-64 64h-128a64 64 0 0 1-64-64V192a64 64 0 0 1 64-64h128z m0 64h-128v42.666667h128V192z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconrejectedOrder.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(IconrejectedOrder) : IconrejectedOrder;
