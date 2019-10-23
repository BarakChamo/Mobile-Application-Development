import { AsyncStorage, Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import store from './store'
import getRandomNumberPromise from './promiseNumber'

class MyButtonComponent extends React.Component {
    constructor(props) {
      super(props)

      this.state = {
        value: 8
      }
    }

    onPress() {
      // const promise = getRandomNumberPromise()
      // this.props.store.dispatchAsync('NUMBER', {}, promise)

      this.props.store.dispatch('RANDOM_NUMBER', {previous: this.props.store.state.number})
    }

    onMultiply() {

      this.props.store.dispatch('MULTIPLY_TEN')
    }

    makeFive() {
      this.props.store.dispatch("SET_NUMBER", { value: this.state.value })
    }

    // componentDidUpdate() {
    //   AsyncStorage.setItem("NUMBER", this.props.store.state.number)
    // }

    render() {
      
      return (
        <View>
          <Button title={"Get number other than " + this.props.store.state.number} onPress={() => this.onPress()} />
          <Button title={"Multiply the number " + this.props.store.state.number} onPress={() => this.onMultiply()}/>
          <Button title={"Make the number " + this.state.value} onPress={() => this.makeFive()}/>
        </View>
      )
    }
  }
  
  // Connect Component to the store
  MyButtonComponent = store.connect(MyButtonComponent)

  export default MyButtonComponent