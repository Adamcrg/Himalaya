import React, { FC } from 'react';
import { View, Text, Button } from 'react-native';
import { RootStackNavigation } from '@navigator';

interface HomeProps {
  navigation: RootStackNavigation;
}

const Home: FC<HomeProps> = (props) => {
  const handleBtnClick = () => {
    const { navigation } = props;
    navigation.navigate('Detail', { id: 100 });
  };

  return (
    <View>
      <Text>Home</Text>
      <Button title="点击跳转详情页" onPress={handleBtnClick} />
    </View>
  );
};

export default Home;
