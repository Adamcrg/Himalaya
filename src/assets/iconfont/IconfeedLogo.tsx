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

const IconfeedLogo: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M309.461333 205.994667a68.778667 68.778667 0 0 1 34.965334 18.837333l153.813333 153.813333 0.042667-0.085333 45.248 45.248-0.064 0.085333 161.557333 161.557334 0.064-0.085334 45.269333 45.290667-168.490666 168.533333c-48.597333 48.576-129.792 46.208-181.333334-5.333333L88.021333 481.28c-25.792-25.770667-26.986667-66.346667-2.688-90.666667a59.818667 59.818667 0 0 1 33.92-16.810666l102.912-14.805334 14.784-102.912c4.992-34.709333 37.461333-57.130667 72.533334-50.090666z m-11.690666 62.698666l-19.413334 146.496-146.538666 19.413334L446.848 749.653333c25.962667 25.962667 66.432 27.626667 90.368 3.690667l122.581333-122.602667-362.026666-362.026666z m525.44-3.84l101.205333 101.248a64 64 0 0 1 0 90.517334l-143.872 143.872-45.290667-45.290667 143.914667-143.850667-101.226667-101.226666a85.333333 85.333333 0 0 0-120.682666 0l-83.562667 83.52-45.226667-45.248 83.541334-83.52a149.333333 149.333333 0 0 1 211.2 0z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconfeedLogo.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(IconfeedLogo) : IconfeedLogo;
