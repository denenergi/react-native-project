import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export const Item = ({ todo, deleteTodo }) => {
  return (
    <TouchableOpacity style={styles.touchableOpacity} onLongPress={() => deleteTodo(todo.id)}>
      <Text style={styles.text}>
        {todo.todo}
      </Text>
      <TouchableOpacity onPress={() => deleteTodo(todo.id)}>
        <Text>
          &#128465;
        </Text>
      </TouchableOpacity>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  touchableOpacity: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    margin: 5,
    borderRadius: 5,
    paddingLeft: 5,
    paddingRight: 5,
  },
  text: {
    flex: 1,
    padding: 10,
  }
})