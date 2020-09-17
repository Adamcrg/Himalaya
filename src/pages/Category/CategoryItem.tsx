import React, { FC, memo } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { viewportWidth } from '@utils';
import { RootState } from '@store/reducer';
import { actions } from '@pages/Category/store';
import { CategoryItem as CategoryItemType } from '@pages/Category/store/reducer';

import Touchable from '@components/Touchable';

import Icon from '@assets/iconfont';

const classifyItemContainerWidth = (viewportWidth - 20) / 4;

interface CategoryItemProps {
  data: CategoryItemType;
  selected: boolean;
  disabled?: boolean;
}

const CategoryItem: FC<CategoryItemProps> = (props) => {
  const { data, selected, disabled } = props;

  const { editing } = useSelector((state: RootState) => state.category);

  const dispatch = useDispatch();

  const handleItemPress = (): void => {
    if (!disabled) {
      if (editing) {
        if (selected) {
          dispatch(actions.deleteMyCategory({ deleteItem: data }));
        } else {
          dispatch(actions.addMyCategory({ addItem: data }));
        }
      }
    }
  };

  const handleItemLongPress = (): void => {
    dispatch(actions.changeEditing({ editing: true }));
  };

  return (
    <Touchable
      style={styles.classifyItemWrapper}
      onPress={handleItemPress}
      onLongPress={handleItemLongPress}
    >
      {editing && !disabled && (
        <View style={styles.classifyIconContianer}>
          <Icon
            name={selected ? 'iconsami-select' : 'iconadd-select'}
            color="#ffffff"
          />
        </View>
      )}
      <View style={styles.classifyItemContainer}>
        <Text>{data.name}</Text>
      </View>
    </Touchable>
  );
};

const styles = StyleSheet.create({
  classifyItemWrapper: {
    width: classifyItemContainerWidth,
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
  classifyIconContianer: {
    position: 'absolute',
    top: 0,
    left: classifyItemContainerWidth - 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 16,
    height: 16,
    zIndex: 99,
    borderRadius: 8,
    backgroundColor: '#f86442',
  },
  classifyItemContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    borderRadius: 4,
    backgroundColor: '#ffffff',
  },
});

export default memo(CategoryItem);
