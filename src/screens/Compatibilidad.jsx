import { StyleSheet, Text, View, FlatList, TouchableOpacity, Alert } from 'react-native';
import React, { useState, useEffect } from 'react';
import { colores } from '../global/colors';
import { useSelector } from 'react-redux';
import compatibilidadData from '../data/compatibilidad.json';


const Compatibilidad = () => {
  const resultadoTest = useSelector((state) => state.test.value.resultadoTest);
  
  const [compatibilidades, setCompatibilidades] = useState([]);

  useEffect(() => {
    const filtradas = compatibilidadData.filter(item => {
      const personalidades = item.personalidades.split('-');
      return personalidades.includes(resultadoTest);
    });
    setCompatibilidades(filtradas);
  }, [resultadoTest]);

  const renderItem = ({ item }) => {
    const personalidades = item.personalidades.split('-');
    return (
      <TouchableOpacity onPress={() => Alert.alert("Compatibilidad", item.descripcion)}>
        <View style={styles.itemContainer}>
          {personalidades.map((personalidad, index) => (
            <Text 
              key={index} 
              style={[styles.itemText, personalidad === resultadoTest && styles.highlightText]}
            >
              {personalidad}
            </Text>
          ))}
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.containerResultado}>
      <Text style={styles.tituloResultado}>Tu eres un {resultadoTest}</Text>
      <Text style={styles.bajada}>Elije el tipo de personalidad de tu pareja</Text>
      <FlatList
        data={compatibilidades}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default Compatibilidad;

const styles = StyleSheet.create({
  containerResultado: {
    gap: 20,
    height: '100%',
    backgroundColor: colores.amarillito,
    justifyContent: 'center',
  },
  bajada:{
    fontSize: 18,
    textAlign: 'center'
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
  itemContainer: {
    backgroundColor: '#ffffff',
    padding: 15,
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 10,
    elevation: 3, // Para sombra en Android
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  itemText: {
    fontSize: 18,
    fontFamily: 'OpenSans-Regular',
    color: colores.gris,
  },
  highlightText: {
    color: colores.amarillito,
    fontWeight: 'bold'
  },
});