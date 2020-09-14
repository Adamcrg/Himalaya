import React, { FC, memo } from 'react';
import { View, StyleSheet, ListRenderItemInfo } from 'react-native';
import SnapCarousel, {
  ParallaxImage,
  Pagination,
  AdditionalParallaxProps,
} from 'react-native-snap-carousel';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { viewportWidth, widthPercent, heightPercent } from '@utils';
import { RootState } from '@store/reducer';
import { actions } from '@pages/Home/store';
import { CarouselItem } from '@pages/Home/store/reducer';

export const sliderWidth = viewportWidth;
export const imageWidth = widthPercent(90) + widthPercent(2) * 2;
export const imageHeight = heightPercent(26);

interface CarouselProps {}

const Carousel: FC<CarouselProps> = (props) => {
  const { carousels, activeCarouselIndex } = useSelector(
    (state: RootState) => state.home,
    shallowEqual,
  );

  const dispatch = useDispatch();

  const renderItem = (
    itemObj: ListRenderItemInfo<CarouselItem>,
    parallaxProps?: AdditionalParallaxProps,
  ): JSX.Element => {
    const { item } = itemObj;

    return (
      <ParallaxImage
        key={item.id}
        source={{ uri: item.image }}
        style={styles.image}
        containerStyle={styles.imageContainer}
        parallaxFactor={0.8}
        showSpinner
        spinnerColor="rgba(0, 0, 0, 0.25)"
        {...parallaxProps}
      />
    );
  };

  const handleSnapToItem = (index: number): void => {
    dispatch(actions.changeActiveCarouselIndex({ index }));
  };

  const pagination = (): JSX.Element => {
    return (
      <View style={styles.paginationWrapper}>
        <Pagination
          containerStyle={styles.paginationContainer}
          dotContainerStyle={styles.dotsContainer}
          dotStyle={styles.dots}
          activeDotIndex={activeCarouselIndex}
          dotsLength={carousels.length}
          inactiveDotScale={0.7}
          inactiveDotOpacity={0.4}
        />
      </View>
    );
  };

  return (
    <View>
      <SnapCarousel
        loop
        autoplay
        hasParallaxImages
        data={carousels}
        sliderWidth={sliderWidth}
        itemWidth={imageWidth}
        renderItem={renderItem}
        onSnapToItem={handleSnapToItem}
      />
      {pagination()}
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: imageWidth,
    height: imageHeight,
    borderRadius: 8,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
  paginationWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  paginationContainer: {
    position: 'absolute',
    top: -20,
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
    paddingHorizontal: 3,
    paddingVertical: 4,
    borderRadius: 8,
  },
  dotsContainer: {
    marginHorizontal: 6,
  },
  dots: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: 'rgba(255, 255, 255, 0.92)',
  },
});

export default memo(Carousel);
