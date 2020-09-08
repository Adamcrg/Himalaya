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

const Icondiscounts: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M793.429333 349.312V789.333333a64 64 0 0 1-64 64h-426.666666a64 64 0 0 1-64-64V349.312l64 26.666667V789.333333h426.666666V375.978667l64-26.666667z m-219.946666 97.386667l45.248 45.269333-49.408 49.365333h66.773333v64h-88V629.333333h88v64h-88v56h-64V693.333333h-88v-64h88v-24h-88v-64h66.752l-49.365333-49.365333 45.248-45.269333 57.386666 57.386666 57.365334-57.386666z m-270.72-116.928v0.512l-64-26.176V234.666667a64 64 0 0 1 64-64h426.666666a64 64 0 0 1 64 64v68.928l-64 26.304v-0.128l-213.333333 88.896-268.309333-111.786667 54.976 22.890667z m426.666666-95.104h-426.666666l-0.021334 25.749333 213.354667 88.917333 243.690667-101.546666-30.357334 12.650666V234.666667z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Icondiscounts.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(Icondiscounts) : Icondiscounts;
