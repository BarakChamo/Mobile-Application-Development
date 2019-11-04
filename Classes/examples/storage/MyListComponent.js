import React from 'react'
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

import store from './store'

class MyListComponent extends React.Component {
    constructor(props) {
      super(props)

      this.state = {
        value: ''
      }
    }

    onChange(text) {
      this.setState({value: text})
    }

    onClick() {
      this.setState({value: ''})
      
      this.props.store.dispatch('ADD_ITEM', {
        label: this.state.value,
        color: Math.floor(Math.random()*16777215).toString(16)
      })
    }

    onItemDelete(item, index) {
      this.props.store.dispatch('DELETE_ITEM', { id: item.id })
    }

    onItemPress(item, index) {
      this.props.store.dispatch('SET_ITEM_COLOR', {
        id: item.id,
        color: Math.floor(Math.random()*16777215).toString(16)
      })
    }

    render() {
        const items = []

        this.props.store.state.items.forEach((item, i) => 
          items.push((
            <View key={i} style={{flexDirection: 'row'}}>
              <Button title="X" onPress={() => this.onItemDelete(item, i)} />
              <TouchableOpacity onPress={() => this.onItemPress(item, i)} style={{marginBottom: 10, backgroundColor: `#${item.color}`, padding: 10}}>
                <Text style={{fontSize: 24, color: 'white'}}>{item.label}</Text>
              </TouchableOpacity>
            </View>
        ))
        )

      return (
        <View>
          <Text style={{fontSize: 20}}>{this.props.store.state.user.email}</Text>
          <View style={{marginBottom: 50, flexDirection: 'row'}}>
            <TextInput style={{backgroundColor: 'white'}} value={this.state.value} onChangeText={text => this.onChange(text)}/>
            <Button disabled={!this.state.value} title="Add Item" onPress={() => this.onClick()}/>
          </View>
          {items}
        </View>
      )
    }
  }
  
  // Connect Component to the store
  MyListComponent = store.connect(MyListComponent)

  export default MyListComponent