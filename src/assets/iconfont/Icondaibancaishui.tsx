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

const Icondaibancaishui: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M804.053333 574.72l45.226667 45.226667-49.365333 49.386666h66.752v64H778.666667V757.333333h88v64H778.666667v56h-64V821.333333h-88v-64H714.666667v-24h-88v-64h66.752l-49.386667-49.365333 45.269333-45.269333L746.666667 632.106667l57.386666-57.386667z m-438.890666 23.253333c18.666667 11.690667 38.826667 21.205333 60.138666 28.202667L267.157333 810.666667H554.666667v64H267.157333a64 64 0 0 1-48.597333-105.642667l146.602667-171.050667zM512 149.333333c117.824 0 213.333333 95.509333 213.333333 213.333334s-95.509333 213.333333-213.333333 213.333333-213.333333-95.509333-213.333333-213.333333S394.176 149.333333 512 149.333333z m0 64a149.333333 149.333333 0 1 0 0 298.666667 149.333333 149.333333 0 0 0 0-298.666667z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Icondaibancaishui.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(Icondaibancaishui) : Icondaibancaishui;
