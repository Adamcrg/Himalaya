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

const Iconxiakuangxian: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M234.666667 618.666667v170.666666h245.333333v-117.333333h64V789.333333H789.333333v-170.666666h64v234.666666H170.666667V618.666667h64z m309.333333-202.666667V469.333333H597.333333v64h-53.333333v53.333334h-64V533.333333H426.666667v-64h53.333333v-53.333333h64zM234.666667 341.333333v128h106.666666v64H170.666667v-192h64z m618.666666 0v192h-170.666666v-64h106.666666v-128h64zM608 160v64h-64v106.666667h-64v-106.666667h-64v-64h192z m-277.333333 0v64H234.666667V256H170.666667V160h160z m522.666666 0V256h-64v-32h-96v-64H853.333333z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconxiakuangxian.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(Iconxiakuangxian) : Iconxiakuangxian;
