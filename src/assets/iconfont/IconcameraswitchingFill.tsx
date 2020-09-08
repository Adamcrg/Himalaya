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

const IconcameraswitchingFill: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M810.666667 277.333333a64 64 0 0 1 64 64v405.333334a64 64 0 0 1-64 64H213.333333a64 64 0 0 1-64-64V341.333333a64 64 0 0 1 64-64h597.333334z m-149.354667 166.4l-67.008 66.986667v0.021333L571.733333 533.333333l25.6-0.021333a85.333333 85.333333 0 0 1-135.189333 69.290667l-73.429333 15.018666A149.333333 149.333333 0 0 0 661.333333 532.309333l-0.042666-88.576zM512 384a149.333333 149.333333 0 0 0-149.333333 149.333333v89.6l18.176-18.133333L452.245333 533.333333H426.666667a85.333333 85.333333 0 0 1 135.210666-69.248l73.408-15.04A149.184 149.184 0 0 0 512 384z m309.333333-202.666667v64h-256v-64h256z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconcameraswitchingFill.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(IconcameraswitchingFill) : IconcameraswitchingFill;
