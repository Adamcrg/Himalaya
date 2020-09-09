import { create, Model } from 'dva-core-ts';
import createLoading from 'dva-loading-ts';
import models from '@store/models';

// 创建实例
const app = create();

models.forEach((model: Model) => {
  app.model(model);
});

app.use(createLoading());

// 启动
app.start();

// 导出
const store = app._store;

export default store;
