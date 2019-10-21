import React from 'react'
import { AsyncStorage, Button, StyleSheet, Text, View } from 'react-native'

import store from './store'
import getRandomNumberPromise from './promiseNumber'

class MyButtonComponent extends React.Component {
    onPress() {
      const promise = getRandomNumberPromise()
      this.props.store.dispatchAsync('NUMBER', {}, promise)
    }

    render() {
      return (
        <View>
          <Button title="Get Random Number!" onPress={() => this.onPress()} />
        </View>
      )
    }
  }
  
  // Connect Component to the store
  MyButtonComponent = store.connect(MyButtonComponent)

  export default MyButtonComponent