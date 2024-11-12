import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default function ErrorMessage({ error }) {
  if (!error) return null;
  
  return <Text style={styles.errorText}>{error}</Text>;
}

const styles = StyleSheet.create({
  errorText: {
    color: 'red',
    marginTop: 10,
  },
});
