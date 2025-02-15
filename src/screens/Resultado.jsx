import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';
import { colores } from '../global/colors';
import personalidades from '../data/descripcionSegunResultado.json'

const Resultado = () => {

  const resultadoTest = useSelector((state)=> state.test.value.resultadoTest);
  const descripcionPersonalidad = personalidades.find(personalidad => personalidad.resultado === resultadoTest)

  const getImageSource = (nombrePersonalidad) => {
    switch (nombrePersonalidad) {
      case 'Inspector':
        return require('../../assets/images/icons/iconos_personalidades/Inspector.png');
      case 'Defensor':
        return require('../../assets/images/icons/iconos_personalidades/Defensor.png');
      case 'Consejero':
        return require('../../assets/images/icons/iconos_personalidades/Consejero.png');
      case 'Arquitecto':
        return require('../../assets/images/icons/iconos_personalidades/Arquitecto.png');
      case 'Artesano':
        return require('../../assets/images/icons/iconos_personalidades/Artesano.png');
      case 'Artista':
        return require('../../assets/images/icons/iconos_personalidades/Artista.png');
      case 'Mediador':
        return require('../../assets/images/icons/iconos_personalidades/Mediador.png');
      case 'Lógico':
        return require('../../assets/images/icons/iconos_personalidades/Lógico.png');
      case 'Aventurero':
        return require('../../assets/images/icons/iconos_personalidades/Aventurero.png');
      case 'Animador':
        return require('../../assets/images/icons/iconos_personalidades/Animador.png');
      case 'Campeón':
        return require('../../assets/images/icons/iconos_personalidades/Campeón.png');
      case 'Innovador':
        return require('../../assets/images/icons/iconos_personalidades/Innovador.png');
      case 'Empresario':
        return require('../../assets/images/icons/iconos_personalidades/Empresario.png');
      case 'Proveedor':
        return require('../../assets/images/icons/iconos_personalidades/Proveedor.png');
      case 'Maestro':
        return require('../../assets/images/icons/iconos_personalidades/Maestro.png');
      case 'Comandante':
        return require('../../assets/images/icons/iconos_personalidades/Comandante.png');
      default:
        return require('../../assets/images/icons/iconos_personalidades/default.png');
    }
  }
  
    
    return (
    <View style={styles.containerResultado}>
      <Image source={getImageSource(descripcionPersonalidad.nombrePersonalidad)} style={{width: 200, height: 200, alignSelf: 'center'}}/>
      <Text style={styles.nombre}>{descripcionPersonalidad.nombrePersonalidad.toString()}</Text>
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
      nombre:{
        width: 'auto',
        textAlign: 'center',
        fontSize: 32,
        fontWeight: 'bold',
        fontFamily: 'OpenSans-Regular',
        color: colores.salmon,
        textShadowColor: colores.gris, // Color del contorno
        textShadowOffset: { width: -2, height: 2 }, // Desplazamiento del contorno
        textShadowRadius: 2,
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