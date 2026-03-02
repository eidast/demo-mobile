import React from 'react';
import { SafeAreaView, StatusBar, Text, View } from 'react-native';
import { SwipeQuoteDeck } from '../src/components/SwipeQuoteDeck';

export default function Home() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#0b1220' }}>
      <StatusBar barStyle="light-content" />
      <View style={{ padding: 16 }}>
        <Text style={{ color: '#f9fafb', fontSize: 18, fontWeight: '700' }}>Quotes</Text>
        <Text style={{ color: '#9ca3af', marginTop: 4, fontSize: 12 }}>
          Swipe horizontal para ver la siguiente.
        </Text>
      </View>
      <SwipeQuoteDeck />
    </SafeAreaView>
  );
}
