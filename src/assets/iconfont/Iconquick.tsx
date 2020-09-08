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

const Iconquick: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M647.125333 170.666667a42.666667 42.666667 0 0 1 39.381334 59.093333l-69.696 167.04h114.069333a42.666667 42.666667 0 0 1 33.194667 69.482667L457.834667 845.738667a42.666667 42.666667 0 0 1-75.029334-35.221334l40.746667-202.368h-137.109333a42.666667 42.666667 0 0 1-39.466667-58.88l144.533333-352.128A42.666667 42.666667 0 0 1 430.976 170.666667h216.149333z m-201.834666 64l-127.04 309.482666h183.488l-38.997334 193.578667 223.509334-276.906667H520.746667L615.104 234.666667h-169.813333z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconquick.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(Iconquick) : Iconquick;
