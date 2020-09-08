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

const IconwarningFill: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M543.082667 161.173333a64 64 0 0 1 24.853333 24.853334l317.909333 572.224A64 64 0 0 1 829.866667 853.333333H194.133333a64 64 0 0 1-55.957333-95.082666L456.064 186.026667a64 64 0 0 1 87.018667-24.853334zM544 661.333333h-64v64h64v-64z m0-276.437333h-64V618.666667h64V384.896z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconwarningFill.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(IconwarningFill) : IconwarningFill;
