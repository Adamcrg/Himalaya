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

const IconsalescenterFill: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M682.666667 149.333333a128 128 0 1 1-91.093334 217.941334l-89.173333 66.858666c5.973333 17.024 9.344 35.264 9.6 54.250667l146.517333 48.853333A106.666667 106.666667 0 1 1 640 598.272l-0.042667 0.234667-139.349333-46.421334a170.944 170.944 0 0 1-44.074667 64.512l66.048 88.064a85.333333 85.333333 0 1 1-56.213333 31.765334l-64.554667-86.122667a170.666667 170.666667 0 1 1 68.138667-271.829333l89.322667-66.986667A128 128 0 0 1 682.666667 149.333333z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconsalescenterFill.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(IconsalescenterFill) : IconsalescenterFill;
