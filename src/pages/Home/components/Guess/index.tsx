import React, { FC, memo, useRef } from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  Animated,
  StyleSheet,
  ListRenderItemInfo,
} from 'react-native';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { RootState } from '@store/reducer';
import { actions } from '@pages/Home/store';
import { GuessItem } from '@pages/Home/store/reducer';

import Touchable from '@components/Touchable';

import Icon from '@assets/iconfont';

interface GuessProps {}

const Guess: FC<GuessProps> = (props) => {
  const { guesses } = useSelector(
    (state: RootState) => state.home,
    shallowEqual,
  );

  const dispatch = useDispatch();

  const rotateAnim = useRef(new Animated.Value(0)).current;

  const renderItem = (
    itemObj: ListRenderItemInfo<GuessItem>,
  ): JSX.Element | null => {
    const { item } = itemObj;

    const handlePress = (): void => {};

    return (
      <Touchable style={styles.itemContainer} onPress={handlePress}>
        <Image source={{ uri: item.image }} style={styles.itemImage} />
        <Text numberOfLines={2}>{item.title}</Text>
      </Touchable>
    );
  };

  const keyExtractor = (item: GuessItem): string => {
    return item.id;
  };

  const handleSwitch = (): void => {
    Animated.timing(rotateAnim, {
      toValue: 100,
      duration: 150,
      useNativeDriver: true,
    }).start(() => {
      rotateAnim.setValue(0);
    });
    dispatch(actions.getGuesses());
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Icon name="iconkehuquanyi" size={24} />
            <Text style={styles.headerLeftText}>猜你喜欢</Text>
          </View>
          <View style={styles.headerRight}>
            <Text style={styles.headerRightText}>更多</Text>
            <Icon name="iconarrow-right" />
          </View>
        </View>
        <FlatList
          style={styles.listContainer}
          numColumns={3}
          data={guesses}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
        />
        <Touchable style={styles.footer} onPress={handleSwitch}>
          <Animated.View
            style={{
              transform: [
                {
                  rotate: rotateAnim.interpolate({
                    inputRange: [0, 100],
                    outputRange: ['0deg', '180deg'],
                  }),
                },
              ],
            }}
          >
            <Icon name="iconexchangerate" color="#f86442" />
          </Animated.View>
          <Text style={styles.footerText}>换一批</Text>
        </Touchable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'rgb(242, 242, 242)',
  },
  container: {
    marginHorizontal: 12,
    marginVertical: 16,
    borderRadius: 8,
    backgroundColor: '#ffffff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    borderBottomColor: '#efefef',
    borderBottomWidth: 2 * StyleSheet.hairlineWidth,
  },
  headerLeft: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerLeftText: {
    marginLeft: 5,
    color: '#333333',
  },
  headerRight: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerRightText: {
    color: '#6f6f6f',
  },
  listContainer: {
    padding: 10,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  footerText: {
    marginLeft: 5,
  },
  itemContainer: {
    flex: 1,
    marginHorizontal: 6,
    marginVertical: 6,
  },
  itemImage: {
    width: '100%',
    height: 100,
    marginBottom: 10,
    borderRadius: 8,
  },
});

export default memo(Guess);
