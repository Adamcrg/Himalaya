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

const Icontuishui: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M789.333333 170.666667a64 64 0 0 1 64 64v192a64 64 0 0 1-64 64h-42.666666v298.666666a64 64 0 0 1-64 64H341.333333a64 64 0 0 1-64-64V490.666667h-42.666666a64 64 0 0 1-64-64v-192a64 64 0 0 1 64-64h554.666666z m-106.666666 192H341.333333v426.666666h341.333334V362.666667z m-129.28 62.72l45.226666 45.226666L557.269333 512H618.666667v64h-74.666667v42.666667H618.666667v64h-74.666667v64h-64v-64H405.333333v-64h74.666667v-42.666667H405.333333v-64h61.418667l-41.386667-41.386667 45.269334-45.226666L512 466.730667l41.386667-41.386667zM789.333333 234.666667H234.666667v192h42.666666v-64c0-2.645333 0.149333-5.226667 0.469334-7.786667A32 32 0 0 1 298.666667 298.666667h426.666666a32 32 0 0 1 20.885334 56.256c0.298667 2.517333 0.448 5.12 0.448 7.744v64h42.666666v-192z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Icontuishui.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(Icontuishui) : Icontuishui;
