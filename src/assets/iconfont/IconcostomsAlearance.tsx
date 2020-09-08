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

const IconcostomsAlearance: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M498.048 192a86.677333 86.677333 0 0 1 32.533333 167.061333l-0.021333 27.968h54.186667v65.024h-54.186667v278.912c84.522667-10.474667 152.597333-69.205333 172.714667-145.514666l-63.701334 63.637333-45.973333-45.973333 131.413333-131.349334 131.285334 131.349334-45.973334 45.973333-44.757333-44.778667c-28.245333 103.338667-121.472 181.248-235.008 192.042667V874.666667h-65.024v-79.552c-108.970667-14.613333-197.418667-91.264-224.448-191.786667l-45.802667 45.76L149.333333 603.114667l131.413334-131.349334 131.285333 131.349334-45.994667 45.973333-61.952-61.952c19.776 72.213333 82.602667 128.384 161.450667 142.208V452.053333h-54.186667v-65.002666l54.186667-0.021334v-27.946666A86.72 86.72 0 0 1 498.069333 192z m0 65.024a21.674667 21.674667 0 1 0 0 43.328 21.674667 21.674667 0 0 0 0-43.328z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconcostomsAlearance.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(IconcostomsAlearance) : IconcostomsAlearance;
