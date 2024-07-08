import { useEffect } from 'react';
import { useFonts } from 'expo-font';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import * as SplashScreen from 'expo-splash-screen';
import { StyleSheet, SafeAreaView, Platform, StatusBar } from 'react-native';
import Home from './src/screens/Home.jsx'
import Login from './src/screens/Login.jsx'
import Test from './src/screens/Test.jsx'
import { colores } from './src/global/colors';

SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();

export default function App() {
  
  const [loaded, error] = useFonts({
    'OpenSans-Regular': require('./assets/fonts/OpenSans-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }


  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator 
          initialRouteName="Login"
          screenOptions={
            {
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
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
    backgroundColor: colores.amarillito,
  },
});
