import React, { useMemo, useRef, useState } from 'react';
import {
  Animated,
  Dimensions,
  PanResponder,
  Text,
  View,
} from 'react-native';
import { QUOTES } from '../data/quotes';
import { QuoteCard } from './QuoteCard';

const { width: SCREEN_W } = Dimensions.get('window');

export function SwipeQuoteDeck() {
  const [index, setIndex] = useState(0);
  const x = useRef(new Animated.Value(0)).current;

  const quote = QUOTES[index];
  const nextQuote = QUOTES[index + 1];

  const rotate = x.interpolate({
    inputRange: [-SCREEN_W / 2, 0, SCREEN_W / 2],
    outputRange: ['-8deg', '0deg', '8deg'],
  });

  const panResponder = useMemo(
    () =>
      PanResponder.create({
        onMoveShouldSetPanResponder: (_, g) => Math.abs(g.dx) > 6 && Math.abs(g.dy) < 20,
        onPanResponderMove: (_, g) => {
          x.setValue(g.dx);
        },
        onPanResponderRelease: (_, g) => {
          const threshold = SCREEN_W * 0.25;
          if (Math.abs(g.dx) > threshold) {
            const dir = g.dx > 0 ? 1 : -1;
            Animated.timing(x, {
              toValue: dir * SCREEN_W * 1.2,
              duration: 180,
              useNativeDriver: true,
            }).start(() => {
              x.setValue(0);
              setIndex((i) => {
                const next = i + 1;
                return next >= QUOTES.length ? 0 : next;
              });
            });
          } else {
            Animated.spring(x, { toValue: 0, useNativeDriver: true }).start();
          }
        },
      }),
    [x]
  );

  if (!quote) {
    return (
      <View style={{ padding: 16 }}>
        <Text>No quotes.</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 16 }}>
      {/* Next card shadow (simple depth) */}
      {nextQuote ? (
        <View
          style={{
            position: 'absolute',
            left: 16,
            right: 16,
            alignSelf: 'center',
            transform: [{ scale: 0.98 }],
            opacity: 0.5,
          }}
        >
          <QuoteCard quote={nextQuote} />
        </View>
      ) : null}

      <Animated.View
        {...panResponder.panHandlers}
        style={{
          transform: [{ translateX: x }, { rotate }],
        }}
      >
        <QuoteCard quote={quote} />
      </Animated.View>

      <Text style={{ color: '#9ca3af', textAlign: 'center', marginTop: 16, fontSize: 12 }}>
        {index + 1} / {QUOTES.length}
      </Text>
    </View>
  );
}
