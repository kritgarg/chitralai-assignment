import React from 'react';
import { TouchableOpacity, StyleSheet, View } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { useThemeStore } from '../store/themeStore';
import { lightTheme, darkTheme, borderRadius, spacing } from '../theme/colors';
import CustomText from './CustomText';

const EventCard = ({ event, onPress, index }) => {
  const { isDarkMode } = useThemeStore();
  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <Animated.View 
      entering={FadeInDown.delay(index * 100).springify()}
      style={{ marginBottom: spacing.m }}
    >
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={onPress}
        style={[
          styles.card,
          { 
            backgroundColor: theme.surface,
            borderColor: theme.border,
            shadowColor: isDarkMode ? '#000' : '#ccc',
          }
        ]}
      >
        <View style={[styles.decoration, { backgroundColor: theme.primary }]} />
        <View style={styles.content}>
          <CustomText variant="h2" style={{ color: theme.text }}>{event.name}</CustomText>
          <CustomText variant="caption" style={{ color: theme.textSecondary }}>Code: {event.code}</CustomText>
        </View>
        <View style={styles.arrowContainer}>
           <CustomText style={{ color: theme.primary, fontSize: 20 }}>→</CustomText>
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: borderRadius.m,
    borderWidth: 1,
    padding: spacing.m,
    flexDirection: 'row',
    alignItems: 'center',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  decoration: {
    width: 6,
    height: '100%',
    borderRadius: borderRadius.s,
    marginRight: spacing.m,
  },
  content: {
    flex: 1,
  },
  arrowContainer: {
    marginLeft: spacing.s,
  },
});

export default EventCard;
