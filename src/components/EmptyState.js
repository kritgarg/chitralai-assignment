import React from 'react';
import { View, StyleSheet } from 'react-native';
import CustomText from './CustomText';
import { useThemeStore } from '../store/themeStore';
import { lightTheme, darkTheme, spacing } from '../theme/colors';

const EmptyState = ({ message = 'Nothing found here.', style }) => {
  const { isDarkMode } = useThemeStore();
  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <View style={[styles.container, style]}>
      <CustomText variant="h2" style={{ color: theme.textSecondary, marginBottom: spacing.s }}>
        ¯\_(ツ)_/¯
      </CustomText>
      <CustomText style={{ color: theme.textSecondary, textAlign: 'center' }}>{message}</CustomText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: spacing.xl,
    marginTop: spacing.xl,
  },
});

export default EmptyState;
