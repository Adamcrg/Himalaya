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

const Iconviewlist: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M426.666667 533.333333a64 64 0 0 1 64 64v192a64 64 0 0 1-64 64h-192a64 64 0 0 1-64-64v-192a64 64 0 0 1 64-64h192z m416 202.666667v64H533.333333v-64h309.333334zM426.666667 597.333333h-192v192h192v-192z m416 0v64H533.333333v-64h309.333334zM426.666667 170.666667a64 64 0 0 1 64 64v192a64 64 0 0 1-64 64h-192a64 64 0 0 1-64-64v-192a64 64 0 0 1 64-64h192z m0 64h-192v192h192v-192z m416 128v64H533.333333v-64h309.333334z m0-138.666667v64H533.333333v-64h309.333334z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconviewlist.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(Iconviewlist) : Iconviewlist;
