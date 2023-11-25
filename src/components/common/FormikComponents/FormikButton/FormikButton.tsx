import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import Spinner from '../../Spinner/Spinner';

interface IFormikButton {
  onPress: (e: any) => any;
  label: string;
  isDarkButton?: boolean;
  disabled?: boolean;
  isLoading?: boolean;
}

const FormikButton = ({
  onPress,
  label,
  isDarkButton = false,
  disabled = true,
  isLoading = false,
}: IFormikButton) => {

  const Styles = CreateStyles(isDarkButton);

  return (
    <TouchableOpacity
      onPress={(e: any) => onPress(e)}
      style={Styles.button}
      disabled={disabled || isLoading}
    >
      {isLoading
        ? <Spinner />
        : (
          <Text style={Styles.buttonLabel}>
            {label}
          </Text>
        )
      }
    </TouchableOpacity>
  )
}

export default FormikButton;

const CreateStyles = (isDarkButton: boolean) => {
  return StyleSheet.create({
    button: {
      backgroundColor: isDarkButton ? '#000' : '#FFF',
      width: 222,
      height: 33,
      borderRadius: 40,
      borderWidth: 1,
      borderColor: '#D1D9DD',
      gap: 8,
      paddingTop: 8,
      paddingRight: 80,
      paddingBottom: 8,
      paddingLeft: 80,
    },
    buttonLabel: {
      color: isDarkButton ? '#FFF' : '#000',
      fontFamily: 'Manrope',
      fontSize: 15,
      fontWeight: '800',
      lineHeight: 17,
    }
  })
}