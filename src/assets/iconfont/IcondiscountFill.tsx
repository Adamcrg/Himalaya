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

const IcondiscountFill: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1045 1024" width={size} height={size} {...rest}>
      <Path
        d="M599.253333 134.72l220.842667 23.808a64 64 0 0 1 56.789333 56.768l23.786667 220.842667a64 64 0 0 1-18.368 52.096L510.933333 859.584a64 64 0 0 1-90.517333 0L175.808 614.954667a64 64 0 0 1 0-90.496L547.157333 153.109333a64 64 0 0 1 52.117334-18.389333zM652.352 277.333333a96 96 0 1 0 0 192 96 96 0 0 0 0-192z m0 64a32 32 0 1 1 0 64 32 32 0 0 1 0-64z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IcondiscountFill.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(IcondiscountFill) : IcondiscountFill;
