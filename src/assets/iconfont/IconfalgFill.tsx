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

const IconfalgFill: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M256 138.666667v746.666666H192v-746.666666h64z m588.544 0L644.544 341.333333l200 202.666667H298.666667v-405.333333h545.877333z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconfalgFill.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(IconfalgFill) : IconfalgFill;
