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

const Iconflag: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M844.544 149.333333l-200 202.666667 200 202.666667H256v341.333333H192V149.333333h652.544z m-153.088 64H266.666667v277.333334h424.789333l-136.832-138.666667 136.832-138.666667z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconflag.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(Iconflag) : Iconflag;
