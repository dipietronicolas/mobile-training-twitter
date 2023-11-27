import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import { Formik } from 'formik';
import FormInput from '../common/FormikComponents/FormikInput/FormikInput';
import FormikButton from '../common/FormikComponents/FormikButton/FormikButton';
import LoginSchema from './formik.config';
import { PostUser } from '../../utils/types';

interface ILoginInForm {
  errorMessage: string;
  isLoading: boolean;
  signIn: (user: Pick<PostUser, 'username' | 'password'>) => void;
  secondaryCTA: () => void;
}

const LogInForm = ({
  errorMessage,
  isLoading,
  signIn,
  secondaryCTA,
}: ILoginInForm) => {

  const renderErrorMessage = () => {
    if (errorMessage) {
      return (
        <Text style={Styles.errorMessage}>
          {errorMessage}
        </Text>
      )
    }
  }

  return (
    <Formik
      initialValues={{
        username: '',
        password: '',
      }}
      validationSchema={LoginSchema}
      onSubmit={values => {
        signIn(values);
      }}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
        isValid,
      }) => {
        return (
          <View style={Styles.mainContainer}>
            <FormInput
              handleChange={handleChange}
              handleBlur={handleBlur}
              value={values.username}
              name={'username'}
              label={'Username'}
              errorMessage={errors.username}
              touched={touched.username}
              placeholder={'Placeholder text'}
            />
            <FormInput
              handleChange={handleChange}
              handleBlur={handleBlur}
              value={values.password}
              name={'password'}
              label={'Password'}
              errorMessage={errors.password}
              touched={touched.password}
              placeholder={'Placeholder text'}
              isPasswordInput
            />
            {
              renderErrorMessage()
            }
            <View style={Styles.buttonsContainer}>
              <FormikButton
                onPress={handleSubmit}
                label="Login"
                disabled={!isValid}
                isLoading={isLoading}
                isDarkButton
              />
              <FormikButton
                onPress={secondaryCTA}
                label="Register"
              />
            </View>
          </View>
        )
      }}
    </Formik>
  )
}

export default LogInForm;

const Styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    paddingTop: 48,
    paddingBottom: 48,
    gap: 8,
  },
  textInput: {
    borderColor: '#eee',
    borderWidth: 2,
    height: 64,
    paddingTop: 16,
    paddingRight: 8,
    paddingBottom: 16,
    paddingLeft: 8,
    borderRadius: 8,
    gap: 4,
  },
  buttonsContainer: {
    marginTop: 20,
    height: 74,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  errorMessage: {
    color: '#E03C39',
  }
})