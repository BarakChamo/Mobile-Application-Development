import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

import store from './store'

class MyListComponent extends React.Component {
    render() {
        const items = []

        this.props.store.state.items.forEach((item, i) => 
          items.push((
            <View key={i} style={{marginBottom: 10, backgroundColor: `#${item.color}`, padding: 10}}>
              <Text style={{fontSize: 24, color: 'white'}}>{item.label}</Text>
            </View>
        ))
        )

      return (
        <View>
          {items}
        </View>
      )
    }
  }
  
  // Connect Component to the store
  MyListComponent = store.connect(MyListComponent)

  export default MyListComponent