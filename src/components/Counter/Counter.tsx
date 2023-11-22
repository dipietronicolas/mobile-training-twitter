import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import useCounter from '../../hooks/useCounter';

const Counter = () => {

  const {
    counter,
    onIncrement,
    onDecrement
  } = useCounter();

  const handleIncrement = () => onIncrement();
  const handleDecrement = () => counter > 0 && onDecrement();

  return (
    <View style={Styles.mainContainer}>
      <TouchableOpacity
        style={Styles.actionButton}
        onPress={handleIncrement}
      >
        <Text style={Styles.actionButtonLabel}>+</Text>
      </TouchableOpacity>
      <Text style={Styles.counterLabel}>{counter}</Text>
      <TouchableOpacity
        style={Styles.actionButton}
        onPress={handleDecrement}
      >
        <Text style={Styles.actionButtonLabel}>-</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Counter;

const Styles = StyleSheet.create({
  mainContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: 100,
    gap: 16,
  },
  actionButton: {
    height: 56,
    width: 56,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#222',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionButtonLabel: {
    fontSize: 16,
  },
  counterLabel: {
    fontSize: 24,
  }
})