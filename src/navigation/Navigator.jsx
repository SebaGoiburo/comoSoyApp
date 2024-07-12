import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import BotonTabNavigator from './BotonTabNavigator'

const Navigator = () => {
  return (
    <NavigationContainer>
        <BotonTabNavigator />
    </NavigationContainer>
  )
}

export default Navigator

const styles = StyleSheet.create({})