import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { useTheme } from '@/Hooks'
import { navigationRef } from './utils'
import { StatusBar } from 'react-native'
import { HomeScreen } from '@/Screens'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

// @refresh reset
const TabNavigator = () => {
  const { darkMode, NavigationTheme } = useTheme()

  return (
    <NavigationContainer theme={NavigationTheme} ref={navigationRef}>
      <StatusBar barStyle={darkMode ? 'light-content' : 'dark-content'} />
      <Tab.Navigator
        screenOptions={({}) => ({
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name={'ios-home'} size={size} color={color} />
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          tabBarShowLabel: false,
        })}
      >
        <Tab.Screen
          name="HomeTab"
          component={HomeNavigator}
          options={{
            tabBarLabelPosition: 'beside-icon',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

const HomeNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  )
}

export default TabNavigator
