import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import InputText from './components/InputText';
import DisplayText from './components/DisplayText';

export default function App() {
  const [inputText, setInputText] = useState('');

  return (
    <View style={styles.container}>
      <InputText value={inputText} onChangeText={setInputText} />

      <DisplayText text={inputText} />
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
});
