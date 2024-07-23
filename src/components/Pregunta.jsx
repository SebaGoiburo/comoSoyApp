import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { setRespuesta, siguienteIdPregunta } from '../features/TestSlice';
import { useGetTestQuery } from '../services/testServices';


const Pregunta = () => {

  const dispatch = useDispatch();
  const idPregunta = useSelector((state) => state.test.value.idPregunta);
  const { data, error, isLoading } = useGetTestQuery();
  
  if (isLoading) return <Text>Cargando...</Text>
  if (error) return <Text>Error al cargar la pregunta</Text>;


  const handleRespuesta = (respuesta) => {
      dispatch(setRespuesta(respuesta));
      dispatch(siguienteIdPregunta());
  };


  return (
    <View style={styles.containerPregunta}>
      <Text style={styles.pregunta}>{data[idPregunta].aseveracion}</Text>
      <View style={styles.containerBotones}>
        <Pressable onPress={() => handleRespuesta(false)}><Octicons name="x-circle-fill" size={60} color="red" /></Pressable>
        <Pressable onPress={() => handleRespuesta(true)} ><FontAwesome name="check-circle" size={68} color="#30cc00" /></Pressable>
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