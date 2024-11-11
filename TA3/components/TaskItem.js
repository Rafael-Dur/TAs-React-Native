import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function TaskItem({ task, onDelete }) {
  return (
    <View style={styles.taskItem}>
      <Text style={styles.taskText}>{task.text}</Text>
      <TouchableOpacity onPress={() => onDelete(task.id)}>
        <Text style={styles.deleteButton}>🗑️</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  taskItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#e0e0e0',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    width: '100%',
  },
  taskText: {
    fontSize: 18,
    color: '#333',
  },
  deleteButton: {
    fontSize: 24,
    color: '#ff4d4d',
  },
});
