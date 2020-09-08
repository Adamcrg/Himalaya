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

const Iconattachent: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M787.968 472.277333L505.173333 756.736a151.488 151.488 0 0 1-215.168 0c-59.52-59.882667-59.52-157.077333 0-216.96l287.018667-288.725333a91.349333 91.349333 0 0 1 129.770667 0 93.098667 93.098667 0 0 1 0 131.072L428.032 662.506667a31.701333 31.701333 0 0 1-45.098667 0 32.64 32.64 0 0 1 0-45.909334l250.133334-251.648-45.397334-45.12-250.133333 251.648a96.64 96.64 0 0 0 0 136.170667 95.701333 95.701333 0 0 0 135.893333 0l278.72-280.405333a157.098667 157.098667 0 0 0 0-221.312 155.349333 155.349333 0 0 0-220.522666 0L244.608 494.634667c-84.373333 84.864-84.373333 222.378667 0 307.221333a215.488 215.488 0 0 0 305.92 0l282.837333-284.458667-45.397333-45.12z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconattachent.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(Iconattachent) : Iconattachent;
