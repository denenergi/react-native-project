import React from 'react';
import { Text, StyleSheet, TouchableOpacity, Image, Modal, SafeAreaView } from 'react-native';

export const Film = ({ film }) => {
  const [modalVisible, setModalVisible] = React.useState(false)
  return (
    <TouchableOpacity
    onPress={() => setModalVisible(true)}
      style={styles.touchableOpacity}
    >
      <Image
        source={{ uri: `https://image.tmdb.org/t/p/w200/${film.poster_path}` }}
        style={styles.image}
      />
      <Text style={styles.text}>
        {film.title}
      </Text>
      <Modal
        animationType='slide'
        presentationStyle='pageSheet'
        visible={modalVisible}
      >
        <SafeAreaView style={styles.modal}>
          <Text
            onPress={() => setModalVisible(false)}
            style={styles.modalClose}
          >&times;</Text>
          <Image
            source={{ uri: `https://image.tmdb.org/t/p/w200/${film.poster_path}` }}
            style={styles.modalImage}
          />
          <Text style={styles.modalDescriptions}>
            {film.overview}
          </Text>
        </SafeAreaView>
      </Modal>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  touchableOpacity: {
    width: '30%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: 15,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: "contain"
  },
  text: {
    textAlign: 'center'
  },
  modal: {
    padding: 20,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    backgroundColor: '#4a62ff',
    height: '100%'
  },
  modalClose: {
    fontSize: 40,
    textAlign: 'right',
    marginBottom: 50,
  },
  modalImage: {
    width: 400,
    height: 400,
    resizeMode: 'contain',
    display: 'flex',
    alignSelf: 'center',
    marginBottom: 10,
  },
  modalDescriptions: {
    fontSize: 18,
    textAlign: 'justify'
  }
});