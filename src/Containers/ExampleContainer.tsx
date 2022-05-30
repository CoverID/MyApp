import React from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native'
import { useDispatch } from 'react-redux'
import { useTheme } from '@/Hooks'
import { AuthState, setAuth, logout, User } from '@/Store/Auth'
import { useSelector } from 'react-redux'
import { TouchableOpacity } from 'react-native-gesture-handler'

const ExampleContainer = () => {
  const { Gutters, Layout } = useTheme()
  const currentAuth = useSelector((state: { auth: AuthState }) => state.auth)
  const dispatch = useDispatch()

  const doLogin = () => {
    const user: User = {
      id: 'Lutfi Maulana',
      userName: 'lutfi.maulana@ecomindo.com',
    }
    dispatch(setAuth({ token: 'exampleJwtToken==', user }))
  }

  const doLogout = () => {
    dispatch(logout())
  }

  return (
    <ScrollView
      style={Layout.fill}
      contentContainerStyle={[
        Layout.fill,
        Layout.colCenter,
        Gutters.smallHPadding,
      ]}
    >
      <View style={[[Layout.colCenter, Gutters.smallHPadding]]}>
        {currentAuth.user ? (
          <View>
            <Text>Hello {currentAuth.user.id}</Text>
            <Text>UserName {currentAuth.user.userName}</Text>
            <Text>Token {currentAuth.token}</Text>
          </View>
        ) : (
          <Text>No Authentication data</Text>
        )}
      </View>

      <TouchableOpacity
        style={styles.buttonAuth}
        activeOpacity={1}
        onPress={() => doLogin()}
      >
        <Text style={styles.text}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonDeleteAuth}
        activeOpacity={1}
        onPress={() => doLogout()}
      >
        <Text style={styles.text}>Log Out</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  buttonAuth: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'blue',
    marginTop: 50,
  },
  buttonDeleteAuth: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'red',
    marginTop: 50,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
})

export default ExampleContainer
