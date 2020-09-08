import React, { FC } from 'react';
import { StatusBar, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationProp,
  HeaderStyleInterpolators,
  CardStyleInterpolators,
} from '@react-navigation/stack';

import BottomTabs from '@navigator/BottomTabs';
import Detail from '@pages/Detail';

export type RootStackParamList = {
  BottomTabs: undefined;
  Detail: {
    id: number;
  };
};

export type RootStackNavigation = StackNavigationProp<RootStackParamList>;

const Stack = createStackNavigator<RootStackParamList>();

const Navigator: FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        headerMode="float"
        screenOptions={{
          gestureEnabled: true,
          gestureDirection: 'horizontal',
          headerStatusBarHeight: Platform.select({
            android: StatusBar.currentHeight,
          }),
          headerTitleAlign: 'center',
          headerStyleInterpolator: HeaderStyleInterpolators.forUIKit,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      >
        <Stack.Screen name="BottomTabs" component={BottomTabs} />
        <Stack.Screen
          name="Detail"
          component={Detail}
          options={{ headerTitle: '详情' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
