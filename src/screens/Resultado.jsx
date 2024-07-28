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
      <Text style={styles.tituloResultado}>Tipo de personalidad: {resultadoTest}</Text>
      <View style={styles.contenedorDescripcion}>
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
      </View>
    </ View>  
  )
}

export default Resultado

const styles = StyleSheet.create({
    containerResultado: {
        gap: 20,
        height: '100%',
        backgroundColor: colores.amarillito,
        justifyContent: 'center'
      },
      tituloResultado: {
        width: 'auto',
        marginTop: 40,
        marginLeft: 20,
        marginRight: 20,
        padding: 10,
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        fontFamily: 'OpenSans-Regular',
        color: colores.gris,
        backgroundColor: '#ffffff',
        borderRadius: 25,
      },
      contenedorDescripcion:{
        gap: 15,
        padding: 15
      },
      descripcionResultado:{
        backgroundColor: '#ffffff',
        color: colores.gris,
        borderRadius: 15,
        padding: 10,
        margin: 10,
        fontSize: 18,
        textAlign: 'center'
      },
      caracteristicasResultado:{
        color: colores.gris,
        marginLeft: 20,
        marginRight:20,
        fontSize: 16,
        textAlign: 'center'
      }
})