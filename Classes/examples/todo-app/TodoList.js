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
    static navigationOptions = {
      title: 'Shopping List',
    }

    constructor(props) {
        // Initialize the React Component class first
        super(props)

        const initialItems = [] //INITIAL_DATA.map(({label, done}, i) => ({label, done, i}))

        // Define initial state, an empty list of items and an empty input string
        this.state = {
            value: '',
            items: initialItems
        }

        // Bind input handlers to the current context
        this.onBoundInputChange = this.onInputChange.bind(this)
        this.onBoundButtonPress = this.onButtonPress.bind(this)
        this.onBoundToggleDone = this.onToggleDone.bind(this)
    }

    onInputChange(text) {
        // The TextInput handler receives the new text directly, rather than an event
        // We update the `value` state property with every change to the input
        this.setState({ value: text })
    }

    onButtonPress() {
        // On button press, add the current value of the input field to the items array
        const items = this.state.items
        items.push({label: this.state.value, done: false, i: this.state.items.length})

        // Update the state with the new list and clear the input field's value
        this.setState({ value: '', items: items })
    }

    // The onToggleDone is passed to each todo item and will be called 
    // when the touchable component inside it is pressed
    onToggleDone(index) {
      const item = this.state.items[index]
      item.done = !item.done

      // Here we call .slice(0) on the array of items to create a new copy of the items array
      // This is necessary because we need to provide the `FlatList` with a new array in order for it to update
      // Passing the same array will result in no changes being detected on the `data` prop of the list
      this.setState({items: this.state.items.slice(0)})

      // Here we call navigate to switch to the `Details` view we defined in App.js
      // We also provide the currently pressed item as additional routing data
      this.props.navigation.navigate('Details', { item: item })
    }

    render() {
        // Map the list of items in the state to a list of TodoItem components
        // const todoItems = this.state.items.map((item) => <TodoItem key={item.label} item={item} />)

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
                    extraData={this.state.items.length}
                    renderItem={(props) => (
                      <TodoItem
                        label={props.item.label}
                        done={props.item.done}
                        index={props.item.i}
                        onToggleDone={this.onBoundToggleDone}
                      />
                    ) }
                    keyExtractor={item => String(item.i)}
                />
            </View>
        )
    }    
}

export default TodoList;