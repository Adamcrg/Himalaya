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

const Iconinvoice: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M810.666667 170.666667a64 64 0 0 1 64 64v149.333333a64 64 0 0 1-64 64h-42.666667v341.333333a64 64 0 0 1-64 64H320a64 64 0 0 1-64-64V448h-42.666667a64 64 0 0 1-64-64v-149.333333a64 64 0 0 1 64-64h597.333334zM320 789.333333h384V341.333333H320v448z m320-106.666666v64H384v-64h256z m170.666667-448H213.333333v149.333333h42.666667v-106.666667h512v106.666667h42.666667v-149.333333z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconinvoice.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(Iconinvoice) : Iconinvoice;
