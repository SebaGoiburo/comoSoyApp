import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Signup from '../screens/Signup';
import Login from '../screens/Login';
import Header from '../components/Header';

const Stack = createNativeStackNavigator();

const AuthStackNavigator = () => {
  return (
    <Stack.Navigator
        initialRouteName='Login'
        screenOptions={{
            header: () => {
                return <Header />;
              }
        }}>
      <Stack.Screen component={Login} name='Login'></Stack.Screen>
      <Stack.Screen component={Signup} name='Signup'></Stack.Screen>
    </Stack.Navigator>
  )
}

export default AuthStackNavigator