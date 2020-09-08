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

const IconpicFill1: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M817.365333 213.333333a64 64 0 0 1 64 64v469.333334a64 64 0 0 1-64 64h-597.333333a64 64 0 0 1-64-64V277.333333a64 64 0 0 1 64-64h597.333333zM746.666667 371.114667c-124.394667-1.322667-210.218667 42.325333-251.882667 131.989333l-2.624 5.845333-2.56 5.653334c-32.981333 70.613333-94.677333 104.618667-190.912 103.04v64c120.234667 1.6 205.312-45.696 249.322667-140.864l2.858666-6.357334 2.304-5.12c30.186667-63.936 92.885333-95.68 193.493334-94.229333z m-397.696-17.237334a42.666667 42.666667 0 1 0 0 85.333334 42.666667 42.666667 0 0 0 0-85.333334z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconpicFill1.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(IconpicFill1) : IconpicFill1;
