import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { useThemeStore } from '../store/themeStore';
import { lightTheme, darkTheme } from '../theme/colors';

const CustomText = ({ children, style, variant = 'body', ...props }) => {
  const { isDarkMode } = useThemeStore();
  const theme = isDarkMode ? darkTheme : lightTheme;

  const getStyle = () => {
    switch (variant) {
      case 'h1':
        return styles.h1;
      case 'h2':
        return styles.h2;
      case 'caption':
        return styles.caption;
      default:
        return styles.body;
    }
  };

  return (
    <Text
      style={[
        { color: theme.text },
        getStyle(),
        style,
      ]}
      {...props}
    >
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  h1: {
    fontFamily: 'Fredoka-One',
    fontSize: 32,
    marginBottom: 8,
  },
  h2: {
    fontFamily: 'Fredoka-One',
    fontSize: 24,
    marginBottom: 8,
  },
  body: {
    fontFamily: 'Outfit-Regular',
    fontSize: 16,
    lineHeight: 24,
  },
  caption: {
    fontFamily: 'Outfit-Regular',
    fontSize: 12,
    color: '#888',
  },
});

export default CustomText;
