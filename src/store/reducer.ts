import { combineReducers } from 'redux';
import { reducer as homeReducer } from '@pages/Home/store';
import { reducer as categoryReducer } from '@pages/Category/store';

import { HomeState } from '@pages/Home/store/reducer';
import { CategoryState } from '@pages/Category/store/reducer';

export interface RootState {
  home: HomeState;
  category: CategoryState;
}

const reducer = combineReducers({
  home: homeReducer,
  category: categoryReducer,
});

export default reducer;
