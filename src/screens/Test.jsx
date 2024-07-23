import {  StyleSheet, View, Image, Text, Dimensions, Pressable } from 'react-native';
import React from 'react';
import { useDispatch } from 'react-redux';
import { colores } from '../global/colors';
import { AntDesign } from '@expo/vector-icons';
import Pregunta from '../components/Pregunta';
import { anteriorIdPregunta, siguienteIdPregunta } from '../features/TestSlice';
import { usePostTestMutation } from '../services/testServices';


const { height: windowHeight } = Dimensions.get('window');


const Test = ({navigation, route}) => {

  const dispatch = useDispatch();

  const [triggerPostTest, result] = usePostTestMutation();

  const onPersistirTest = () => {
    triggerPostTest({})
  }

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
    </ View>  
  )
}

export default Test

const styles = StyleSheet.create({
  containerTest: {
    padding: 'auto',
    gap: 15,
    height: '100%',
    backgroundColor: colores.amarillito,
  },
  tituloTest: {
    margin: 'auto',
    padding: 10,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'OpenSans-Regular',
    color: colores.gris,
    backgroundColor: '#ffffff',
    borderRadius: 25,
    marginTop: 90,
  },
  containerFooterTest: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  botonAtras:{
    marginLeft:20,
  },
  fotoTest: {
    height: windowHeight * 0.2,
    //width: 'auto',
    resizeMode: 'contain',
  }
})