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

const Iconcry: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 149.333333c200.298667 0 362.666667 162.368 362.666667 362.666667s-162.368 362.666667-362.666667 362.666667S149.333333 712.298667 149.333333 512 311.701333 149.333333 512 149.333333z m0 64c-164.949333 0-298.666667 133.717333-298.666667 298.666667s133.717333 298.666667 298.666667 298.666667 298.666667-133.717333 298.666667-298.666667-133.717333-298.666667-298.666667-298.666667z m-167.552 425.706667c117.632-81.408 217.472-81.408 335.104 0l-36.437333 52.629333c-95.701333-66.261333-166.528-66.261333-262.229334 0zM426.666667 362.666667a42.666667 42.666667 0 0 1 42.666666 42.666666v64a42.666667 42.666667 0 1 1-85.333333 0v-64a42.666667 42.666667 0 0 1 42.666667-42.666666z m170.666666 0a42.666667 42.666667 0 0 1 42.666667 42.666666v64a42.666667 42.666667 0 1 1-85.333333 0v-64a42.666667 42.666667 0 0 1 42.666666-42.666666z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconcry.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(Iconcry) : Iconcry;