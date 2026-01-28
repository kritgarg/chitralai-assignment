import React, { useState, useEffect, useCallback } from 'react';
import { View, FlatList, StyleSheet, Dimensions } from 'react-native';
import ImageViewing from 'react-native-image-viewing';
import ScreenWrapper from '../components/ScreenWrapper';
import SearchBar from '../components/SearchBar';
import PhotoGridItem from '../components/PhotoGridItem';
import CustomText from '../components/CustomText';
import Button from '../components/Button';
import Loader from '../components/Loader';
import EmptyState from '../components/EmptyState';
import ErrorState from '../components/ErrorState';
import { searchPhotos } from '../services/unsplash';
import { useThemeStore } from '../store/themeStore';
import { lightTheme, darkTheme, spacing } from '../theme/colors';

const { width } = Dimensions.get('window');

const PhotoGalleryScreen = ({ route, navigation }) => {
  const { query: initialQuery, focusSearch } = route.params || {};
  const [query, setQuery] = useState(initialQuery || 'event');
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState(null);
  
  // Viewer state
  const [visible, setVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const { isDarkMode } = useThemeStore();
  const theme = isDarkMode ? darkTheme : lightTheme;

  const fetchImages = async (pageNum, reset = false) => {
    if (!query) return;
    if (loading && !refreshing) return;
    
    setLoading(true);
    setError(null);
    
    try {
      console.log(`Fetching ${query} page ${pageNum}`);
      const results = await searchPhotos(query, pageNum);
      
      if (reset) {
        setPhotos(results);
      } else {
        setPhotos(prev => [...prev, ...results]);
      }
    } catch (err) {
      setError('Failed to load photos. Please check your connection.');
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    // Initial fetch or query change
    setPage(1);
    fetchImages(1, true);
  }, [query]);

  const loadMore = () => {
    if (!loading) {
      const nextPage = page + 1;
      setPage(nextPage);
      fetchImages(nextPage);
    }
  };

  const onRefresh = () => {
    setRefreshing(true);
    setPage(1);
    fetchImages(1, true);
  };

  const openViewer = (index) => {
    setCurrentImageIndex(index);
    setVisible(true);
  };

  const imagesForViewer = photos.map(p => ({ uri: p.urls.regular }));

  return (
    <ScreenWrapper>
      <View style={styles.header}>
        <Button 
          title="←" 
          onPress={() => navigation.goBack()} 
          variant="text" 
          style={{ paddingHorizontal: spacing.s, width: 50, shadowOpacity: 0, elevation: 0, backgroundColor: 'transparent' }} 
        />
        <View style={{ flex: 1 }}>
           <SearchBar 
            initialQuery={query} 
            onSearch={setQuery} 
            autoFocus={focusSearch} 
           />
        </View>
      </View>

      {error ? (
        <ErrorState message={error} onRetry={() => fetchImages(page, true)} />
      ) : (
        <FlatList
          data={photos}
          keyExtractor={(item) => item.id}
          numColumns={2}
          contentContainerStyle={{ padding: spacing.m }}
          columnWrapperStyle={{ justifyContent: 'space-between' }}
          renderItem={({ item, index }) => (
            <PhotoGridItem 
              photo={item} 
              index={index} 
              onPress={() => openViewer(index)} 
            />
          )}
          onEndReached={loadMore}
          onEndReachedThreshold={0.5}
          refreshing={refreshing}
          onRefresh={onRefresh}
          ListFooterComponent={loading && !refreshing ? <Loader /> : null}
          ListEmptyComponent={!loading && (
            <EmptyState message={`No photos found for "${query}"`} />
          )}
        />
      )}

      <ImageViewing
        images={imagesForViewer}
        imageIndex={currentImageIndex}
        visible={visible}
        onRequestClose={() => setVisible(false)}
        swipeToCloseEnabled
        doubleTapToZoomEnabled
      />
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  }
});

export default PhotoGalleryScreen;
