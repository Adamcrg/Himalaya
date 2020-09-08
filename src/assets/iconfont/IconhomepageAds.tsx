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

const IconhomepageAds: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M789.333333 192c35.349333 0 64 29.653333 64 66.197333v500.565334c0 36.565333-28.650667 66.218667-64 66.218666H213.333333c-35.349333 0-64-29.653333-64-66.218666V258.197333C149.333333 221.653333 177.984 192 213.333333 192h576z m0 176.533333H213.333333v390.229334h576V368.533333z m-42.666666 44.16v263.04H256v-263.04h490.666667z m-64 66.474667H320v132.864h362.666667v-132.864z m106.666666-220.970667H213.333333v44.138667h576v-44.138667z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconhomepageAds.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(IconhomepageAds) : IconhomepageAds;
