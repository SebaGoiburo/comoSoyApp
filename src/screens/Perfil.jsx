import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import React from 'react'
import { colores } from '../global/colors'

const { height: windowHeight } = Dimensions.get('window');

const Perfil = () => {
  return (
    <View style={styles.containerPerfil}>
      <Text style={styles.tituloPerfil}>Hola, Seba!</Text>
      <Image 
        style={styles.fotoPerfil}
        source={require('../../assets/images/userDefault.png')}
        />
      <Text style={styles.datosPersonales} >
        Nombre de usuario: Seba Goiburo
      </Text>
      <Text style={styles.datosPersonales} >
        Correo Electrónico: sebastiangoiburo@gmail.com
      </Text>
      <Text style={styles.datosPersonales} >
        Contraseña: Urquiza70$
      </Text>
      <Text style={styles.datosPersonales} >
        Personalidad: IFNV
      </Text>
    </View>
  )
}

export default Perfil

const styles = StyleSheet.create({
  containerPerfil: {
    padding: 'auto',
    gap: 15,
    height: '100%',
    backgroundColor: colores.amarillito,
  },
  tituloPerfil: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'OpenSans-Regular',
    color: colores.celeste,
    marginTop: 90,
  },
  fotoPerfil: {
    height: windowHeight * 0.25,
    width: 'auto',
    resizeMode: 'contain',
  },
  datosPersonales: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 18,
    color: colores.gris,
    fontWeight: 'bold',
    textAlign: 'center'
  }
})