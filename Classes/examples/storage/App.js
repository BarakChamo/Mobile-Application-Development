import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

import store from './store'
import MyButtonComponent from './MyButtonComponent'
import MyLabelComponent from './MyLabelComponent'

export default function App() {
  return (
    <store.Provider>
      <View style={styles.container}>
        <MyLabelComponent />
        <MyButtonComponent />
      </View>
    </store.Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEE',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
