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

const Icondaikuan: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M220.352 853.333333h-64V490.666667h64v29.845333l50.432 0.021333c14.997333 0 28.714667 1.493333 41.024 4.138667l6.016 1.408c8.106667 2.048 14.336 4.266667 18.666667 6.186667l103.296 40.853333h127.829333l3.989333 0.213333a78.933333 78.933333 0 0 1 32.512 11.861334 71.36 71.36 0 0 1 33.28 50.048l131.626667-55.957334c3.562667-2.154667 8.128-4.608 13.568-7.018666 14.464-6.4 29.482667-10.005333 45.12-8.874667 21.482667 1.557333 40.533333 12.224 53.397333 31.786667 20.928 31.872 16.106667 64.341333-3.541333 89.706666a85.248 85.248 0 0 1-16.597333 16.512 34.133333 34.133333 0 0 1-4.586667 2.837334l-167.552 85.845333-164.330667 83.968-6.954666 3.328a118.186667 118.186667 0 0 1-71.701334 7.829333 82.389333 82.389333 0 0 1-10.346666-2.666666L246.186667 819.84h-25.834667V853.333333z m0-101.76h31.338667c3.626667 0 7.253333 0.597333 10.730666 1.728l195.072 64.597334 5.162667 0.917333c9.301333 1.216 19.733333 0 29.973333-5.141333l329.045334-168.362667a29.226667 29.226667 0 0 0 1.92-2.24c3.285333-4.224 3.498667-5.76 0.469333-10.368l-0.682667-1.109333c-0.106667-0.128-0.213333-0.085333-0.576-0.106667h-1.536c-2.773333 0.213333-6.741333 1.28-11.008 3.2-0.64 0.277333-1.237333 0.533333-1.792 0.810667l-2.816 1.450666-4.373333 2.645334-2.965333 1.429333-213.077334 90.581333a34.133333 34.133333 0 0 1-13.354666 2.730667h-171.946667v-68.266667h164.992l5.269333-2.261333v-14.762667c0-3.413333-0.298667-4.48-1.514666-5.461333l-0.853334-0.576a18.048 18.048 0 0 0-3.498666-1.621333H433.28a34.133333 34.133333 0 0 1-12.544-2.389334l-110.186667-43.584-2.496-1.066666-3.178666-1.066667-3.776-1.024a124.181333 124.181333 0 0 0-30.314667-3.456l-50.432-0.021333v162.794666z m298.666667-602.24c153.173333 0 277.333333 124.16 277.333333 277.333334a276.906667 276.906667 0 0 1-15.573333 91.84l-86.933334 30.442666A212.352 212.352 0 0 0 732.352 426.666667c0-117.824-95.509333-213.333333-213.333333-213.333334s-213.333333 95.509333-213.333334 213.333334c0 16.853333 1.941333 33.216 5.632 48.938666l-67.093333-11.306666a279.829333 279.829333 0 0 1-2.56-37.632c0-153.173333 124.181333-277.333333 277.333333-277.333334z m54.72 126.72l45.226666 45.226667-37.354666 37.376h50.133333v64h-74.176v13.845333h74.176v64h-74.176v45.866667h-64v-45.866667H419.413333v-64h74.133334v-13.845333H419.413333v-64h50.112l-37.354666-37.354667 45.226666-45.269333 48.170667 48.149333 48.149333-48.149333z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Icondaikuan.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(Icondaikuan) : Icondaikuan;
