import React from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native'
import { useDispatch } from 'react-redux'
import { useTheme } from '@/Hooks'
import { AuthState, logout } from '@/Store/Auth'
import { useSelector } from 'react-redux'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { push } from '@/Navigators/utils'

const HomeScreen = () => {
  const { Gutters, Layout } = useTheme()
  const currentAuth = useSelector((state: { auth: AuthState }) => state.auth)
  const dispatch = useDispatch()

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
            <Text>
              Hello {currentAuth.user.userName} {currentAuth.user.id}
            </Text>
          </View>
        ) : (
          <Text>No Authentication data</Text>
        )}
      </View>
      <TouchableOpacity
        style={styles.buttonDeleteAuth}
        activeOpacity={1}
        onPress={() => doLogout()}
      >
        <Text style={styles.text}>Log Out</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonInstagram}
        activeOpacity={1}
        onPress={() => push('Instagram', {})}
      >
        <Text style={styles.text}>Go to Instagram</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  buttonInstagram: {
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

export default HomeScreen
