import axios from 'axios';
import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import { Header } from '../components/Header';
import { URL_BASE } from '../api'
import { Film } from '../components/Film';

export default function Posts() {
  const [films, setFilms] = React.useState([]);

  React.useEffect(() => {
    const getFilms = async () => {
      const res = await axios.get(URL_BASE);
      setFilms(res.data.results);
    };
    getFilms();
  }, [])
  return (
    <View>
      <Header />
      <FlatList
        columnWrapperStyle={{flex: 1, justifyContent: "space-around"}}
        numColumns={3}
        contentContainerStyle={{paddingBottom: 100}}
        data={films}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Film film={item}/>
        )}
      >
      </FlatList>
    </View>
  );
}