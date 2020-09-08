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

const IconHouseholdappliances: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M832 832a64 64 0 0 1-64 64H256a64 64 0 0 1-64-64V192a64 64 0 0 1 64-64h512a64 64 0 0 1 64 64v640z m-64-320H256v320h512V512z m-384 64v170.666667h-64v-170.666667h64zM768 192H256v256h512V192z m-384 64v128h-64v-128h64z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconHouseholdappliances.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(IconHouseholdappliances) : IconHouseholdappliances;
