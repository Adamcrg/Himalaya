import React, { FC, memo, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import groupBy from 'lodash/groupBy';
import { RootStackNavigation } from '@navigator';
import { RootState } from '@store/reducer';
import { actions } from '@pages/Category/store';
import { CategoryItem as CategoryItemType } from '@pages/Category/store/reducer';

import CategoryItem from '@pages/Category/CategoryItem';
import HeaderButton from '@pages/Category/HeaderButton';

const excludeItemId = ['home', 'vip'];

interface CategoryProps {
  navigation: RootStackNavigation;
}

const Categorys: FC<CategoryProps> = (props) => {
  const { navigation } = props;

  const { myCategorys, categorys } = useSelector(
    (state: RootState) => state.category,
  );

  const dispatch = useDispatch();

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <HeaderButton />,
    });
    dispatch(actions.getAllCategorys());
    return () => {
      dispatch(actions.changeEditing({ editing: false }));
    };
  }, [navigation, dispatch]);

  const renderItem = (
    item: CategoryItemType,
    index: number,
  ): JSX.Element | null => {
    const disabled = excludeItemId.includes(item.id);
    return (
      <CategoryItem key={item.id} data={item} selected disabled={disabled} />
    );
  };

  const renderUnselectedItem = (
    item: CategoryItemType,
    index: number,
  ): JSX.Element | null => {
    if (myCategorys.find((itemObj) => itemObj.id === item.id)) {
      return null;
    }
    return <CategoryItem key={item.id} data={item} selected={false} />;
  };

  const classifyGroup = groupBy(categorys, (item) => item.classify);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.classifyWrapper}>
        <Text style={styles.classifyTitle}>我的分类</Text>
        <View style={styles.classifyContainer}>
          {myCategorys.map(renderItem)}
        </View>
      </View>
      <View style={styles.classifyWrapper}>
        {Object.keys(classifyGroup).map(
          (classify) =>
            classifyGroup[classify].length && (
              <View key={classify}>
                <Text style={styles.classifyTitle}>{classify}</Text>
                <View style={styles.classifyContainer}>
                  {classifyGroup[classify].map(renderUnselectedItem)}
                </View>
              </View>
            ),
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f3f6f6',
  },
  classifyWrapper: { paddingHorizontal: 10 },
  classifyTitle: {
    fontSize: 16,
    marginTop: 14,
    marginBottom: 8,
  },
  classifyContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default memo(Categorys);
