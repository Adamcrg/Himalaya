import React, { FC } from 'react';
import { StyleSheet } from 'react-native';
import {
  createMaterialTopTabNavigator,
  MaterialTopTabBarProps,
} from '@react-navigation/material-top-tabs';

import TopTabBar from '@pages/Home/components/TopTabBar';

import Home from '@pages/Home';

const Tabs = createMaterialTopTabNavigator();

const HomeTabs: FC = () => {
  const renderTabBar = (props: MaterialTopTabBarProps): JSX.Element => {
    return <TopTabBar {...props} />;
  };

  return (
    <Tabs.Navigator
      // 懒加载
      lazy
      tabBar={renderTabBar}
      sceneContainerStyle={styles.sceneContainer}
      tabBarOptions={{
        scrollEnabled: true,
        tabStyle: { width: 80 },
        indicatorStyle: {
          height: 4,
          width: 20,
          marginLeft: 30,
          borderRadius: 2,
          backgroundColor: '#f86442',
        },
        activeTintColor: '#f86442',
        inactiveTintColor: '#333333',
      }}
    >
      <Tabs.Screen
        name="Home"
        component={Home}
        options={{ tabBarLabel: '首页' }}
      />
      <Tabs.Screen
        name="Recommend"
        component={Home}
        options={{ tabBarLabel: '推荐' }}
      />
    </Tabs.Navigator>
  );
};

const styles = StyleSheet.create({
  sceneContainer: {
    backgroundColor: 'transparent',
  },
});

export default HomeTabs;
