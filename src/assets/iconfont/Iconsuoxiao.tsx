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

const Iconsuoxiao: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M469.333333 192c153.173333 0 277.333333 124.16 277.333334 277.333333 0 68.053333-24.533333 130.410667-65.216 178.688l164.885333 170.218667-48.341333 49.877333-167.594667-172.992A276.053333 276.053333 0 0 1 469.333333 746.666667c-153.173333 0-277.333333-124.16-277.333333-277.333334S316.16 192 469.333333 192z m0 64c-117.824 0-213.333333 95.509333-213.333333 213.333333s95.509333 213.333333 213.333333 213.333334 213.333333-95.509333 213.333334-213.333334-95.509333-213.333333-213.333334-213.333333z m133.184 192v64H341.333333v-64h261.184z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconsuoxiao.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(Iconsuoxiao) : Iconsuoxiao;
