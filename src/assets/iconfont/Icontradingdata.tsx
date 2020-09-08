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

const Icontradingdata: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M224 224V768H832v64H256a96 96 0 0 1-95.893333-91.477333L160 736v-512h64z m160 149.333333v325.333334h-64V373.333333h64z m298.666667 133.333334v192h-64v-192h64zM533.333333 245.333333v453.333334h-64V245.333333h64z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Icontradingdata.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(Icontradingdata) : Icontradingdata;
