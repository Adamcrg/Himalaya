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

const IconNewuserzone: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M298.666667 277.333333v64h-25.898667L239.573333 789.333333h544.853334l-33.194667-448h-25.92v-64h25.92a64 64 0 0 1 63.829333 59.264l33.173334 448A64 64 0 0 1 784.426667 853.333333H239.573333a64 64 0 0 1-63.808-68.736l33.173334-448A64 64 0 0 1 272.768 277.333333h25.877333z m331.477333 234.666667l60.309333 21.418667C627.157333 711.594667 388.309333 711.594667 341.333333 530.773333l61.952-16.085333c30.613333 117.845333 184.064 117.845333 226.858667-2.666667z m-117.333333-373.333333a170.624 170.624 0 0 1 170.624 170.624v86.464h-64V341.333333h-213.269334l0.021334 54.4h-64v-86.442666A170.624 170.624 0 0 1 512.810667 138.666667z m0 64a106.666667 106.666667 0 0 0-101.76 74.666666h203.52a106.666667 106.666667 0 0 0-101.76-74.666666z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconNewuserzone.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(IconNewuserzone) : IconNewuserzone;
