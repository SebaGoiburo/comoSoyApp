import { StyleSheet, Text, View, Dimensions, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { colores } from '../global/colors';

const { height: windowHeight } = Dimensions.get('window');

const Home = ({navigation, route}) => {
  return (
    <View style={styles.containerPrincipal}>
      <Header></Header>
      <View style={styles.bodyHome}>
        <Text style={styles.textHome}>Bienvenid@!!!</Text>
        <Pressable style={styles.botonEmpezarTest} onPress={()=> navigation.navigate('Test')}>
          <Text style={styles.textoBotonEmpezarTest}>Empezar test</Text>
        </Pressable>
      </View>
      <Footer></Footer>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    containerPrincipal: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    textHome: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        fontFamily: 'OpenSans-Regular',
    },
    bodyHome: {
      backgroundColor: colores.amarillito,
      height: windowHeight * 0.7,
      zIndex: -1,
      alignItems: 'center',
      justifyContent: 'center',
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