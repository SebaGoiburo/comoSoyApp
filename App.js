import React, { useEffect } from 'react';
import { useFonts } from 'expo-font';
import { StyleSheet, SafeAreaView, Platform, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import Store from './src/store';
import Navigator from './src/navigation/Navigator';
import { initSQLiteDB } from './src/persistence';
import { colores } from './src/global/colors';

const initializeDatabase = async () => {
  try {
    const response = await initSQLiteDB();
    console.log({ responseCreatingDb: response });
    console.log("Db inicializada");
  } catch (error) {
    console.log({ errorCreatingDB: error });
  }
};

export default function App() {
  useEffect(() => {
    initializeDatabase();
  }, []);

  const [loaded] = useFonts({
    'OpenSans-Regular': require('./assets/fonts/OpenSans-Regular.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <Provider store={Store}>
      <SafeAreaView style={styles.container}>
        <Navigator />
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
    backgroundColor: colores.amarillito,
  },
});