import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// Import our custom views
import TodoList from './TodoList' 
import TodoDetails from './TodoDetails'

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

/*
  Setting up the navigator

  using the navigator is a three step process:
  1. define a collection of named screens as key-value pairs, the key will be used as the `address` to the component assigned.
  2. Create a navigation instance, that expects an object of screens
  3. Create a navigation container that will render the views inside it
  */ 

// 1. Define named screens
const screens = {
  Details: TodoDetails,
  List: TodoList,
}

// 2. Create a navigator
const navigation = createStackNavigator(screens, {initialRouteName: 'List'})

// 3. Create the navigation component
const NavigationContainer = createAppContainer(navigation)


// The App component defines the main layout of the page and hold the TodoList component.
// Notice that styles are relative and allow the design to adapt to many form factors of mobile devices
export default function App() {

  // Notice that we replaced the <TodoList/> with a navigation container.
  // That's because the <NavigationContainer/> is the top-level navigation component
  // and all screens will be rendered inside it
  return (
      <View style={styles.container}>
          <View style={styles.mainContent}>
            <NavigationContainer />
          </View>
          <View style={[styles.header, styles.footer]}>
            <Text style={styles.footerText}>Clear Completed</Text>
          </View>
      </View>
  );
}
