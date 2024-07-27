import { StyleSheet } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { colores } from '../global/colors';
import Home from '../screens/Home'
import Test from '../screens/Test';
import Resultado from '../screens/Resultado';
import { useSelector } from 'react-redux';


const Stack = createNativeStackNavigator();


const HomeStackNavigator = () => {

  const hayResultado = useSelector((state)=> state.test.value.resultadoTest);

  return (
        <Stack.Navigator 
        initialRouteName={hayResultado ? "Resultado" : "Home"}
        screenOptions={{
          headerShown: false,
          headerStyle: {
            backgroundColor: colores.celeste,
          },
          headerTitleStyle: {
            fontSize: 14,
            fontWeight: 'regular',
            color: '#ffffff',
          },
         }}
        >
          <Stack.Screen name="Home" component={Home}/>
          <Stack.Screen name="Test" component={Test}/>
          <Stack.Screen name="Resultado" component={Resultado}/>
        </Stack.Navigator>
  )
}

export default HomeStackNavigator

const styles = StyleSheet.create({

})