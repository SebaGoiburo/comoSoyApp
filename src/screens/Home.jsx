import { StyleSheet, Text, View, Dimensions, Pressable } from 'react-native';
import React from 'react';
import { colores } from '../global/colors';

const { height: windowHeight } = Dimensions.get('window');

const Home = ({navigation, route}) => {
  return (
    <View style={styles.containerPrincipal}>
        <Text style={styles.textHome}>Bienvenid@!!!</Text>
        <Pressable style={styles.botonEmpezarTest} onPress={()=> navigation.navigate('Test')}>
          <Text style={styles.textoBotonEmpezarTest}>Empezar test</Text>
        </Pressable>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    containerPrincipal: {
      backgroundColor: colores.amarillito,
      height: '100%',
      width: '100%',
      zIndex: -1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    textHome: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        fontFamily: 'OpenSans-Regular',
    },
    botonEmpezarTest: {
      margin: 25,
      backgroundColor: colores.salmon,
      borderRadius: 15,
      padding: 15,
    },
    textoBotonEmpezarTest:{
      fontSize: 18,
      fontWeight: 'bold',
      fontFamily: 'OpenSans-Regular',
      color: '#ffffff',
    }
})