import {  StyleSheet, View, Image, Text, Dimensions, Pressable } from 'react-native';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { colores } from '../global/colors';
import { AntDesign } from '@expo/vector-icons';
import Pregunta from '../components/Pregunta';
import { anteriorIdPregunta } from '../features/TestSlice';


const { height: windowHeight } = Dimensions.get('window');


const Test = () => {

  const dispatch = useDispatch();

  const idPregunta = useSelector((state)=> state.test.value.idPregunta);

  const handlePrevious = () => {
    dispatch(anteriorIdPregunta());
  };
  


  return (
    <View style={styles.containerTest}>
      <Text style={styles.tituloTest}>Test de Personalidad</Text>
      <Pregunta />
      <View style={styles.containerFooterTest}>
        <Pressable style={styles.botonAtras} onPress={handlePrevious} ><AntDesign name="leftcircleo" size={60} color={colores.celeste} /></Pressable>
        <Image 
          style={styles.fotoTest}
          source={require('../../assets/images/test.png')}
          />
      </View>
      <Text style={styles.restoPreguntas}> Te quedan {72-idPregunta} preguntas</Text>
    </ View>  
  )
}

export default Test

const styles = StyleSheet.create({
  containerTest: {
    padding: 'auto',
    gap: 10,
    height: '100%',
    backgroundColor: colores.amarillito,
  },
  tituloTest: {
    margin: 'auto',
    padding: 10,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'OpenSans-Regular',
    color: colores.gris,
    backgroundColor: '#ffffff',
    borderRadius: 25,
    marginTop: 60,
  },
  containerFooterTest: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'flex-start',
    height: windowHeight * 0.2,
    width: 'auto'
  },
  botonAtras:{
    marginLeft: 20,
  },
  fotoTest: {
    height: windowHeight * 0.18,
    resizeMode: 'contain',
    marginRight: 10
  },
  restoPreguntas: {
    fontSize: 12,
    alignSelf: 'center'
  }
})