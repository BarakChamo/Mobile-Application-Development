import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import TodoList from './TodoList' 

const styles = StyleSheet.create({  
  mainContent: {
    flex: 1
  },
  
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
  },
  
  footer: {
    height: 50,
  },

  header: {
    height: 75,
    backgroundColor: 'gray',
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingBottom: 12,
    justifyContent: 'center'
  },

  headerText: {
    fontSize: 20,
    color: 'white'
  },
  footerText: {
    fontSize: 18,
    color: 'white',
    textTransform: "uppercase"
  }
});

// The App component defines the main layout of the page and hold the TodoList component.
// Notice that styles are relative and allow the design to adapt to many form factors of mobile devices
export default function App() {
  return (
      <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headerText}>My Shopping List</Text>
          </View> 
          <View style={styles.mainContent}>
            <TodoList />
          </View>
          <View style={[styles.header, styles.footer]}>
            <Text style={styles.footerText}>Clear Completed</Text>
          </View>
      </View>
  );
}
