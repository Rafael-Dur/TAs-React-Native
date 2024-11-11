import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export default function App() {
  const [inputText, setInputText] = useState('');

  return (
    <View style={styles.container}>
      {/* Campo de entrada de texto */}
      <TextInput
        style={styles.input}
        placeholder="Escribe algo..."
        placeholderTextColor="#aaa"
        value={inputText}
        onChangeText={text => setInputText(text)}
      />

      {/* Mostrar el texto ingresado */}
      <Text style={styles.displayText}>
        {inputText ? `Texto ingresado: ${inputText}` : 'No hay texto ingresado'}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 20,
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
  displayText: {
    fontSize: 20,
    fontWeight: '500',
    color: '#007bff',
  },
});
