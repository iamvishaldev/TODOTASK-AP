import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Checkbox, IconButton, Colors, Button} from 'react-native-paper';

const Task = (props) => {
  const [checked, setChecked] = useState(true);

  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <Checkbox
          style={styles.itemCheckBox}
          status={checked ? 'checked' : 'unchecked'}
          onPress={() => {
            setChecked(!checked);
          }}
        />
        <Text style={styles.itemText}>{props.task}</Text>
      </View>
      <View>
        <IconButton
          icon="pencil"
          size={20}
          color={Colors.red500}
          mode="contained"
          onPress={() => props.editList(props.id, props.task)}
        />
      </View>
      <View>
        <Button
          title="dele"
          icon="delete"
          onPress={() => props.deleteTasknnn(props.id)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#E8EAED',
    padding: 8,
    borderRadius: 10,
    marginTop: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  itemText: {
    fontSize: 20,
  },
  // circular:{
  //     width:12,
  //     height:12,
  //     borderColor:'#55BCF6',
  //     borderWidth:2,
  //     borderRadius:5
  // }
});

export default Task;
