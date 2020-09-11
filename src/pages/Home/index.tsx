/* eslint-disable react-hooks/exhaustive-deps */
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

interface HomeProps {
  navigation: RootStackNavigation;
}

const Home: FC<HomeProps> = (props) => {
  const { carousels, guesses, channels } = useSelector(
    (state: RootState) => state.home,
    shallowEqual,
  );
  const dispatch = useDispatch();

  const ListHeaderComponent: FC = () => {
    return (
      <View>
        <Carousel carousels={carousels} />
        <Guess guesses={guesses} />
      </View>
    );
  };

  const handleChannelPress = (channel: ChannelItem): void => {
    alert(channel.title);
  };

  useEffect(() => {
    dispatch(actions.getCarousels());
    dispatch(actions.getGuesses());
    dispatch(actions.getChannels({}));
  }, []);

  return (
    <Channel
      channels={channels}
      ListHeaderComponent={memo(ListHeaderComponent)}
      onPress={handleChannelPress}
    />
  );
};

export default memo(Home);
