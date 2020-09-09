import { Model } from 'dva-core-ts';
import { DvaLoadingState } from 'dva-loading-ts';

import homeModel from '@pages/Home/store';

const models: Model[] = [homeModel];

export type RootState = {
  homeModel: typeof homeModel.state;
  loading: DvaLoadingState;
} & {
  [key: string]: typeof homeModel.state;
};

export default models;
