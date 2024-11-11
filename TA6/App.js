import React, { useState } from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import TaskItem from './components/TaskItem';
import TaskInput from './components/TaskInput';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskText) => {
    if (taskText.trim()) {
      const newTask = { id: Date.now().toString(), text: taskText };
      // Agregar la nueva tarea sin modificar el estado directamente
      setTasks((prevTasks) => [...prevTasks, newTask]);  
    }
  };

  const deleteTask = (taskId) => {
    // Filtrar la tarea eliminada
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));  
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      <TaskInput onAddTask={addTask} />

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <TaskItem task={item} onDelete={deleteTask} />}
        ListEmptyComponent={<Text style={styles.emptyList}>No hay tareas pendientes</Text>}
      />
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    padding: 20,
    paddingTop: 50,
    justifyContent: 'flex-start',
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 30,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
  },
  emptyList: {
    fontSize: 16,
    color: '#bbb',
    textAlign: 'center',
    marginTop: 30,
  },
});

export default App;
