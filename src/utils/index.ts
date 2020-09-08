import { Dimensions } from 'react-native';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get(
  'window',
);

const widthPercent = (percent: number): number => {
  const value = (percent * viewportWidth) / 100;
  return Math.round(value);
};

const heightPercent = (percent: number): number => {
  const value = (percent * viewportHeight) / 100;
  return Math.round(value);
};

export { viewportWidth, viewportHeight, widthPercent, heightPercent };
