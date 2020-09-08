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

const Iconlibra: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M768 192v2.944l153.28 275.2v50.88a151.296 151.296 0 0 1-302.528 5.12l-0.085333-5.12v-50.88L732.373333 256h-185.834666v540.138667h210.026666v64h-480v-64h205.973334V256h-192.533334l119.253334 214.144v50.88a151.296 151.296 0 0 1-302.506667 5.12L106.666667 521.002667v-50.88L254.357333 192l1.642667 2.944V192h512z m-512.298667 133.930667L170.666667 486.08v34.944a87.296 87.296 0 1 0 174.613333 0v-34.261333l-89.578667-160.832z m512 0L682.666667 486.08v34.944a87.296 87.296 0 1 0 174.613333 0v-34.261333l-89.578667-160.832z m43.264 144.746666v62.890667h-85.44v-62.890667h85.44zM298.666667 469.333333v64h-85.333334v-64h85.333334z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconlibra.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(Iconlibra) : Iconlibra;
