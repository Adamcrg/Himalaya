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

const IconphoneFill: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M661.333333 768v64H362.666667v-64h298.666666z m149.333334-576a64 64 0 0 1 64 64v405.333333a64 64 0 0 1-64 64H213.333333a64 64 0 0 1-64-64V256a64 64 0 0 1 64-64h597.333334z m-149.333334 234.666667H362.666667v64h298.666666v-64z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconphoneFill.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(IconphoneFill) : IconphoneFill;
