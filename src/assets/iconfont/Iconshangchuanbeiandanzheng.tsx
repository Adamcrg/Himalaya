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

const Iconshangchuanbeiandanzheng: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M341.333333 192v63.978667L298.666667 256v533.333333h213.333333v64H298.666667a64 64 0 0 1-64-64V256a64 64 0 0 1 64-64h42.666666z m344.469334 402.517333l109.696 109.696-45.248 45.248-32.853334-32.874666-0.021333 134.122666h-64V717.44l-32 32.021333-45.269333-45.226666 109.696-109.717334zM554.666667 533.333333v64h-192v-64h192z m170.666666-341.333333a64 64 0 0 1 64 64l-0.021333 298.666667h-64L725.333333 256h-42.666666V192h42.666666z m-64 213.333333v64H362.666667v-64h298.666666zM576 128a64 64 0 0 1 64 64v42.666667a64 64 0 0 1-64 64h-128a64 64 0 0 1-64-64V192a64 64 0 0 1 64-64h128z m0 64h-128v42.666667h128V192z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconshangchuanbeiandanzheng.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(Iconshangchuanbeiandanzheng) : Iconshangchuanbeiandanzheng;
