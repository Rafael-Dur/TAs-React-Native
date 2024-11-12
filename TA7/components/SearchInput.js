import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

export default function SearchInput({ searchText, setSearchText, onSearch }) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Ingresa el nombre de la película"
        value={searchText}
        onChangeText={setSearchText}
      />
      <Button title="Buscar" onPress={onSearch} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    borderColor: '#007bff',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
});
