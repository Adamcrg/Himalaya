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
  return [
    { id: 'home', name: '推荐' },
    { id: 'vip', name: 'VIP' },
  ];
};

interface CategorysAction {
  type: constants.GET_CATEGORYS;
  payload: { categorys: CategoryItem[] };
}

interface MyCategorysAction {
  type:
    | constants.GET_MY_CATEGORYS
    | constants.ADD_MY_CATEGORYS
    | constants.DELETE_MY_CATEGORYS;
  payload: { myCategorys: CategoryItem[] };
}

interface EditingAction {
  type: constants.CHANGE_EDITING;
  payload: { editing: boolean };
}

export type CategoryActionTypes =
  | CategorysAction
  | MyCategorysAction
  | EditingAction;

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
  myCategorys: CategoryItem[],
): MyCategorysAction => ({
  type: constants.ADD_MY_CATEGORYS,
  payload: { myCategorys },
});

const deleteMyCategoryAction = (
  myCategorys: CategoryItem[],
): MyCategorysAction => ({
  type: constants.DELETE_MY_CATEGORYS,
  payload: { myCategorys },
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
      dispatch(getMyCategorysAction(myCategorys));
      dispatch(getCategorysAction(categorys));
    } catch (error) {
      console.log(error);
    }
  };
};

export const changeEditing = ({
  editing,
}: {
  editing: boolean;
}): ThunkAction<void, RootState, null, Action<string>> => {
  return (dispatch, getState) => {
    const { myCategorys } = getState().category;
    dispatch(changeEditingAction(editing));
    if (!editing) {
      storage.save({
        key: 'myCategorys',
        data: myCategorys,
      });
    }
  };
};

export const addMyCategory = ({
  addItem,
}: {
  addItem: CategoryItem;
}): ThunkAction<void, RootState, null, Action<string>> => {
  return (dispatch, getState) => {
    const { myCategorys } = getState().category;
    const newArr = [...myCategorys, addItem];
    dispatch(addMyCategoryAction(newArr));
  };
};

export const deleteMyCategory = ({
  deleteItem,
}: {
  deleteItem: CategoryItem;
}): ThunkAction<void, RootState, null, Action<string>> => {
  return (dispatch, getState) => {
    const { myCategorys } = getState().category;
    const newArr = myCategorys.filter((item) => item.id !== deleteItem.id);
    dispatch(deleteMyCategoryAction(newArr));
  };
};
