import React from 'react';
import 'react-native-gesture-handler';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import SignIn from '../screens/SignIn';
import { NavigationContainer } from '@react-navigation/native';
import { RootStackParamList } from './types.routes';
import LogIn from '../screens/LogIn';
import { ROUTER_SCREEN_NAMES } from '../utils/constants';
import useAuth from '../hooks/useAuth';

const Stack = createNativeStackNavigator<RootStackParamList>();

const Router = () => {

  const {
    isAuthenticated,
  } = useAuth();

  return (
    <NavigationContainer >
      <Stack.Navigator
        initialRouteName={ROUTER_SCREEN_NAMES.LOGIN}
        screenOptions={{
          headerShown: false,
        }}>
        {isAuthenticated ? (
          <>
            <Stack.Screen name={ROUTER_SCREEN_NAMES.HOME} >
              {(props) => <Home {...props} message="hello world!" />}
            </Stack.Screen>
          </>
        ) : (
          <>
            <Stack.Screen name={ROUTER_SCREEN_NAMES.SIGNIN} component={SignIn} />
            <Stack.Screen name={ROUTER_SCREEN_NAMES.LOGIN} component={LogIn} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Router;