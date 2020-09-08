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

const IconmanageOrder: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M741.717333 596.010667a64 64 0 0 1 55.424 32l37.717334 65.322666a64 64 0 0 1 0 64l-37.717334 65.322667a64 64 0 0 1-55.424 32h-75.434666a64 64 0 0 1-55.424-32L573.141333 757.333333a64 64 0 0 1 0-64l37.717334-65.322666a64 64 0 0 1 55.424-32h75.434666zM298.666667 192h42.666666v63.978667L298.666667 256v533.333333h213.333333v64H298.666667a64 64 0 0 1-64-64V256a64 64 0 0 1 64-64z m443.050666 468.010667h-75.434666L628.565333 725.333333l37.717334 65.322667h75.434666L779.434667 725.333333l-37.717334-65.322666zM704 682.666667a42.666667 42.666667 0 1 1 0 85.333333 42.666667 42.666667 0 0 1 0-85.333333z m-149.333333-149.333334v64h-192v-64h192z m170.666666-341.333333a64 64 0 0 1 64 64l-0.021333 298.666667h-64L725.333333 256h-42.666666V192h42.666666z m-64 213.333333v64H362.666667v-64h298.666666zM576 128a64 64 0 0 1 64 64v42.666667a64 64 0 0 1-64 64h-128a64 64 0 0 1-64-64V192a64 64 0 0 1 64-64h128z m0 64h-128v42.666667h128V192z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconmanageOrder.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(IconmanageOrder) : IconmanageOrder;