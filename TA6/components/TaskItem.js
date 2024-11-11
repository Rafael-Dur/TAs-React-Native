import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RectButton, Swipeable } from 'react-native-gesture-handler';

const TaskItem = ({ task, onDelete }) => {
  const renderRightActions = () => (
    <RectButton style={styles.deleteButton} onPress={() => onDelete(task.id)}>
      <Text style={styles.deleteText}>Eliminar</Text>
    </RectButton>
  );

  return (
    <Swipeable renderRightActions={renderRightActions}>
      <View style={styles.taskItem}>
        <Text style={styles.taskText}>{task.text}</Text>
      </View>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
    taskItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#fff',
      padding: 20,
      borderRadius: 10,
      marginBottom: 15,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 5,
      elevation: 3,
    },
    taskText: {
      fontSize: 18,
      color: '#333',
      flex: 1,
    },
    deleteButton: {
      justifyContent: 'center',
      alignItems: 'center',
      width: 100,
      backgroundColor: '#ff6347',
      borderRadius: 10,
      marginVertical: 5,
    },
    deleteText: {
      color: '#fff',
      fontWeight: 'bold',
    },
  });
  
  export default TaskItem;
