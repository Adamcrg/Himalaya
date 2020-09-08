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

const Icontemplate: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M277.333333 298.666667v490.666666h437.333334v64h-405.333334a96 96 0 0 1-95.893333-91.477333L213.333333 757.333333V298.666667h64z m472.789334-127.786667a64 64 0 0 1 64 64v451.242667a64 64 0 0 1-64 64H319.786667V234.88a64 64 0 0 1 64-64h366.336z m0 64H383.786667v451.242667h366.336V234.88zM640 298.666667v64h-192v-64h192z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Icontemplate.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(Icontemplate) : Icontemplate;
