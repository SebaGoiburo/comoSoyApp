import { StyleSheet, View, Text, TextInput, Image, Dimensions, SafeAreaView, Pressable, Platform } from 'react-native'
import React from 'react'
import { colores } from '../global/colors'
import { useState, useEffect } from 'react'
import { useSignInMutation } from '../services/authServices';
import { useDispatch } from "react-redux";
import { setUser } from "../features/UserSlice";
import InputForm from '../components/InputForm';
import { insertSession } from '../persistence';


const { height: windowHeight } = Dimensions.get('window');

const Login = ({navigation, route}) => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const dispatch = useDispatch();
    const [triggerSignIn, result] = useSignInMutation();



    useEffect(() => {
        if (result?.data && result.isSuccess) {
         (async () => {
            try {
                if (Platform.OS !== "web") {
                const response = await insertSession({
                    email: result.data.email,
                    localId: result.data.localId,
                    token: result.data.idToken,
                });
             }
        dispatch(
          setUser({
            email: result.data.email,
            idToken: result.data.idToken,
            localId: result.data.localId,
            })
        );
            } catch (error) {
        console.log(error);
            }
        })();
    }
    }, [result, dispatch]);


    const onSubmit = ()=> {
        triggerSignIn({email, password, returnSecureToken: true})
        console.log("trigger si!")
    }

    const [isPressedOne, setIsPressedOne] = useState(false);
    const [isPressedTwo, setIsPressedTwo] = useState(false);

  return (
    <SafeAreaView style={styles.screenLogin}>
        <View>
            <Image
                style={styles.logoMain}
                source={require('../../assets/images/espejo.png')}
            />
            <Text style={styles.bienvenidoLogin}>
                Bienvenid@s!
            </Text>
            <InputForm 
                placeholder={"Correo Electrónico"} 
                onChange={setEmail} 
                error={""} />
            <InputForm
                placeholder={"password"}
                onChange={setPassword}
                error={""}
                isSecure={true}
            />
           <Pressable onPress={onSubmit} style={({ pressed }) => [
                styles.botonEntrar,
                pressed || isPressedOne ? styles.botonEntrarApretado : null,
                ]}
                onPressIn={() => setIsPressedOne(true)}
                onPressOut={() => setIsPressedOne(false)}>
            <Text style={styles.textoBoton}>Entrar</Text>
            </Pressable>
           <Text style={styles.olvidasteContraseña}>¿Olvidaste tu contraseña?</Text>
           <Pressable style={({ pressed }) => [
                styles.botonCrearCuenta,
                pressed || isPressedTwo ? styles.botonCrearCuentaApretado : null,
                ]}
                onPressIn={() => setIsPressedTwo(true)}
                onPressOut={() => setIsPressedTwo(false)}
                onPress={()=>navigation.navigate('Signup')}>
            <Text style={styles.textoBoton}>Crear Cuenta</Text>
            </Pressable>
        </View>
    </SafeAreaView>
  );
};

export default Login

const styles = StyleSheet.create({
    screenLogin:{
        alignContent: 'space-evenly',
        justifyContent: 'center',
        backgroundColor: colores.amarillito,
        alignItems: 'center',
        height: '100%'
    },
    logoMain: {
        height: windowHeight * 0.25,
        width: 'auto',
        resizeMode: 'contain',
    },
    bienvenidoLogin: {
        fontFamily: 'OpenSans-Regular',
        fontSize: 32,
        fontWeight: 'bold',
        color: colores.gris,
        textAlign:'center'
    },
    inputUser: {
        textAlign: 'center',
        height: 20,
        margin: 10,
        borderBottomWidth: 1,
        borderColor: colores.gris,
        padding: 10,
        fontSize: 16,
    },
    inputPass: {
        textAlign: 'center',
        height: 20,
        margin: 10,
        borderBottomWidth: 1,
        borderColor: colores.gris,
        padding: 10,
        fontSize: 16,
    },
    botonEntrar:{
        backgroundColor: '#ffffff',
        borderRadius: 25,
        width: '70%',
        marginTop: 15,
        marginBottom: 5,
        margin: 'auto',
        padding:12,
        shadowColor: colores.gris,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
    },
    botonEntrarApretado:{
        backgroundColor: "#D3D3D3",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.6,
        shadowRadius: 3,
        elevation: 10,
    },
    olvidasteContraseña:{
        fontSize: 10,
        fontFamily: "OpenSans-Regular",
        textAlign: 'center'   
    },
    botonCrearCuenta: {
        backgroundColor: '#ffffff',
        borderRadius: 25,
        width: '50%',
        marginTop: 15,
        margin: 'auto',
        padding:12,
        shadowColor: colores.gris,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5
    },
    botonCrearCuentaApretado:{
        backgroundColor: "#D3D3D3",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.6,
        shadowRadius: 3,
        elevation: 10
    },
    textoBoton:{
        fontFamily: 'OpenSans-Regular',
        fontSize: 12,
        textAlign: 'center',
        color: colores.gris
    }
})