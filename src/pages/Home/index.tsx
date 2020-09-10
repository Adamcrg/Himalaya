/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, useEffect } from 'react';
import { View } from 'react-native';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { RootStackNavigation } from '@navigator';
import { RootState } from '@store/models';
import { ChannelItem } from '@pages/Home/store';

import Carousel from '@pages/Home/components/Carousel';
import Guess from '@pages/Home/components/Guess';
import Channel from '@pages/Home/components/Channel';

interface HomeProps {
  navigation: RootStackNavigation;
}

const Home: FC<HomeProps> = (props) => {
  const { carousels, guesses, channels } = useSelector(
    (state: RootState) => state.homeModel,
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
    dispatch({
      type: 'homeModel/fetchCarousels',
    });
    dispatch({
      type: 'homeModel/fetchGuesses',
    });
    dispatch({
      type: 'homeModel/fetchChannels',
    });
  }, []);

  return (
    <Channel
      channels={channels}
      ListHeaderComponent={ListHeaderComponent}
      onPress={handleChannelPress}
    />
  );
};

export default Home;
