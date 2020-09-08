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

const IconSimilarproducts: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M896 832v64H597.333333v-64h298.666667zM540.352 160.853333l258.346667 114.752a64 64 0 0 1 38.037333 58.496V576h-64v-181.653333L556.437333 490.453333v343.893334H554.666667v22.4l-14.314667 6.357333a64 64 0 0 1-51.946667 0l-258.389333-114.730667A64 64 0 0 1 192 689.898667V334.101333a64 64 0 0 1 38.016-58.496l258.389333-114.730666a64 64 0 0 1 51.946667 0zM256 391.36v298.56l236.437333 105.002667V489.152L256 391.338667zM896 725.333333v64H597.333333v-64h298.666667z m0-106.666666v64H597.333333v-64h298.666667zM514.368 219.370667l-244.352 108.501333 256.213333 106.026667 235.498667-104.682667-247.36-109.866667z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconSimilarproducts.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(IconSimilarproducts) : IconSimilarproducts;
