import { StyleSheet } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { colores } from '../global/colors';
import Home from '../screens/Home'
import Test from '../screens/Test';
import Resultado from '../screens/Resultado';
import { useDispatch, useSelector } from 'react-redux';
import { useGetPersonalityTestQuery } from '../services/testServices';
import { useState, useEffect } from 'react';
import { setResultadoTest } from '../features/TestSlice';

const Stack = createNativeStackNavigator();


const HomeStackNavigator = () => {

  const { localId } = useSelector((state) => state.auth.value);
  const { data: resultado, isLoading } = useGetPersonalityTestQuery(localId);
  const [initialRoute, setInitialRoute] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isLoading && resultado) {
      dispatch(setResultadoTest(resultado.resultado));
      setInitialRoute("Resultado");
    } else if (!isLoading) {
      setInitialRoute("Home");
    }
  }, [isLoading, resultado, dispatch]);

  if (initialRoute === null) {
    return null;
  }



  return (
        <Stack.Navigator 
        initialRouteName={initialRoute}
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