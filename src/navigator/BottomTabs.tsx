import React, { FC, useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RouteProp, TabNavigationState } from '@react-navigation/native';
import { RootStackParamList, RootStackNavigation } from '@navigator';

import HomeTabs from '@navigator/HomeTabs';
import Listen from '@pages/Listen';
import Found from '@pages/Found';
import Account from '@pages/Account';

import Icon from '@assets/iconfont';

export type BottomTabParamList = {
  HomeTabs: undefined;
  Listen: undefined;
  Play: undefined;
  Found: undefined;
  Account: undefined;
};

type Route = RouteProp<RootStackParamList, 'BottomTabs'> & {
  state?: TabNavigationState;
};

const Tabs = createBottomTabNavigator<BottomTabParamList>();

type BottomRouteType = {
  [key: string]: string;
};

const ROUTE: BottomRouteType = {
  HomeTabs: '首页',
  Listen: '我听',
  Found: '发现',
  Account: '账户',
};

const getHeaderTitle = (routeName: string): string => {
  return ROUTE[routeName];
};

interface BottomTabsProps {
  navigation: RootStackNavigation;
  route: Route;
}

const BottomTabs: FC<BottomTabsProps> = (props) => {
  useEffect(() => {
    setOptions();
  });

  const setOptions = (): void => {
    const { navigation, route } = props;
    const routeName = route.state
      ? route.state.routes[route.state.index].name
      : route.params?.screen || 'HomeTabs';

    if (routeName === 'HomeTabs') {
      navigation.setOptions({
        headerTransparent: true,
        headerTitle: '',
      });
    } else {
      navigation.setOptions({
        headerTransparent: false,
        headerTitle: getHeaderTitle(routeName),
      });
    }
  };

  return (
    <Tabs.Navigator
      tabBarOptions={{
        activeTintColor: '#f86442',
      }}
    >
      <Tabs.Screen
        name="HomeTabs"
        component={HomeTabs}
        options={{
          tabBarLabel: '首页',
          tabBarIcon: ({ color, size }) => (
            <Icon name="iconhome" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="Listen"
        component={Listen}
        options={{
          tabBarLabel: '我听',
          tabBarIcon: ({ color, size }) => (
            <Icon name="iconcollection" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="Found"
        component={Found}
        options={{
          tabBarLabel: '发现',
          tabBarIcon: ({ color, size }) => (
            <Icon name="iconsearch" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="Account"
        component={Account}
        options={{
          tabBarLabel: '我的',
          tabBarIcon: ({ color, size }) => (
            <Icon name="iconaccount" color={color} size={size} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};

export default BottomTabs;
