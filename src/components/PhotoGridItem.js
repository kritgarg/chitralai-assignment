import React from 'react';
import { View, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { Image } from 'expo-image';
import Animated, { FadeIn } from 'react-native-reanimated';
import { spacing, borderRadius } from '../theme/colors';

const { width } = Dimensions.get('window');
const COLUMN_COUNT = 2;
const ITEM_WIDTH = (width - (spacing.m * (COLUMN_COUNT + 1))) / COLUMN_COUNT;

const PhotoGridItem = ({ photo, index, onPress }) => {
  return (
    <Animated.View entering={FadeIn.delay(index % 10 * 100)}>
      <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
        <Image
          style={styles.image}
          source={photo.urls.small}
          placeholder={photo.blur_hash}
          contentFit="cover"
          transition={500}
          cachePolicy="memory-disk"
        />
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: ITEM_WIDTH,
    height: ITEM_WIDTH * 1.5,
    borderRadius: borderRadius.m,
    marginBottom: spacing.m,
    backgroundColor: '#eee',
  },
});

export default PhotoGridItem;
