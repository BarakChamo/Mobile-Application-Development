import React from 'react'
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

import store from './store'
import { auth } from './firebase'

class MyListComponent extends React.Component {
    constructor(props) {
      super(props)

      this.state = {
        email: '',
        password: ''
      }
    }

    onChangeEmail(text) {
      this.setState({email: text})
    }

    onChangePassword(text) {
      this.setState({password: text})
    }

    onClick() {
      auth.signInWithEmailAndPassword(this.state.email, this.state.password)
      // LOG IN WITH FIREBASE
    }

    render() {
      return (
        <View>
          <Text>Log in please</Text>
          <TextInput placeholder="email" style={{backgroundColor: 'white', fontSize: 24, margin: 10}} value={this.state.email} onChangeText={text => this.onChangeEmail(text)}/>
          <TextInput secureTextEntry={true} placeholder="password" style={{backgroundColor: 'white', fontSize: 24, margin: 10}} value={this.state.password} onChangeText={text => this.onChangePassword(text)}/>
          <Button disabled={!this.state.email && !this.state.password} title="Log In" onPress={() => this.onClick()}/>
        </View>
      )
    }
  }
  
  // Connect Component to the store
  MyListComponent = store.connect(MyListComponent)

  export default MyListComponent