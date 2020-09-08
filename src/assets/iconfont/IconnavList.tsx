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

const IconnavList: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M789.333333 576v85.333333h85.333334v64h-85.333334v85.333334h-64v-85.333334h-85.333333v-64h85.333333v-85.333333h64z m-533.333333 158.101333v64H170.666667v-64h85.333333z m341.333333 0v64H298.666667v-64h298.666666zM256 493.162667v64H170.666667v-64h85.333333z m426.666667 0v64H298.666667v-64h384zM256 252.224v64H170.666667v-64h85.333333z m597.333333 0v64H298.666667v-64h554.666666z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconnavList.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(IconnavList) : IconnavList;
