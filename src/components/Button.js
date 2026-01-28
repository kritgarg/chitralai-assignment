import React from 'react';
import { TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import CustomText from './CustomText';
import { useThemeStore } from '../store/themeStore';
import { lightTheme, darkTheme, borderRadius, spacing } from '../theme/colors';

const Button = ({ title, onPress, variant = 'primary', loading = false, style }) => {
  const { isDarkMode } = useThemeStore();
  const theme = isDarkMode ? darkTheme : lightTheme;

  const backgroundColor = variant === 'primary' ? theme.primary : theme.surface;
  const textColor = variant === 'primary' ? '#fff' : theme.text;
  const loadingColor = variant === 'primary' ? '#fff' : theme.primary;

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={loading}
      style={[
        styles.container,
        { backgroundColor, borderRadius: borderRadius.m },
        variant === 'outline' && { borderWidth: 2, borderColor: theme.primary },
        style,
      ]}
    >
      {loading ? (
        <ActivityIndicator color={loadingColor} />
      ) : (
        <CustomText variant="h2" style={{ color: textColor, fontSize: 18, marginBottom: 0 }}>
          {title}
        </CustomText>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: spacing.m,
    paddingHorizontal: spacing.l,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: spacing.s,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default Button;
