import { useEffect } from 'react';
import { useFonts } from 'expo-font';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import * as SplashScreen from 'expo-splash-screen';
import { StyleSheet, SafeAreaView, Platform, StatusBar } from 'react-native';

import { colores } from './src/global/colors';

import Navigator from './src/navigation/Navigator';

import { Provider } from 'react-redux';
import Store from './src/store'; 


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
      <Provider store={Store}>
        <Navigator />
      </Provider>
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
