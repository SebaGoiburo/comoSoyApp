import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { setRespuesta, siguienteIdPregunta, setResultadoTest } from '../features/TestSlice';
import {usePostPersonalityTestMutation} from '../services/testServices'
import { useNavigation } from '@react-navigation/native';
import { colores } from '../global/colors';

const Pregunta = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const idPregunta = useSelector((state) => state.test.value.idPregunta);
  const listadoPreguntas = useSelector((state) => state.test.value.respuestas);
  const [triggerPostTest, result] = usePostPersonalityTestMutation();
  const localId = useSelector((state) => state.auth.value.localId);

  const calcularResultado = () => {
    const sumaPorCategoria = {};
    listadoPreguntas.forEach(item => {
      const { categoria, respuesta } = item;

      if (!sumaPorCategoria[categoria]) {
        sumaPorCategoria[categoria] = 0;
      }

      sumaPorCategoria[categoria] += respuesta;
    });
    console.log(sumaPorCategoria);
    const resultado = (sumaPorCategoria.E > sumaPorCategoria.I ? 'E' : 'I') +
      (sumaPorCategoria.S > sumaPorCategoria.N ? 'S' : 'N') +
      (sumaPorCategoria.T > sumaPorCategoria.F ? 'T' : 'F') +
      (sumaPorCategoria.J > sumaPorCategoria.P ? 'J' : 'P');
    dispatch(setResultadoTest(resultado));
    return resultado
  }

  const handleRespuesta = (respuesta) => {
    dispatch(setRespuesta(respuesta));
    dispatch(siguienteIdPregunta());
  };

  const handleCalcularResultado = async () => {
    const resultado = calcularResultado();
    try {
      const response = await triggerPostTest({
        test: listadoPreguntas,
        localId,
        resultado
      }).unwrap();
      navigation.navigate('Resultado', { resultado });
    } catch (error) {
      console.error("Error en handleCalcularResultado:", error);
    }
  }

  
  return (
    <View style={styles.containerPregunta}>
      <Text style={styles.pregunta}>{idPregunta === 72 ? "¡Felicitaciones! Terminaste el test" : listadoPreguntas[idPregunta].aseveracion}</Text>
      <View>
        {idPregunta < 72 ? (
          <View style={styles.containerBotones}>
            <Pressable onPress={() => handleRespuesta(0)}>
              <Octicons name="x-circle-fill" size={60} color="red" />
            </Pressable>
            <Pressable onPress={() => handleRespuesta(1)}>
              <FontAwesome name="check-circle" size={68} color="#30cc00" />
            </Pressable>
          </View>
        ) : null}
        {idPregunta === 72 ? (
          <Pressable style={styles.botonCalcular} onPress={handleCalcularResultado}>
            <Text>Calcular Resultado</Text>
          </Pressable>
        ) : null}
      </View>
    </View>
  )
}

export default Pregunta

const styles = StyleSheet.create({
  containerPregunta: {
    margin: 'auto'
  },
  pregunta: {
    fontFamily: "OpenSans-Regular",
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 20,
  },
  resultado: {
    fontSize: 36,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  containerBotones: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 30,
    marginTop: 30
  },
  botonCalcular:{
    borderRadius:25,
    backgroundColor: "#ffffff",
    color: colores.salmon,
    fontSize:12,
    alignItems: 'center',
    alignSelf: 'center',
    padding:15,
    fontWeight: 'bold'
  }
})