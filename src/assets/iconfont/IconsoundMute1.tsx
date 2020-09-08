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

const IconsoundMute1: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M599.104 476.053333v313.472c0 43.626667-53.866667 64.789333-84.053333 33.024l-137.194667-125.269333 221.226667-221.226667z m183.68-183.701333a308.885333 308.885333 0 0 1 111.957333 211.2v56.042667c-9.450667 105.472-71.850667 195.690667-160.426666 243.882666l-29.546667-56.789333A245.269333 245.269333 0 0 0 832 531.584a244.906667 244.906667 0 0 0-94.72-193.685333l45.525333-45.546667z m-94.933333-55.893333l45.269333 45.248-482.730667 482.709333-45.248-45.226667 482.709334-482.730666z m10.090666 140.757333a191.466667 191.466667 0 0 1 69.376 147.84 191.466667 191.466667 0 0 1-92.416 164.224l-29.653333-56.96a127.488 127.488 0 0 0 58.069333-107.242667c0-41.962667-20.053333-79.146667-50.944-102.293333l45.568-45.568z m-98.837333-133.76v21.418667L175.765333 688.213333a64 64 0 0 1-36.373333-57.749333V416.981333a64 64 0 0 1 60.224-63.893333l4.309333-0.106667 172.970667 2.88 138.176-145.450666c30.165333-31.786667 84.053333-10.602667 84.053333 33.024z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconsoundMute1.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(IconsoundMute1) : IconsoundMute1;
