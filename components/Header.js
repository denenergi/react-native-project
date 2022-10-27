import React from 'react';
import { Image, View, StyleSheet } from 'react-native';

export const Header = () => {
  return (
    <View style={styles.header}>
      <Image source={require('../assets/React-Native-Titre.png')} style={styles.logo}/>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 70,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: "100%",
    height: "100%"
  }
})