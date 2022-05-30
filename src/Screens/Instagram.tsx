import React, { useRef, useState } from 'react'
import {
  View,
  ScrollView,
  StyleSheet,
  Image,
  RefreshControl,
  SafeAreaView,
  KeyboardAvoidingView,
  Text,
} from 'react-native'
import { SCREEN_HEIGHT, SCREEN_WIDTH, STATUS_BAR_HEIGHT } from '@/Constant'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { TouchableOpacity } from 'react-native-gesture-handler'

const InstagramScreen = () => {
  const [refreshing, setRefreshing] = useState<boolean>(false)
  const _scrollRef = useRef<ScrollView>(null)
  const delay = (ms: number | undefined) =>
    new Promise(res => setTimeout(res, ms))

  //delay 2s
  const _onRefresh = async () => {
    setRefreshing(true)
    await delay(2000) // call api
    setRefreshing(false)
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.keyboardAvoidingViewContainer}
        behavior="height"
      >
        <Header />
        <ScrollView
          keyboardDismissMode="on-drag"
          ref={_scrollRef}
          style={{
            height: SCREEN_HEIGHT - STATUS_BAR_HEIGHT - 44,
          }}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={_onRefresh} />
          }
          scrollEventThrottle={10}
          showsVerticalScrollIndicator={false}
        >
          <View>
            <Text>Test</Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

const Header = () => {
  return (
    <View style={styles.navigationBar}>
      <TouchableOpacity style={styles.centerBar}>
        <Image style={styles.logo} source={require('@/Assets/Images/ig.png')} />
        <Ionicons
          style={styles.icons}
          name={'chevron-down'}
          size={18}
          color={'black'}
        />
      </TouchableOpacity>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.btnCenter}>
          <Image
            style={styles.btn}
            source={require('@/Assets/Images/new_post.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnCenter}>
          <Image
            style={styles.btn}
            source={require('@/Assets/Images/activity_feed.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnCenter}>
          <Image
            style={styles.btnMessenger}
            source={require('@/Assets/Images/messenger.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  keyboardAvoidingViewContainer: {
    position: 'relative',
  },
  navigationBar: {
    flexDirection: 'row',
    height: 44,
    paddingHorizontal: 10,
    width: '100%',
    alignItems: 'center',
    borderBottomWidth: 0,
  },
  centerBar: {
    height: 44,
    width: SCREEN_WIDTH - 44 * 3 - 10,
    alignItems: 'center',
    flexDirection: 'row',
  },
  logo: {
    resizeMode: 'contain',
    height: 44,
    width: 100,
  },
  icons: {
    paddingLeft: 3,
  },
  buttons: {
    height: 44,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    height: 25,
    width: 25,
    marginRight: 20,
  },
  btnMessenger: {
    height: 25,
    width: 25,
  },
  btnCenter: {
    height: 25,
  },
})

export default InstagramScreen
