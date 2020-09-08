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

const Iconlanguage: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M810.666667 192a64 64 0 0 1 64 64v405.333333a64 64 0 0 1-64 64H490.538667l-157.44 122.453334A21.333333 21.333333 0 0 1 298.666667 830.933333V725.333333h-85.333334a64 64 0 0 1-64-64V256a64 64 0 0 1 64-64h597.333334z m0 64H213.333333v405.333333h149.333334v82.368L468.586667 661.333333H810.666667V256z m-249.856 68.437333l73.045333 271.36h-74.410667l-12.629333-52.906666h-76.117333l-12.629334 52.906666H384l72.704-271.36h104.106667z m-51.541334 59.050667h-0.682666l-24.917334 104.789333h50.176l-24.576-104.789333z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconlanguage.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(Iconlanguage) : Iconlanguage;
