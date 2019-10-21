import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

import store from './store'

class MyLabelComponent extends React.Component {
    render() {
      return (
        <View>
          <Text style={{fontSize: 20, fontWeight: '600', marginBottom: 10}}>
            Your Random Number is {this.props.store.state.number}!
          </Text>
        </View>
      )
    }
  }
  
  // Connect Component to the store
  MyLabelComponent = store.connect(MyLabelComponent)

  export default MyLabelComponent