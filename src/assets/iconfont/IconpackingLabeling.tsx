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

const IconpackingLabeling: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M729.92 570.368l154.88 154.88-154.88 154.88-46.464-46.464 75.989333-75.989333-203.392-0.021334v-65.706666h202.517334l-75.093334-75.114667 46.442667-46.464zM733.482667 170.666667a64 64 0 0 1 57.237333 35.370666l55.850667 111.68A64 64 0 0 1 853.333333 346.346667v181.333333h-64V384H234.666667v405.333333h277.333333v64H234.666667a64 64 0 0 1-64-64V351.552a64 64 0 0 1 6.378666-27.84l56.469334-116.906667A64 64 0 0 1 291.136 170.666667h442.346667zM469.333333 448v64h-170.666666v-64h170.666666z m-178.197333-213.333333l-41.237333 85.333333h526.272l-42.688-85.333333H291.136z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconpackingLabeling.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(IconpackingLabeling) : IconpackingLabeling;