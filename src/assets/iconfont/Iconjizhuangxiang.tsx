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

const Iconjizhuangxiang: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M762.325333 213.333333l112.298667 144.405334 0.042667 0.021333v469.333333H149.333333v-469.333333l644.224-0.021333L731.008 277.333333H292.992l-62.549333 80.405334h-81.066667L261.674667 213.333333h500.650666zM810.666667 421.76H213.333333v341.333333h597.333334v-341.333333z m-426.666667 64v213.333333h-64v-213.333333h64z m170.666667 0v213.333333h-64v-213.333333h64z m170.666666 0v213.333333h-64v-213.333333h64z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconjizhuangxiang.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(Iconjizhuangxiang) : Iconjizhuangxiang;
