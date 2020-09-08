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

const IconexlFill: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M628.437333 149.333333L789.333333 310.101333V426.666667h42.666667v341.333333h-42.666667v42.666667a64 64 0 0 1-64 64H298.666667a64 64 0 0 1-64-64v-42.666667H192V426.666667h42.666667V213.333333a64 64 0 0 1 64-64h329.770666zM725.333333 768H298.666667v42.666667h426.666666v-42.666667zM449.237333 519.829333H347.093333v152.64h102.336v-30.72H385.493333v-33.024h55.488v-27.648H385.493333v-30.528h63.744v-30.72z m48.576 0h-40.512l39.936 74.688-43.968 77.952h41.088l29.568-55.68 29.568 55.68h41.088l-43.968-77.952 39.936-74.688h-40.512l-26.112 52.8-26.112-52.8z m140.928 0h-38.4v152.64h97.152v-30.72h-58.752v-121.92zM572.736 213.312L298.666667 213.333333v213.333334h426.666666v-43.712h-152.576L572.736 213.333333z m64 34.773333v70.869334h70.912l-70.912-70.869334z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconexlFill.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(IconexlFill) : IconexlFill;
