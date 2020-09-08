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

const IconsecurityFill: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M528.490667 151.488l277.333333 73.962667A64 64 0 0 1 853.333333 287.296v350.741333a64 64 0 0 1-26.154666 51.626667l-277.333334 203.370667a64 64 0 0 1-75.690666 0l-277.333334-203.392A64 64 0 0 1 170.666667 638.037333V287.296a64 64 0 0 1 47.509333-61.845333l277.333333-73.962667a64 64 0 0 1 32.981334 0z m110.336 186.197333l-183.893334 182.037334-69.653333-69.632-45.226667 45.269333 114.688 114.624 229.12-226.816-45.034666-45.482667z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconsecurityFill.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(IconsecurityFill) : IconsecurityFill;