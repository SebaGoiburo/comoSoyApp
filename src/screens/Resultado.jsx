import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';
import { colores } from '../global/colors';
import personalidades from '../data/descripcionSegunResultado.json'

const Resultado = () => {

  const resultadoTest = useSelector((state)=> state.test.value.resultadoTest);
  const descripcionPersonalidad = personalidades.find(personalidad => personalidad.resultado === resultadoTest)

  return (
    <View style={styles.containerResultado}>
      <Text style={styles.tituloResultado}>{resultadoTest}</Text>
      {descripcionPersonalidad ? (
        <>
          <Text style={styles.descripcionResultado}>{descripcionPersonalidad.descripción}</Text>
          {Object.entries(descripcionPersonalidad.características).map(([key, value]) => (
            <Text key={key} style={styles.caracteristicasResultado}>
              {key}: {value}
            </Text>
          ))}
        </>
      ) : (
        <Text style={styles.errorText}>No se encontró una descripción para el resultado obtenido.</Text>
      )}
    </ View>  
  )
}

export default Resultado

const styles = StyleSheet.create({
    containerResultado: {
        padding: 'auto',
        gap: 15,
        height: '100%',
        backgroundColor: colores.amarillito,
      },
      tituloResultado: {
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
      descripcionResultado:{
        backgroundColor: '#ffffff',
        color: colores.gris,
        borderRadius: 15,
        padding: 10,
        margin: 10,
        fontSize: 14
      },
      caracteristicasResultado:{
        color: colores.gris,
        padding: 10,
        margin: 10
      }
})