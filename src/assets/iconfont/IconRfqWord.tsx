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

const IconRfqWord: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M810.666667 234.666667a64 64 0 0 1 64 64v426.666666a64 64 0 0 1-64 64H213.333333a64 64 0 0 1-64-64V298.666667a64 64 0 0 1 64-64h597.333334z m0 64H213.333333v426.666666h597.333334V298.666667z m-120.490667 104.874666a101.312 101.312 0 0 1 39.936 8.704 91.477333 91.477333 0 0 1 31.488 24.32c9.045333 11.264 15.616 23.893333 19.712 37.888a174.08 174.08 0 0 1 4.864 36.352 123.52 123.52 0 0 1-12.288 55.296 91.157333 91.157333 0 0 1-37.888 39.936c6.314667 13.312 13.738667 26.026667 22.272 38.144l-55.04 0.256a157.653333 157.653333 0 0 1-14.08-27.136 105.621333 105.621333 0 0 1-39.68-8.704 94.378667 94.378667 0 0 1-31.488-23.808 108.650667 108.650667 0 0 1-19.712-37.888 142.4 142.4 0 0 1-4.608-36.096 154.048 154.048 0 0 1 4.864-36.352c4.266667-13.994667 11.008-26.624 20.224-37.888a93.333333 93.333333 0 0 1 32-24.32c12.458667-5.632 25.6-8.533333 39.424-8.704z m-339.2 5.12c7.68 0.170667 15.36 1.28 23.04 3.328a73.813333 73.813333 0 0 1 25.344 13.312c15.018667 12.629333 22.784 28.757333 23.296 48.384a62.677333 62.677333 0 0 1-9.472 32.768 71.68 71.68 0 0 1-27.392 24.576c7.168 13.312 14.933333 26.197333 23.296 38.656 9.728 14.506667 19.882667 28.672 30.464 42.496h-62.72a286.890667 286.890667 0 0 1-18.944-29.44 455.082667 455.082667 0 0 1-20.736-44.288h-22.016v73.728H263.68v-203.52z m232.448 0v40.96h-84.992v46.08h73.984v39.68h-73.984v76.8h-51.2v-203.52h136.192z m106.752 39.424a41.216 41.216 0 0 0-18.432 4.864c-5.973333 3.413333-11.008 7.936-15.104 13.568-4.437333 6.826667-7.594667 14.250667-9.472 22.272a109.653333 109.653333 0 0 0 0 44.544c1.877333 7.850667 5.034667 15.189333 9.472 22.016 4.096 5.632 9.130667 10.069333 15.104 13.312 5.802667 2.901333 11.946667 4.352 18.432 4.352 6.314667 0 12.288-1.450667 17.92-4.352 5.802667-3.413333 10.752-7.850667 14.848-13.312A69.973333 69.973333 0 0 0 732.416 533.333333a123.093333 123.093333 0 0 0 2.56-22.528 122.026667 122.026667 0 0 0-2.56-22.272 69.674667 69.674667 0 0 0-9.472-22.272 45.226667 45.226667 0 0 0-14.848-13.568 41.066667 41.066667 0 0 0-17.92-4.608z m-348.672 1.536h-26.368v51.968h26.112a32.426667 32.426667 0 0 0 21.76-7.424 24.96 24.96 0 0 0 8.448-18.688 24.064 24.064 0 0 0-8.96-18.432 34.56 34.56 0 0 0-20.992-7.424z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconRfqWord.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(IconRfqWord) : IconRfqWord;
