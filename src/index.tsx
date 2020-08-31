import React from 'react';
import Config from 'react-native-config';
import { View, Text } from 'react-native';

import { appStyles } from './style';

const App = () => {
  const { container } = appStyles;

  return (
    <View style={container}>
      <Text>{Config.API_URL}</Text>
    </View>
  );
};

export default App;
