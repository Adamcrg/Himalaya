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

const IcontopraningFill: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M689.130667 192c26.88 0 49.898667 16.576 59.370666 40.064H789.333333a64 64 0 0 1 64 64v96.341333a160.384 160.384 0 0 1-115.989333 154.112A230.677333 230.677333 0 0 1 554.666667 690.794667L554.666667 721.130667h58.176l4.821333 0.106666c57.536 2.432 104.170667 48.32 107.221333 106.965334l0.981334 37.098666h-405.546667v-32a112.170667 112.170667 0 0 1 112.170667-112.170666H490.666667v-30.314667a230.741333 230.741333 0 0 1-182.698667-144.298667A160.384 160.384 0 0 1 192 392.405333v-96.32a64 64 0 0 1 64-64l40.832-0.021333A64.021333 64.021333 0 0 1 356.202667 192h332.928z m-396.949334 104.064H256v96.341333c0 30.485333 14.144 57.642667 36.245333 75.306667l-0.042666-5.162667-0.021334-166.485333z m460.949334 166.485333l-0.042667 5.141334A96.149333 96.149333 0 0 0 789.333333 392.384V296.106667l-36.202666-0.021334v166.485334z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IcontopraningFill.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(IcontopraningFill) : IcontopraningFill;