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

const IcontrustFill: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M546.581333 893.546667a64 64 0 0 1-90.496 0L109.12 546.56a64 64 0 0 1 0-90.496L334.570667 230.613333a64 64 0 0 1 90.496 0l76.245333 76.266667 76.288-76.266667a64 64 0 0 1 90.496 0L893.546667 456.106667a64 64 0 0 1 0 90.496L546.56 893.546667z m-166.762666-617.642667L154.389333 501.333333 501.333333 848.277333l21.034667-21.034666-76.245333-76.266667 45.248-45.248 76.266666 76.266667 23.786667-23.786667-76.266667-76.266667 45.269334-45.269333 76.245333 76.266667 27.648-27.648-76.245333-76.266667 45.248-45.248 76.266666 76.266667 17.173334-17.194667-100.565334-100.565333-3.349333 3.349333a120.298667 120.298667 0 0 1-170.112 0l-39.808-39.808a64 64 0 0 1 0-90.496l43.136-43.178667-76.245333-76.245333z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IcontrustFill.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(IcontrustFill) : IcontrustFill;
