import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import TodoItem from './TodoItem' 

// Styles used in the TodoList component
const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    input: {
        flex: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        fontSize: 18,
        padding: 9,
    },

    inputRow: {
        flexDirection: 'row'
    },

    todos: {
        flexDirection: 'column'
    },

    button: {

    }
})

class TodoList extends React.Component {
    constructor(props) {
        // Initialize the React Component class first
        super(props)

        // Define initial state, an empty list of items and an empty input string
        this.state = {
            value: '',
            items: []
        }

        // Bind input handlers to the current context
        this.onBoundInputChange = this.onInputChange.bind(this)
        this.onBoundButtonPress = this.onButtonPress.bind(this)
    }

    onInputChange(text) {
        // The TextInput handler receives the new text directly, rather than an event
        // We update the `value` state property with every change to the input
        this.setState({ value: text })
    }

    onButtonPress() {
        // On button press, add the current value of the input field to the items array
        const items = this.state.items
        items.push(this.state.value)

        // Update the state with the new list and clear the input field's value
        this.setState({ value: '', items: items })
    }

    render() {
        // Map the list of items in the state to a list of TodoItem components
        const todoItems = this.state.items.map((item) => <TodoItem item={item} />)
        
        // Render the list
        return (
            <View style={styles.container}>
                <View style={styles.inputRow}>
                  <TextInput
                    value={this.state.value}
                    style={styles.input}
                    onChangeText={this.onBoundInputChange}
                  />
                  <Button
                    style={styles.button}
                    onPress={this.onBoundButtonPress}
                    title="Add Todo"
                    disabled={this.state.value === ''}
                  />
                </View>
                <View style={styles.todos}>
                    {todoItems}
                </View>
            </View>
        )
    }    
}

export default TodoList;