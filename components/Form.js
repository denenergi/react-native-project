import React from 'react';
import { StyleSheet, TextInput, View, Button } from 'react-native';
import uuid from "react-native-uuid";

export const Form = ({ addTodo }) => {
  const [input, setInput] = React.useState('');

  return (
    <View style={styles.view}>
      <TextInput
        placeholder='Введіть текст'
        style={styles.TextInput}
        onChangeText={text => setInput(text)}
        value={input}
      />
      <Button 
        title='Додати задачу'
        disabled={!input}
        onPress={() => {
          addTodo({
            id: uuid.v4(),
            todo: input,
          }),
          setInput('')
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  TextInput: {
    padding: 10,
    backgroundColor: "white",
    marginBottom: 5,
  },
  view: {
    marginBottom: 30,
  }
})
