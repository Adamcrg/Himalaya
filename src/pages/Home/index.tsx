import React, { FC, memo, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { RootStackNavigation } from '@navigator';
import { actions } from '@pages/Home/store';

import Channel from '@pages/Home/components/Channel';

interface HomeProps {
  navigation: RootStackNavigation;
}

const Home: FC<HomeProps> = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.getCarousels());
    dispatch(actions.getGuesses());
    dispatch(actions.getChannels({}));
  }, [dispatch]);

  return <Channel />;
};

export default memo(Home);
