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

const Iconsalescenter: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M682.666667 149.333333a128 128 0 1 1-91.093334 217.941334l-89.173333 66.858666c5.973333 17.024 9.344 35.264 9.6 54.250667l146.517333 48.853333A106.666667 106.666667 0 1 1 640 598.272l-0.042667 0.234667-139.349333-46.421334a170.944 170.944 0 0 1-44.074667 64.512l66.048 88.064a85.333333 85.333333 0 1 1-56.213333 31.765334l-64.554667-86.122667a170.666667 170.666667 0 1 1 68.138667-271.829333l89.322667-66.986667A128 128 0 0 1 682.666667 149.333333z m-149.333334 618.666667a21.333333 21.333333 0 1 0 0 42.666667 21.333333 21.333333 0 0 0 0-42.666667z m213.333334-213.333333a42.666667 42.666667 0 1 0 0 85.333333 42.666667 42.666667 0 0 0 0-85.333333z m-405.333334-170.666667a106.666667 106.666667 0 1 0 0 213.333333 106.666667 106.666667 0 0 0 0-213.333333z m341.333334-170.666667a64 64 0 1 0 0 128 64 64 0 0 0 0-128z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconsalescenter.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(Iconsalescenter) : Iconsalescenter;
