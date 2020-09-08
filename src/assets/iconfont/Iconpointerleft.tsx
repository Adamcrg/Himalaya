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

const Iconpointerleft: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M149.333333 494.122667a98.026667 98.026667 0 0 0 98.026667 98.026666h186.24v166.613334a64 64 0 0 0 64 64H874.666667V376.533333h-127.424l-108.629334-126.72a103.146667 103.146667 0 0 0-141.44-14.464l-4.778666 3.946667a103.381333 103.381333 0 0 0-13.013334 141.930667l3.84 4.565333 9.173334 10.346667H247.36A98.026667 98.026667 0 0 0 149.333333 494.122667z m348.245334 264.661333V528.149333h-250.24a34.026667 34.026667 0 0 1 0-68.053333h387.584l-103.893334-116.842667-2.432-3.029333a39.381333 39.381333 0 0 1 5.952-52.778667l3.093334-2.453333a39.146667 39.146667 0 0 1 52.394666 6.442667l127.786667 149.077333H810.666667v318.272H497.578667z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconpointerleft.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(Iconpointerleft) : Iconpointerleft;