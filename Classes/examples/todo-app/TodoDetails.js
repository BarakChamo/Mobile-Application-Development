import React from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    }
})

// This is a functional view, or a "pure component"
// Pure components receive their props as function arguments 
// so here we destructure the arguments to extract the `navigation` prop
const TodoDetails = ({ navigation }) => {
    // To get route parameters we use `navigation.getParam`.
    // The first argument is the parameter we're looking for
    // The second argument is default values to be used in case the paramter is not found
    const item = navigation.getParam('item', {label: 'No label provided', done: false})
    
    // This is a basic example of how to populate a view based on dynamic route parameters
    // Notice the button handler's call to `navigation.goBack`, this will go back to whichever previous route
    // This is similar to the back button in the browser, instead of navigating on to a specific named route
    return (
        <View style={styles.container}>
            <Text style={{fontSize: 24}}>{item.label} is {item.done ? 'done' : 'not done'}</Text>
            <Button title="Go back to list" onPress={() => navigation.goBack()}/>
        </View>
    )
}

// Since functional parameters are not classes, they do not have static properties
// But, since functions in JavaScript are also objects, 
// we can attach the `navigationOptions` to the functional component
// Notice that the value of `navigationOptions` is not an object but a function,
// it receives the props of the component and returns dynamic navigation options.
// In this case we use a function to render a dynamic title for the header 
// this technique can also be used to change styling and enable/disable buttons, etc.
TodoDetails.navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('item').label
})

// Finally, we export our component
export default TodoDetails