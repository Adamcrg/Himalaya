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

const IconfeedLogoFill: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M309.461333 205.994667a68.778667 68.778667 0 0 1 34.965334 18.837333l153.813333 153.813333 0.042667-0.085333 252.074666 252.096-168.490666 168.533333c-48.597333 48.576-129.792 46.208-181.333334-5.333333L88.021333 481.28c-25.792-25.770667-26.986667-66.346667-2.688-90.666667a59.818667 59.818667 0 0 1 33.92-16.810666l102.912-14.805334 14.784-102.912c4.992-34.709333 37.461333-57.130667 72.533334-50.090666z m513.728 58.88l101.226667 101.226666a64 64 0 0 1 0 90.517334l-143.872 143.872-252.096-252.096 83.562667-83.52a149.333333 149.333333 0 0 1 211.2 0z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconfeedLogoFill.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(IconfeedLogoFill) : IconfeedLogoFill;
