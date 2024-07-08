import {  StyleSheet, View } from 'react-native'
import React from 'react'
import Pregunta from '../components/Pregunta'

const Test = ({navigation, route}) => {
  return (
    <View>
      <Pregunta>
        ¿Test?
      </Pregunta>
    </View>
  )
}

export default Test

const styles = StyleSheet.create({})