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

const Iconviewgallery: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M426.666667 170.666667a64 64 0 0 1 64 64v554.666666a64 64 0 0 1-64 64h-192a64 64 0 0 1-64-64V234.666667a64 64 0 0 1 64-64h192z m362.666666 362.666666a64 64 0 0 1 64 64v192a64 64 0 0 1-64 64h-192a64 64 0 0 1-64-64v-192a64 64 0 0 1 64-64h192zM426.666667 234.666667h-192v554.666666h192V234.666667z m362.666666 362.666666h-192v192h192v-192z m0-426.666666a64 64 0 0 1 64 64v192a64 64 0 0 1-64 64h-192a64 64 0 0 1-64-64v-192a64 64 0 0 1 64-64h192z m0 64h-192v192h192v-192z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconviewgallery.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(Iconviewgallery) : Iconviewgallery;
