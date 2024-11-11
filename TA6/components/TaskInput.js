import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const TaskInput = ({ onAddTask }) => {
  const [taskText, setTaskText] = useState('');

  const handleAddTask = () => {
    if (taskText.trim()) {
      onAddTask(taskText);
      // Limpiar el campo de entrada
      setTaskText('');  
    }
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Añadir tarea"
        value={taskText}
        onChangeText={setTaskText}
      />
      <Button title="Agregar" onPress={handleAddTask} />
    </View>
  );
};

const styles = StyleSheet.create({
    inputContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 20,
    },
    input: {
      flex: 1,
      backgroundColor: '#fff',
      borderRadius: 8,
      padding: 15,
      fontSize: 16,
      color: '#333',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 5,
    },
    button: {
      backgroundColor: '#4CAF50',
      borderRadius: 8,
      paddingVertical: 15,
      paddingHorizontal: 20,
      marginLeft: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonText: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 16,
    },
  });
  
  export default TaskInput;
