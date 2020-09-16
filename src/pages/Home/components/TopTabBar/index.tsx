import React, { FC, memo, useRef, useEffect } from 'react';
import { View, Text, Animated, StyleSheet } from 'react-native';
import {
  MaterialTopTabBar,
  MaterialTopTabBarProps,
} from '@react-navigation/material-top-tabs';
import { useSelector, shallowEqual } from 'react-redux';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import LinearGradient from 'react-native-linear-animated-gradient-transition';
import { heightPercent } from '@utils';
import { RootState } from '@store/reducer';

import Touchable from '@components/Touchable';

const statusBarHeight = getStatusBarHeight();
const linearGradientHeight = heightPercent(26) + statusBarHeight;

interface TopTabBarProps extends MaterialTopTabBarProps {}

const TopTabBar: FC<TopTabBarProps> = (props) => {
  const {
    indicatorStyle,
    activeTintColor,
    inactiveTintColor,
    ...restProps
  } = props;

  const { carousels, activeCarouselIndex, linearGradientVisible } = useSelector(
    (state: RootState) => state.home,
    shallowEqual,
  );

  const opacityAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    if (linearGradientVisible) {
      Animated.timing(opacityAnim, {
        toValue: 1,
        duration: 150,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(opacityAnim, {
        toValue: 0,
        duration: 150,
        useNativeDriver: true,
      }).start();
    }
  }, [opacityAnim, linearGradientVisible]);

  const colors = carousels[activeCarouselIndex]?.colors || [
    '#cccccc',
    '#e2e2e2',
  ];

  const textStyle = linearGradientVisible ? styles.lightText : styles.darkText;
  const topTabBarActiveTintColor = linearGradientVisible
    ? '#ffffff'
    : activeTintColor;
  const topTabBarInactiveTintColor = linearGradientVisible
    ? '#e2e2e2'
    : inactiveTintColor;
  const topTabBarIndicatorStyle = linearGradientVisible
    ? StyleSheet.compose(indicatorStyle, styles.lightBackgroundColor)
    : indicatorStyle;

  const hansleCategoryPress = (): void => {
    const { navigation } = props;

    navigation.navigate('Category');
  };

  return (
    <View style={styles.wrapper}>
      <Animated.View
        style={StyleSheet.flatten([
          styles.linearGradientContainer,
          {
            opacity: opacityAnim,
          },
        ])}
      >
        <LinearGradient style={styles.linearGradient} colors={colors} />
      </Animated.View>
      <View style={styles.tabBarWrapper}>
        <MaterialTopTabBar
          style={styles.tabBar}
          indicatorStyle={topTabBarIndicatorStyle}
          activeTintColor={topTabBarActiveTintColor}
          inactiveTintColor={topTabBarInactiveTintColor}
          {...restProps}
        />
        <Touchable style={styles.categoryBtn} onPress={hansleCategoryPress}>
          <Text style={textStyle}>分类</Text>
        </Touchable>
      </View>
      <View style={styles.searchBarWrapper}>
        <Touchable style={styles.searchBtn}>
          <Text style={textStyle}>搜索按钮</Text>
        </Touchable>
        <Touchable style={styles.historyBtn}>
          <Text style={textStyle}>历史记录</Text>
        </Touchable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingTop: statusBarHeight,
    backgroundColor: '#ffffff',
  },
  linearGradientContainer: {
    ...StyleSheet.absoluteFillObject,
  },
  linearGradient: {
    height: linearGradientHeight,
  },
  tabBarWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tabBar: {
    flex: 1,
    overflow: 'hidden',
    backgroundColor: 'transparent',
    elevation: 0,
  },
  categoryBtn: {
    paddingHorizontal: 15,
    borderLeftWidth: 2 * StyleSheet.hairlineWidth,
    borderLeftColor: '#dcdcdc',
  },
  searchBarWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 8,
  },
  searchBtn: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    height: 30,
    paddingLeft: 12,
    borderRadius: 15,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
  historyBtn: {
    marginLeft: 24,
  },
  lightText: {
    color: '#ffffff',
  },
  darkText: {
    color: '#333333',
  },
  lightBackgroundColor: {
    backgroundColor: '#ffffff',
  },
});

export default memo(TopTabBar);
