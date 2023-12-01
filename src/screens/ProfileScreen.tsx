import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import useAuth from '../hooks/useAuth'

const ProfileScreen = () => {

  const { logout } = useAuth();

  return (
    <View>
      <Text>ProfileScreen</Text>
      <TouchableOpacity onPress={logout} >
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ProfileScreen