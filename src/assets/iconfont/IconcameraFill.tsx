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

const IconcameraFill: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M810.666667 256a64 64 0 0 1 64 64v426.666667a64 64 0 0 1-64 64H213.333333a64 64 0 0 1-64-64V320a64 64 0 0 1 64-64h597.333334z m-298.666667 128a149.333333 149.333333 0 1 0 0 298.666667 149.333333 149.333333 0 0 0 0-298.666667z m0 64a85.333333 85.333333 0 1 1 0 170.666667 85.333333 85.333333 0 0 1 0-170.666667zM810.666667 149.333333v64H512V149.333333h298.666667z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconcameraFill.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(IconcameraFill) : IconcameraFill;
