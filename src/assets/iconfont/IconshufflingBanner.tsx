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

const IconshufflingBanner: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M181.333333 290.453333v497.237334h509.546667v64H223.189333A105.856 105.856 0 0 1 117.333333 745.856V290.453333h64zM834.901333 192a64 64 0 0 1 64 64v423.381333a64 64 0 0 1-64 64H293.333333a64 64 0 0 1-64-64V256a64 64 0 0 1 64-64h541.546667z m0 64H293.333333v423.381333h541.546667V256z m-70.208 79.189333v63.914667c-85.952 0.810667-139.776 29.482667-166.272 85.12l-2.346666 5.12-2.773334 6.208c-42.581333 91.797333-126.293333 135.808-244.544 130.837333l7.317334 0.234667 0.042666-64c90.624 2.709333 148.16-28.010667 178.773334-93.269333l2.474666-5.461334 2.56-5.674666c37.824-81.194667 114.453333-121.877333 224.768-123.029334z m-357.226666-13.44a39.381333 39.381333 0 1 1 0 78.762667 39.381333 39.381333 0 0 1 0-78.784z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconshufflingBanner.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(IconshufflingBanner) : IconshufflingBanner;
