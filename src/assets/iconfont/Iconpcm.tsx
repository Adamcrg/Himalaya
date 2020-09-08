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

const Iconpcm: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M836.266667 405.333333a38.4 38.4 0 0 1 38.4 38.4v332.8a38.4 38.4 0 0 1-38.4 38.4H593.066667a38.4 38.4 0 0 1-38.4-38.4V443.733333a38.4 38.4 0 0 1 38.4-38.4h243.2zM512 736.64v39.893333c0 10.794667 2.112 21.12 5.952 30.506667H315.733333v-70.4H512zM810.666667 469.333333h-192v281.6h192V469.333333z m-100.693334-256a56.32 56.32 0 0 1 56.32 56.32v92.992h-70.4V283.733333H198.4v328.533334H512V682.666667H184.32A56.32 56.32 0 0 1 128 626.346667V269.653333A56.32 56.32 0 0 1 184.32 213.333333h525.653333z m-191.850666 199.445334a80.64 80.64 0 0 0-5.952 25.514666L512 443.733333v39.466667h-196.266667v-70.4l202.389334-0.021333z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconpcm.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(Iconpcm) : Iconpcm;
