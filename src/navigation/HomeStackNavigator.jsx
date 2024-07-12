import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { colores } from '../global/colors';
import Home from '../screens/Home'
import Login from '../screens/Login';
import Test from '../screens/Test';


const Stack = createNativeStackNavigator();

const HomeStackNavigator = () => {
  return (
        <Stack.Navigator 
          initialRouteName="Home"
          screenOptions={
            { headerShown: false,  
              headerStyle: {
                backgroundColor: colores.celeste,
              },
              headerTitleStyle:{
                fontSize: 14,
                fontWeight: 'regular',
                color: '#ffffff',
              }
            }
          }>
          <Stack.Screen name="Home" component={Home}/>
          <Stack.Screen name="Login" component={Login}/>
          <Stack.Screen name="Test" component={Test}/>
        </Stack.Navigator>
  )
}

export default HomeStackNavigator

const styles = StyleSheet.create({

})