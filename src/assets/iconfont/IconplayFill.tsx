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

const IconplayFill: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 149.333333c200.298667 0 362.666667 162.368 362.666667 362.666667s-162.368 362.666667-362.666667 362.666667S149.333333 712.298667 149.333333 512 311.701333 149.333333 512 149.333333z m-50.56 234.666667c-19.2 0-34.773333 15.573333-34.773333 34.773333v182.997334a34.773333 34.773333 0 0 0 53.546666 29.248l143.808-92.394667a34.773333 34.773333 0 0 0-0.256-58.666667l-143.808-90.602666a34.773333 34.773333 0 0 0-18.538666-5.354667z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconplayFill.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(IconplayFill) : IconplayFill;
