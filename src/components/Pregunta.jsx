import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { setRespuesta, siguienteIdPregunta, cambioDePregunta } from '../features/TestSlice';


const Pregunta = () => {

  const dispatch = useDispatch();

  const preguntaActual = useSelector((state)=> state.test.value.preguntaActual);
 
  const handleResponseTrue = ()=>{
    dispatch(setRespuesta(1));
    dispatch(siguienteIdPregunta());
    dispatch(cambioDePregunta());
  }

  const handleResponseFalse = ()=>{
    dispatch(setRespuesta(0));
    dispatch(siguienteIdPregunta());
    dispatch(cambioDePregunta());
  }

  return (
    <View style={styles.containerPregunta}>
      <Text style={styles.pregunta}>{preguntaActual}</Text>
      <View style={styles.containerBotones}>
      <Pressable onPress={handleResponseTrue}><Octicons name="x-circle-fill" size={60} color="red" /></Pressable>
      <Pressable onPress={handleResponseFalse} ><FontAwesome name="check-circle" size={68} color="#30cc00" /></Pressable>
      </View>
    </View>
  )
}

export default Pregunta

const styles = StyleSheet.create({
  containerPregunta:{
    margin: 'auto'
  },
  pregunta:{
    fontFamily: "OpenSans-Regular",
    fontSize: 22,
    textAlign: 'center',
    marginBottom:20,
  },
  containerBotones:{
    flexDirection: 'row',
    justifyContent: 'center',
    gap:30,
    marginTop:30
  }
})