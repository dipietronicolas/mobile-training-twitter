import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import { Formik } from 'formik';
import FormInput from '../common/FormikComponents/FormikInput/FormikInput';
import FormikButton from '../common/FormikComponents/FormikButton/FormikButton';
import SigninSchema from './formik.config';
import { PostUser } from '../../utils/types';

interface ISignUpForm {
  errorMessage: string;
  isLoading: boolean;
  signUp: (user: Omit<PostUser, 'id'>) => void;
  secondaryCTA: () => void;
}

const SignUpForm = ({
  errorMessage,
  isLoading,
  signUp,
  secondaryCTA,
}: ISignUpForm) => {

  const renderErrorMessage = () => {
    if (errorMessage) {
      return (
        <View>
          <Text style={Styles.errorMessage}>{errorMessage}</Text>
        </View>
      )
    }
  }

  return (
    <Formik
      initialValues={{
        name: '',
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
      }}
      validationSchema={SigninSchema}
      onSubmit={values => {
        const { confirmPassword, ...rest } = values;
        signUp(rest);
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
              value={values.name}
              name={'name'}
              label={'Name'}
              errorMessage={errors.name}
              touched={touched.name}
              placeholder={'Placeholder text'}
            />
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
              value={values.email}
              name={'email'}
              label={'Email'}
              errorMessage={errors.email}
              touched={touched.email}
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
            <FormInput
              handleChange={handleChange}
              handleBlur={handleBlur}
              value={values.confirmPassword}
              name={'confirmPassword'}
              label={'Confirm password'}
              errorMessage={errors.confirmPassword}
              touched={touched.confirmPassword}
              placeholder={'Placeholder text'}
              isPasswordInput
            />
            {
              renderErrorMessage()
            }
            <View style={Styles.buttonsContainer}>
              <FormikButton
                onPress={handleSubmit}
                label="Submit"
                disabled={!isValid}
                isLoading={isLoading}
                isDarkButton
              />
              <FormikButton
                onPress={secondaryCTA}
                label="Log in"
              />
            </View>
          </View>
        )
      }}
    </Formik>
  )
}

export default SignUpForm;

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