import React from 'react';
// React navigation
import Router from './src/routes/Router';
// Components
import { StatusBar } from 'expo-status-bar';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';
// Redux
import { store } from './src/redux/store';
import { Provider } from 'react-redux';
// Custom Fonts
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

export default function App() {

  const [fontsLoaded] = useFonts({
    'Inter': require('./assets/fonts/Inter.ttf'),
    'Manrope': require('./assets/fonts/Manrope.ttf'),
  });

  const onLayoutRootView = React.useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container} onLayout={onLayoutRootView}>
        <Router />
        <StatusBar style="auto" />
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
