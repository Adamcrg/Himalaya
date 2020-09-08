import React from 'react';
import store from '@store';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';

import Navigator from '@navigator';

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <Navigator />
    </Provider>
  );
};

export default App;
