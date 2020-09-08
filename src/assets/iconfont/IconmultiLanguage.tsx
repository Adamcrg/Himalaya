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

const IconmultiLanguage: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M742.250667 554.666667v32.426666H832v156.373334h-89.749333v69.333333H687.36v-69.333333H597.333333v-156.373334h90.026667V554.666667h54.890667zM768 192a64 64 0 0 1 64 64v256h-64V256H213.333333v384l135.68-0.042667 0.021334 66.944L441.408 640 554.666667 639.957333v64l-92.501334 0.021334-143.274666 103.786666a21.333333 21.333333 0 0 1-33.856-17.28V704L213.333333 704a64 64 0 0 1-64-64V256a64 64 0 0 1 64-64h554.666667z m-81.536 433.066667h-37.461333v70.4h37.461333v-70.4z m93.717333 0H743.04v70.4h37.162667v-70.4zM519.893333 320L576 528.533333h-57.173333l-9.706667-40.661333h-58.496l-9.706667 40.661333H384L439.872 320h80z m-39.616 45.376h-0.512l-19.157333 80.533333h38.570667l-18.901334-80.533333z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconmultiLanguage.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(IconmultiLanguage) : IconmultiLanguage;
