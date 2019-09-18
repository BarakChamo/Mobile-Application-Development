import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TodoList from './TodoList' 

const styles = StyleSheet.create({  
  mainContent: {
    flex: 1
  },
  
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    backgroundColor: 'lightgray'
  },
  
  footer: {
    height: 75,
    backgroundColor: 'gray'
  },

  header: {
    height: 75,
    backgroundColor: 'gray',
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'center'
  },

  headerText: {
    fontSize: 24,
    flex :1,
    textTransform: 'uppercase',
    alignSelf: 'center'
  }
});

// The App component defines the main layout of the page and hold the TodoList component.
// Notice that styles are relative and allow the design to adapt to many form factors of mobile devices
export default function App() {
  return (
      <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headerText}>My Todo App</Text>
          </View> 
          <View style={styles.mainContent}>
            <TodoList />
          </View>
          <View style={styles.footer}></View>
      </View>
  );
}
