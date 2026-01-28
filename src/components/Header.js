import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import CustomText from './CustomText';
import { useThemeStore } from '../store/themeStore';
import { lightTheme, darkTheme, spacing } from '../theme/colors';

const Header = ({ title }) => {
  const { isDarkMode, toggleTheme } = useThemeStore();
  const theme = isDarkMode ? darkTheme : lightTheme;
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insets.top + spacing.s, backgroundColor: theme.background }]}>
      <CustomText variant="h1" style={{ fontSize: 28 }}>{title}</CustomText>
      <TouchableOpacity onPress={toggleTheme} style={[styles.button, { backgroundColor: theme.surface }]}>
        <CustomText style={{ fontSize: 20 }}>{isDarkMode ? '🌙' : '☀️'}</CustomText>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing.m,
    paddingBottom: spacing.m,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    padding: spacing.s,
    borderRadius: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  }
});

export default Header;
