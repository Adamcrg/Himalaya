import axios from 'axios';
import constants from '@pages/Category/store/constants';
import storage from '@config/storage';
import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '@store/reducer';
import { CategoryItem } from '@pages/Category/store/reducer';

const CATEGORY_URL = '/mock/11/Himalaya/category';

storage.sync.categorys = async () => {
  const { data } = await axios.get(CATEGORY_URL);
  return data;
};

storage.sync.myCategorys = async () => {
  return [];
};

interface CategorysAction {
  type: constants.GET_CATEGORYS;
  payload: { categorys: CategoryItem[] };
}

interface MyCategorysAction {
  type: constants.GET_MY_CATEGORYS;
  payload: { myCategorys: CategoryItem[] };
}

interface EditingAction {
  type: constants.CHANGE_EDITING;
  payload: { editing: boolean };
}

interface AddMyCategorysAction {
  type: constants.ADD_MY_CATEGORYS;
  payload: { newCategory: CategoryItem };
}

export type CategoryActionTypes =
  | CategorysAction
  | MyCategorysAction
  | EditingAction
  | AddMyCategorysAction;

const getCategorysAction = (categorys: CategoryItem[]): CategorysAction => ({
  type: constants.GET_CATEGORYS,
  payload: { categorys },
});

const getMyCategorysAction = (
  myCategorys: CategoryItem[],
): MyCategorysAction => ({
  type: constants.GET_MY_CATEGORYS,
  payload: { myCategorys },
});

const changeEditingAction = (editing: boolean): EditingAction => ({
  type: constants.CHANGE_EDITING,
  payload: { editing },
});

const addMyCategoryAction = (
  newCategory: CategoryItem,
): AddMyCategorysAction => ({
  type: constants.ADD_MY_CATEGORYS,
  payload: { newCategory },
});

export const getAllCategorys = (): ThunkAction<
  void,
  RootState,
  null,
  Action<string>
> => {
  return async (dispatch) => {
    try {
      const categorys = await storage.load({ key: 'categorys' });
      const myCategorys = await storage.load({ key: 'myCategorys' });
      if (myCategorys) {
        dispatch(getMyCategorysAction(myCategorys));
      }
      dispatch(getCategorysAction(categorys));
    } catch (error) {
      console.log(error);
    }
  };
};

export const changeEditing = (): ThunkAction<
  void,
  RootState,
  null,
  Action<string>
> => {
  return (dispatch, getState) => {
    const { editing } = getState().category;
    dispatch(changeEditingAction(!editing));
  };
};

export const addMyCategory = ({
  newCategory,
}: {
  newCategory: CategoryItem;
}): ThunkAction<void, RootState, null, Action<string>> => {
  return (dispatch) => {
    dispatch(addMyCategoryAction(newCategory));
  };
};
