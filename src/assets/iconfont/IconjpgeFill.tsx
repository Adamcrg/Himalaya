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

const IconjpgeFill: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M628.437333 170.666667L789.333333 331.434667V437.333333h53.333334v320H789.333333V789.333333a64 64 0 0 1-64 64H298.666667a64 64 0 0 1-64-64v-32H181.333333v-320H234.666667V234.666667a64 64 0 0 1 64-64h329.770666zM725.333333 757.333333H298.666667V789.333333h426.666666v-32zM361.514667 529.941333h-29.866667v98.112c0 3.776-0.490667 7.509333-1.493333 11.2a24.170667 24.170667 0 0 1-4.48 8.512 23.445333 23.445333 0 0 1-8.661334 5.525334 49.664 49.664 0 0 1-6.378666 1.6l-3.328 0.490666-3.584 23.893334c7.573333 0 14.933333-0.746667 22.101333-2.24 3.989333-0.896 7.872-2.090667 11.648-3.584 3.2-1.493333 6.186667-3.285333 8.96-5.376 5.184-3.989333 9.002667-8.96 11.498667-14.933334a55.893333 55.893333 0 0 0 3.434666-15.786666l0.149334-4.074667v-103.338667z m309.205333 2.197334c-7.744 0.213333-15.296 1.365333-22.698667 3.413333a66.709333 66.709333 0 0 0-24.064 14.165333c-6.826667 6.72-12.010667 14.506667-15.530666 23.381334-1.813333 4.778667-3.2 9.6-4.096 14.506666a95.445333 95.445333 0 0 0 1.877333 40.789334c1.493333 4.778667 3.413333 9.386667 5.802667 13.824 2.282667 3.989333 4.949333 7.786667 8.021333 11.434666 6.250667 6.72 13.653333 11.882667 22.186667 15.530667 8.981333 3.52 18.325333 5.333333 27.989333 5.461333a100.608 100.608 0 0 0 24.746667-3.413333 65.706667 65.706667 0 0 0 18.346666-7.637333l4.181334-2.773334v-68.096h-46.08v25.770667h12.458666v27.818667a47.210667 47.210667 0 0 1-11.264 1.024 33.365333 33.365333 0 0 1-26.112-12.117334 43.754667 43.754667 0 0 1-7.509333-15.530666 68.736 68.736 0 0 1 0-31.744c1.706667-5.802667 4.437333-11.029333 8.192-15.701334 3.626667-4.096 7.893333-7.274667 12.8-9.557333a43.52 43.52 0 0 1 15.701333-3.242667 91.52 91.52 0 0 1 28.181334 4.096l5.44 1.877334 0.853333-26.624a107.434667 107.434667 0 0 0-18.944-4.778667 138.453333 138.453333 0 0 0-20.48-1.877333z m-227.84 3.413333h-53.76v135.68h34.133333v-41.301333h8.533334l6.144-0.128a138.88 138.88 0 0 0 18.432-2.090667c4.330667-0.917333 8.533333-2.154667 12.629333-3.754667 3.52-1.6 6.826667-3.477333 9.898667-5.632 5.568-4.202667 9.728-9.450667 12.458666-15.701333 2.624-6.613333 3.925333-13.482667 3.925334-20.650667a56.256 56.256 0 0 0-3.413334-18.432 43.904 43.904 0 0 0-10.581333-15.530666 48.234667 48.234667 0 0 0-18.602667-9.898667 90.816 90.816 0 0 0-19.797333-2.56z m152.234667 0H504.32v135.68h90.965333v-27.306667H538.453333v-29.354666h49.322667v-24.576H538.453333v-27.136h56.661334v-27.306667z m-171.861334 27.306667h16.384c3.072 0.106667 6.08 0.682667 9.045334 1.706666 2.624 1.024 4.949333 2.496 6.997333 4.437334 3.626667 3.989333 5.461333 8.64 5.461333 13.994666a18.176 18.176 0 0 1-6.314666 14.165334 22.186667 22.186667 0 0 1-7.68 4.266666 37.205333 37.205333 0 0 1-6.229334 1.066667l-3.157333 0.128h-14.506667v-39.765333h16.384zM572.736 234.666667H298.666667v202.666666h426.666666v-54.378666h-152.576L572.736 234.666667z m64 34.773333v49.514667h49.557333l-49.557333-49.514667z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconjpgeFill.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(IconjpgeFill) : IconjpgeFill;