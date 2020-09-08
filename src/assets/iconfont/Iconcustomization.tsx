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

const Iconcustomization: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M268.593584 186.194692a64 64 0 0 1 90.509668 0l147.621269 147.651439 156.355451-151.950648a64 64 0 0 1 89.861015 0.648653l101.898802 101.898801a64 64 0 0 1 2.579525 87.779293l-3.243263 3.363943-155.027976 150.683512 119.201233 119.171063a64 64 0 0 1 0 90.509668l-101.898802 101.898801a64 64 0 0 1-90.509668 0l-121.961777-121.901438-82.273289 79.980377-151.573524 51.8017a64 64 0 0 1-82.801261-76.043206l41.951231-168.182048 82.288373-79.965292L166.694783 378.603162a64 64 0 0 1 0-90.509668l101.898801-101.898802z m281.258793 485.146906l33.971296 33.971295 64.744582-64.744582 45.254834 45.254834L629.108677 750.537557l42.086995 42.086996 101.913886-101.913886-119.86497-119.834801-103.392211 100.465732z m79.739018-367.680441l100.782515 103.015087 79.211045-76.978473-101.898802-101.898801-78.079673 75.847102z m-342.624348 333.030323l-37.531343 150.487408 137.966904-47.155537 297.067816-288.740926-100.782516-103.015087-296.720861 288.424142zM313.848418 231.449526l-101.898801 101.898802 42.041741 42.07191 64.714412-64.714412 45.254834 45.254834L299.246192 420.675072l58.212801 58.242972 103.377126-100.450647L313.848418 231.449526z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconcustomization.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(Iconcustomization) : Iconcustomization;
