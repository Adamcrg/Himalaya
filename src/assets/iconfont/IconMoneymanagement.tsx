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

const IconMoneymanagement: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M539.242667 162.154667l277.333333 130.517333A64 64 0 0 1 853.333333 350.570667v79.850666h-60.245333V671.36H853.333333v116.693333a64 64 0 0 1-64 64H234.666667a64 64 0 0 1-64-64v-116.693333h60.224V430.421333H170.666667v-79.850666a64 64 0 0 1 36.757333-57.898667l277.333333-130.517333a64 64 0 0 1 54.485334 0zM789.333333 735.381333H234.666667v52.693334h554.666666v-52.693334zM391.530667 430.421333h-96.64v240.746667h96.618666V430.421333z m64 0l-0.021334 240.746667h116.714667V430.421333h-116.693333zM512 220.074667l-277.333333 130.496v15.850666h554.666666v-15.850666l-277.333333-130.496z m124.224 451.093333h92.864V430.421333h-92.842667l-0.021333 240.746667z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconMoneymanagement.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(IconMoneymanagement) : IconMoneymanagement;
