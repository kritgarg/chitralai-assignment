import React from 'react';
import { FlatList, View } from 'react-native';
import ScreenWrapper from '../components/ScreenWrapper';
import Header from '../components/Header';
import EventCard from '../components/EventCard';
import CustomText from '../components/CustomText';
import EmptyState from '../components/EmptyState';
import { spacing } from '../theme/colors';

const SAMPLE_EVENTS = [
  { id: 1, name: "Wedding Moments", code: "WED123" },
  { id: 2, name: "Music Festival", code: "MUS456" },
  { id: 3, name: "College Farewell", code: "COL789" },
  { id: 4, name: "Tech Conference", code: "TECH24" },
  { id: 5, name: "Art Exhibition", code: "ART99" }
];

const EventListScreen = ({ navigation }) => {
  return (
    <ScreenWrapper>
      <Header title="My Events" />
      <FlatList
        data={SAMPLE_EVENTS}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item, index }) => (
          <EventCard 
            event={item} 
            index={index}
            onPress={() => navigation.navigate('EventDetails', { event: item })} 
          />
        )}
        contentContainerStyle={{ padding: spacing.m }}
        ListEmptyComponent={
          <EmptyState message="No events found." />
        }
      />
    </ScreenWrapper>
  );
};

export default EventListScreen;
