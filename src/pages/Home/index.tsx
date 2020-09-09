/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, useEffect } from 'react';
import { View } from 'react-native';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { RootStackNavigation } from '@navigator';
import { RootState } from '@store/models';

import Carousel from '@pages/Home/components/Carousel';
import Guess from '@pages/Home/components/Guess';

interface HomeProps {
  navigation: RootStackNavigation;
}

const Home: FC<HomeProps> = (props) => {
  const { guesses, carousels } = useSelector(
    (state: RootState) => state.homeModel,
    shallowEqual,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: 'homeModel/fetchCarousels',
    });
    dispatch({
      type: 'homeModel/fetchGuesses',
    });
  }, []);

  return (
    <View>
      <Carousel carousels={carousels} />
      <Guess guesses={guesses} />
    </View>
  );
};

export default Home;
