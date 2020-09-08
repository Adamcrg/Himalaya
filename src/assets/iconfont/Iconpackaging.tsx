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

const Iconpackaging: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M537.813333 118.058667l298.666667 131.776A64 64 0 0 1 874.666667 308.373333v407.253334a64 64 0 0 1-38.186667 58.538666l-298.666667 131.776a64 64 0 0 1-51.626666 0l-298.666667-131.776A64 64 0 0 1 149.333333 715.626667v-407.253334a64 64 0 0 1 38.186667-58.538666l298.666667-131.776a64 64 0 0 1 51.626666 0zM213.333333 360.64v354.986667l266.666667 117.632V485.077333L213.333333 360.64z m597.333334 2.944l-85.717334 40V533.333333H725.333333l-0.384 0.213334v1.130666l-1.941333-0.021333L661.333333 569.6v-34.944h-0.384v-101.205333L544 488.021333v345.237334L810.666667 715.626667V363.584z m-484.010667-105.216l-93.077333 41.066667 281.578666 131.413333 94.698667-44.202667-283.2-128.277333zM512 176.618667l-106.752 47.082666 281.002667 127.296 107.413333-50.133333L512 176.618667z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconpackaging.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(Iconpackaging) : Iconpackaging;
