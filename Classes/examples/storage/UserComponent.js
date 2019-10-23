import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

import store from './store'

// https://jsonplaceholder.typicode.com/users

class UserComponent extends React.Component {
    constructor(props) {
        super(props)

        // Load user details
        const userPromise = fetch('https://jsonplaceholder.typicode.com/users/1').then(res => res.json())
        store.dispatchAsync('LOAD_USER', {}, userPromise)
    }

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
  UserComponent = store.connect(UserComponent)

  export default UserComponent