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

const IconassessedBadge: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M551.317333 164.032l2.986667 2.773333 56 56c8.618667 12.906667 21.205333 17.877333 34.112 18.56l3.221333 0.085334h79.36c2.88 0 5.674667 0.192 8.384 0.533333l-63.488 63.466667h-24.256c-33.493333 0-64.746667-13.162667-86.122666-40.938667l-46.912-46.869333-54.933334 54.912-9.301333 6.186666c-7.594667 5.013333-12.693333 8.192-18.154667 11.178667l-5.696 2.965333c-15.850667 7.914667-31.850667 12.586667-49.621333 12.586667h-71.36v71.253333c0 33.024-12.8 63.850667-39.765333 85.184L217.514667 514.133333l50.56 50.56c22.101333 22.058667 37.461333 50.176 37.461333 82.56v71.296h71.36c33.514667 0 64.768 13.162667 86.144 40.938667l46.890667 46.869333 50.453333-50.432c22.08-22.058667 50.218667-37.376 82.602667-37.376h71.36V647.253333c0-33.536 13.205333-64.768 41.002666-86.144L804.48 512l-33.834667-33.813333 45.248-45.248 41.792 41.749333c22.464 17.962667 23.317333 53.226667-1.664 76.650667l-2.986666 2.645333-56.042667 55.978667c-12.928 8.597333-17.898667 21.184-18.56 34.090666l-0.106667 3.2v79.317334c0 31.402667-21.568 54.165333-52.266666 55.872l-3.754667 0.106666h-79.36c-12.821333 0-25.664 7.829333-34.901333 16.32l-2.432 2.346667-56.021334 55.957333c-22.357333 22.357333-53.312 23.274667-76.373333 2.794667l-2.986667-2.773333-56-56c-8.618667-12.906667-21.226667-17.877333-34.133333-18.56l-3.2-0.085334h-79.36c-31.424 0-54.229333-21.568-55.936-52.266666l-0.085333-3.712V647.253333c0-12.821333-7.850667-25.664-16.362667-34.901333l-2.325333-2.410667-56-55.978666c-22.378667-22.357333-23.317333-53.269333-2.816-76.330667l2.816-2.986667 56-60.629333c12.928-8.597333 17.92-21.184 18.602666-34.090667l0.085334-3.2v-79.317333c0-31.402667 21.568-54.165333 52.266666-55.872l3.733334-0.106667h79.36c11.456 0 22.912-6.229333 34.368-13.610666l7.637333-5.034667 56.021333-55.978667c22.378667-22.357333 53.333333-23.274667 76.394667-2.794666z m215.488 133.248l45.056 45.44-280.896 278.442667-129.194666-129.194667 45.248-45.269333 84.138666 84.138666 235.648-233.557333z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconassessedBadge.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(IconassessedBadge) : IconassessedBadge;
