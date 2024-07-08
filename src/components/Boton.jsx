import { StyleSheet, Text, Pressable } from 'react-native'
import React from 'react'
import { colores } from '../global/colors'

export default function Boton({textBoton}) {

  const onPressFunction = ()=> {

  }

  return (
    <Pressable 
      style={styles.boton} 
      onPress={onPressFunction}>
        <Text style={styles.textoBoton}>{textBoton}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  boton: {
    margin: 25,
    backgroundColor: colores.salmon,
    borderRadius: 15,
    padding: 15,
  },
  textoBoton: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'OpenSans-Regular',
    color: '#ffffff',
    textAlign: 'center'
  } 
})