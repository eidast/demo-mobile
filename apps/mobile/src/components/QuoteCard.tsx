import React from 'react';
import { Text, View } from 'react-native';
import type { Quote } from '../data/quotes';

export function QuoteCard({ quote }: { quote: Quote }) {
  return (
    <View
      style={{
        width: '100%',
        borderRadius: 18,
        padding: 18,
        backgroundColor: '#111827',
        borderWidth: 1,
        borderColor: '#1f2937',
      }}
    >
      <Text style={{ color: '#f9fafb', fontSize: 22, fontWeight: '700', lineHeight: 28 }}>
        “{quote.text}”
      </Text>
      {quote.author ? (
        <Text style={{ color: '#9ca3af', marginTop: 12, fontSize: 14 }}>
          — {quote.author}
        </Text>
      ) : null}
      <Text style={{ color: '#6b7280', marginTop: 16, fontSize: 12 }}>
        Swipe →
      </Text>
    </View>
  );
}
