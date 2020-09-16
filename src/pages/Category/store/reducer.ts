import { produce } from 'immer';
import constants from '@pages/Category/store/constants';
import { CategoryActionTypes } from '@pages/Category/store/actions';

export interface CategoryItem {
  id: string;
  name: string;
  classify?: string;
}

export interface CategoryState {
  myCategorys: CategoryItem[];
  categorys: CategoryItem[];
  editing: boolean;
}

const initialState: CategoryState = {
  myCategorys: [
    { id: 'home', name: '推荐' },
    { id: 'vip', name: 'VIP' },
  ],
  categorys: [],
  editing: false,
};

export default produce(
  (draftState: CategoryState = initialState, action: CategoryActionTypes) => {
    switch (action.type) {
      case constants.GET_CATEGORYS: {
        const { categorys } = action.payload as { categorys: CategoryItem[] };
        draftState.categorys = categorys;
        return draftState;
      }

      case constants.GET_MY_CATEGORYS: {
        const { myCategorys } = action.payload as {
          myCategorys: CategoryItem[];
        };
        draftState.myCategorys = [...draftState.myCategorys, ...myCategorys];
        return draftState;
      }

      case constants.CHANGE_EDITING: {
        const { editing } = action.payload as { editing: boolean };
        draftState.editing = editing;
        return draftState;
      }

      case constants.ADD_MY_CATEGORYS: {
        const { newCategory } = action.payload as {
          newCategory: CategoryItem;
        };
        draftState.myCategorys = [...draftState.myCategorys, newCategory];
        return draftState;
      }

      default:
        return draftState;
    }
  },
);
