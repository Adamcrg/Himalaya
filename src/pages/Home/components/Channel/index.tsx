import React, { FC, memo, useState } from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  ListRenderItemInfo,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { RootState } from '@store/reducer';
import { actions } from '@pages/Home/store';
import { ChannelItem } from '@pages/Home/store/reducer';
import { imageHeight } from '@pages/Home/components/Carousel';

import Carousel from '@pages/Home/components/Carousel';
import Guess from '@pages/Home/components/Guess';

import Touchable from '@components/Touchable';

import Icon from '@assets/iconfont';

interface ChannelProps {}

const ListHeaderComponent: FC = () => {
  return (
    <View>
      <Carousel />
      <Guess />
    </View>
  );
};

const ListFooterComponent: FC = () => {
  const { channels, pagination, channelsLoading } = useSelector(
    (state: RootState) => state.home,
    shallowEqual,
  );

  const { hasMore } = pagination;

  if (!hasMore) {
    return (
      <View style={styles.footer}>
        <Text>--- 我是有底线的 ---</Text>
      </View>
    );
  }

  if (channelsLoading && hasMore && channels.length > 0) {
    return (
      <View style={styles.footer}>
        <Text>正在加载中...</Text>
      </View>
    );
  }

  return <View />;
};

const Channel: FC<ChannelProps> = (props) => {
  const [refreshing, setRefreshing] = useState<boolean>(false);

  const {
    channels,
    pagination,
    channelsLoading,
    linearGradientVisible,
  } = useSelector((state: RootState) => state.home, shallowEqual);

  const dispatch = useDispatch();

  const renderItem = (
    itemObj: ListRenderItemInfo<ChannelItem>,
  ): JSX.Element => {
    const { item } = itemObj;

    const handlePress = (): void => {};

    return (
      <View style={styles.itemWrapper}>
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
      </View>
    );
  };

  const keyExtractor = (item: ChannelItem): string => {
    return item.id;
  };

  const handleRefresh = (): void => {
    setRefreshing(true);
    dispatch(
      actions.getChannels({
        callback: () => {
          setRefreshing(false);
        },
      }),
    );
  };

  const handleEndReached = (): void => {
    if (channelsLoading || !pagination.hasMore) {
      return;
    }
    dispatch(actions.getChannels({ loadMore: true }));
  };

  const handleScroll = (
    event: NativeSyntheticEvent<NativeScrollEvent>,
  ): void => {
    const offsetY = event.nativeEvent.contentOffset.y;
    const visible = offsetY < imageHeight;
    if (linearGradientVisible !== visible) {
      dispatch(
        actions.changeLinearGradientVisible({ linearGradientVisible: visible }),
      );
    }
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
        onScroll={handleScroll}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  container: {},
  itemWrapper: {
    backgroundColor: 'rgb(242, 242, 242)',
  },
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
});

export default memo(Channel);
