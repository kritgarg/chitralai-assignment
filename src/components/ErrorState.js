import React from 'react';
import { View, StyleSheet } from 'react-native';
import CustomText from './CustomText';
import Button from './Button';
import { useThemeStore } from '../store/themeStore';
import { lightTheme, darkTheme, spacing } from '../theme/colors';

const ErrorState = ({ message = 'Something went wrong.', onRetry, style }) => {
  const { isDarkMode } = useThemeStore();
  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <View style={[styles.container, style]}>
      <CustomText variant="h2" style={{ color: theme.error, marginBottom: spacing.s }}>
        Oops!
      </CustomText>
      <CustomText style={{ color: theme.textSecondary, textAlign: 'center', marginBottom: spacing.m }}>
        {message}
      </CustomText>
      {onRetry && <Button title="Try Again" onPress={onRetry} variant="outline" />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: spacing.xl,
  },
});

export default ErrorState;
