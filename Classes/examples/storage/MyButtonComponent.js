import React from 'react'
import { AsyncStorage, Button, StyleSheet, Text, View } from 'react-native'

import store from './store'
import getRandomNumberPromise from './promiseNumber'

class MyButtonComponent extends React.Component {
    onPress() {
      // const promise = getRandomNumberPromise()
      // this.props.store.dispatchAsync('NUMBER', {}, promise)

      this.props.store.dispatch('RANDOM_NUMBER', {previous: this.props.store.state.number})
    }

    render() {
      return (
        <View>
          <Button title={"Get number other than " + this.props.store.state.number} onPress={() => this.onPress()} />
        </View>
      )
    }
  }
  
  // Connect Component to the store
  MyButtonComponent = store.connect(MyButtonComponent)

  export default MyButtonComponent