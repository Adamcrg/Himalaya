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

const Iconinspection1: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M695.466667 605.866667c57.6 0 102.4 44.8 102.4 102.4 0 19.2-4.266667 36.266667-14.933334 51.2l61.866667 61.866666-34.133333 36.266667-61.866667-61.866667c-14.933333 8.533333-34.133333 14.933333-53.333333 14.933334-57.6 0-102.4-44.8-102.4-102.4s46.933333-102.4 102.4-102.4z m-401.066667-426.666667h42.666667v64h-42.666667v533.333333h256v64h-256c-36.266667 0-64-27.733333-64-64v-533.333333c0-36.266667 29.866667-64 64-64z m401.066667 490.666667c-21.333333 0-38.4 17.066667-38.4 38.4s17.066667 38.4 38.4 38.4 38.4-17.066667 38.4-38.4-17.066667-38.4-38.4-38.4z m25.6-490.666667c36.266667 0 64 27.733333 64 64v341.333333h-64v-341.333333h-42.666667v-64h42.666667z m-170.666667 341.333333v64h-192v-64h192z m106.666667-128v64h-298.666667v-64h298.666667z m-85.333334-277.333333c36.266667 0 64 27.733333 64 64v42.666667c0 36.266667-27.733333 64-64 64h-128c-36.266667 0-64-27.733333-64-64v-42.666667c0-36.266667 27.733333-64 64-64h128z m0 64h-128v42.666667h128v-42.666667z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconinspection1.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(Iconinspection1) : Iconinspection1;
