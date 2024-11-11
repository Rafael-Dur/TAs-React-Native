import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default function DisplayText({ text }) {
  return (
    <Text style={styles.displayText}>
      {text ? `Texto ingresado: ${text}` : 'No hay texto ingresado'}
    </Text>
  );
}

const styles = StyleSheet.create({
  displayText: {
    fontSize: 20,
    fontWeight: '500',
    color: '#007bff',
    textAlign: 'center',
  },
});
