import React, { FC } from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
import { GuessItem } from '@pages/Home/store';

import Touchable from '@components/Touchable';

import Icon from '@assets/iconfont';

interface GuessProps {
  guesses: GuessItem[];
}

const Guess: FC<GuessProps> = (props) => {
  const { guesses } = props;

  const renderItem = (itemObj: {
    item: GuessItem;
    index: number;
  }): JSX.Element => {
    const { item } = itemObj;

    return (
      <Touchable style={styles.itemContainer} onPress={() => {}}>
        <Image source={{ uri: item.image }} style={styles.itemImage} />
        <Text numberOfLines={2}>{item.title}</Text>
      </Touchable>
    );
  };

  return (
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
      <FlatList numColumns={3} data={guesses} renderItem={renderItem} />
      <Touchable style={styles.footer}>
        <Icon name="iconexchangerate" />
        <Text>换一批</Text>
      </Touchable>
    </View>
  );
};

const styles = StyleSheet.create({
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
    borderBottomWidth: StyleSheet.hairlineWidth,
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
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
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

export default Guess;
