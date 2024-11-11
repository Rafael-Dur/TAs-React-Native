import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import CounterDisplay from './components/CounterDisplay';
import CounterButton from './components/CounterButton';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <CounterDisplay count={count} />

      <CounterButton
        title="Incrementar"
        onPress={() => setCount(count + 1)}
      />

      <CounterButton
        title="Disminuir"
        onPress={() => setCount(count - 1)}
      />
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
