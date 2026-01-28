import React from 'react';
import { View, StatusBar } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useThemeStore } from '../store/themeStore';
import { lightTheme, darkTheme } from '../theme/colors';

const ScreenWrapper = ({ children, style }) => {
  const { isDarkMode } = useThemeStore();
  const theme = isDarkMode ? darkTheme : lightTheme;
  const insets = useSafeAreaInsets();

  return (
    <View style={[{ flex: 1, backgroundColor: theme.background, paddingTop: insets.top }, style]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={theme.background}
      />
      {children}
    </View>
  );
};

export default ScreenWrapper;
