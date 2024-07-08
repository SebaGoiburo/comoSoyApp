import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import React from 'react'
import { colores } from '../global/colors';

const { height: windowHeight } = Dimensions.get('window');

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.containerFotoPerfil}>
        <Image
        style={styles.fotoPerfil}
        source={require('../../assets/images/userDefault.png')}
        />
      </View>
      <Image style={styles.logoTitulo}
        source={require('../../assets/images/logo/logoTitulo.png')}
        />
      <Image style={styles.iconoEnviar}
      source={require('../../assets/images/icons/iconoEnviar.png')}
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
  containerFotoPerfil: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  fotoPerfil: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  logoTitulo: {
    height: 150,
    width: 150,
    marginBottom:-80,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2
  },
  iconoEnviar: {
    height: 50,
    width: 50,
  }
})
