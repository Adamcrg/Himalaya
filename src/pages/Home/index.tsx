import React, { FC, memo, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { RootStackNavigation } from '@navigator';
import { RootState } from '@store/reducer';
import { actions } from '@pages/Home/store';
import { ChannelItem } from '@pages/Home/store/reducer';

import Carousel from '@pages/Home/components/Carousel';
import Guess from '@pages/Home/components/Guess';
import Channel from '@pages/Home/components/Channel';

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

interface HomeProps {
  navigation: RootStackNavigation;
}

const Home: FC<HomeProps> = (props) => {
  const dispatch = useDispatch();

  const handleChannelPress = (channel: ChannelItem): void => {
    alert(channel.title);
  };

  useEffect(() => {
    dispatch(actions.getCarousels());
    dispatch(actions.getGuesses());
    dispatch(actions.getChannels({}));
  }, [dispatch]);

  return (
    <Channel
      ListHeaderComponent={memo(ListHeaderComponent)}
      ListFooterComponent={memo(ListFooterComponent)}
      onPress={handleChannelPress}
    />
  );
};

const styles = StyleSheet.create({
  footer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
});

export default memo(Home);
