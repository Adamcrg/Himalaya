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

const Iconsubscript: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M842.666667 586.666667a42.666667 42.666667 0 0 1 42.666666 42.666666v213.333334a42.666667 42.666667 0 0 1-42.666666 42.666666h-213.333334a42.666667 42.666667 0 0 1-42.666666-42.666666v-213.333334a42.666667 42.666667 0 0 1 42.666666-42.666666h213.333334zM736 170.666667v117.333333h-64V234.666667H490.666667v565.312l53.333333 0.021333v42.666667c0 7.381333 0.938667 14.506667 2.688 21.333333H352v-64l74.666667-0.021333V234.666667h-192v53.333333H170.666667V170.666667h565.333333z m85.333333 480h-170.666666v170.666666h170.666666v-170.666666z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconsubscript.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(Iconsubscript) : Iconsubscript;
