import { StyleSheet, Text, View, Image, Dimensions, Pressable, Platform } from 'react-native'
import React from 'react'
import { colores } from '../global/colors'
import { useSelector } from 'react-redux';
import { useGetProfileimageQuery } from '../services/testServices';
import AddButton from '../components/AddButton';
import { clearUser } from '../features/UserSlice';
import { truncateSessionTable } from '../persistence';
import { useDispatch } from 'react-redux';

const { height: windowHeight } = Dimensions.get('window');

const Perfil = ({navigation}) => {

  const dispatch = useDispatch();
  const {imageCamera, localId, user} = useSelector((state) => state.auth.value)
  const {data: imageFromBase} = useGetProfileimageQuery(localId)
  const hayResultado = useSelector((state)=> state.test.value.resultadoTest);

  const launchCamera = async () => {
    navigation.navigate("Image Selector");
  };

  const defaultImageRoute = "../../assets/images/userDefault.png";

  const signOut =  async () => {
    try {         
      if (Platform.OS !== "web") await truncateSessionTable(); // borro la session
      dispatch(clearUser());
    } catch (error) {
      console.log({ errorSignOutDB: error });
    }
  }

  return (
    <View style={styles.containerPerfil}>
      <Text style={styles.tituloPerfil}>Hola!</Text>
      {imageFromBase || imageCamera ? (
        <Image
          source={{ uri: imageFromBase?.image || imageCamera }}
          style={styles.fotoPerfil}
        />
      ) : (
        <Image
          style={styles.fotoPerfil}
          source={require(defaultImageRoute)}
        />
      )}
      <AddButton
        onPress={launchCamera}
        title={
          imageFromBase || imageCamera
            ? "Tomarme otra foto"
            : "Tomarme una foto"
      }
      />
      <Text style={styles.datosPersonales} >
        Correo Electrónico: {user}
      </Text>
      <Text style={styles.datosPersonales} >
        Personalidad: {hayResultado ? hayResultado : "Aún no has realizado el test"}
      </Text>
      <AddButton onPress={signOut} title="Cerrar Cesión" />
    </View>
  )
}

export default Perfil

const styles = StyleSheet.create({
  containerPerfil: {
    padding: 'auto',
    gap: 25,
    height: '100%',
    backgroundColor: colores.amarillito,
  },
  tituloPerfil: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'OpenSans-Regular',
    color: colores.celeste,
    marginTop: 90,
  },
  fotoPerfil: {
    height: 150,
    width: 150,
    resizeMode: 'contain',
    borderRadius: 75,
    borderColor: colores.salmon,
    borderWidth: 2,
    alignSelf: 'center'
  },
  datosPersonales: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 18,
    color: colores.gris,
    fontWeight: 'bold',
    textAlign: 'center'
  }
})