import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { colores } from '../global/colors';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

import Perfil from '../screens/Perfil';
import HomeStackNavigator from './HomeStackNavigator';
import Compatibilidad from '../screens/Compatibilidad';
import Header from '../components/Header'
import MyProfileStackNavigator from './MyProfileStackNavigation';

const { height: windowHeight } = Dimensions.get('window');

const Tab = createBottomTabNavigator();

const BotonTabNavigator = () => {
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
        header: () => {
          return <Header />;
        },
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
      })}>
        <Tab.Screen
            name="Home" 
            component={HomeStackNavigator}
            options={{
                    tabBarIcon: ({focused}) =>{
                        return(
                            <View>
                                <AntDesign name="home" size={32} color={focused ? colores.gris : colores.salmon} />
                            </View>
                        )
                    }
                }} />
        <Tab.Screen 
            name="Ir al perfil" 
            component={MyProfileStackNavigator} 
            options={{
                tabBarIcon: ({focused}) =>{
                    return(
                        <View>
                            <FontAwesome name="user-circle-o" size={32} color={focused ? colores.gris : colores.salmon}/>
                        </View>
                    )
                }
            }} />
        <Tab.Screen 
            name="Compatibilidad" 
            component={Compatibilidad}
            options={{
                        tabBarIcon: ({focused}) =>{
                            return(
                                <View>
                                    <Feather name="users" size={32} color={focused ? colores.gris : colores.salmon} />
                                </View>
                            )
                        }
                    }} />
    </Tab.Navigator>
  )
}
  
export default BotonTabNavigator

const styles = StyleSheet.create({
    tabBar:{
        backgroundColor: colores.celeste,
        height: windowHeight * 0.1,
    }
})