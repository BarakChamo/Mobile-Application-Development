import React from 'react'
import { AsyncStorage, Button, StyleSheet, Text, View } from 'react-native'

// Import initialized store singleton
import store from './store'

// Import components
import MyButtonComponent from './MyButtonComponent'
import MyLabelComponent from './MyLabelComponent'
// import UserComponent from './UserComponent'

AsyncStorage.getItem('NUMBER')
  .then(number => store.dispatch('SET_NUMBER', {value: number}))

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
