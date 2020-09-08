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

const IconpackingLabelingFill: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M853.333333 384l-0.021333 245.013333-123.392-123.392-106.794667 106.816 33.322667 33.322667h-143.061333v151.04h142.186666L623.146667 829.226667 647.168 853.333333 234.666667 853.333333a64 64 0 0 1-64-64V384h682.666666z m-384 64h-170.666666v64h170.666666v-64zM733.482667 170.666667a64 64 0 0 1 57.237333 35.370666l55.850667 111.68 1.024 2.282667H178.816l54.698667-113.173333A64 64 0 0 1 291.136 170.666667h442.346667z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M556.053333 692.394667l203.392-0.021334-75.989333-75.989333 46.464-46.464 154.88 154.88-154.88 154.88-46.464-46.464 75.114667-75.136h-202.517334z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

IconpackingLabelingFill.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(IconpackingLabelingFill) : IconpackingLabelingFill;
