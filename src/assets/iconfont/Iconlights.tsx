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

const Iconlights: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M620.010667 806.677333V874.666667H393.344v-68.010667h226.666667zM506.666667 149.333333c150.229333 0 272 121.770667 272 272 0 100.672-54.698667 188.565333-135.978667 235.605334l-0.021333 40.384a64 64 0 0 1-64 64h-144a64 64 0 0 1-64-64v-40.384A271.893333 271.893333 0 0 1 234.666667 421.333333C234.666667 271.104 356.437333 149.333333 506.666667 149.333333z m0 64C391.786667 213.333333 298.666667 306.453333 298.666667 421.333333a207.850667 207.850667 0 0 0 104.042666 180.202667l31.957334 18.496v77.290667h144l0.042666-77.312 31.936-18.474667A207.850667 207.850667 0 0 0 714.666667 421.333333c0-114.88-93.12-208-208-208z m33.152 72.085334l44.864 45.653333-67.818667 66.645333h53.205333c28.842667 0 42.965333 35.178667 22.122667 55.125334l-120.213333 114.986666-44.245334-46.250666 62.592-59.861334h-51.669333c-28.629333 0-42.837333-34.752-22.421333-54.826666l123.584-121.472z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconlights.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(Iconlights) : Iconlights;
