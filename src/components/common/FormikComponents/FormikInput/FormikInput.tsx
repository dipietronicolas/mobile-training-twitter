import React from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
} from 'react-native';

interface IFormikInput {
  handleChange: (name: string) => any;
  handleBlur: (name: string) => any;
  value: string;
  name: string;
  errorMessage?: string;
  touched?: boolean;
  isPasswordInput?: boolean;
  label?: string;
  placeholder?: string;
  style?: any;
}

const FormInput = ({
  handleChange,
  handleBlur,
  value,
  name,
  errorMessage = '',
  touched = false,
  isPasswordInput = false,
  label,
  placeholder,
  style,
}: IFormikInput) => {

  const [isOnFocus, setIsOnFocus] = React.useState(false);
  
  const isError = (!!errorMessage && touched);
  const Styles = CreateStyles(isOnFocus, isError);

  return (
    <>
      <View style={[Styles.mainContainer]}>
        <Text style={Styles.label}>
          {label ?? ''}
        </Text>
        <TextInput
          onChangeText={handleChange(name)}
          onBlur={(e) => {
            handleBlur(name)(e);
            setIsOnFocus(false);
          }}
          onFocus={() => setIsOnFocus(true)}
          value={value}
          placeholder={placeholder}
          style={[Styles.textInput, style]}
          secureTextEntry={isPasswordInput}
          autoCapitalize='none'
        />
      </View>
      {isError && (
        <Text style={Styles.errorMessage}>{errorMessage}</Text>
      )}
    </>
  )
}

export default FormInput;

const CreateStyles = (isOnFocus: boolean, error: boolean) => {

  const getColor = (defaultColor: string) => {
    if (isOnFocus) return '#4A99E9';
    if (error) return '#E03C39';
    return defaultColor;
  }

  return StyleSheet.create({
    mainContainer: {
      borderColor: getColor('#D1D9DD'),
      borderWidth: 2,
      height: 70,
      borderRadius: 8,
      paddingTop: 16,
      paddingRight: 8,
      paddingBottom: 16,
      paddingLeft: 8,
      gap: 4,
      fontFamily: 'Manrope',
    },
    label: {
      fontFamily: 'Manrope',
      color: getColor('#566370'),
      fontSize: 15,
      fontWeight: '400',
      textAlign: 'left',
      lineHeight: 17,
    },
    textInput: {
      fontFamily: 'Manrope',
      color: '#566370',
      fontSize: 15,
      lineHeight: 17,
      height: 24,
    },
    errorMessage: {
      color: '#E03C39',
    }
  })
} 