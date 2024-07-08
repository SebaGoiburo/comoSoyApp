import { StyleSheet, View, Text, TextInput, Image, Dimensions, SafeAreaView } from 'react-native'
import React from 'react'
import Boton from '../components/Boton'
import { colores } from '../global/colors'

const { height: windowHeight } = Dimensions.get('window');

const Login = ({navigation, route}) => {
  return (
    <SafeAreaView style={styles.screenLogin}>
        <View>
            <Image
                style={styles.logoMain}
                source={require('../../assets/images/logo/logoMain.png')}
            />
            <Text style={styles.bienvenidoLogin}>
                Bienvenid@s!
            </Text>
            <TextInput
            style={styles.inputUser}
            placeholder="Usuario"
            placeholderTextColor="#999"
            />
            <TextInput
            style={styles.inputPass}
            placeholder="Contraseña"
            placeholderTextColor="#999"
            secureTextEntry
            />
            <Boton textBoton="Login"/>
        </View>
    </SafeAreaView>
  );
};

export default Login

const styles = StyleSheet.create({
    screenLogin:{
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: colores.amarillito,
        height: windowHeight,
        alignItems: 'center'
    },
    logoMain: {
        height: windowHeight * 0.25,
        width: 'auto',
        resizeMode: 'contain',
        marginTop: -90,
    },
    bienvenidoLogin: {
        fontFamily: 'OpenSans-Regular',
        fontSize: 32,
        fontWeight: 'bold',
        color: colores.gris,
        marginTop: windowHeight * 0.05,
        textAlign:'center'
    },
    inputUser: {
        textAlign: 'center',
        height: 40,
        margin: 12,
        borderBottomWidth: 1,
        padding: 10,
        fontSize: 16,
    },
    inputPass: {
        textAlign: 'center',
        height: 40,
        margin: 12,
        borderBottomWidth: 1,
        padding: 10,
        fontSize: 16,
    }
})