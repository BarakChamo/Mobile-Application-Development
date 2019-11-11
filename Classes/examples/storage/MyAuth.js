import React from 'react'
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

import store from './store'
import { auth } from './firebase'

class MyListComponent extends React.Component {
    constructor(props) {
      super(props)

      this.state = {
        email: '',
        password: '',
        newUser: false
      }
    }

    onChangeEmail(text) {
      this.setState({email: text})
    }

    onChangePassword(text) {
      this.setState({password: text})
    }

    onChangeName(text) {
      this.setState({name: text})
    }

    toggleNewUser() {
      this.setState({newUser: !this.state.newUser})
    }

    onClick() {
      if(this.state.newUser)
        auth.createUserWithEmailAndPassword(this.state.email, this.state.password)
      else
        auth.signInWithEmailAndPassword(this.state.email, this.state.password)
    }

    render() {
      return (
        <View>
          <Text style={{fontSize:20}}>Log in please</Text>
          {this.state.newUser && <TextInput placeholder="name" style={{backgroundColor: 'white', width: 250, padding: 5, fontSize: 24, margin: 10}} value={this.state.name} onChangeText={text => this.onChangeName(text)}/>}        
          <TextInput placeholder="email" style={{backgroundColor: 'white', width: 250, padding: 5, fontSize: 24, margin: 10}} value={this.state.email} onChangeText={text => this.onChangeEmail(text)}/>
          <TextInput secureTextEntry={true} placeholder="password" style={{backgroundColor: 'white', width: 250, padding: 5, fontSize: 24, margin: 10}} value={this.state.password} onChangeText={text => this.onChangePassword(text)}/>
        
          <Button disabled={!this.state.email && !this.state.password} title={this.state.newUser ? 'Sign Up' : "Log In"} onPress={() => this.onClick()}/>
        
          <TouchableOpacity onPress={() => this.toggleNewUser()} style={{marginTop: 25}}><Text>or {!this.state.newUser ? 'Sign Up' : 'Log In'}</Text></TouchableOpacity>
        </View>
      )
    }
  }
  
  // Connect Component to the store
  MyListComponent = store.connect(MyListComponent)

  export default MyListComponent