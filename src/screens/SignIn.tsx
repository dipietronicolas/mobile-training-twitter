import React from 'react';
import SignInForm from '../components/SignInForm/SignInForm';
import { ScrollView, StyleSheet, View } from 'react-native';
import CustomTitle from '../components/common/CustomTitle/CustomTitle';
import TwitterLogo from '../../assets/Icons/TwitterLogo';
import useAuth from '../hooks/useAuth';
import { useNavigation } from '@react-navigation/native';
import { NavigationProps } from '../routes/types.routes';
import { ROUTER_SCREEN_NAMES } from '../utils/constants';

const SignIn = () => {

  const {
    createUserLoading,
    createUserErrorMessage,
    createUser,
    resetAuthenticationState,
  } = useAuth();

  const navigation = useNavigation<NavigationProps>();
  const handleSecondaryCTA = () => {
    resetAuthenticationState();
    navigation.navigate(ROUTER_SCREEN_NAMES.LOGIN);
  }

  return (
    <View style={Styles.mainContainer}>
      <ScrollView style={Styles.scrollView}>

        <View style={Styles.header}>
          <View style={Styles.iconContainer}>
            <TwitterLogo size={64} />
          </View>
          <CustomTitle
            label={'Create your account'}
          />
        </View>
        <SignInForm
          errorMessage={createUserErrorMessage}
          isLoading={createUserLoading.loading}
          signUp={createUser}
          secondaryCTA={handleSecondaryCTA}
        />
      </ScrollView>
    </View>
  )
}

export default SignIn;

const Styles = StyleSheet.create({
  mainContainer: {
    display: 'flex',
    height: '100%',
    width: '100%',
    justifyContent: 'flex-start',
    padding: 48,
    backgroundColor: '#FFF',
  },
  scrollView: {
    flex: 1,
  },
  header: {
    gap: 40,
  },
  iconContainer: {
    display: 'flex',
    alignItems: 'center',
  },
})
