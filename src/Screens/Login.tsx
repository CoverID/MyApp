import React from 'react'
import { Image, View, Platform } from 'react-native'
import { useTheme } from '@/Hooks'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useDispatch } from 'react-redux'
import { setAuth } from '@/Store/Auth'
import AzureAuth from 'react-native-azure-auth'

const azureAuth = new AzureAuth({
  clientId: '951d2106-8543-4a53-9232-1a871bd2c896',
  tenant: 'common',
  redirectUri:
    Platform.OS === 'android'
      ? 'msauth://com.myapp/Xo8WBi6jzSxKDVR4drqm84yr9iU%3D'
      : 'msauth.com.myapp://auth',
})

const LoginScreen = () => {
  const { darkMode, Gutters, Layout } = useTheme()
  const dispatch = useDispatch()

  const doLogin = async () => {
    try {
      let tokens = await azureAuth.webAuth.authorize({
        scope: 'User.Read',
        prompt: 'select_account',
      })

      if (tokens.accessToken) {
        let info = await azureAuth.auth.msGraphRequest({
          token: tokens.accessToken,
          path: '/me',
        })

        dispatch(
          setAuth({
            token: tokens.accessToken,
            user: {
              userName: info.displayName,
              id: tokens.userId,
            },
          }),
        )
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <View style={[Layout.fill, Layout.colCenter, Gutters.smallHPadding]}>
      <TouchableOpacity activeOpacity={1} onPress={async () => await doLogin()}>
        <Image
          source={
            darkMode
              ? require('../Assets/Images/ms-symbollockup_signin_dark.png')
              : require('../Assets/Images/ms-symbollockup_signin_light.png')
          }
        />
      </TouchableOpacity>
    </View>
  )
}

export default LoginScreen
