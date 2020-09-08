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

const IconCurrencyConverterFill: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 149.333333c200.298667 0 362.666667 162.368 362.666667 362.666667s-162.368 362.666667-362.666667 362.666667S149.333333 712.298667 149.333333 512 311.701333 149.333333 512 149.333333z m86.997333 201.450667c-20.096-11.114667-22.464-12.416-38.4-3.946667l-7.146666 3.925334c-6.336 8.298667-7.488 9.813333-8.64 17.002666l-0.810667 5.781334v319.488h64V450.325333l61.845333 61.866667 45.269334-45.226667zM480.448 341.333333h-64v242.709334l-61.866667-61.866667-45.248 45.226667 116.117334 116.181333c20.096 11.093333 22.442667 12.416 38.378666 3.925333l7.168-3.904c6.336-8.298667 7.488-9.813333 8.618667-17.002666l0.832-5.781334V341.333333z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconCurrencyConverterFill.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(IconCurrencyConverterFill) : IconCurrencyConverterFill;