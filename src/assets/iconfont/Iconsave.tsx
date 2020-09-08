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

const Iconsave: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M683.84 170.666667L853.333333 344.704V789.333333a64 64 0 0 1-64 64H234.666667a64 64 0 0 1-64-64V234.666667a64 64 0 0 1 64-64h449.173333zM320 234.645333L234.666667 234.666667v554.666666l85.333333-0.021333V533.333333h384v255.978667L789.333333 789.333333V370.730667l-85.333333-87.637334V384H320v-149.354667zM640 597.333333H384v191.978667h256V597.333333z m-42.666667 64v64h-170.666666v-64h170.666666z m42.666667-426.666666H384v85.333333h256v-85.333333z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconsave.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(Iconsave) : Iconsave;
