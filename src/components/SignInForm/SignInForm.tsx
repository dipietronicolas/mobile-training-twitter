import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { Formik } from 'formik';
import FormInput from '../common/FormikComponents/FormikInput/FormikInput';
import FormikButton from '../common/FormikComponents/FormikButton/FormikButton';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  username: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g, 'Password must contain at least one uppercase letter and one number or symbol')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Please confirm your password'),
});

const SignInForm = () => {
  return (
    <Formik
      initialValues={{
        name: '',
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={values => console.log(values)}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
        isValid,
        ...props
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
            />
            <View style={Styles.buttonsContainer}>
              <FormikButton
                onPress={handleSubmit}
                label="Submit"
                disabled={!isValid}
                isDarkButton
              />
              <FormikButton
                onPress={() => console.log('This is the log in button')}
                label="Log in"
              />
            </View>
          </View>
        )
      }}
    </Formik>
  )
}

export default SignInForm;

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
  }
})