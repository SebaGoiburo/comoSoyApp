import { Linking, StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import { colores } from '../global/colors';

const { height: windowHeight } = Dimensions.get('window');

export default function Footer() {

const handleLinkPress = () => {
    Linking.openURL('https://mudatealaweb.com');
}

  return (
    <View style={styles.container} >
      <Text style={styles.textFooter}>Hacé tu app con  
        <Text style={styles.linkFooter} onPress={handleLinkPress}> Agencia Exacta</Text>
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: windowHeight * 0.1,
    width: '100%',
    backgroundColor: colores.celeste,
    justifyContent: 'center',
  },
  textFooter: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colores.gris,
    textAlign: 'center',
  },
  linkFooter: {

  }
})