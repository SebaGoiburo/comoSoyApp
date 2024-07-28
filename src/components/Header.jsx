import { StyleSheet, View, Image, Dimensions } from 'react-native'
import React from 'react'
import { colores } from '../global/colors';

const { height: windowHeight } = Dimensions.get('window');

export default function Header() {
  return (
    <View style={styles.container}>
      <Image style={styles.logoTitulo}
        source={require('../../assets/images/logo/logoTitulo.png')}
        />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: windowHeight * 0.1,
    width: '100%',
    backgroundColor: colores.celeste,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  logoTitulo: {
    height: 150,
    width: 150,
    marginBottom:-80,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2
  }
})
