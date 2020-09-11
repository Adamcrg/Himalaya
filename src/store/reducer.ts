import { combineReducers } from 'redux';
import { reducer as homeReducer } from '@pages/Home/store';

import { HomeState } from '@pages/Home/store/reducer';

export interface RootState {
  home: HomeState;
}

const reducer = combineReducers({
  home: homeReducer,
});

export default reducer;
