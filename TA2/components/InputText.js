import React from 'react';
import { TextInput, StyleSheet, View } from 'react-native';

export default function InputText({ value, onChangeText }) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Escribe algo..."
        placeholderTextColor="#aaa"
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  input: {
    width: '100%',
    padding: 15,
    borderColor: '#007bff',
    borderWidth: 2,
    borderRadius: 10,
    marginBottom: 20,
    fontSize: 18,
    backgroundColor: '#fff',
    color: '#333',
  },
});
