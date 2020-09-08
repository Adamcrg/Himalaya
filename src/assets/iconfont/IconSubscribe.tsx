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

const IconSubscribe: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M810.666667 149.333333a64 64 0 0 1 64 64v597.333334a64 64 0 0 1-64 64H213.333333a64 64 0 0 1-64-64V213.333333a64 64 0 0 1 64-64h597.333334z m0 64H213.333333v597.333334h597.333334V213.333333zM373.333333 640a53.333333 53.333333 0 1 1 0 106.666667 53.333333 53.333333 0 0 1 0-106.666667zM341.333333 480c121.685333 0 220.714667 97.024 223.914667 217.941333L565.333333 704h-64a160 160 0 0 0-154.816-159.914667L341.333333 544v-64z m21.333334-192c215.573333 0 390.784 172.842667 394.602666 387.498667L757.333333 682.666667h-64c0-180.373333-144.426667-326.997333-323.925333-330.602667L362.666667 352v-64z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconSubscribe.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(IconSubscribe) : IconSubscribe;
