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

const Iconsecurity: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M528.490667 151.488l277.333333 73.962667A64 64 0 0 1 853.333333 287.296v350.741333a64 64 0 0 1-26.154666 51.626667l-277.333334 203.370667a64 64 0 0 1-75.690666 0l-277.333334-203.392A64 64 0 0 1 170.666667 638.037333V287.296a64 64 0 0 1 47.509333-61.845333l277.333333-73.962667a64 64 0 0 1 32.981334 0zM512 213.333333l-277.333333 73.962667v350.741333l277.333333 203.392 277.333333-203.392V287.296L512 213.333333z m126.826667 124.373334l45.013333 45.461333-229.12 226.816-114.666667-114.624 45.226667-45.269333 69.674667 69.632 183.872-182.037334z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconsecurity.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(Iconsecurity) : Iconsecurity;