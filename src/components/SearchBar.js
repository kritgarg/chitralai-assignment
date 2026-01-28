import React, { useState, useEffect } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { useThemeStore } from '../store/themeStore';
import { lightTheme, darkTheme, spacing, borderRadius } from '../theme/colors';
import CustomText from './CustomText';

const SearchBar = ({ onSearch, initialQuery = '', autoFocus = false }) => {
  const [query, setQuery] = useState(initialQuery);
  const { isDarkMode } = useThemeStore();
  const theme = isDarkMode ? darkTheme : lightTheme;

  // Debounce search
  useEffect(() => {
    const timer = setTimeout(() => {
      onSearch(query);
    }, 500);
    return () => clearTimeout(timer);
  }, [query]);

  return (
    <View style={[styles.container, { backgroundColor: theme.surface }]}>
      <TextInput
        style={[styles.input, { color: theme.text }]}
        placeholder="Search photos..."
        placeholderTextColor={theme.textSecondary}
        value={query}
        onChangeText={setQuery}
        autoFocus={autoFocus}
      />
      {query.length > 0 && (
        <TouchableOpacity onPress={() => setQuery('')}>
           <CustomText style={{ color: theme.textSecondary }}>✕</CustomText>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    borderRadius: borderRadius.l,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.m,
    margin: spacing.m,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  input: {
    flex: 1,
    fontFamily: 'Outfit-Regular',
    fontSize: 16,
    height: '100%',
  }
});

export default SearchBar;
