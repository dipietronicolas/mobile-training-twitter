import React from 'react';
import SignInForm from '../components/SignInForm/SignInForm';
import { StyleSheet, View } from 'react-native';
import CustomTitle from '../components/common/CustomTitle/CustomTitle';
import TwitterLogo from '../../assets/Icons/TwitterLogo';
import useAuth from '../hooks/useAuth';
import { useNavigation } from '@react-navigation/native';
import { NavigationProps } from '../routes/types.routes';

const SignIn = () => {

  const {
    getUsersList,
    isAuthenticated,
    usersList,
  } = useAuth();

  const navigation = useNavigation<NavigationProps>();

  React.useEffect(() => {
    getUsersList();
  }, []);

  React.useEffect(() => {
    if(isAuthenticated) {
      navigation.navigate('Home')
    }
  }, [isAuthenticated])

  console.log(usersList);

  return (
    <View style={Styles.mainContainer}>
      <View style={Styles.header}>
        <View style={Styles.iconContainer}>
          <TwitterLogo size={64} />
        </View>
        <CustomTitle
          label={'Create your account'}
        />
      </View>
      <SignInForm />
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
  header: {
    gap: 40,
  },
  iconContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  
})
