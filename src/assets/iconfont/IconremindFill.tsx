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

const IconremindFill: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M576 759.189333a64 64 0 0 1-127.893333 3.754667L448 759.189333h128zM512 170.666667c108.586667 0 200.234667 72.725333 200.234667 168.106666v202.837334l65.877333 118.784c25.706667 29.738667 4.394667 75.669333-35.072 75.669333H280.96c-39.466667 0-60.778667-45.930667-35.072-75.669333l65.877333-118.784v-202.858667C311.765333 243.413333 403.413333 170.666667 512 170.666667z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconremindFill.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(IconremindFill) : IconremindFill;