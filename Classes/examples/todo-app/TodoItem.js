import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// Use this stylesheet to create styles for the TodoItem
const styles = StyleSheet.create({
    item: {
        margin: 10,
        padding: 10,
        // height: 250, //(making the item taller will force the list to re-render)
        backgroundColor: 'white'
    },
    itemHeading: {
        fontSize: 32,
        marginBottom: 5,
    },
    itemText: {
        fontSize: 18,
        marginBottom: 5,
    },
    done: {
        backgroundColor: 'red'
    }
})

class TodoItem extends React.Component {
    constructor(props) {
        super(props)

        this.onItemPress = this.onItemPress.bind(this)
    }

    // onItemPress is called when the TouchableOpacity is pressed
    // it calls the onToggleDone handler that is passed as a property
    // it calls the handler with the index prop that indicates the todo's place in the collection
    onItemPress() {
        this.props.onToggleDone(this.props.index)
    }

    render() {
        const time = new Date()

        // This simple component expects the `item` prop and renders a view with a text
        return (
            <TouchableOpacity onPress={this.onItemPress} style={[styles.item, this.props.done && styles.done]}>
                <Text style={styles.itemHeading}>{this.props.label}</Text>
                <Text style={styles.itemText}>{this.props.done ? 'completed' : 'not completed'}</Text>
                <Text style={styles.itemText}>Last rendered on: {time.toLocaleTimeString()}</Text>
            </TouchableOpacity>
        )
    }    
}

export default TodoItem;