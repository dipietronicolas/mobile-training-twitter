import React from 'react';
import 'react-native-gesture-handler';
// React navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RootStackParamList, } from './types.routes';
import { ROUTER_SCREEN_NAMES, SECURE_STORE_KEYS } from '../utils/constants';
// Screens
import LogInScreen from '../screens/LogInScreen';
import HomeScreen from '../screens/HomeScreen';
import SignInScreen from '../screens/SignInScreen';
import SearchScreen from '../screens/SearchScreen';
import ProfileScreen from '../screens/ProfileScreen';
import MessageScreen from '../screens/MessageScreen';
// Icons
import HomeIcon from '../../assets/Icons/HomeIcon';
import SearchIcon from '../../assets/Icons/SearchIcon';
import ProfileIcon from '../../assets/Icons/ProfileIcon';
import MessageIcon from '../../assets/Icons/MessageIcon';
//  Hooks
import useAuth from '../hooks/useAuth';
// Utils
import appUtils from '../utils/utils';

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

const Router = () => {

  const {
    isAuthenticated,
    setCurrentUserData,
  } = useAuth();

  React.useEffect(() => {
    const myFunc = async () => {
      const result = await appUtils.getSecureStoreValue(SECURE_STORE_KEYS.CURRENT_USER_DATA)
      if(result)
        setCurrentUserData(JSON.parse(result))
    }
    myFunc();
  }, [])

  return (
    <NavigationContainer >
      <Stack.Navigator
        initialRouteName={ROUTER_SCREEN_NAMES.LOGIN}
        screenOptions={{
          headerShown: false,
        }}>
        {isAuthenticated ? (
          <Stack.Screen name={ROUTER_SCREEN_NAMES.MAIN_APP}>
            {(props) => (
              <Tab.Navigator
                {...props}
                screenOptions={{
                  tabBarInactiveTintColor: '#000',
                  tabBarActiveTintColor: '#000',
                  headerShown: false
                }}
              >
                <Tab.Screen
                  name={ROUTER_SCREEN_NAMES.HOME}
                  component={HomeScreen}
                  options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ color, focused }) => {
                      return (
                        <HomeIcon
                          size={24}
                          color={color}
                          selected={focused}
                        />
                      )
                    },
                  }}
                />
                <Tab.Screen
                  name={ROUTER_SCREEN_NAMES.SEARCH}
                  component={SearchScreen}
                  options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ color, focused }) => (
                      <SearchIcon
                        size={24}
                        color={color}
                        selected={focused}
                      />
                    )
                  }}
                />
                <Tab.Screen
                  name={ROUTER_SCREEN_NAMES.PROFILE}
                  component={ProfileScreen}
                  options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ color, focused }) => (
                      <ProfileIcon
                        size={24}
                        color={color}
                        selected={focused}
                      />
                    )
                  }}
                />
                <Tab.Screen
                  name={ROUTER_SCREEN_NAMES.MESSAGE}
                  component={MessageScreen}
                  options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ color, focused }) => (
                      <MessageIcon
                        size={24}
                        color={color}
                        selected={focused}
                      />
                    ),
                  }}
                />
              </Tab.Navigator>
            )
            }
          </Stack.Screen>
        ) : (
          <>
            <Stack.Screen name={ROUTER_SCREEN_NAMES.SIGNIN} component={SignInScreen} />
            <Stack.Screen name={ROUTER_SCREEN_NAMES.LOGIN} component={LogInScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Router;