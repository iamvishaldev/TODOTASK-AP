import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Platform,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import Task from './components/Task';

export default function App() {
  const [task, setTask] = useState();
  const [isUpdateButton, setIsUpdateButton] = useState(false);
  const [editTaskId, setEditTaskId] = useState();

  const [taskItem, setTaskItem] = useState([
    {
      id: 1,
      task: 'practise todo project',
      isCompleted: false,
    },
    {
      id: 2,
      task: 'Drinking Water',
      isCompleted: false,
    },
    {
      id: 3,
      task: 'Watching Movies',
      isCompleted: true,
    },
  ]);

  const deleteTask = (id) => {
    const filteredTodo = taskItem.filter((todo) => todo.id !== id);
    setTaskItem(filteredTodo);
  };

  const editTodo = (id, task) => {
    setTask(task);
    setIsUpdateButton(true);
    setEditTaskId(id);
  };

  const updateTask = () => {
    const updatedTask = taskItem.map((singlTask) => {
      if (singlTask.id == editTaskId) {
        singlTask.task = task;
      }
      return singlTask;
    });

    setTaskItem(updatedTask);
  };

  const handleAddText = () => {
    const taskData = {
      id: Date.now(),
      task: task,
      isCompleted: false,
    };
    setTaskItem([...taskItem, taskData]);
    setTask('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>Today's Task</Text>
      </View>
      <View style={styles.textInputWrapper}>
        <TextInput
          style={styles.textStyleInput}
          value={task}
          onChangeText={(text) => setTask(text)}
          label="Enter some Task"
        />
        {isUpdateButton === false ? (
          <TouchableOpacity onPress={() => handleAddText()}>
            <View style={styles.buttonWrapper}>
              <Button style={styles.styleButton} mode="contained">
                ADD
              </Button>
            </View>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={updateTask}>
            <View style={styles.buttonWrapper}>
              <Button style={styles.styleButton} mode="contained">
                Update
              </Button>
            </View>
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.items}>
        {taskItem.map((item, index) => {
          return (
            <TouchableOpacity key={index}>
              <Task
                task={item.task}
                id={item.id}
                deleteTasknnn={deleteTask}
                editList={editTodo}
              />
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? 30 : 0,
  },
  taskWrapper: {
    marginTop: 10,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  textInputWrapper: {
    margin: 10,
    flexDirection: 'row',
  },
  textStyleInput: {
    width: '80%',
    height: 60,
  },
  styleButton: {
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
