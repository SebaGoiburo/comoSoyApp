import { useFonts } from 'expo-font';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { StyleSheet, SafeAreaView, Platform, StatusBar } from 'react-native';
import { colores } from './src/global/colors';
import Navigator from './src/navigation/Navigator';
import { Provider } from 'react-redux';
import Store from './src/store'; 
import { initSQLiteDB } from './src/persistence';

const Stack = createNativeStackNavigator();

(async ()=> {
  try {
    const response = await initSQLiteDB()
    console.log({responseCreatingDb: response})
    console.log("Db inicializada")
  } catch (error) {
    console.log({errorCreatingDB: error})
  }
})()

export default function App() {

  const [loaded, error] = useFonts({
    'OpenSans-Regular': require('./assets/fonts/OpenSans-Regular.ttf'),
  });


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
