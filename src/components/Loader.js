import React from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';
import { useThemeStore } from '../store/themeStore';
import { lightTheme, darkTheme } from '../theme/colors';

const Loader = ({ size = 'large', color, style }) => {
  const { isDarkMode } = useThemeStore();
  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <View style={[styles.container, style]}>
      <ActivityIndicator size={size} color={color || theme.primary} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});

export default Loader;
