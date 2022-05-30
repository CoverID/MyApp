import React from 'react'
import { SafeAreaView } from 'react-native'
import { useTheme } from '@/Hooks'
import TabNavigator from './Home'
import { useSelector } from 'react-redux'
import { AuthState } from '@/Store/Auth'
import AuthNavigator from './Auth'

// @refresh reset
const ApplicationNavigator = () => {
  const { Layout } = useTheme()
  const currentAuth = useSelector((state: { auth: AuthState }) => state.auth)

  return (
    <SafeAreaView style={[Layout.fill]}>
      {currentAuth.token === '' ? <AuthNavigator /> : <TabNavigator />}
    </SafeAreaView>
  )
}

export default ApplicationNavigator
