import React, { FC, memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { actions } from '@pages/Category/store';
import { RootState } from '@store/reducer';

const HeaderButton: FC = () => {
  const { editing } = useSelector((state: RootState) => state.category);

  const dispatch = useDispatch();

  const handleBtnPress = (): void => {
    dispatch(actions.changeEditing({ editing: !editing }));
  };

  return (
    <HeaderButtons>
      <Item title={editing ? '完成' : '编辑'} onPress={handleBtnPress} />
    </HeaderButtons>
  );
};

export default memo(HeaderButton);
