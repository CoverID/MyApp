import React from 'react'
import { StatusBar } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { useTheme } from '@/Hooks'
import { navigationRef } from './utils'
import { LoginScreen } from '@/Screens'

const Stack = createStackNavigator()

// @refresh reset
const AuthNavigator = () => {
  const { darkMode, NavigationTheme } = useTheme()

  return (
    <NavigationContainer theme={NavigationTheme} ref={navigationRef}>
      <StatusBar barStyle={darkMode ? 'light-content' : 'dark-content'} />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Startup" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AuthNavigator
