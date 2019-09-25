import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';
import TodoItem from './TodoItem' 

const INITIAL_DATA = [
    {
      label: 'Coffee',
      done: false,
    },
    {
      label: 'Tea',
      done: false,
    },
    {
      label: 'Eggs',
      done: false,
    }, {
      label: 'Bread',
      done: false,
    }, {
      label: 'Milk',
      done: false,
    }, {
      label: 'Apples',
      done: false,
    }, {
      label: 'Peaches',
      done: false
    },
    {
      label: 'Soap',
      done: false,
    },
    {
      label: 'Paper Towels',
      done: false,
    },
    {
      label: 'Detergent',
      done: false,
    },
    {
      label: 'Ice cream',
      done: false,
    },
    {
      label: 'Soda',
      done: false,
    },
    {
      label: 'Olive Oil',
      done: false,
    }, {
      label: 'Rice',
      done: false
    }, {
      label: 'Pasta',
      done: false
    }, {
      label: 'Cereal',
      done: false
    }, {
      label: 'Peanut Butter',
      done: false
    }, {
      label: 'Tomato Sauce',
      done: false
    }, {
      label: 'Tuna',
      done: false
    },
    {
      label: 'Frozen peas',
      done: false
    },
    {
      label: 'Lemons',
      done: false
    }, {
      label: 'Yogurt',
      done: false
    }, {
      label: 'Toothpaste',
      done: false
    }
  ]

// Styles used in the TodoList component
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightgray'
    },

    input: {
        flex: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        fontSize: 18,
        padding: 10,
    },

    inputRow: {
        flexDirection: 'row'
    },

    todos: {
        flexDirection: 'column'
    }
})

class TodoList extends React.Component {
    constructor(props) {
        // Initialize the React Component class first
        super(props)

        // Define initial state, an empty list of items and an empty input string
        this.state = {
            value: '',
            items: INITIAL_DATA.map(({label, done}, i) => ({label, done, i}))
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
        items.push({label: this.state.value, done: false})

        // Update the state with the new list and clear the input field's value
        this.setState({ value: '', items: items })
    }

    render() {
        // Map the list of items in the state to a list of TodoItem components
        // const todoItems = this.state.items.map((item) => <TodoItem key={item.label} item={item.label} done={item.done} />)


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
                    onPress={this.onBoundButtonPress}
                    title="Add Todo"
                    disabled={this.state.value === ''}
                  />
                </View>
                {/* <ScrollView style={styles.todos}>
                    {todoItems}
                </ScrollView> */}
                <FlatList
                    data={this.state.items}
                    removeClippedSubviews={true}
                    initialNumToRender={3}
                    renderItem={(props) => <TodoItem item={props.item} /> }
                    keyExtractor={item => String(item.i)}
                />
            </View>
        )
    }    
}

export default TodoList;