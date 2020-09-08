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

const IconshufflingBannerFill: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M181.333333 290.453333v497.237334h509.546667v64H223.189333a105.856 105.856 0 0 1-105.749333-101.248l-0.106667-4.586667V290.453333h64zM834.901333 192a64 64 0 0 1 64 64v423.381333a64 64 0 0 1-64 64H293.333333a64 64 0 0 1-64-64V256a64 64 0 0 1 64-64h541.546667z m-70.208 143.189333c-110.314667 1.152-186.944 41.834667-224.768 123.029334l-2.56 5.674666-2.453333 5.461334c-30.634667 65.28-88.170667 96-178.794667 93.269333l-0.042666 64-7.317334-0.213333c118.272 4.949333 201.962667-39.04 244.544-130.858667l2.773334-6.186667 2.346666-5.12c26.496-55.68 80.32-84.330667 166.293334-85.12z m-357.226666-13.44a39.381333 39.381333 0 1 0 0 78.762667 39.381333 39.381333 0 0 0 0-78.784z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconshufflingBannerFill.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(IconshufflingBannerFill) : IconshufflingBannerFill;