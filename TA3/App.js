import React, { useState } from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import TaskItem from './components/TaskItem';
import TaskInput from './components/TaskInput';

export default function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskText) => {
    setTasks([...tasks, { id: Date.now().toString(), text: taskText }]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((item) => item.id !== taskId));
  };

  return (
    <View style={styles.container}>
      <TaskInput onAddTask={addTask} />

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TaskItem task={item} onDelete={deleteTask} />
        )}
        ListEmptyComponent={<Text style={styles.emptyList}>No hay tareas pendientes</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 20,
    paddingTop: 50,
  },
  emptyList: {
    fontSize: 16,
    color: '#aaa',
    marginTop: 20,
    textAlign: 'center',
  },
});
