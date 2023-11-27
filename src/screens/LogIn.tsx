import React from 'react'
import LogInForm from '../components/LogInForm/LogInForm'
import { View, StyleSheet } from 'react-native'
import TwitterLogo from '../../assets/Icons/TwitterLogo'
import CustomTitle from '../components/common/CustomTitle/CustomTitle'
import useAuth from '../hooks/useAuth';
import { useNavigation } from '@react-navigation/native';
import { NavigationProps } from '../routes/types.routes';
import { ROUTER_SCREEN_NAMES } from '../utils/constants';

const LogIn = () => {
   
  const {
    signInErrorMessage,
    signInLoading,
    signIn, 
    resetAuthenticationState,
  } = useAuth();

  const navigation = useNavigation<NavigationProps>();
  const handleSecondaryCTA = () => {
    resetAuthenticationState();
    navigation.navigate(ROUTER_SCREEN_NAMES.SIGNIN);
  }

  return (
    <View style={Styles.mainContainer}>
      <View style={Styles.header}>
        <View style={Styles.iconContainer}>
          <TwitterLogo size={64} />
        </View>
        <CustomTitle
          label={'Enter your phone, email, or @username'}
        />
      </View>
      <LogInForm 
        errorMessage={signInErrorMessage}
        isLoading={signInLoading.loading}
        signIn={signIn}
        secondaryCTA={handleSecondaryCTA}
      />
    </View>
  )
}

export default LogIn;


const Styles = StyleSheet.create({
  mainContainer: {
    display: 'flex',
    height: '100%',
    width: '100%',
    justifyContent: 'flex-start',
    padding: 48,
    backgroundColor: '#FFF',
  },
  header: {
    gap: 40,
  },
  iconContainer: {
    display: 'flex',
    alignItems: 'center',
  },
})