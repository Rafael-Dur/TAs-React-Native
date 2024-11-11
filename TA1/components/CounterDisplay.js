import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

export default function CounterDisplay({ count }) {
  return (
    <View style={styles.container}>
      <Text style={styles.counterText}>{count}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  counterText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#333',
  },
});
