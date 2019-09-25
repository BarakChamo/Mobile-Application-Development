import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// Use this stylesheet to create styles for the TodoItem
const styles = StyleSheet.create({
    item: {
        margin: 10,
        padding: 10,
        //height: 250, //(making the item taller will force the list to re-render)
        backgroundColor: 'white'
    },
    itemHeading: {
        fontSize: 32,
        marginBottom: 5,
    },
    itemText: {
        fontSize: 18,
        marginBottom: 5,
    }
})

class TodoItem extends React.Component {
    render() {
        const time = new Date()

        // This simple component expects the `item` prop and renders a view with a text
        return (
            <View style={[styles.item, this.props.item.done && styles.done]}>
                <Text style={styles.itemHeading}>{this.props.item.label}</Text>
                <Text style={styles.itemText}>{this.props.item.done ? 'completed' : 'not completed'}</Text>
                <Text style={styles.itemText}>Last rendered on: {time.toLocaleTimeString()}</Text>
            </View>
        )
    }    
}

export default TodoItem;