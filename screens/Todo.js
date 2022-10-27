import React from 'react';
import { Text, SafeAreaView, ImageBackground, StyleSheet, FlatList } from 'react-native';
import { Form } from '../components/Form';
import { Header } from '../components/Header';
import { Item } from '../components/Item';

const todos = [
  { id: 1, todo: "Todo number 1" },
  { id: 2, todo: "Todo number 2" },
  { id: 3, todo: "Todo number 3" },
  { id: 4, todo: "Todo number 4" },
  { id: 5, todo: "Todo number 5" },
  { id: 6, todo: "Todo number 6" },
]

export default function Todo() {
  const [items, setItems] = React.useState(todos);

  const addTodo = (newItem) => {
    setItems(state => [...state, newItem])
  }

  const deleteTodo = (id) => {
    setItems(newList => {
      return newList.filter(item => item.id !== id)
    })
  }

  return (
    <SafeAreaView style={styles.view}>
      <Header />
      <ImageBackground source={require("../assets/background.webp")} style={styles.background}>
        <Form addTodo={addTodo} />
        <FlatList
          data={items}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <Item todo={item} deleteTodo={deleteTodo} />
          )}
        >
        </FlatList>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1
  },
  background: {
    flex: 1,
    padding: 10,
  }
})