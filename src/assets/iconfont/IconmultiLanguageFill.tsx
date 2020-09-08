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

const IconmultiLanguageFill: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M742.250667 554.666667v32.426666H832v156.373334h-89.749333v69.333333H687.36v-69.333333H597.333333v-156.373334h90.026667V554.666667h54.890667zM768 192a64 64 0 0 1 64 64v298.666667h-42.666667v-42.666667h-149.333333v42.666667h-85.333333v149.290666l-92.501334 0.021334-143.274666 103.786666a21.333333 21.333333 0 0 1-33.856-17.28V704L213.333333 704a64 64 0 0 1-64-64V256a64 64 0 0 1 64-64h554.666667z m-81.536 433.066667h-37.461333v70.4h37.461333v-70.4z m93.717333 0H743.04v70.4h37.162667v-70.4z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M576 528.533333L519.872 320h-80L384 528.533333h56.917333l9.706667-40.661333h58.496l9.706667 40.661333H576z m-96.256-163.157333h0.512l18.901333 80.533333H460.586667l19.157333-80.533333z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

IconmultiLanguageFill.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(IconmultiLanguageFill) : IconmultiLanguageFill;
