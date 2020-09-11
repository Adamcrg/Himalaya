import React, { FC, memo, useState } from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  ListRenderItemInfo,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@store/reducer';
import { actions } from '@pages/Home/store';
import { ChannelItem } from '@pages/Home/store/reducer';

import Touchable from '@components/Touchable';

import Icon from '@assets/iconfont';

interface ChannelProps {
  channels: ChannelItem[];
  ListHeaderComponent: FC;
  onPress: (channel: ChannelItem) => void;
}

const Channel: FC<ChannelProps> = (props) => {
  const [refreshing, setRefreshing] = useState<boolean>(false);

  const { channels, ListHeaderComponent, onPress } = props;

  const { pagination, channelsLoading } = useSelector(
    (state: RootState) => state.home,
  );

  const dispatch = useDispatch();

  const renderItem = (
    itemObj: ListRenderItemInfo<ChannelItem>,
  ): JSX.Element => {
    const { item } = itemObj;

    const handlePress = () => {
      if (typeof onPress === 'function') {
        onPress(item);
      }
    };

    return (
      <Touchable style={styles.itemContainer} onPress={handlePress}>
        <Image source={{ uri: item.image }} style={styles.itemImage} />
        <View style={styles.itemRightContainer}>
          <View style={styles.itemRightTopContainer}>
            <View>
              <Text style={styles.itemTitle} numberOfLines={1}>
                {item.title}
              </Text>
            </View>
            <View>
              <Text style={styles.itemRemark} numberOfLines={2}>
                {item.remark}
              </Text>
            </View>
          </View>
          <View style={styles.itemRightBottomContainer}>
            <View style={styles.itemNumberContainer}>
              <Icon name="iconplay" size={18} />
              <Text>{item.played}</Text>
            </View>
            <View style={styles.itemNumberContainer}>
              <Icon name="iconlisting-content" size={18} />
              <Text>{item.playing}</Text>
            </View>
          </View>
        </View>
      </Touchable>
    );
  };

  const keyExtractor = (item: ChannelItem): string => {
    return item.id;
  };

  const handleRefresh = (): void => {
    setRefreshing(true);
    dispatch(actions.getChannels({}));
    setRefreshing(false);
  };

  const handleEndReached = (): void => {
    if (channelsLoading || !pagination.hasMore) {
      return;
    }
    dispatch(actions.getChannels({ loadMore: true }));
  };

  const ListFooterComponent: FC = () => {
    const { hasMore } = pagination;

    if (!hasMore) {
      return (
        <View style={styles.footer}>
          <Text>---我是有底线的---</Text>
        </View>
      );
    }

    if (channelsLoading && hasMore && channels.length > 0) {
      return (
        <View style={styles.footer}>
          <Text>---正在加载中...---</Text>
        </View>
      );
    }

    return <View />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={ListHeaderComponent}
        ListFooterComponent={ListFooterComponent}
        data={channels}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        refreshing={refreshing}
        onRefresh={handleRefresh}
        onEndReached={handleEndReached}
        onEndReachedThreshold={0.2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  itemContainer: {
    flexDirection: 'row',
    padding: 10,
    marginHorizontal: 12,
    marginVertical: 6,
    borderRadius: 8,
    backgroundColor: '#ffffff',
  },
  itemImage: {
    width: 100,
    height: 100,
    marginRight: 10,
    borderRadius: 8,
    backgroundColor: '#dedede',
  },
  itemRightContainer: {
    flex: 1,
  },
  itemRightTopContainer: {},
  itemTitle: {
    fontSize: 16,
    marginBottom: 10,
  },
  itemRemark: {
    padding: 5,
    marginBottom: 5,
    backgroundColor: '#f8f8f8',
  },
  itemRightBottomContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  itemNumberContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
  },
  footer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
});

export default memo(Channel);