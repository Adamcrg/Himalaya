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

const Iconstore: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M746.666667 810.666667v-202.645334a138.24 138.24 0 0 0 64 10.24V810.666667a64 64 0 0 1-64 64h-192v-149.333334h-64v149.333334h-192a64 64 0 0 1-64-64v-195.712a139.050667 139.050667 0 0 0 64 0V810.666667h128v-149.333334h192v149.333334h128v-202.645334z m-21.013334-618.666667a64 64 0 0 1 54.976 31.253333l101.76 170.837334-0.277333-0.021334a110.72 110.72 0 0 1-182.08 122.965334 120.298667 120.298667 0 0 1-87.765333 37.824 120.469333 120.469333 0 0 1-90.581334-40.896 120.469333 120.469333 0 0 1-90.56 40.896 120.426667 120.426667 0 0 1-87.765333-37.824 110.72 110.72 0 0 1-175.786667-133.76l85.568-157.781334A64 64 0 0 1 309.397333 192h416.256z m0 64H309.397333l-86.912 160.213333-1.493333 2.304a46.72 46.72 0 0 0 74.197333 56.384l46.314667-52.970666 48.362667 51.136c10.688 11.328 25.386667 17.792 41.258666 17.792 16.554667 0 31.829333-7.04 42.581334-19.242667l48-54.357333 47.978666 54.357333c10.752 12.202667 26.026667 19.242667 42.581334 19.242667 15.872 0 30.549333-6.464 41.216-17.749334l48.32-51.2 46.378666 52.970667a46.72 46.72 0 0 0 76.864-51.818667l-0.725333-1.429333L725.653333 256z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconstore.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(Iconstore) : Iconstore;
