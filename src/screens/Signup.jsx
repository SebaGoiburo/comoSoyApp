import { StyleSheet, Text, View, Dimensions, SafeAreaView, TextInput, Pressable, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { colores } from '../global/colors'
import { useSignUpMutation } from '../services/authServices';
import { setUser } from '../features/UserSlice';
import { useDispatch } from 'react-redux';
import { signupSchema } from "../validation/signUpScheme"
import InputForm from '../components/InputForm';


const { height: windowHeight } = Dimensions.get('window');

const Signup = ({navigation}) => {
    
    const [email, setEmail] = useState("");
    const [errorMail, setErrorMail] = useState("");
    const [password, setPassword] = useState("");
    const [errorPassword, setErrorPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errorConfirmPassword, setErrorConfirmPassword] = useState("");
  
    const dispatch = useDispatch()
    const [triggerSignUp, result] = useSignUpMutation();

    useEffect(()=>{
        if (result.isSuccess){
           dispatch(
            setUser({
                email: result.data.email,
                idToken: result.data.idToken,
                localId: result.data.localId,
            })
           )
        }
    }, [result])

    const onSubmit = async () => {
        console.log("onSubmit called");
        try {
            // Validar los campos antes de enviar
            await signupSchema.validate({ email, password, confirmPassword }, { abortEarly: false });

            if (password !== confirmPassword) {
                setErrorConfirmPassword("Las contraseñas no coinciden");
                return;
            }

            // Limpiar mensajes de error
            setErrorMail("");
            setErrorPassword("");
            setErrorConfirmPassword("");

            console.log("Triggering signup mutation with:", { email, password });
            triggerSignUp({ email, password, returnSecureToken: true });
        } catch (err) {
            // Manejo de errores de validación
            err.inner.forEach((error) => {
                if (error.path === "email") setErrorMail(error.message);
                if (error.path === "password") setErrorPassword(error.message);
                if (error.path === "confirmPassword") setErrorConfirmPassword(error.message);
            });
        }
    };

  return (
    <SafeAreaView style={styles.screenLogin}>
        <View>
            <Image
                style={styles.logoMain}
                source={require('../../assets/images/espejo.png')}
            />
            <Text style={styles.bienvenidoLogin}>
                Registrate
            </Text>
            <InputForm
            onChange={setEmail}
            error={errorMail}
            placeholder={"Correo electrónico"}
            isSecure={false}
            />
            <InputForm
            placeholder={"Contraseña"}
            onChange={setPassword}
            error={errorPassword}
            isSecure={true}
            />
            <InputForm
            placeholder={"Confirme su contraseña"}
            onChange={setConfirmPassword}
            error={errorConfirmPassword}
            isSecure={true}
            />
            <Pressable style={styles.botonRegistrarme} onPress={onSubmit}><Text style={styles.textoBoton}>Registrarme</Text></Pressable>
            <Pressable style={styles.botonLogin} onPress={() => navigation.navigate("Login")}><Text>Ir a Login</Text></Pressable>
        </View>
    </SafeAreaView>
  )
}

export default Signup

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
    },
    bienvenidoLogin: {
        fontFamily: 'OpenSans-Regular',
        fontSize: 32,
        fontWeight: 'bold',
        color: colores.gris,
        marginTop: windowHeight * 0.05,
        textAlign:'center'
    },
    botonRegistrarme:{
        backgroundColor: '#ffffff',
        borderRadius: 25,
        width: '50%',
        margin: 'auto',
        padding: 15,
    },
    botonLogin:{
        fontSize: 10,
        fontFamily: "OpenSans-Regular",
        fontWeight: 'bold'   
    },
    textoBoton:{
        fontFamily: 'OpenSans-Regular',
        fontSize: 12,
        textAlign: 'center',
        color: colores.gris
    }
})