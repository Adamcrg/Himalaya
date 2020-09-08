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

const IconhomepageAdsFill: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M853.333333 368.533333v390.229334c0 36.565333-28.650667 66.218667-64 66.218666H213.333333c-35.349333 0-64-29.653333-64-66.218666V368.533333h704z m-106.666666 44.16H256v263.04h490.666667v-263.04z m-64 66.474667v132.864H320v-132.864h362.666667zM789.333333 192c35.349333 0 64 29.653333 64 66.197333v44.138667H149.333333v-44.138667C149.333333 221.653333 177.984 192 213.333333 192h576z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconhomepageAdsFill.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(IconhomepageAdsFill) : IconhomepageAdsFill;
